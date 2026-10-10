// Bailey Guard by CGA: build the Chrome Web Store zip.
// Usage: bun scripts/package.ts   (writes dist/bailey-guard-by-cga-<version>.zip)
import { $ } from "bun";
import { mkdirSync, rmSync, existsSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const manifest = await Bun.file(root + "manifest.json").json();
const out = `${root}dist/bailey-guard-by-cga-${manifest.version}.zip`;
const include = [
  "manifest.json", "blocked.html", "LICENSE", "NOTICE",
  "config", "fonts", "images", "options", "popup", "rules", "styles",
  "scripts/background.js", "scripts/blocked.js", "scripts/content.js",
  "scripts/browser-polyfill.js", "scripts/browser-polyfill-inline.js",
  "scripts/modules", "scripts/utils",
];
for (const p of include) if (!existsSync(root + p)) throw new Error(`missing ${p}`);
mkdirSync(root + "dist", { recursive: true });
rmSync(out, { force: true });
await $`cd ${root} && zip -r -X -q ${out} ${include} -x "*.DS_Store"`;
console.log(out);
