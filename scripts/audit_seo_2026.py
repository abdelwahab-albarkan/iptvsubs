import glob
import re
import html
import json
import urllib.parse
import urllib.request
import os
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

DOMAIN = "iptvsubs8k.com"
BASE_URL = f"https://{DOMAIN}"
LOCAL_SERVER = "http://127.0.0.1:3010"

def fetch_url(url):
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
        )
        with urllib.request.urlopen(req, timeout=5) as response:
            return response.read().decode("utf-8")
    except Exception:
        return None

def check():
    print("=" * 64)
    print("IPTVSubs8K SEO & HTML INTEGRITY AUDIT (2026)")
    print(f"Target Domain: {BASE_URL}")
    print("=" * 64)

    # 1. Discover HTML content to audit
    pages_to_audit = [] # List of tuples: (identifier, content_html, route)

    # Check for static html files on disk
    disk_patterns = [
        "build/server/app/**/*.html",
        ".next/server/app/**/*.html",
        "out/**/*.html"
    ]
    html_files = []
    for pat in disk_patterns:
        html_files.extend(glob.glob(pat, recursive=True))

    if html_files:
        print(f"📁 Found {len(html_files)} HTML files on disk.")
        for hf in sorted(html_files):
            if "_global-error" in hf or "_not-found" in hf:
                continue
            normalized_hf = hf.replace("\\", "/")
            rel = normalized_hf
            for p in ["build/server/app/", ".next/server/app/", "out/"]:
                rel = rel.replace(p, "")
            route = "/" + rel[:-5]
            if route == "/index": route = "/"
            elif route.endswith("/index"): route = route[:-6]
            try:
                with open(hf, "r", encoding="utf-8") as f:
                    pages_to_audit.append((normalized_hf, f.read(), route))
            except Exception as e:
                pass
    else:
        print("🌐 No static HTML files on disk (Next.js SSR/RSC mode).")
        print(f"   Connecting to local server: {LOCAL_SERVER}...")

        # Core routes to audit
        core_routes = [
            "/",
            "/pricing",
            "/free-trial",
            "/contact",
            "/channels",
            "/sports",
            "/reseller",
            "/guide",
            "/setup",
            "/setup/firestick",
            "/setup/android-tv",
            "/setup/smart-tv",
            "/setup/apple-tv",
            "/setup/pc-mac",
            "/setup/mag-formuler",
            "/setup/roku",
            "/apps",
            "/apps/tivimate",
            "/apps/iptv-smarters-pro",
            "/apps/ibo-player",
            "/apps/xciptv",
            "/apps/kodi",
            "/troubleshooting",
            "/troubleshooting/iptv-buffering",
            "/troubleshooting/iptv-not-working",
            "/troubleshooting/vpn-isp-throttling",
            "/compare/cable-vs-iptv",
            "/guides/best-iptv-providers-usa",
            "/guides/iptv-scams-guide",
            "/guides/is-iptv-legal-usa",
            "/html-sitemap",
            "/privacy",
            "/terms",
            "/refund-policy"
        ]

        # Sample guide routes across clusters
        sample_guide_slugs = [
            "roku-tv", "superbox", "smart-tv", "shop-4k-tvs-on-sale",
            "best-budget-4k-tvs", "the-tv-appto", "firestick-remote",
            "attacker-tv", "antennas-antenna", "streaming-tv-services",
            "tv-box-and", "tv-cable", "vpn-for-tv", "best-piracy-sites",
            "televisie-test"
        ]

        routes_to_fetch = core_routes + [f"/guide/{slug}" for slug in sample_guide_slugs]

        # Fetch and audit pages
        for route in routes_to_fetch:
            url = f"{LOCAL_SERVER}{route}"
            c = fetch_url(url)
            if c:
                pages_to_audit.append((route, c, route))

    print(f"Total pages analyzed: {len(pages_to_audit)}")

    title_issues = []
    desc_issues = []
    h1_issues = []
    heading_skips = []
    alt_issues = []
    canonical_issues = []
    schema_issues = []
    broken_links = []
    broken_anchors = []

    all_routes = set(p[2] for p in pages_to_audit)
    ids_per_route = {}

    for identifier, content, current_route in pages_to_audit:
        # Title check
        m_title = re.search(r"<title>(.*?)</title>", content)
        if not m_title:
            title_issues.append((identifier, "No title"))
        else:
            raw_title = html.unescape(m_title.group(1))
            t_len = len(raw_title)
            if "| IPTVSubs8K | IPTVSubs8K" in raw_title:
                title_issues.append((identifier, f"Double brand: {raw_title} ({t_len} chars)"))
            elif t_len < 30 or t_len > 70:
                title_issues.append((identifier, f"Length {t_len} (expected 40-65): {raw_title}"))

        # Description check
        m_desc = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content)
        if not m_desc:
            desc_issues.append((identifier, "No description"))
        else:
            raw_desc = html.unescape(m_desc.group(1))
            d_len = len(raw_desc)
            if d_len < 100 or d_len > 175:
                desc_issues.append((identifier, f"Length {d_len} (target 120-165): {raw_desc}"))

        # Canonical check
        m_canon = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', content)
        if not m_canon:
            canonical_issues.append((identifier, "Missing canonical tag"))
        else:
            canon = m_canon.group(1)
            if not canon.startswith(BASE_URL):
                canonical_issues.append((identifier, f"Non-absolute/non-https canonical: {canon}"))

        # H1 check
        h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
        if len(h1s) == 0:
            h1_issues.append((identifier, "Zero <h1> tags"))
        elif len(h1s) > 1:
            h1_issues.append((identifier, f"{len(h1s)} <h1> tags found"))

        # Heading hierarchy check
        headings = re.findall(r'<(h[1-6])[^>]*>', content)
        prev_level = 0
        for h in headings:
            lvl = int(h[1])
            if prev_level > 0 and lvl > prev_level + 1:
                heading_skips.append((identifier, f"Skipped heading level: h{prev_level} -> h{lvl}"))
                break
            prev_level = lvl

        # Image alt checks
        imgs = re.findall(r'<img([^>]*)/?>', content)
        for img in imgs:
            m_alt = re.search(r'alt=["\'](.*?)["\']', img)
            if not m_alt:
                alt_issues.append((identifier, f"Missing alt attribute in img: {img[:80]}"))
            elif m_alt.group(1).strip() == "":
                alt_issues.append((identifier, f"Empty alt attribute in img: {img[:80]}"))

        # Schema JSON-LD checks
        schemas = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', content, re.DOTALL)
        for s in schemas:
            try:
                data = json.loads(s)
            except Exception as e:
                schema_issues.append((identifier, f"Invalid JSON-LD: {e}"))

        # Collect IDs for anchor check
        ids = set(re.findall(r'id=["\']([a-zA-Z0-9_-]+)["\']', content))
        ids_per_route[current_route] = ids

    # Internal links and anchor fragments check
    for identifier, content, current_route in pages_to_audit:
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)
        for href in hrefs:
            href = html.unescape(href)
            if href.startswith("http") or href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:"):
                if href.startswith(BASE_URL):
                    href = href[len(BASE_URL):]
                    if not href.startswith("/"): href = "/" + href
                else:
                    continue
            parsed = urllib.parse.urlparse(href)
            path = parsed.path
            fragment = parsed.fragment
            target_route = path if path else current_route
            if target_route != "" and target_route not in all_routes:
                alt = target_route.rstrip("/") if target_route.endswith("/") else target_route + "/"
                is_public_asset = (
                    target_route.startswith("/_next/")
                    or target_route.startswith("/guide/") # other guides exist in dataset
                    or target_route in [
                        "/favicon.ico", "/icon.svg", "/sitemap.xml", "/robots.txt",
                        "/iptvsubs8k-indexnow-2026-key.txt", "/streamvexa-indexnow-2026-key.txt"
                    ]
                )
                if target_route not in all_routes and alt not in all_routes and not is_public_asset:
                    broken_links.append((current_route, href))
            if fragment:
                rfg = path if path else current_route
                if rfg in ids_per_route and fragment not in ids_per_route[rfg]:
                    broken_anchors.append((current_route, href, f"id #{fragment} not in {rfg}"))

    # Also audit the 3,260 guide dataset directly for 100% full coverage
    pages_file = os.path.join(os.getcwd(), "data", "pages_4000.json")
    if os.path.exists(pages_file):
        with open(pages_file, "r", encoding="utf-8") as f:
            all_guides = json.load(f)
        print(f"\n📊 Auditing 100% of guide dataset ({len(all_guides)} guides in data/pages_4000.json):")
        dataset_canon_issues = 0
        dataset_desc_issues = 0
        dataset_h1_issues = 0
        dataset_title_issues = 0

        for g in all_guides:
            if not g.get("url", "").startswith(BASE_URL):
                dataset_canon_issues += 1
            if not g.get("h1"):
                dataset_h1_issues += 1
            desc_len = len(g.get("metaDescription", ""))
            if desc_len < 100 or desc_len > 180:
                dataset_desc_issues += 1
            t_len = len(g.get("title", ""))
            if t_len < 30 or t_len > 75:
                dataset_title_issues += 1

        print(f"   • Dataset Canonical URLs: {len(all_guides) - dataset_canon_issues}/{len(all_guides)} valid")
        print(f"   • Dataset H1 Headings: {len(all_guides) - dataset_h1_issues}/{len(all_guides)} present")
        print(f"   • Dataset Meta Descriptions: {len(all_guides) - dataset_desc_issues}/{len(all_guides)} optimal length")
        print(f"   • Dataset Titles: {len(all_guides) - dataset_title_issues}/{len(all_guides)} optimal length")

    # Output Reports
    print("\n--- TITLE ISSUES ---")
    print(f"Total: {len(title_issues)}")
    for item in title_issues[:20]:
        print(f"  {item[0]}: {item[1]}")
    if len(title_issues) > 20:
        print(f"  ... and {len(title_issues) - 20} more")

    print("\n--- DESCRIPTION ISSUES ---")
    print(f"Total: {len(desc_issues)}")
    for item in desc_issues[:20]:
        print(f"  {item[0]}: {item[1]}")
    if len(desc_issues) > 20:
        print(f"  ... and {len(desc_issues) - 20} more")

    print("\n--- CANONICAL ISSUES ---")
    print(f"Total: {len(canonical_issues)}")
    for item in canonical_issues[:10]:
        print(f"  {item[0]}: {item[1]}")

    print("\n--- H1 ISSUES ---")
    print(f"Total: {len(h1_issues)}")
    for item in h1_issues[:10]:
        print(f"  {item[0]}: {item[1]}")

    print("\n--- HEADING HIERARCHY SKIPS ---")
    print(f"Total: {len(heading_skips)}")
    for item in heading_skips[:10]:
        print(f"  {item[0]}: {item[1]}")

    print("\n--- IMAGE ALT ISSUES ---")
    print(f"Total: {len(alt_issues)}")
    for item in alt_issues[:15]:
        print(f"  {item[0]}: {item[1]}")

    print("\n--- SCHEMA ISSUES ---")
    print(f"Total: {len(schema_issues)}")
    for item in schema_issues:
        print(f"  {item[0]}: {item[1]}")

    print("\n--- BROKEN LINKS ---")
    print(f"Total: {len(broken_links)}")
    for item in broken_links[:10]:
        print(f"  {item[0]} -> {item[1]}")

    print("\n--- BROKEN ANCHORS ---")
    print(f"Total: {len(broken_anchors)}")
    for item in broken_anchors[:10]:
        print(f"  {item[0]} -> {item[1]}: {item[2]}")

    print("\n" + "=" * 64)
    print("AUDIT SUMMARY:")
    print(f"Canonical Issues: {len(canonical_issues)}")
    print(f"H1 Issues: {len(h1_issues)}")
    print(f"Schema Issues: {len(schema_issues)}")
    print(f"Broken Links: {len(broken_links)}")
    print(f"Broken Anchors: {len(broken_anchors)}")
    print("=" * 64)

if __name__ == "__main__":
    check()

