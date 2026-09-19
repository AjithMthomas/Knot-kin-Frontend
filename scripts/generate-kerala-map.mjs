/**
 * KNOT&KIN — Kerala map generator.
 *
 * Reads the official Kerala state boundary (india.geojson, Census 2011 via
 * udit-001/india-maps-data) and produces `src/data/kerala-shape.ts`:
 *   - `keralaPath`      — clean, geographically accurate SVG path
 *   - `KERALA_VIEWBOX`  — matching viewBox dimensions
 *   - `projectKerala`   — lat/lng → SVG coords so map pins land exactly right
 *
 * The downloaded GeoJSON is removed after generation (re-run the script to
 * re-download). Run: npm run map
 */
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const SRC = "scripts/india.geojson";
const OUT = "src/data/kerala-shape.ts";

if (!existsSync(SRC)) {
  console.log("Downloading Kerala boundary data…");
  execSync(
    `curl -s "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/india.geojson" -o ${SRC}`,
    { stdio: "inherit" },
  );
}

const geo = JSON.parse(readFileSync(SRC, "utf8"));
const feature = geo.features.find(
  (f) => f.properties?.st_nm === "Kerala" && !f.properties?.district,
);
if (!feature) throw new Error("Kerala state feature not found in GeoJSON");

const ring =
  feature.geometry.type === "Polygon"
    ? feature.geometry.coordinates[0]
    : feature.geometry.coordinates[0][0];

let minLng = Infinity,
  maxLng = -Infinity,
  minLat = Infinity,
  maxLat = -Infinity;
for (const [lng, lat] of ring) {
  if (lng < minLng) minLng = lng;
  if (lng > maxLng) maxLng = lng;
  if (lat < minLat) minLat = lat;
  if (lat > maxLat) maxLat = lat;
}

/** Equirectangular projection, cosine-corrected at Kerala's mid latitude. */
const HEIGHT = 424;
const midLatRad = ((minLat + maxLat) / 2) * (Math.PI / 180);
const aspect = ((maxLng - minLng) * Math.cos(midLatRad)) / (maxLat - minLat);
const WIDTH = Math.round(HEIGHT * aspect);

const project = (lat, lng) => ({
  x: +(((lng - minLng) / (maxLng - minLng)) * WIDTH).toFixed(1),
  y: +(((maxLat - lat) / (maxLat - minLat)) * HEIGHT).toFixed(1),
});

const path =
  "M" +
  ring
    .map(([lng, lat]) => {
      const p = project(lat, lng);
      return `${p.x} ${p.y}`;
    })
    .join("L") +
  "Z";

const round4 = (n) => +n.toFixed(4);

const out = `/**
 * Kerala state boundary — generated from official Census 2011 geometry
 * (udit-001/india-maps-data) via scripts/generate-kerala-map.mjs.
 * Regenerate with: npm run map
 */

export const KERALA_VIEWBOX = { width: ${WIDTH}, height: ${HEIGHT} } as const;

export const KERALA_BOUNDS = {
  minLng: ${round4(minLng)},
  maxLng: ${round4(maxLng)},
  minLat: ${round4(minLat)},
  maxLat: ${round4(maxLat)},
} as const;

export const keralaPath =
  "${path}";

/**
 * Project real lat/lng into the map's SVG coordinate space.
 * Equirectangular, cosine-corrected at Kerala's mid latitude — accurate
 * enough for placing city pins on an editorial map.
 */
export function projectKerala(lat: number, lng: number) {
  const { minLng: w, maxLng: e, minLat: s, maxLat: n } = KERALA_BOUNDS;
  return {
    x: ((lng - w) / (e - w)) * KERALA_VIEWBOX.width,
    y: ((n - lat) / (n - s)) * KERALA_VIEWBOX.height,
  };
}
`;

writeFileSync(OUT, out);

// keep the repo lean — the source data can always be re-downloaded
unlinkSync(SRC);
if (existsSync("scripts/kerala.geojson")) unlinkSync("scripts/kerala.geojson");

console.log(`✓ ${OUT} — viewBox ${WIDTH}×${HEIGHT}, path ${(path.length / 1024).toFixed(1)}KB, ${ring.length} points`);
