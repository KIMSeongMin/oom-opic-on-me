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

await Promise.all(assetPaths.map((assetPath) => access(join(distDirectory, assetPath.replace(/^(?:\.\/|\/)/, "")))));
console.log(`Verified GitHub Pages artifact with ${assetPaths.length} bundled asset reference(s).`);
