import * as cheerio from 'cheerio';

export interface DiscoveredAssets {
  scripts: string[];
  styles: string[];
  title: string;
  frameworkGuess?: 'Next.js' | 'Vite' | 'Create-React-App' | 'Nuxt' | 'Remix' | 'Vanilla';
}

/**
 * Intelligent Web Asset Harvester:
 * Crawls a target URL, finds all <script src="...">, <link rel="stylesheet">,
 * and extracts Next.js / Vite build manifest data automatically!
 */
export async function harvestWebAssets(targetUrl: string): Promise<DiscoveredAssets> {
  const urlObj = new URL(targetUrl);
  const response = await fetch(targetUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to crawl ${targetUrl}: HTTP ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);
  const scripts: string[] = [];
  const styles: string[] = [];

  // 1. Collect all JavaScript script tags
  $('script[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src) {
      const resolved = new URL(src, targetUrl).toString();
      // Filter out typical third-party analytics / ads to keep it clean
      if (!isThirdPartyTracker(resolved)) {
        scripts.push(resolved);
      }
    }
  });

  // 2. Collect CSS stylesheets
  $('link[rel="stylesheet"][href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      styles.push(new URL(href, targetUrl).toString());
    }
  });

  // 3. Framework detection heuristics
  let frameworkGuess: DiscoveredAssets['frameworkGuess'] = 'Vanilla';
  if (html.includes('__NEXT_DATA__') || html.includes('/_next/static/')) {
    frameworkGuess = 'Next.js';
  } else if (html.includes('/@vite/') || html.includes('vite/client')) {
    frameworkGuess = 'Vite';
  } else if (html.includes('root') && html.includes('react')) {
    frameworkGuess = 'Create-React-App';
  }

  return {
    scripts,
    styles,
    title: $('title').text().trim() || urlObj.hostname,
    frameworkGuess
  };
}

function isThirdPartyTracker(url: string): boolean {
  const trackers = [
    'google-analytics.com',
    'googletagmanager.com',
    'hotjar.com',
    'clarity.ms',
    'segment.io',
    'facebook.net',
    'intercom.io'
  ];
  return trackers.some(tracker => url.includes(tracker));
}
