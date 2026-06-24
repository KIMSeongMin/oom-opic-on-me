import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

const projectRoot = process.cwd();
const publicDir = join(projectRoot, 'public');

const routes = [
  '/',
  '/exam-guide',
  '/exam-guide/overview',
  '/exam-guide/apply',
  '/exam-guide/day',
  '/exam-guide/results',
  '/training',
  '/training/survey',
  '/training/difficulty',
  '/training/scripts',
  '/training/scripts/outdoor',
  '/training/scripts/indoor',
  '/training/scripts/sports',
  '/training/scripts/home',
  '/roleplay',
  '/roleplay/formula',
  '/roleplay/travel',
  '/roleplay/indoor',
  '/roleplay/sports',
  '/roleplay/home',
  '/practice',
  '/ai-settings',
  '/magazine'
];

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

// Ensure public dir exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

for (const r of routes) {
  const clean = r.replace(/^\//, '').replace(/\/$/, '');
  const targetDir = clean === '' ? publicDir : join(publicDir, clean);
  if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });
  const outPath = join(targetDir, 'index.html');
  writeFileSync(outPath, buildHtmlFor(r), 'utf8');
  console.log('written', outPath);
}

// Parse magazine IDs from src/data/magazine.ts and generate per-article pages
const magPath = join(projectRoot, 'src', 'data', 'magazine.ts');
try {
  const magSrc = readFileSync(magPath, 'utf8');
  const ids = Array.from(magSrc.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
  for (const id of ids) {
    const dir = join(publicDir, 'magazine', id);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const out = join(dir, 'index.html');
    writeFileSync(out, buildHtmlFor(`/magazine/${id}`), 'utf8');
    console.log('written', out);
  }
} catch (e) {
  console.warn('Could not parse magazine IDs:', e.message);
}

console.log('Static route generation complete.');
