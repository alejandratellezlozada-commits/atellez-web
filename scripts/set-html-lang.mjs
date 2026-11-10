// Runs after `next build` (npm "postbuild" hook).
// The root layout renders <html lang="es-CO"> for every page because it can't
// know the route. For the English pages exported under out/en/, rewrite it to
// lang="en" so browsers, screen readers and search engines get the right language.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "out", "en");
if (!existsSync(root)) {
  console.warn("[set-html-lang] out/en not found — skipping");
  process.exit(0);
}

let count = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) {
      const html = readFileSync(p, "utf8");
      const updated = html.replace(/<html lang="es-CO"/, '<html lang="en"');
      if (updated !== html) {
        writeFileSync(p, updated);
        count++;
      }
    }
  }
}
walk(root);
console.log(`[set-html-lang] set lang="en" on ${count} English pages`);
