const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SCREENSHOTS_DIR = 'C:\\Users\\clanm\\.gemini\\antigravity\\brain\\215ae4bd-758f-4fb4-928e-f479a511949b\\screenshots';
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\clanm\\AppData\\Local\\Temp\\chrome-phase4-cdp-' + Date.now();
const remotePort = 9228; // Unique port

console.log('================================================================');
console.log('PHASE 4 REAL BROWSER & COMPREHENSIVE E2E TEST SUITE — IPTVSubs8K');
console.log('Base URL: http://localhost:3010');
console.log('Screenshots Directory:', SCREENSHOTS_DIR);
console.log('================================================================');

const chromeProc = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${remotePort}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--hide-scrollbars',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
], {
  detached: true,
  stdio: 'ignore'
});

function sendJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

function sendPut(reqPath) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: '127.0.0.1',
      port: remotePort,
      path: reqPath,
      method: 'PUT'
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function run() {
  await delay(2500);

  try {
    const version = await sendJson(`http://127.0.0.1:${remotePort}/json/version`);
    console.log('[Browser] Connected to Chrome:', version.Browser);

    const target = await sendPut('/json/new?http://localhost:3010');
    console.log('[Browser] Created target page:', target.id);

    const ws = new WebSocket(target.webSocketDebuggerUrl);

    let msgId = 1;
    const callbacks = new Map();
    const consoleErrors = [];
    const failedNetworkRequests = [];

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        if (msg.params.type === 'error') {
          consoleErrors.push(msg.params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' '));
        }
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        consoleErrors.push(msg.params.exceptionDetails.text + ' ' + (msg.params.exceptionDetails.exception?.description || ''));
      }
      if (msg.method === 'Network.responseReceived') {
        const { response } = msg.params;
        if (response.status >= 400) {
          failedNetworkRequests.push(`${response.status} ${response.statusText}: ${response.url}`);
        }
      }
    };

    function sendCommand(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        callbacks.set(id, (res) => {
          if (res.error) {
            console.error(`CDP Error (${method}):`, res.error);
            resolve({ error: res.error });
          } else {
            resolve(res.result);
          }
        });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    async function evaluate(expression) {
      const res = await sendCommand('Runtime.evaluate', {
        expression: `(async function() { ${expression} })()`,
        returnByValue: true,
        awaitPromise: true
      });
      if (res.error) throw new Error(res.error.message);
      return res.result?.value;
    }

    async function setViewport(width, height, isMobile = false, deviceScaleFactor = 1) {
      await sendCommand('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor,
        mobile: isMobile
      });
      await sendCommand('Emulation.setVisibleSize', { width, height });
      await delay(500);
    }

    async function takeScreenshot(filename) {
      const shot = await sendCommand('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(SCREENSHOTS_DIR, filename);
      fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
      console.log(`[Screenshot Captured] ${filename} (${fs.statSync(filePath).size} bytes)`);
      return filePath;
    }

    async function navigateTo(url) {
      console.log(`[Navigate] Loading ${url}...`);
      await sendCommand('Page.navigate', { url });
      await delay(2500);
    }

    ws.onopen = async () => {
      console.log('[WebSocket] Connection open. Initializing domains...');
      await sendCommand('Page.enable');
      await sendCommand('Runtime.enable');
      await sendCommand('Network.enable');

      await navigateTo('http://localhost:3010');

      const results = {
        viewports: {},
        homepagePricing: {},
        interactiveTests: {},
        formsAudit: {},
        competitorComparisonPage: {},
        technicalAudit: {},
        screenshots: {}
      };

      // 1. DESKTOP VIEWPORT TESTS
      console.log('\n--- 1. DESKTOP VIEWPORT TESTS ---');
      const desktopSizes = [
        { name: 'desktop_1920x1080', w: 1920, h: 1080 },
        { name: 'desktop_1440x900', w: 1440, h: 900 },
        { name: 'desktop_1366x768', w: 1366, h: 768 }
      ];

      for (const size of desktopSizes) {
        await setViewport(size.w, size.h, false);
        await evaluate('window.scrollTo(0, 0)');
        await delay(400);

        const check = await evaluate(`
          const docW = document.documentElement.scrollWidth;
          const winW = window.innerWidth;
          const header = document.querySelector('header');
          const pricingSec = document.querySelector('#pricing');
          const heroSec = document.querySelector('section:has(h1)');
          const pricingBox = pricingSec ? pricingSec.getBoundingClientRect() : null;
          const pricingCards = document.querySelectorAll('#pricing .grid > div');

          return {
            horizontalOverflow: docW > winW,
            docWidth: docW,
            windowWidth: winW,
            headerVisible: !!header,
            pricingExists: !!pricingSec,
            pricingY: pricingBox ? pricingBox.top : null,
            pricingBeforeHero: pricingSec && heroSec ? (pricingSec.offsetTop < heroSec.offsetTop) : true,
            pricingCardCount: pricingCards.length,
            footerVisible: !!document.querySelector('footer')
          };
        `);

        results.viewports[size.name] = { ...check, status: (!check.horizontalOverflow && check.pricingExists) ? 'PASS' : 'FAIL' };
        console.log(`[Viewport ${size.name}] Status: ${results.viewports[size.name].status} | Overflow: ${check.horizontalOverflow} | DocW: ${check.docWidth} | WinW: ${check.windowWidth} | Pricing Cards: ${check.pricingCardCount}`);
      }

      // Capture desktop screenshots
      await setViewport(1920, 1080, false);
      results.screenshots.desktop1920 = await takeScreenshot('desktop_1920_pricing.png');
      await setViewport(1440, 900, false);
      results.screenshots.desktop1440 = await takeScreenshot('desktop_1440_homepage.png');
      await setViewport(1366, 768, false);
      results.screenshots.desktop1366 = await takeScreenshot('desktop_1366_homepage.png');

      // 2. TABLET & MOBILE VIEWPORT TESTS
      console.log('\n--- 2. TABLET & MOBILE VIEWPORT TESTS ---');
      const mobileSizes = [
        { name: 'tablet_768x1024', w: 768, h: 1024, isMobile: true },
        { name: 'mobile_390x844', w: 390, h: 844, isMobile: true },
        { name: 'mobile_375x812', w: 375, h: 812, isMobile: true }
      ];

      for (const size of mobileSizes) {
        await setViewport(size.w, size.h, size.isMobile);
        await evaluate('window.scrollTo(0, 0)');
        await delay(400);

        const check = await evaluate(`
          const docW = document.documentElement.scrollWidth;
          const winW = window.innerWidth;
          const pricingSec = document.querySelector('#pricing');
          const whatsAppFloat = document.querySelector('aside[aria-label="Support contacts"]');
          const mobileMenuBtn = document.querySelector('button[aria-label="Toggle navigation menu"]');

          return {
            horizontalOverflow: docW > winW,
            docWidth: docW,
            windowWidth: winW,
            pricingVisible: !!pricingSec,
            whatsAppFloatVisible: !!whatsAppFloat && whatsAppFloat.getBoundingClientRect().width > 0,
            mobileMenuBtnVisible: !!mobileMenuBtn && mobileMenuBtn.getBoundingClientRect().width > 0
          };
        `);

        results.viewports[size.name] = { ...check, status: (!check.horizontalOverflow && check.pricingVisible) ? 'PASS' : 'FAIL' };
        console.log(`[Viewport ${size.name}] Status: ${results.viewports[size.name].status} | Overflow: ${check.horizontalOverflow} | DocW: ${check.docWidth} | WinW: ${check.windowWidth} | Menu Button: ${check.mobileMenuBtnVisible}`);
      }

      await setViewport(768, 1024, true);
      results.screenshots.tablet768 = await takeScreenshot('tablet_768_homepage.png');

      await setViewport(390, 844, true);
      results.screenshots.mobile390 = await takeScreenshot('mobile_390_homepage.png');

      await setViewport(375, 812, true);
      results.screenshots.mobile375 = await takeScreenshot('mobile_375_homepage.png');

      // Mobile Menu Drawer Toggle
      console.log('[Mobile Navigation] Testing Drawer Open/Close...');
      const drawerOpen = await evaluate(`
        const btn = document.querySelector('button[aria-label="Toggle navigation menu"]');
        if (btn) {
          btn.click();
          return true;
        }
        return false;
      `);
      await delay(500);
      results.screenshots.mobileNavDrawer = await takeScreenshot('mobile_nav_drawer.png');
      const drawerVisible = await evaluate(`
        const drawer = document.querySelector('header .lg\\\\:hidden.bg-white') || document.querySelector('header button[aria-expanded="true"]');
        return !!drawer;
      `);
      console.log(`[Mobile Navigation] Drawer opened: ${drawerVisible ? 'PASS' : 'FAIL'}`);
      // Close drawer
      await evaluate(`
        const btn = document.querySelector('button[aria-label="Toggle navigation menu"]');
        if (btn) btn.click();
      `);
      await delay(300);

      // 3. INTERACTIVE TESTS (Pricing Switcher, WhatsApp, Email, FAQ)
      console.log('\n--- 3. INTERACTIVE TESTS ---');
      await setViewport(1920, 1080, false);
      await evaluate('window.scrollTo(0, 0)');
      await delay(400);

      const pricingValidation = await evaluate(`
        const buttons = Array.from(document.querySelectorAll('#pricing button[type="button"]')).filter(b => b.textContent.includes('Account'));
        const tiers = [];
        
        function getPrices() {
          const cards = document.querySelectorAll('#pricing .grid > div');
          return Array.from(cards).map(card => {
            const duration = card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : '';
            const price = card.querySelector('span.text-3xl, span.text-4xl') ? card.querySelector('span.text-3xl, span.text-4xl').textContent.trim() : '';
            return { duration, price };
          });
        }

        for (let i = 0; i < buttons.length; i++) {
          const btn = buttons[i];
          btn.click();
          await new Promise(r => setTimeout(r, 200));
          tiers.push({
            name: btn.textContent.trim(),
            prices: getPrices()
          });
        }

        // Return to 1 Account
        if (buttons[0]) buttons[0].click();
        return tiers;
      `);

      results.interactiveTests.pricingTiers = pricingValidation;
      console.log(`[Pricing Tiers Verified]:`);
      pricingValidation.forEach(t => console.log(`  ${t.name}: ` + t.prices.map(p => `${p.duration}: $${p.price}`).join(', ')));

      const contactLinks = await evaluate(`
        const wa = Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a => a.href);
        const mail = Array.from(document.querySelectorAll('a[href*="mailto:"]')).map(a => a.href);
        return {
          waCount: wa.length,
          allWaValid: wa.every(u => u.includes('212625218443')),
          mailCount: mail.length,
          allMailValid: mail.every(u => u.includes('support@streamb4.com'))
        };
      `);
      results.interactiveTests.contacts = contactLinks;
      console.log(`[WhatsApp Contact Links]: Count ${contactLinks.waCount}, All to +212625218443: ${contactLinks.allWaValid ? 'PASS' : 'FAIL'}`);
      console.log(`[Email Contact Links]: Count ${contactLinks.mailCount}, All to support@streamb4.com: ${contactLinks.allMailValid ? 'PASS' : 'FAIL'}`);

      // FAQ accordion
      const faqCheck = await evaluate(`
        const questionBtns = document.querySelectorAll('section button[aria-expanded]');
        let expanded = false;
        if (questionBtns.length > 1) {
          questionBtns[1].dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
          await new Promise(r => setTimeout(r, 500));
          expanded = questionBtns[1].getAttribute('aria-expanded') === 'true';
        }
        return { totalQuestions: questionBtns.length, secondAccordionExpanded: expanded };
      `);
      results.interactiveTests.faq = faqCheck;
      console.log(`[FAQ Accordion]: ${faqCheck.totalQuestions} questions found. Second accordion expands: ${faqCheck.secondAccordionExpanded ? 'PASS' : 'FAIL'}`);

      // 4. FORMS AUDIT (/free-trial & /contact)
      console.log('\n--- 4. FORMS AUDIT ---');
      await navigateTo('http://localhost:3010/free-trial');
      results.screenshots.freeTrial = await takeScreenshot('free_trial_page.png');
      const freeTrialCheck = await evaluate(`
        const form = document.querySelector('form');
        const inputs = Array.from(document.querySelectorAll('input, select, textarea')).map(i => ({
          name: i.name || i.id || i.placeholder,
          type: i.type || i.tagName.toLowerCase()
        }));
        return {
          title: document.title,
          formPresent: !!form,
          inputsCount: inputs.length,
          inputs: inputs
        };
      `);
      results.formsAudit.freeTrial = freeTrialCheck;
      console.log(`[/free-trial Form]: Present: ${freeTrialCheck.formPresent}, Input Fields (${freeTrialCheck.inputsCount}): ` + freeTrialCheck.inputs.map(i => i.name).join(', '));

      await navigateTo('http://localhost:3010/contact');
      results.screenshots.contact = await takeScreenshot('contact_page.png');
      const contactCheck = await evaluate(`
        const form = document.querySelector('form');
        const inputs = Array.from(document.querySelectorAll('input, select, textarea')).map(i => ({
          name: i.name || i.id || i.placeholder,
          type: i.type || i.tagName.toLowerCase()
        }));
        const waBtn = document.querySelector('a[href*="212625218443"]');
        const emailBtn = document.querySelector('a[href*="support@streamb4.com"]');
        return {
          title: document.title,
          formPresent: !!form,
          inputsCount: inputs.length,
          waDirectLink: !!waBtn,
          emailDirectLink: !!emailBtn
        };
      `);
      results.formsAudit.contact = contactCheck;
      console.log(`[/contact Form]: Present: ${contactCheck.formPresent}, Inputs: ${contactCheck.inputsCount}, Direct WA Link: ${contactCheck.waDirectLink}, Direct Email: ${contactCheck.emailDirectLink}`);

      // 5. COMPETITOR COMPARISON PAGE VERIFICATION
      console.log('\n--- 5. COMPETITOR COMPARISON PAGE VERIFICATION ---');
      await navigateTo('http://localhost:3010/guide/hulu-vs-youtube-tv');
      results.screenshots.comparison = await takeScreenshot('competitor_comparison_page.png');
      const compCheck = await evaluate(`
        const bodyText = document.body.innerText;
        return {
          title: document.title,
          hasYtPrice82: bodyText.includes('82.99'),
          hasHuluPrice99: bodyText.includes('99.99'),
          hasOldYt72: bodyText.includes('72.99'),
          hasOldHulu76: bodyText.includes('76.99'),
          h1: document.querySelector('h1')?.textContent.trim()
        };
      `);
      results.competitorComparisonPage = compCheck;
      console.log(`[/guide/hulu-vs-youtube-tv]: Title: "${compCheck.title}"`);
      console.log(`  -> Verified YouTube TV $82.99: ${compCheck.hasYtPrice82 ? 'PASS' : 'FAIL'}`);
      console.log(`  -> Verified Hulu Live $99.99: ${compCheck.hasHuluPrice99 ? 'PASS' : 'FAIL'}`);
      console.log(`  -> Old $72.99 completely eradicated: ${!compCheck.hasOldYt72 ? 'PASS' : 'FAIL'}`);
      console.log(`  -> Old $76.99 completely eradicated: ${!compCheck.hasOldHulu76 ? 'PASS' : 'FAIL'}`);

      // 6. TECHNICAL AUDIT
      console.log('\n--- 6. TECHNICAL & NETWORK AUDIT ---');
      results.technicalAudit = {
        consoleErrors: consoleErrors,
        failedNetworkRequests: failedNetworkRequests
      };
      console.log(`[Console Errors]: ${consoleErrors.length} errors`);
      console.log(`[Failed Network Requests]: ${failedNetworkRequests.length} failed requests`);

      // Write results to disk
      const outPath = 'C:\\Users\\clanm\\.gemini\\antigravity\\brain\\215ae4bd-758f-4fb4-928e-f479a511949b\\phase4_browser_test_results.json';
      fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
      console.log(`\n[Results Saved] -> ${outPath}`);

      ws.close();
      chromeProc.kill();
      process.exit(0);
    };

  } catch (err) {
    console.error('Fatal Phase 4 Browser Test Error:', err);
    chromeProc.kill();
    process.exit(1);
  }
}

run();
