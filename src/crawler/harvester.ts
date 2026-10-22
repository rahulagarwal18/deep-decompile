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
 * and recursively extracts Vite __vite__mapDeps dynamic imports and Next.js manifests!
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
  const scripts: Set<string> = new Set();
  const styles: Set<string> = new Set();

  // 1. Collect all root JavaScript script tags
  $('script[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src) {
      const resolved = new URL(src, targetUrl).toString();
      if (!isThirdPartyTracker(resolved)) {
        scripts.add(resolved);
      }
    }
  });

  // Also collect modulepreload links (standard in Vite/modern apps)
  $('link[rel="modulepreload"][href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      scripts.add(new URL(href, targetUrl).toString());
    }
  });

  // 2. Collect CSS stylesheets
  $('link[rel="stylesheet"][href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      styles.add(new URL(href, targetUrl).toString());
    }
  });

  // 3. Deep-Scan main scripts for Vite __vite__mapDeps to discover lazy-loaded route/modal chunks!
  for (const scriptUrl of Array.from(scripts)) {
    try {
      const scriptRes = await fetch(scriptUrl);
      if (scriptRes.ok) {
        const content = await scriptRes.text();
        
        // Match Vite dependency maps: __vite__mapDeps = ... ['assets/ArticleModal-xxx.js', ...]
        const viteMatch = content.match(/__vite__mapDeps\s*=\s*[\s\S]*?\['([^\]]+)'\]/);
        if (viteMatch && viteMatch[1]) {
          const chunkPaths = viteMatch[1].split(/['"]\s*,\s*['"]/);
          for (const chunkPath of chunkPaths) {
            const cleanPath = chunkPath.replace(/['"]/g, '').trim();
            if (cleanPath.endsWith('.js')) {
              scripts.add(new URL(cleanPath, targetUrl).toString());
            }
          }
        }
      }
    } catch {
      // Ignore network errors on sub-scan
    }
  }

  let frameworkGuess: DiscoveredAssets['frameworkGuess'] = 'Vanilla';
  if (html.includes('__NEXT_DATA__') || html.includes('/_next/static/')) {
    frameworkGuess = 'Next.js';
  } else if (html.includes('/assets/') || html.includes('vite')) {
    frameworkGuess = 'Vite';
  } else if (html.includes('root') && html.includes('react')) {
    frameworkGuess = 'Create-React-App';
  }

  return {
    scripts: Array.from(scripts),
    styles: Array.from(styles),
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
