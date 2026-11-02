const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

// ============================================================================
// INDEXNOW PROTOCOL CONFIGURATION — IPTVSubs8K
// ============================================================================
const HOST = 'iptvsubs8k.com';
const SITE_URL = 'https://iptvsubs8k.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const LOCAL_SITEMAP_URL = 'http://localhost:3010/sitemap.xml';
// Parse optional custom key from arguments or environment variable
const customKeyArg = process.argv.find(a => a.startsWith('--key='))?.split('=')[1];
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || customKeyArg || 'iptvsubs8k-indexnow-2026-key';
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// IndexNow Engine Endpoints (Bing, Yandex, Seznam, Naver)
const ENGINES = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/IndexNow',
  'https://yandex.com/indexnow'
];

/**
 * Native HTTP/HTTPS fetch helper with timeout
 */
function fetchUrl(targetUrl, options = {}) {
  return new Promise((resolve, reject) => {
    const isHttps = targetUrl.startsWith('https');
    const client = isHttps ? https : http;
    const urlObj = new URL(targetUrl);

    const postData = options.body
      ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body))
      : null;

    const reqHeaders = {
      'User-Agent': 'IPTVSubs8K-IndexNow/1.0 (+https://iptvsubs8k.com)',
      ...(options.headers || {})
    };

    if (postData) {
      reqHeaders['Content-Length'] = Buffer.byteLength(postData, 'utf8');
    }

    const reqOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: reqHeaders,
      timeout: options.timeout || 15000
    };

    const req = client.request(reqOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          ok: res.statusCode >= 200 && res.statusCode < 300,
          text: () => Promise.resolve(data),
          json: () => {
            try { return Promise.resolve(JSON.parse(data)); }
            catch (e) { return Promise.reject(e); }
          }
        });
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request timed out after ${options.timeout || 15000}ms`));
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

/**
 * Extracts all URLs from XML sitemap using standard regex
 */
function extractUrlsFromXml(xml) {
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/gi;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    const url = match[1].trim();
    if (url.startsWith('http')) {
      urls.push(url);
    }
  }
  return urls;
}

/**
 * Fallback: Reads URLs directly from local data files
 */
function getLocalUrls() {
  console.log('📁 Reading URLs from local dataset (data/pages_4000.json + core routes)...');
  const corePaths = [
    '', '/pricing', '/free-trial', '/channels', '/reseller', '/guide',
    '/setup', '/setup/firestick', '/setup/android-tv', '/setup/smart-tv',
    '/setup/apple-tv', '/setup/pc-mac', '/setup/mag-formuler', '/setup/roku',
    '/apps', '/apps/iptv-smarters-pro', '/apps/tivimate', '/apps/ibo-player',
    '/apps/xciptv', '/apps/kodi', '/troubleshooting',
    '/troubleshooting/iptv-buffering', '/troubleshooting/iptv-not-working',
    '/troubleshooting/vpn-isp-throttling', '/compare/cable-vs-iptv',
    '/guides/is-iptv-legal-usa', '/guides/iptv-scams-guide',
    '/guides/best-iptv-providers-usa', '/contact', '/html-sitemap',
    '/refund-policy', '/privacy', '/terms'
  ];

  const urls = corePaths.map(p => `${SITE_URL}${p}`);

  const pagesFile = path.join(process.cwd(), 'data', 'pages_4000.json');
  if (fs.existsSync(pagesFile)) {
    const guides = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
    guides.forEach(g => {
      urls.push(`${SITE_URL}${g.path}`);
    });
  }

  return urls;
}

/**
 * Retrieves the complete list of URLs from sitemap or local fallback
 */
async function getSitemapUrls() {
  // 1. Try local server first if running
  try {
    console.log(`📡 Attempting local server sitemap: ${LOCAL_SITEMAP_URL}`);
    const localRes = await fetchUrl(LOCAL_SITEMAP_URL, { timeout: 3000 });
    if (localRes.ok) {
      const xml = await localRes.text();
      const urls = extractUrlsFromXml(xml);
      if (urls.length > 0) {
        console.log(`✅ Loaded ${urls.length} URLs from local sitemap.`);
        return urls;
      }
    }
  } catch (err) {
    // Ignore and try live sitemap
  }

  // 2. Try live sitemap
  try {
    console.log(`📡 Fetching live sitemap from: ${SITEMAP_URL}`);
    const res = await fetchUrl(SITEMAP_URL, { timeout: 8000 });
    if (res.ok) {
      const xml = await res.text();
      const urls = extractUrlsFromXml(xml);
      if (urls.length > 0) {
        console.log(`✅ Loaded ${urls.length} URLs from live sitemap.`);
        return urls;
      }
    }
  } catch (err) {
    console.log(`⚠️ Live sitemap unreachable (${err.message}). Using local dataset.`);
  }

  // 3. Fallback to local files
  return getLocalUrls();
}

/**
 * Submits URLs in batches to IndexNow protocol
 */
async function submitToIndexNow(urls, isDryRun = false) {
  const batchSize = 1000; // Recommended IndexNow batch size (up to 10k allowed)
  const totalBatches = Math.ceil(urls.length / batchSize);

  console.log(`\n🚀 Starting IndexNow protocol submission:`);
  console.log(`   • Host: ${HOST}`);
  console.log(`   • Key: ${INDEXNOW_KEY}`);
  console.log(`   • Key Location: ${KEY_LOCATION}`);
  console.log(`   • Total URLs: ${urls.length}`);
  console.log(`   • Total Batches: ${totalBatches} (${batchSize} URLs/batch)`);
  console.log(`   • Target Engines: ${ENGINES.join(', ')}`);
  if (isDryRun) {
    console.log(`   • Mode: DRY RUN (no actual HTTP POST sent)\n`);
  }

  const results = {
    totalUrls: urls.length,
    batches: totalBatches,
    successes: 0,
    warnings: 0,
    failures: 0,
    logs: []
  };

  for (let i = 0; i < urls.length; i += batchSize) {
    const batchIndex = Math.floor(i / batchSize) + 1;
    const batch = urls.slice(i, i + batchSize);

    console.log(`\n📦 Batch ${batchIndex}/${totalBatches}: Submitting ${batch.length} URLs (from #${i + 1} to #${i + batch.length})...`);

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    };

    for (const engine of ENGINES) {
      if (isDryRun) {
        console.log(`   [DRY RUN] Would submit to ${engine}`);
        results.successes++;
        continue;
      }

      try {
        const response = await fetchUrl(engine, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Host': new URL(engine).hostname
          },
          body: JSON.stringify(payload),
          timeout: 20000
        });

        // IndexNow returns 200 (OK) or 202 (Accepted)
        if (response.status === 200 || response.status === 202) {
          console.log(`   ✅ Success (${response.status}): Submitted batch ${batchIndex} to ${engine}`);
          results.successes++;
          results.logs.push({ engine, batch: batchIndex, status: response.status, count: batch.length });
        } else {
          const body = await response.text();
          console.log(`   ⚠️ Warning: ${engine} returned status ${response.status}: ${body.slice(0, 120)}`);
          results.warnings++;
          results.logs.push({ engine, batch: batchIndex, status: response.status, warning: body.slice(0, 120) });
        }
      } catch (error) {
        console.error(`   ❌ Error submitting to ${engine}: ${error.message}`);
        results.failures++;
        results.logs.push({ engine, batch: batchIndex, error: error.message });
      }
    }
  }

  return results;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================
(async () => {
  try {
    console.log('================================================================');
    console.log('⚡ IPTVSubs8K FAST INDEXING PROTOCOL (IndexNow)');
    console.log('================================================================');

    const args = process.argv.slice(2);
    const isDryRun = args.includes('--dry-run');
    const specificUrls = args.filter(arg => arg.startsWith('http'));

    // 1. Determine URL list
    let urls = [];
    if (specificUrls.length > 0) {
      console.log(`🎯 ${specificUrls.length} specific URL(s) provided via CLI arguments.`);
      urls = specificUrls;
    } else {
      urls = await getSitemapUrls();
      console.log(`🔍 Total URLs to index: ${urls.length}`);
    }

    if (urls.length === 0) {
      throw new Error('No URLs found to submit.');
    }

    // 2. Submit to IndexNow
    const results = await submitToIndexNow(urls, isDryRun);

    console.log('\n================================================================');
    console.log('✨ INDEXNOW SUBMISSION COMPLETED');
    console.log(`   • Total URLs: ${results.totalUrls}`);
    console.log(`   • Successful Submissions: ${results.successes}`);
    console.log(`   • Warnings: ${results.warnings}`);
    console.log(`   • Failures: ${results.failures}`);
    console.log('================================================================');

  } catch (error) {
    console.error('\n🔥 Fatal Error:', error.message);
    process.exit(1);
  }
})();
