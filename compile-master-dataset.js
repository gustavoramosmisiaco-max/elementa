// compile-master-dataset.js
const fs = require('fs');
const path = require('path');

const p1 = require('./js/data/elements-part1.js');
const p2 = require('./js/data/elements-part2.js');
const p3 = require('./js/data/elements-part3.js');
const p4 = require('./js/data/elements-part4.js');

const allElements = [...p1, ...p2, ...p3, ...p4];

console.log(`Total elements loaded: ${allElements.length}`);

// Validation
if (allElements.length !== 118) {
  console.error(`ERROR: Expected 118 elements, found ${allElements.length}`);
  process.exit(1);
}

for (let i = 1; i <= 118; i++) {
  const el = allElements.find(e => e.number === i);
  if (!el) {
    console.error(`ERROR: Missing element atomic number ${i}`);
    process.exit(1);
  }
  if (!el.symbol || !el.name || !el.category || !el.period || !el.electronConfiguration) {
    console.error(`ERROR: Incomplete data in element ${i} (${el.name || 'Unnamed'})`);
    process.exit(1);
  }
}

console.log('All 118 elements successfully verified with zero errors!');

// Category Metadata
const categoryMeta = {
  "alkali-metal": {
    name: "Metales alcalinos",
    color: "#ff6b6b",
    colorDark: "#ff5252",
    bgAlpha: "rgba(255, 107, 107, 0.18)",
    border: "#ff6b6b"
  },
  "alkaline-earth": {
    name: "Metales alcalinotérreos",
    color: "#ffa94d",
    colorDark: "#ff922b",
    bgAlpha: "rgba(255, 169, 77, 0.18)",
    border: "#ffa94d"
  },
  "transition-metal": {
    name: "Metales de transición",
    color: "#ffd43b",
    colorDark: "#fcc419",
    bgAlpha: "rgba(255, 212, 59, 0.18)",
    border: "#ffd43b"
  },
  "post-transition-metal": {
    name: "Metales post-transicionales",
    color: "#69db7c",
    colorDark: "#51cf66",
    bgAlpha: "rgba(105, 219, 124, 0.18)",
    border: "#69db7c"
  },
  "metalloid": {
    name: "Metaloides",
    color: "#38d9a9",
    colorDark: "#20c997",
    bgAlpha: "rgba(56, 217, 169, 0.18)",
    border: "#38d9a9"
  },
  "reactive-nonmetal": {
    name: "No metales reactivos",
    color: "#4dabf7",
    colorDark: "#339af0",
    bgAlpha: "rgba(77, 171, 247, 0.18)",
    border: "#4dabf7"
  },
  "noble-gas": {
    name: "Gases nobles",
    color: "#da77f2",
    colorDark: "#cc5de8",
    bgAlpha: "rgba(218, 119, 242, 0.18)",
    border: "#da77f2"
  },
  "lanthanide": {
    name: "Lantánidos",
    color: "#748ffc",
    colorDark: "#5c7cfa",
    bgAlpha: "rgba(116, 143, 252, 0.18)",
    border: "#748ffc"
  },
  "actinide": {
    name: "Actínidos",
    color: "#ff8787",
    colorDark: "#fa5252",
    bgAlpha: "rgba(255, 135, 135, 0.18)",
    border: "#ff8787"
  }
};

const outputContent = `/**
 * ELEMENTA - Base de datos química verificada de 118 Elementos (IUPAC / NIST)
 * Idioma: Español
 */
(function(window) {
  'use strict';

  const CATEGORY_META = ${JSON.stringify(categoryMeta, null, 2)};

  const ELEMENTS_DATA = ${JSON.stringify(allElements, null, 2)};

  // Expose globally and as modular helper
  window.CATEGORY_META = CATEGORY_META;
  window.ELEMENTS_DATA = ELEMENTS_DATA;

  window.getElementByNumber = function(num) {
    return ELEMENTS_DATA.find(e => e.number === Number(num)) || null;
  };

  window.getElementBySymbol = function(sym) {
    if (!sym) return null;
    return ELEMENTS_DATA.find(e => e.symbol.toLowerCase() === sym.trim().toLowerCase()) || null;
  };

  window.getElementByName = function(name) {
    if (!name) return null;
    const clean = name.trim().toLowerCase();
    return ELEMENTS_DATA.find(e => e.name.toLowerCase() === clean || e.latinName.toLowerCase() === clean) || null;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ELEMENTS_DATA, CATEGORY_META };
  }
})(typeof window !== 'undefined' ? window : global);
`;

fs.writeFileSync(path.join(__dirname, 'js', 'data', 'elements-data.js'), outputContent, 'utf8');
console.log('Successfully wrote js/data/elements-data.js');
