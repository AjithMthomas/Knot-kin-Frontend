/**
 * Kerala state boundary — generated from official Census 2011 geometry
 * (udit-001/india-maps-data) via scripts/generate-kerala-map.mjs.
 * Regenerate with: npm run map
 */

export const KERALA_VIEWBOX = { width: 236, height: 424 } as const;

export const KERALA_BOUNDS = {
  minLng: 74.8687,
  maxLng: 77.4026,
  minLat: 8.2924,
  maxLat: 12.7589,
} as const;

export const keralaPath =
  "M144.3 103.2L140.6 109.9L127.2 116.9L148.3 130.1L156.4 132.9L154 141.3L146.6 147.9L163.9 148.5L171.2 144.2L170.1 151.1L175.6 159.5L166.5 172.8L182.7 179.3L189.9 187.7L183.4 205.3L181.3 221.7L183 229.7L188.4 237.3L189 237.8L189.1 237.9L196.8 241L203.2 237L206.9 232L215.3 228L225.3 239.9L223.5 250.3L223 259.2L218.3 273.5L221.5 281L214.1 298.7L223.6 302.5L228.2 299.6L236 306.9L230.2 317L224.7 328.5L223.5 342.3L217.5 350.1L212.4 355.9L216.5 363.8L222.3 368.3L217.1 378.6L214.4 381.3L223.6 396.9L222.9 403.6L207.7 424L194.7 411.7L170.5 381.6L168.9 378.1L156.4 366.1L150 345.2L137.9 320.1L135.2 311L131.5 281.9L120.9 244.7L125.3 243.5L120.5 244.4L114.8 225.6L101.4 196.8L97 186.6L89.2 155.3L77.2 126.6L69.8 121.6L63.8 100.4L62.2 100L61.8 100L48.1 85.6L45.4 85.3L35.6 71.3L30.9 71.4L27.6 63.6L16.1 35.1L13.7 32.4L0 0L10.5 2L22.6 7.4L38.3 22.3L51 24.7L46.3 32.9L51.6 36.7L50.8 44.5L57.4 44.5L65.9 57.2L71.5 57.9L86.2 66.7L93.3 76.6L99.4 77.6L105.7 78.6L115.9 74L115.9 85.5L124.6 85.2L135 95.7L143.9 95L144.3 103.2Z";

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
