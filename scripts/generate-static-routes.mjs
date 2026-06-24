import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();
const publicDir = join(projectRoot, 'public');
const appPath = join(projectRoot, 'src', 'App.tsx');
const magazinePath = join(projectRoot, 'src', 'data', 'magazine.ts');

function buildHtmlFor(pathname) {
  const encoded = encodeURIComponent(pathname);
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>OOM — Redirect</title>
    <meta http-equiv="refresh" content="0; url=/?p=${encoded}" />
    <script>location.replace('/?p=' + ${JSON.stringify(encoded)});</script>
  </head>
  <body>
    <p>Redirecting to the application... <a href="/?p=${encoded}">Continue</a></p>
  </body>
</html>`;
}

function parseRoutes() {
  const appSource = readFileSync(appPath, 'utf8');
  const routePaths = new Set(['/']);
  for (const match of appSource.matchAll(/path\s*=\s*"([^"]+)"/g)) {
    const route = match[1];
    if (!route.includes(':')) routePaths.add(route.replace(/\/*$/, ''));
  }
  return Array.from(routePaths).sort((a, b) => a.localeCompare(b));
}

function parseMagazineRoutes() {
  const magSource = readFileSync(magazinePath, 'utf8');
  return Array.from(magSource.matchAll(/id:\s*"([^"]+)"/g)).map((m) => `/magazine/${m[1]}`);
}

function ensureDir(dirPath) {
  if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true });
}

function writeRouteFiles(routes) {
  for (const route of routes) {
    const clean = route.replace(/^\//, '').replace(/\/$/, '');
    const targetDir = clean === '' ? publicDir : join(publicDir, clean);
    ensureDir(targetDir);
    const outPath = join(targetDir, 'index.html');
    writeFileSync(outPath, buildHtmlFor(route), 'utf8');
    console.log('written', outPath);
  }
}

function generateSitemap(routes) {
  const urls = routes.map((route) => {
    const loc = `https://opic-on-me.com${route === '/' ? '' : route}`;
    const depth = route.split('/').filter(Boolean).length;
    const priority = route === '/' ? 1.0 : depth <= 2 ? 0.8 : 0.6;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
  writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log('updated sitemap.xml');
}

function cleanupStaleRouteDirs(validRoutes) {
  const validTopLevel = new Set(validRoutes.map((route) => route.split('/').filter(Boolean)[0]).filter(Boolean));
  validTopLevel.add('magazine');
  for (const entry of readdirSync(publicDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (validTopLevel.has(name)) continue;
    if (name === '_headers' || name === '_redirects') continue;
    const stalePath = join(publicDir, name);
    rmSync(stalePath, { recursive: true, force: true });
    console.log('removed stale directory', stalePath);
  }
}

ensureDir(publicDir);
const routeList = parseRoutes();
const magazineRoutes = parseMagazineRoutes();
const allRoutes = Array.from(new Set([...routeList, '/magazine', ...magazineRoutes]));
writeRouteFiles(allRoutes);
cleanupStaleRouteDirs(allRoutes);
generateSitemap(allRoutes);
console.log('Static route generation complete.');
