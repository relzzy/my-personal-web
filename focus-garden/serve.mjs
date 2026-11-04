// Minimal static dev server with no dependencies.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "path";

const root = path.resolve(process.env.SERVE_ROOT ?? new URL(".", import.meta.url).pathname);
const port = Number(process.env.PORT) || 3456;
const types = {
  ".html": "text/html;charset=utf-8",
  ".js": "application/javascript;charset=utf-8",
  ".mjs": "application/javascript;charset=utf-8",
  ".css": "text/css;charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  try {
    const urlPath = new URL(req.url, "http://localhost").pathname;
    const file = path.join(root, urlPath === "/" ? "index.html" : urlPath);
    const s = await stat(file);
    if (!s.isFile()) throw new Error("not found");
    const buf = await readFile(file);
    res.writeHead(200, {
      "content-type": types[path.extname(file)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(buf);
  } catch {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not found");
  }
});

server.listen({ port }, () => {
  console.log(`Focus Garden dev server -> http://localhost:${port}`);
});
