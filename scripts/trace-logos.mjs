/**
 * Traces the brand logo PNGs into crisp vector SVGs (single threshold pass —
 * solid glyphs, no gradient haze). Vector output stays perfectly sharp at any
 * size, unlike the raster hairlines which blur when downscaled.
 * Run: npm run logos:svg
 */
import { readFileSync, writeFileSync } from "node:fs";
import potrace from "potrace";

const WHITE = "#FFFFFF";
const SLATE = "#1F2A3A";

function trace(inPath, outPath, color) {
  return new Promise((resolve, reject) => {
    potrace.trace(
      readFileSync(inPath),
      {
        threshold: 110, // stroke pixels only — no faint halo shapes
        turdSize: 8, // drop specks
        optTolerance: 0.35, // smooth curves without losing serif detail
        color,
        background: "transparent",
      },
      (err, svg) => {
        if (err) return reject(err);
        writeFileSync(outPath, svg);
        console.log(`wrote ${outPath} (${(svg.length / 1024).toFixed(1)}KB)`);
        resolve();
      },
    );
  });
}

await Promise.all([
  trace("assets/logo without text.png", "public/images/logo-mark.svg", WHITE),
  trace("assets/logo with text.png", "public/images/logo-full.svg", WHITE),
]);

// slate recolors reuse the same geometry — swap the fill in the SVG string
import { readFileSync as rf, writeFileSync as wf } from "node:fs";
for (const [src, out] of [
  ["public/images/logo-mark.svg", "public/images/logo-mark-slate.svg"],
  ["public/images/logo-full.svg", "public/images/logo-full-slate.svg"],
]) {
  wf(out, rf(src, "utf8").replaceAll(WHITE, SLATE));
  console.log(`wrote ${out}`);
}
console.log("done");
