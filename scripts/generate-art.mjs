/**
 * KNOT&KIN — generated editorial artwork (Phase 1 placeholders).
 *
 * Creates warm, film-toned "moodboard" SVGs for every image slot on the site:
 * line-art motifs, paper texture, serif captions and an editorial collage feel.
 * These are design placeholders — replace with real photography when available.
 *
 * Run: npm run art
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

/* ---------------- palette ---------------- */
const C = {
  ivory: "#F4EFE6",
  ivorySoft: "#FAF7F1",
  parchment: "#EAE1D4",
  parchDeep: "#E0D4C2",
  ink: "#302B26",
  inkSoft: "#55504A",
  taupe: "#8C8175",
  forest: "#263C32",
  forestDeep: "#1D2F27",
  terracotta: "#A87963",
  brass: "#AA9475",
  line: "#D9CFBF",
};

/* deterministic pseudo-random for reproducible art */
let seed = 7;
function rnd() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}
function rr(min, max) {
  return min + rnd() * (max - min);
}

function grain(id) {
  return `<filter id="${id}" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" stitchTiles="stitch"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.18  0 0 0 0 0.16  0 0 0 0 0.13  0 0 0 ${rr(0.04, 0.07).toFixed(3)} 0"/>
</filter>`;
}

function paper(id) {
  return `<filter id="${id}" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed="11" stitchTiles="stitch"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.49  0 0 0 0 0.42  0 0 0 0.06 0"/>
</filter>`;
}

const grainDefs = grain("g1") + paper("p1");

/* ---------------- line-art motifs (stroke only) ---------------- */

function motifArches() {
  const a = [];
  for (let i = 0; i < 4; i++) {
    const x = 90 + i * 90;
    a.push(
      `<path d="M${x} 430 V ${200 - i * 8} A ${34 - i * 3} ${34 - i * 3} 0 0 1 ${x + (68 - i * 6)} ${200 - i * 8} V 430" fill="none" stroke="${C.taupe}" stroke-width="1.1" opacity="${0.5 - i * 0.06}"/>`,
    );
  }
  return a.join("\n");
}

function motifBotanical() {
  let s = "";
  const cx = 520;
  for (let i = 0; i < 5; i++) {
    const y = 130 + i * 62;
    const lean = i % 2 === 0 ? 1 : -1;
    s += `<path d="M${cx} ${y} q ${28 * lean} -26 ${54 * lean} -6" fill="none" stroke="${C.forest}" stroke-width="1.2" opacity="0.5"/>`;
    s += `<ellipse cx="${cx + 30 * lean}" cy="${y - 14}" rx="15" ry="6.5" transform="rotate(${-18 * lean} ${cx + 30 * lean} ${y - 14})" fill="none" stroke="${C.forest}" stroke-width="1.1" opacity="0.45"/>`;
  }
  return s;
}

function motifTable() {
  return `
  <g stroke="${C.ink}" stroke-width="1.2" fill="none" opacity="0.65">
    <path d="M60 420 h360"/>
    <path d="M110 420 c0-70 8-96 26-96 18 0 26 26 26 96"/>
    <rect x="210" y="330" width="120" height="90" rx="3"/>
    <path d="M210 348 h120"/>
    <circle cx="402" cy="382" r="26"/>
    <path d="M402 356 v-22 M395 334 h14 M402 334 v-10"/>
    <path d="M368 420 v-30 q34 -18 68 0 v30"/>
  </g>`;
}

function motifPeople() {
  return `
  <g stroke="${C.ink}" stroke-width="1.2" fill="none" opacity="0.6">
    <circle cx="120" cy="360" r="17"/>
    <path d="M120 377 c-16 0 -24 14 -26 33 h52 c-2-19-10-33-26-33"/>
    <circle cx="196" cy="352" r="17"/>
    <path d="M196 369 c-16 0 -24 14 -26 33 h52 c-2-19-10-33-26-33"/>
    <path d="M140 372 q22 -14 36 0" stroke="${C.terracotta}"/>
  </g>`;
}

function motifLanterns() {
  let s = "";
  for (let i = 0; i < 6; i++) {
    const x = 80 + i * 76 + rr(-12, 12);
    const y = 120 + rr(0, 60);
    const r = rr(7, 13);
    s += `<path d="M${x} 0 v ${y - r}" stroke="${C.taupe}" stroke-width="0.8" opacity="0.5"/>`;
    s += `<circle cx="${x}" cy="${y + r}" r="${r}" fill="none" stroke="${C.terracotta}" stroke-width="1.2" opacity="0.65"/>`;
    s += `<circle cx="${x}" cy="${y + r}" r="${(r * 0.45).toFixed(1)}" fill="${C.brass}" opacity="0.5"/>`;
  }
  return s;
}

function motifWaves() {
  let s = "";
  for (let i = 0; i < 4; i++) {
    const y = 330 + i * 26;
    s += `<path d="M40 ${y} q 30 -14 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" fill="none" stroke="${C.brass}" stroke-width="1.1" opacity="${0.5 - i * 0.09}"/>`;
  }
  return s;
}

function motifMountains() {
  return `
  <g fill="none" stroke="${C.forest}" stroke-width="1.2" opacity="0.55">
    <path d="M60 380 L170 210 L250 320 L320 240 L430 380"/>
    <path d="M170 210 l14 12 M320 240 l12 10"/>
  </g>`;
}

function motifPalm() {
  return `
  <g fill="none" stroke="${C.forest}" stroke-width="1.2" opacity="0.55">
    <path d="M380 400 q -4 -110 8 -170"/>
    <path d="M388 230 q -40 -26 -78 -18 M388 230 q 40 -26 78 -18 M388 230 q -24 -44 -60 -52 M388 230 q 24 -44 60 -52 M388 230 q 0 -50 -14 -66 M388 230 q 4 -50 22 -62"/>
    <path d="M374 400 q 14 -18 28 0"/>
  </g>`;
}

function motifBoat() {
  return `
  <g fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.6">
    <path d="M120 330 h96 l-14 22 h-68 z"/>
    <path d="M168 330 v-52 l30 44 z"/>
    <path d="M160 330 v-64 h6"/>
  </g>`;
}

function motifCake() {
  return `
  <g fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.65">
    <path d="M150 350 h90 v44 h-90 z"/>
    <path d="M162 350 v-34 h66 v34"/>
    <path d="M174 316 v-18 h46 v18"/>
    <path d="M192 298 v-14 M204 298 v-10"/>
    <path d="M192 284 l-4 8 h8 z" fill="${C.terracotta}" opacity="0.7"/>
  </g>`;
}

function motifMic() {
  return `
  <g fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.65">
    <rect x="176" y="270" width="34" height="58" rx="17"/>
    <path d="M160 306 a33 33 0 0 0 66 0 M193 336 v26 M176 362 h34"/>
  </g>`;
}

function motifSparkle(x, y, s = 1, color = C.brass) {
  return `<path d="M${x} ${y} c ${3 * s} ${14 * s} ${9 * s} ${20 * s} ${22 * s} ${23 * s} c ${-13 * s} ${3 * s} ${-19 * s} ${9 * s} ${-22 * s} ${23 * s} c ${-3 * s} ${-14 * s} ${-9 * s} ${-20 * s} ${-22 * s} ${-23 * s} c ${13 * s} ${-3 * s} ${19 * s} ${-9 * s} ${22 * s} ${-23 * s} Z" fill="${color}" opacity="0.5"/>`;
}

function motifConfetti() {
  let s = "";
  for (let i = 0; i < 16; i++) {
    const x = rr(60, 500);
    const y = rr(90, 260);
    const rot = rr(0, 180);
    const c = [C.terracotta, C.brass, C.forest][i % 3];
    if (i % 3 === 0) {
      s += `<rect x="${x}" y="${y}" width="7" height="12" rx="2" fill="${c}" opacity="0.45" transform="rotate(${rot} ${x} ${y})"/>`;
    } else {
      s += `<circle cx="${x}" cy="${y}" r="${rr(2.5, 4.5).toFixed(1)}" fill="${c}" opacity="0.4"/>`;
    }
  }
  return s;
}

function motifRings() {
  return `
  <g fill="none" stroke="${C.brass}" stroke-width="1.3" opacity="0.6">
    <circle cx="250" cy="330" r="34"/>
    <circle cx="286" cy="318" r="34"/>
  </g>`;
}

function motifGarland() {
  let s = "";
  for (const [x1, y1, x2, y2, dip] of [
    [40, 80, 250, 60, 46],
    [250, 60, 480, 84, 52],
  ]) {
    s += `<path d="M${x1} ${y1} Q ${(x1 + x2) / 2} ${y1 + dip} ${x2} ${y2}" fill="none" stroke="${C.forest}" stroke-width="1.1" opacity="0.5"/>`;
  }
  const pts = [
    [80, 96], [128, 104], [176, 106], [224, 100], [272, 96], [320, 98], [368, 104], [416, 106], [464, 104],
  ];
  for (let i = 0; i < pts.length; i++) {
    const [x, y] = pts[i];
    const c = i % 3 === 0 ? C.terracotta : i % 3 === 1 ? C.brass : C.forest;
    s += `<circle cx="${x}" cy="${y + 6}" r="5.5" fill="none" stroke="${c}" stroke-width="1.1" opacity="0.6"/>`;
  }
  return s;
}

/* ---------------- scene composition ---------------- */

function svgDoc({ w = 560, h = 460, bg = C.parchment, caption, defsExtra = "", scene }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${caption} caption placeholder">
  <defs>
    ${grainDefs}
    ${defsExtra}
  </defs>
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect width="${w}" height="${h}" filter="url(#p1)"/>
  <rect x="14" y="14" width="${w - 28}" height="${h - 28}" fill="none" stroke="${C.line}" stroke-width="1" opacity="0.9"/>
  <g clip-path="url(#clip)">
    ${scene}
  </g>
  <rect width="${w}" height="${h}" filter="url(#g1)"/>
  <text x="26" y="${h - 26}" font-family="Georgia, 'Times New Roman', serif" font-size="13" letter-spacing="2.5" fill="${C.inkSoft}" opacity="0.85">${caption.toUpperCase().replace(/&/g, "&amp;")}</text>
</svg>`;
}

const clipDef = `<clipPath id="clip"><rect x="15" y="15" width="{W}" height="{H}"/></clipPath>`;

function build({ name, w, h, bg, caption, scene, defsExtra = "" }) {
  const clip = clipDef.replace("{W}", w - 30).replace("{H}", h - 30);
  const doc = svgDoc({ w, h, bg, caption, scene, defsExtra: defsExtra + clip });
  writeFileSync(join(OUT, name), doc);
}

/* ---------------- the artwork set ---------------- */

function motifArchBig() {
  return `
  <g fill="none" stroke-linecap="round">
    <path d="M150 430 V 260 A 130 130 0 0 1 410 260 V 430" stroke="#F4EFE6" stroke-width="1.4" opacity="0.85"/>
    <path d="M180 430 V 268 A 100 100 0 0 1 380 268 V 430" stroke="#AA9475" stroke-width="1" opacity="0.5"/>
    ${Array.from({ length: 26 }, (_, i) => {
      const t = i / 25;
      const ang = Math.PI * (1 - t);
      const x = 280 + 118 * Math.cos(ang);
      const y = 262 - 118 * Math.sin(ang);
      const r = 6 + (i % 3) * 2.4;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#F4EFE6" opacity="${0.5 + (i % 4) * 0.12}"/>`;
    }).join("\n")}
  </g>`;
}

function motifChairRows() {
  let s = `<g stroke="#EAE1D4" fill="none" stroke-width="1.1">`;
  for (let row = 0; row < 3; row++) {
    const y = 400 + row * 34;
    const n = 11 - row * 2;
    for (let i = 0; i < n; i++) {
      const x = 90 + i * ((380) / (n - 1)) + row * 30;
      s += `<path d="M${x} ${y} v18 M${x - 9} ${y + 18} h18" opacity="${0.75 - row * 0.18}"/>`;
      s += `<path d="M${x - 9} ${y} q9 -10 18 0" opacity="${0.75 - row * 0.18}"/>`;
    }
  }
  return s + `</g>`;
}

function motifStringLights() {
  let s = `<path d="M20 120 Q 280 190 540 110" fill="none" stroke="#AA9475" stroke-width="1" opacity="0.6"/>`;
  for (let i = 0; i < 12; i++) {
    const t = i / 11;
    const x = 30 + t * 500;
    const y = 120 + Math.sin(Math.PI * t) * 58 - 4;
    s += `<path d="M${x} ${y} v14" stroke="#AA9475" stroke-width="0.8" opacity="0.55"/>`;
    s += `<circle cx="${x}" cy="${y + 18}" r="3.4" fill="#E8CFA0" opacity="0.95"/>`;
    s += `<circle cx="${x}" cy="${y + 18}" r="8" fill="#E8CFA0" opacity="0.18"/>`;
  }
  return s + `</g>`;
}

function motifHedges() {
  let s = `<g fill="none" stroke="#9DB29A" stroke-width="1.1" opacity="0.8">`;
  for (let i = 0; i < 9; i++) {
    const x = 60 + i * 56;
    s += `<circle cx="${x}" cy="352" r="${20 + (i % 3) * 6}"/>`;
  }
  return s + `</g>`;
}

function motifMansion() {
  return `
  <g fill="none" stroke="#F4EFE6" stroke-width="1.3" opacity="0.9">
    <rect x="150" y="220" width="260" height="150"/>
    <path d="M138 220 h284 l-20 -34 h-244 z"/>
    <path d="M150 220 v-8 M410 220 v-8" stroke="#AA9475"/>
    <rect x="196" y="252" width="36" height="52"/><rect x="262" y="252" width="36" height="52"/><rect x="328" y="252" width="36" height="52"/>
    <rect x="262" y="322" width="36" height="48"/>
    <path d="M196 304 h36 M262 304 h36 M328 304 h36 M196 278 h36 M262 278 h36 M328 278 h36" stroke-width="0.8" opacity="0.7"/>
    <path d="M120 370 h320" stroke="#AA9475" stroke-width="1" opacity="0.8"/>
  </g>`;
}

function motifConservatory() {
  return `
  <g fill="none" stroke="#F4EFE6" stroke-width="1.2" opacity="0.9">
    <path d="M140 380 V 200 L 280 130 L 420 200 V 380 Z"/>
    <path d="M140 200 L 280 270 L 420 200 M280 130 V 270 M210 166 V 236 M350 166 V 236" stroke-width="0.9" opacity="0.8"/>
    <path d="M180 380 c0 -44 10 -60 26 -60 s26 16 26 60 M328 380 c0 -36 9 -50 24 -50 s24 14 24 50" stroke="#9DB29A" stroke-width="1.1"/>
    <circle cx="232" cy="300" r="7" fill="#EAE1D4" stroke="none" opacity="0.9"/>
    <circle cx="376" cy="312" r="6" fill="#EAE1D4" stroke="none" opacity="0.9"/>
  </g>`;
}

function motifLibrary() {
  return `
  <g fill="none" stroke="#F4EFE6" stroke-width="1.1" opacity="0.9">
    <rect x="160" y="170" width="240" height="210"/>
    <path d="M160 235 h240 M160 300 h240" stroke-width="0.9"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const x = 172 + i * 20;
      const h = 34 + ((i * 13) % 18);
      return `<path d="M${x} 235 v-${h}" stroke-width="2" opacity="0.75"/>`;
    }).join("")}
    ${Array.from({ length: 12 }, (_, i) => {
      const x = 172 + i * 20;
      const h = 30 + ((i * 17) % 16);
      return `<path d="M${x} 300 v-${h}" stroke-width="2" opacity="0.75"/>`;
    }).join("")}
    <circle cx="280" cy="340" r="14" stroke="#E8CFA0" stroke-width="1.3"/>
    <path d="M280 326 v-10" stroke="#E8CFA0" stroke-width="1.3"/>
  </g>`;
}

function motifLongTable() {
  let s = `<g fill="none" stroke="#F4EFE6" stroke-width="1.2" opacity="0.95">
    <path d="M120 330 h320 l16 22 h-352 z"/>
    <path d="M150 352 v46 M410 352 v46"/>
  </g>`;
  for (let i = 0; i < 6; i++) {
    const x = 168 + i * 46;
    s += `<circle cx="${x}" cy="318" r="4.5" fill="#EAE1D4" opacity="0.95"/>`;
    s += `<path d="M${x} 306 v-12" stroke="#AA9475" stroke-width="1" opacity="0.8"/>`;
  }
  for (let i = 0; i < 4; i++) {
    const x = 186 + i * 62;
    s += `<path d="M${x} 292 l-4 14 h8 z" fill="#E8CFA0" opacity="0.9"/>`;
  }
  return s;
}

const set = {
  "events-weddings.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Weddings · moodboard",
    scene: `${motifArches()}\n${motifRings()}\n${motifGarland()}\n${motifSparkle(470, 130)}`,
  },
  "events-birthdays.svg": {
    w: 560,
    h: 460,
    bg: C.ivorySoft,
    caption: "Birthdays · moodboard",
    scene: `${motifCake()}\n${motifConfetti()}\n${motifLanterns()}`,
  },
  "events-family.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Family & milestones · moodboard",
    scene: `${motifTable()}\n${motifPeople()}\n${motifSparkle(430, 150, 0.8)}`,
  },
  "events-corporate.svg": {
    w: 560,
    h: 460,
    bg: C.forest,
    caption: "Corporate · moodboard",
    scene: `${motifLanterns()}\n${motifMic()}\n${motifSparkle(90, 140, 0.9, C.brass)}`,
  },
  "events-private.svg": {
    w: 560,
    h: 460,
    bg: C.ivorySoft,
    caption: "Private celebrations · moodboard",
    scene: `${motifTable()}\n${motifWaves()}\n${motifSparkle(460, 120)}`,
  },
  "events-entertainment.svg": {
    w: 560,
    h: 460,
    bg: C.forestDeep,
    caption: "Entertainment · moodboard",
    scene: `${motifMic()}\n${motifLanterns()}\n${motifSparkle(120, 300, 1.1)}`,
  },
  "events-custom.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Custom events · moodboard",
    scene: `${motifSparkle(150, 150, 1.4)}\n${motifSparkle(330, 240, 0.9)}\n${motifSparkle(420, 120, 0.7)}\n${motifWaves()}`,
  },
  "gallery-1.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Gathering · placeholder",
    scene: `${motifPeople()}\n${motifGarland()}`,
  },
  "gallery-2.svg": {
    w: 560,
    h: 460,
    bg: C.ivorySoft,
    caption: "Table detail · placeholder",
    scene: motifTable(),
  },
  "gallery-3.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Ceremony · placeholder",
    scene: `${motifArches()}\n${motifWaves()}`,
  },
  "gallery-4.svg": {
    w: 560,
    h: 460,
    bg: C.ivorySoft,
    caption: "Celebration · placeholder",
    scene: `${motifCake()}\n${motifConfetti()}`,
  },
  "gallery-5.svg": {
    w: 560,
    h: 460,
    bg: C.parchment,
    caption: "Florals · placeholder",
    scene: `${motifBotanical()}\n${motifRings()}`,
  },
  "gallery-6.svg": {
    w: 560,
    h: 460,
    bg: C.forest,
    caption: "Evening · placeholder",
    scene: `${motifLanterns()}\n${motifWaves()}`,
  },
  "gallery-7.svg": {
    w: 560,
    h: 460,
    bg: C.ivorySoft,
    caption: "Details · placeholder",
    scene: `${motifBotanical()}\n${motifSparkle(430, 150)}`,
  },
  "work-alexy-backwaters.svg": {
    w: 560,
    h: 640,
    bg: C.parchment,
    caption: "Backwater vows · placeholder",
    scene: `${motifBoat()}\n${motifWaves()}\n${motifPalm()}\n${motifSparkle(120, 140)}`,
  },
  "work-sana-courtyard.svg": {
    w: 560,
    h: 640,
    bg: C.ivorySoft,
    caption: "Courtyard Nikah · placeholder",
    scene: `${motifArches()}\n${motifBotanical()}\n${motifRings()}`,
  },
  "work-arav-terrace.svg": {
    w: 560,
    h: 640,
    bg: C.parchment,
    caption: "First birthday · placeholder",
    scene: `${motifCake()}\n${motifConfetti()}\n${motifGarland()}`,
  },
  "work-meridian-launch.svg": {
    w: 560,
    h: 640,
    bg: C.forestDeep,
    caption: "Launch night · placeholder",
    scene: `${motifMic()}\n${motifLanterns()}\n${motifSparkle(440, 160)}`,
  },
  "work-proposal-marari.svg": {
    w: 560,
    h: 640,
    bg: C.ivorySoft,
    caption: "Proposal at Marari · placeholder",
    scene: `${motifTable()}\n${motifWaves()}\n${motifPalm()}`,
  },
  "work-lakshmi-babyshower.svg": {
    w: 560,
    h: 640,
    bg: C.parchment,
    caption: "Baby shower · placeholder",
    scene: `${motifBotanical()}\n${motifTable()}\n${motifSparkle(440, 130, 0.9)}`,
  },
  "work-rooftop-session.svg": {
    w: 560,
    h: 640,
    bg: C.forestDeep,
    caption: "Rooftop session · placeholder",
    scene: `${motifMic()}\n${motifConfetti()}\n${motifSparkle(140, 140, 1.2)}`,
  },
};

for (const [name, cfg] of Object.entries(set)) {
  build({ name, ...cfg });
}

/* ---------------- dark cinematic hero & wide bands (reference-style) ---------------- */

// Home hero — ceremony arch + chair rows under open sky
build({
  name: "hero-home-dark.svg",
  w: 1440,
  h: 810,
  bg: C.forestDeep,
  caption: "For the moments that matter",
  scene: `
    ${motifStringLights()}
    ${motifArchBig()}
    ${motifChairRows()}
    <circle cx="1180" cy="180" r="46" fill="#E8CFA0" opacity="0.16"/>
    <circle cx="1180" cy="180" r="26" fill="#E8CFA0" opacity="0.22"/>
  `,
});

// About / story hero — mansion at dusk
build({
  name: "hero-about-dark.svg",
  w: 1440,
  h: 810,
  bg: C.forestDeep,
  caption: "We're here to make it feel like yours",
  scene: `${motifMansion()}\n${motifHedges()}\n${motifStringLights()}`,
});

// Work hero — long dinner table
build({
  name: "hero-work-dark.svg",
  w: 1440,
  h: 810,
  bg: C.forestDeep,
  caption: "Moments we've made",
  scene: `${motifLongTable()}\n${motifStringLights()}\n${motifChairRows()}`,
});

// Kerala hero — backwater dusk
build({
  name: "hero-kerala-dark.svg",
  w: 1440,
  h: 810,
  bg: C.forestDeep,
  caption: "Kerala is the backdrop",
  scene: `${motifBoat()}\n${motifWaves()}\n${motifPalm()}`,
});

// 3-day hero — lanterns at dusk
build({
  name: "hero-3day-dark.svg",
  w: 1440,
  h: 810,
  bg: C.forestDeep,
  caption: "Some moments can't wait",
  scene: `${motifLanterns()}\n${motifStringLights()}\n${motifClockDark()}`,
});

// Space cards — room-like plates (reference: ballroom / terrace / library / conservatory)
build({
  name: "space-ballroom.svg",
  w: 640,
  h: 420,
  bg: C.forestDeep,
  caption: "The grand hall",
  scene: `${motifMansion()}\n${motifStringLights()}`,
});
build({
  name: "space-terrace.svg",
  w: 640,
  h: 420,
  bg: C.forestDeep,
  caption: "The garden terrace",
  scene: `${motifHedges()}\n${motifLongTable()}\n${motifStringLights()}`,
});
build({
  name: "space-library.svg",
  w: 640,
  h: 420,
  bg: C.forestDeep,
  caption: "The reading room",
  scene: motifLibrary(),
});
build({
  name: "space-conservatory.svg",
  w: 640,
  h: 420,
  bg: C.forestDeep,
  caption: "The glasshouse",
  scene: motifConservatory(),
});

console.log(`Generated ${Object.keys(set).length + 8} artwork files in public/images`);

/* ---------------- page-level hero panels ---------------- */

build({
  name: "hero-home.svg",
  w: 760,
  h: 640,
  bg: C.parchment,
  caption: "The moments we live for",
  scene: `${motifArches()}\n${motifGarland()}\n${motifTable()}\n${motifPeople()}\n${motifLanterns()}\n${motifSparkle(620, 150, 1.2)}`,
});

build({
  name: "hero-about.svg",
  w: 760,
  h: 640,
  bg: C.ivorySoft,
  caption: "Beautiful moments, real people",
  scene: `${motifPeople()}\n${motifBotanical()}\n${motifWaves()}\n${motifSparkle(600, 140)}`,
});

build({
  name: "hero-work.svg",
  w: 760,
  h: 640,
  bg: C.parchment,
  caption: "Moments we've made",
  scene: `${motifArches()}\n${motifTable()}\n${motifLanterns()}\n${motifSparkle(640, 180)}`,
});

build({
  name: "hero-contact.svg",
  w: 760,
  h: 640,
  bg: C.ivorySoft,
  caption: "Tell us your story",
  scene: `${motifBotanical()}\n${motifWaves()}\n${motifSparkle(600, 150, 1.1)}`,
});

build({
  name: "hero-kerala.svg",
  w: 760,
  h: 640,
  bg: C.forest,
  caption: "Kerala is the backdrop",
  scene: `${motifMountains()}\n${motifPalm()}\n${motifWaves()}\n${motifBoat()}\n${motifSparkle(620, 140, 1.1, C.brass)}`,
});

build({
  name: "hero-3day.svg",
  w: 760,
  h: 640,
  bg: C.parchment,
  caption: "Some moments can't wait",
  scene: `${motifLanterns()}\n${motifClock()}\n${motifSparkle(600, 150)}`,
});

build({
  name: "hero-events.svg",
  w: 760,
  h: 640,
  bg: C.parchment,
  caption: "Whatever the occasion",
  scene: `${motifArches()}\n${motifCake()}\n${motifGarland()}\n${motifSparkle(620, 140, 1.0)}`,
});

build({
  name: "hero-services.svg",
  w: 760,
  h: 640,
  bg: C.ivorySoft,
  caption: "Everything that brings it together",
  scene: `${motifTable()}\n${motifBotanical()}\n${motifSparkle(630, 150)}`,
});

function motifClock() {
  return `
  <g fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.6">
    <circle cx="200" cy="320" r="52"/>
    <path d="M200 282 v38 l26 16"/>
    <path d="M200 262 v8 M200 370 v8 M160 320 h8 M232 320 h8"/>
  </g>`;
}

function motifClockDark() {
  return `
  <g fill="none" stroke="#F4EFE6" stroke-width="1.3" opacity="0.9">
    <circle cx="280" cy="330" r="64"/>
    <path d="M280 284 v46 l32 20"/>
    <path d="M280 258 v10 M280 402 v10 M224 330 h10 M336 330 h10" stroke="#AA9475" stroke-width="1.1"/>
  </g>`;
}

console.log(`Generated ${Object.keys(set).length + 8} artwork files in public/images`);
