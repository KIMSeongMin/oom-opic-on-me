import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const distDirectory = join(process.cwd(), "dist");
const indexPath = join(distDirectory, "index.html");
const indexHtml = await readFile(indexPath, "utf8");

if (indexHtml.includes("/src/main.tsx") || indexHtml.includes('src="/src/')) {
  throw new Error("Production HTML still references Vite development source files.");
}

const assetPaths = [...indexHtml.matchAll(/(?:src|href)="((?:\.\/|\/)assets\/[^\"]+)"/g)].map((match) => match[1]);
if (assetPaths.length === 0) {
  throw new Error("Production HTML does not reference any bundled assets.");
}

const requiredRootFiles = ["CNAME", "robots.txt", "sitemap.xml"];
const requiredRouteFiles = [
  "magazine/opic-2026-strategy/index.html",
  "exam-guide/index.html",
  "privacy/index.html",
  "about/index.html",
  "contact/index.html",
  "terms/index.html",
];
const pathsToVerify = [
  ...assetPaths.map((assetPath) => assetPath.replace(/^(?:\.\/|\/)/, "")),
  ...requiredRootFiles,
  ...requiredRouteFiles,
];

await Promise.all(pathsToVerify.map((path) => access(join(distDirectory, path))));
const routeHtmlFiles = await Promise.all(requiredRouteFiles.map((path) => readFile(join(distDirectory, path), "utf8")));
for (const routeHtml of routeHtmlFiles) {
  if (routeHtml.includes("http-equiv=\"refresh\"") || routeHtml.includes("location.replace('/?p='")) {
    throw new Error("A generated route HTML file still contains the SPA redirect fallback.");
  }
}
console.log(`Verified GitHub Pages artifact with ${assetPaths.length} bundled asset reference(s), ${requiredRootFiles.length} root static file(s), and ${requiredRouteFiles.length} static route file(s).`);
