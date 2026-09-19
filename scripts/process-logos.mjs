/**
 * Converts the brand logo PNGs (solid black background) to crisp transparent
 * versions that survive downscaling:
 *   1. luminance -> alpha with a hard ramp (strokes become fully opaque)
 *   2. 3x3 max-filter dilation to thicken hairline strokes
 *   3. crop to the glyph bounding box (+pad) so the glyph fills the frame
 * Run: npm run logos
 */
import { readFileSync, writeFileSync } from "node:fs";
import { PNG } from "pngjs";

function convert(inPath, outPath, tint, { dilate = 0 } = {}) {
  const png = PNG.sync.read(readFileSync(inPath));
  const { width, height, data } = png;

  // 1) alpha from luminance — steep ramp so strokes hit full opacity
  let alpha = new Float32Array(width * height);
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const lum = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    alpha[p] = Math.max(0, Math.min(255, (lum - 10) * 5.1));
  }

  // 2) dilation (max filter) — thickens hairlines so they survive downscaling
  for (let it = 0; it < dilate; it++) {
    const next = new Float32Array(alpha);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let m = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
            const v = alpha[ny * width + nx];
            if (v > m) m = v;
          }
        }
        next[y * width + x] = m;
      }
    }
    alpha = next;
  }

  // 3) crop to glyph bbox + padding
  let minX = width,
    maxX = -1,
    minY = height,
    maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (alpha[y * width + x] > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 6;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);
  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;

  const out = new PNG({ width: cw, height: ch });
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const s = (minY + y) * width + (minX + x);
      const d = (y * cw + x) * 4;
      out.data[d] = tint[0];
      out.data[d + 1] = tint[1];
      out.data[d + 2] = tint[2];
      out.data[d + 3] = Math.round(alpha[s]);
    }
  }
  writeFileSync(outPath, PNG.sync.write(out));
  console.log(`wrote ${outPath} (${cw}x${ch})`);
}

// mark (monogram) — 2 dilation passes; it renders small in the navbar
convert("assets/logo without text.png", "public/images/logo-mark-ivory.png", [255, 255, 255], { dilate: 2 });
convert("assets/logo without text.png", "public/images/logo-mark-slate.png", [31, 42, 58], { dilate: 2 });
// full logo (monogram + wordmark) — 1 pass; the wordmark strokes are even finer
convert("assets/logo with text.png", "public/images/logo-full-ivory.png", [255, 255, 255], { dilate: 1 });
convert("assets/logo with text.png", "public/images/logo-full-slate.png", [31, 42, 58], { dilate: 1 });
console.log("done");
