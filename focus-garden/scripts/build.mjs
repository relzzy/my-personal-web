// Build step: syntax-check every source module, then copy the app to dist/.
import { readdir, copyFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "path";

const src = path.resolve(process.cwd(), "src");
const dist = path.resolve(process.cwd(), "dist");
const outDir = path.resolve(dist, "src");

// 1) Run automated runtime test suite.
await import("./test.mjs");

// 2) Generate zero-dependency bundle for file:// and http:// compatibility.
import { readFile, writeFile } from "node:fs/promises";
const bundleFiles = [
  "src/storage.js",
  "src/sfx.js",
  "src/timer.js",
  "src/tasks.js",
  "src/garden.js",
  "src/stats.js",
  "src/main.js"
];
let bundleContent = "// Focus Garden - Self-contained bundle\n(() => {\n";
for (const file of bundleFiles) {
  let code = await readFile(file, "utf8");
  code = code.replace(/^import\s+[^;]+;?\s*$/gm, "");
  code = code.replace(/^export\s+(default\s+)?/gm, "");
  bundleContent += `\n// --- ${file} ---\n` + code + "\n";
}
bundleContent += "\n})();\n";
await writeFile("src/bundle.js", bundleContent);

// 3) Copy index.html and src -> dist (zero-dependency static build).
await mkdir(dist, { recursive: true });
await mkdir(outDir, { recursive: true });
await copyFile(path.resolve("index.html"), path.join(dist, "index.html"));
for (const name of await readdir(src)) {
  await copyFile(path.join(src, name), path.join(outDir, name));
}

console.log("Build OK -> " + dist);
