// elements-part4.js - Elements 91 to 118
const elementsPart4 = [
  {
    number: 91, symbol: "Pa", name: "Protactinio", latinName: "Protactinium", mass: 231.04,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f² 6s² 6p⁶ 6d¹ 7s²", electronConfigurationSemantic: "[Rn] 5f² 6d¹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 20, 9, 2], valenceElectrons: 5, oxidationStates: [4, 5],
    phase: "solid", meltingPoint: 1841, boilingPoint: 4300, density: 15.37,
    atomicRadius: 169, covalentRadius: 200, electronegativity: 1.5, ionizationEnergy: 568.0, electronAffinity: 53.0,
    spectralLines: [395.7, 402.4],
    discoveredBy: "Kasimir Fajans, Oswald Helmuth Göhring, Lise Meitner y Otto Hahn", discoveryYear: 1913,
    description: "Actínido intermedio en la cadena de desintegración radiactiva del Uranio-235. Es extremadamente radiactivo y se emplea en oceanografía y geocronología de sedimentos marinos.",
    summary: "Actínido radiactivo utilizado para datar sedimentos marinos de hasta 175.000 años.",
    uses: ["Datación radiométrica de sedimentos oceánicos profundos (Pa-231/Th-230)", "Intermedio en el ciclo de combustible nuclear de torio", "Investigación fundamental de la química de actínidos"],
    isotopes: [
      { mass: 231, name: "²³¹Pa", abundance: "Trazas", stable: false, halfLife: "32,760 años" }
    ],
    hazard: ["Radiactivo", "Tóxico"]
  },
  {
    number: 92, symbol: "U", name: "Uranio", latinName: "Uranium", mass: 238.03,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f³ 6s² 6p⁶ 6d¹ 7s²", electronConfigurationSemantic: "[Rn] 5f³ 6d¹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 21, 9, 2], valenceElectrons: 6, oxidationStates: [3, 4, 5, 6],
    phase: "solid", meltingPoint: 1405.3, boilingPoint: 4404, density: 19.1,
    atomicRadius: 156, covalentRadius: 196, electronegativity: 1.38, ionizationEnergy: 597.6, electronAffinity: 50.9,
    spectralLines: [385.9, 409.0],
    discoveredBy: "Martin Heinrich Klaproth", discoveryYear: 1789,
    description: "El elemento primordial de la energía nuclear. Su isótopo fisible Uranio-235 alimenta los reactores nucleares civiles mundiales, generando electricidad masiva con bajas emisiones de carbono.",
    summary: "El combustible nuclear por excelencia que alimenta las centrales atómicas del mundo.",
    uses: ["Combustible nuclear de fisión para centrales nucleares comerciales (U-235)", "Blindaje contra radiaciones y penetradores de blindaje con uranio empobrecido", "Datación geológica de la edad de la Tierra (Uranio-Plomo, 4500 millones de años)", "Colorante histórico verde fluorescente para cristal de uranio (vaselina)"],
    isotopes: [
      { mass: 234, name: "²³⁴U", abundance: "0.0054%", stable: false, halfLife: "2.45 × 10⁵ años" },
      { mass: 235, name: "²³⁵U", abundance: "0.7204%", stable: false, halfLife: "7.04 × 10⁸ años (fisión)" },
      { mass: 238, name: "²³⁸U", abundance: "99.2742%", stable: false, halfLife: "4.468 × 10⁹ años" }
    ],
    hazard: ["Radiactivo", "Tóxico químico renal"]
  },
  {
    number: 93, symbol: "Np", name: "Neptunio", latinName: "Neptunium", mass: 237,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁴ 6s² 6p⁶ 6d¹ 7s²", electronConfigurationSemantic: "[Rn] 5f⁴ 6d¹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 22, 9, 2], valenceElectrons: 7, oxidationStates: [3, 4, 5, 6, 7],
    phase: "solid", meltingPoint: 917, boilingPoint: 4273, density: 20.45,
    atomicRadius: 155, covalentRadius: 190, electronegativity: 1.36, ionizationEnergy: 604.5, electronAffinity: 45.8,
    spectralLines: [410.8, 430.0],
    discoveredBy: "Edwin McMillan y Philip H. Abelson", discoveryYear: 1940,
    description: "El primer elemento transuránico sintético producido en la historia. Se forma como subproducto en reactores nucleares y es el precursor para fabricar Plutonio-238 para misiones espaciales.",
    summary: "Primer transuránico sintetizado, precursor del Plutonio-238 espacial.",
    uses: ["Precursor en la síntesis nuclear de Plutonio-238 para baterías espaciales RTG", "Detectores de neutrones de alta energía en física nuclear", "Investigación en física de actínidos transuránicos"],
    isotopes: [
      { mass: 237, name: "²³⁷Np", abundance: "Sintético", stable: false, halfLife: "2.14 × 10⁶ años" }
    ],
    hazard: ["Radiactivo", "Tóxico"]
  },
  {
    number: 94, symbol: "Pu", name: "Plutonio", latinName: "Plutonium", mass: 244,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁶ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f⁶ 7s²",
    electronsPerShell: [2, 8, 18, 32, 24, 8, 2], valenceElectrons: 8, oxidationStates: [3, 4, 5, 6, 7],
    phase: "solid", meltingPoint: 912.5, boilingPoint: 3505, density: 19.816,
    atomicRadius: 159, covalentRadius: 187, electronegativity: 1.28, ionizationEnergy: 584.7, electronAffinity: -48.0,
    spectralLines: [398.9, 412.5],
    discoveredBy: "Glenn T. Seaborg, Edwin McMillan, Joseph W. Kennedy y Arthur Wahl", discoveryYear: 1940,
    description: "Actínido artificial sumamente potente. El calor producido por el Plutonio-238 alimenta los generadores RTG de las sondas espaciales Voyager, New Horizons y los rovers marcianos Curiosity y Perseverance.",
    summary: "Combustible de las baterías atómicas que impulsan las sondas espaciales lejanas.",
    uses: ["Generadores termoeléctricos de radioisótopos (RTG) en sondas espaciales (Voyager, Perseverance)", "Combustible nuclear MOX para reactores comerciales", "Armas nucleares de disuasión estratégica (Pu-239)", "Marcapasos cardíacos atómicos de larga duración históricos"],
    isotopes: [
      { mass: 238, name: "²³⁸Pu", abundance: "Sintético", stable: false, halfLife: "87.7 años (RTG espacial)" },
      { mass: 239, name: "²³⁹Pu", abundance: "Sintético", stable: false, halfLife: "24,110 años (fisión)" },
      { mass: 244, name: "²⁴⁴Pu", abundance: "Trazas", stable: false, halfLife: "8.0 × 10⁷ años" }
    ],
    hazard: ["Radiactivo extremo", "Tóxico celular y óseo"]
  },
  {
    number: 95, symbol: "Am", name: "Americio", latinName: "Americium", mass: 243,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁷ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f⁷ 7s²",
    electronsPerShell: [2, 8, 18, 32, 25, 8, 2], valenceElectrons: 9, oxidationStates: [2, 3, 4, 5, 6],
    phase: "solid", meltingPoint: 1449, boilingPoint: 2880, density: 12,
    atomicRadius: 173, covalentRadius: 180, electronegativity: 1.13, ionizationEnergy: 578.0, electronAffinity: 9.9,
    spectralLines: [457.5, 466.2],
    discoveredBy: "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan y Albert Ghiorso", discoveryYear: 1944,
    description: "El único elemento sintético presente en los hogares cotidianos. Una fracción de microgramo de Americio-241 ioniza el aire en los detectores de humo residenciales para salvar vidas ante conatos de incendio.",
    summary: "Elemento radiactivo guardián en millones de detectores de humo domésticos.",
    uses: ["Detectores de humo domésticos por cámara de ionización (Americio-241)", "Medidores de densidad y humedad en obras civiles mediante atenuación de rayos gamma", "Fuentes portátiles de neutrones para prospección petrolera", "Baterías térmicas espaciales de larga vida"],
    isotopes: [
      { mass: 241, name: "²⁴¹Am", abundance: "Sintético", stable: false, halfLife: "432.2 años (detectores de humo)" },
      { mass: 243, name: "²⁴³Am", abundance: "Sintético", stable: false, halfLife: "7,370 años" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 96, symbol: "Cm", name: "Curio", latinName: "Curium", mass: 247,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁷ 6s² 6p⁶ 6d¹ 7s²", electronConfigurationSemantic: "[Rn] 5f⁷ 6d¹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 25, 9, 2], valenceElectrons: 10, oxidationStates: [3, 4],
    phase: "solid", meltingPoint: 1613, boilingPoint: 3383, density: 13.51,
    atomicRadius: 174, covalentRadius: 169, electronegativity: 1.28, ionizationEnergy: 581.0, electronAffinity: 27.2,
    spectralLines: [420.7, 431.1],
    discoveredBy: "Glenn T. Seaborg, Ralph A. James y Albert Ghiorso", discoveryYear: 1944,
    description: "Nombrado en honor a Marie y Pierre Curie. Es un emisor alfa tan potente que brilla con fluorescencia púrpura en la oscuridad y sus muestras sólidas se calientan solas. Alimentó los espectrómetros APXS en Marte.",
    summary: "Nombrado por los Curie; analizó las rocas de Marte con espectrómetros APXS.",
    uses: ["Espectrómetros de rayos X de partículas alfa (APXS) en misiones a Marte (Pathfinder, Spirit, Opportunity)", "Generadores termoeléctricos de radioisótopos especiales", "Precursor para sintetizar elementos superpesados como californio"],
    isotopes: [
      { mass: 244, name: "²⁴⁴Cm", abundance: "Sintético", stable: false, halfLife: "18.11 años (APXS)" },
      { mass: 247, name: "²⁴⁷Cm", abundance: "Sintético", stable: false, halfLife: "1.56 × 10⁷ años" },
      { mass: 248, name: "²⁴⁸Cm", abundance: "Sintético", stable: false, halfLife: "3.48 × 10⁵ años" }
    ],
    hazard: ["Radiactivo extremo"]
  },
  {
    number: 97, symbol: "Bk", name: "Berkelio", latinName: "Berkelium", mass: 247,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁹ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f⁹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 27, 8, 2], valenceElectrons: 11, oxidationStates: [3, 4],
    phase: "solid", meltingPoint: 1259, boilingPoint: 2900, density: 14.78,
    atomicRadius: 170, covalentRadius: 168, electronegativity: 1.3, ionizationEnergy: 601.0, electronAffinity: -165.0,
    spectralLines: [412.0, 425.0],
    discoveredBy: "Lawrence Berkeley National Laboratory (Seaborg, Thompson, Ghiorso)", discoveryYear: 1949,
    description: "Sintetizado en la Universidad de California en Berkeley. El blanco de Berkelio-249 fue bombardeado con iones de Calcio-48 para descubrir en 2010 el elemento 117 (Teneso).",
    summary: "Actínido sintético clave que permitió descubrir el elemento Teneso.",
    uses: ["Blanco nuclear diana para la síntesis de elementos superpesados (Teneso-117)", "Investigación en química de coordinación de actínidos tardíos"],
    isotopes: [
      { mass: 247, name: "²⁴⁷Bk", abundance: "Sintético", stable: false, halfLife: "1,380 años" },
      { mass: 249, name: "²⁴⁹Bk", abundance: "Sintético", stable: false, halfLife: "330 días" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 98, symbol: "Cf", name: "Californio", latinName: "Californium", mass: 251,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁰ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁰ 7s²",
    electronsPerShell: [2, 8, 18, 32, 28, 8, 2], valenceElectrons: 12, oxidationStates: [2, 3, 4],
    phase: "solid", meltingPoint: 1173, boilingPoint: 1743, density: 15.1,
    atomicRadius: 186, covalentRadius: 168, electronegativity: 1.3, ionizationEnergy: 608.0, electronAffinity: -97.0,
    spectralLines: [410.0, 430.0],
    discoveredBy: "Lawrence Berkeley National Laboratory (Seaborg, Thompson, Street, Ghiorso)", discoveryYear: 1950,
    description: "Uno de los emisores de neutrones más potentes que existen. Un solo microgramo de Californio-252 emite 2.3 millones de neutrones por segundo, permitiendo encender reactores nucleares y detectar explosivos.",
    summary: "Prodigiosa fuente portátil de neutrones para iniciar reactores nucleares.",
    uses: ["Fuente de neutrones de arranque para poner en marcha reactores nucleares", "Análisis por activación neutrónica para detectar explosivos y drogas en aduanas", "Braquiterapia de radiación neutrónica contra cánceres cervicales y cerebrales", "Radiografía neutrónica para inspeccionar componentes de aeronaves"],
    isotopes: [
      { mass: 249, name: "²⁴⁹Cf", abundance: "Sintético", stable: false, halfLife: "351 años" },
      { mass: 251, name: "²⁵¹Cf", abundance: "Sintético", stable: false, halfLife: "898 años" },
      { mass: 252, name: "²⁵²Cf", abundance: "Sintético", stable: false, halfLife: "2.645 años (fuente de neutrones)" }
    ],
    hazard: ["Radiactivo extremo"]
  },
  {
    number: 99, symbol: "Es", name: "Einstenio", latinName: "Einsteinium", mass: 252,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹¹ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹¹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 29, 8, 2], valenceElectrons: 13, oxidationStates: [2, 3],
    phase: "solid", meltingPoint: 1133, boilingPoint: 1269, density: 8.84,
    atomicRadius: 186, covalentRadius: 165, electronegativity: 1.3, ionizationEnergy: 619.0, electronAffinity: -28.6,
    spectralLines: [418.0, 432.0],
    discoveredBy: "Albert Ghiorso y colaboradores", discoveryYear: 1952,
    description: "Descubierto en los restos radiactivos de la primera explosión de una bomba de hidrógeno termonuclear ('Ivy Mike') en 1952 y nombrado en homenaje a Albert Einstein.",
    summary: "Descubierto en los restos de la primera bomba de hidrógeno en honor a Einstein.",
    uses: ["Síntesis del elemento 101 Mendelevio mediante bombardeo con partículas alfa", "Investigación sobre la auto-irradiación y daño en redes cristalinas"],
    isotopes: [
      { mass: 252, name: "²⁵²Es", abundance: "Sintético", stable: false, halfLife: "471.7 días" },
      { mass: 253, name: "²⁵³Es", abundance: "Sintético", stable: false, halfLife: "20.47 días" }
    ],
    hazard: ["Radiactivo severo"]
  },
  {
    number: 100, symbol: "Fm", name: "Fermio", latinName: "Fermium", mass: 257,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹² 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹² 7s²",
    electronsPerShell: [2, 8, 18, 32, 30, 8, 2], valenceElectrons: 14, oxidationStates: [2, 3],
    phase: "solid", meltingPoint: 1800, boilingPoint: null, density: 9.7,
    atomicRadius: 198, covalentRadius: 167, electronegativity: 1.3, ionizationEnergy: 627.0, electronAffinity: 33.9,
    spectralLines: [415.0, 428.0],
    discoveredBy: "Albert Ghiorso y colaboradores", discoveryYear: 1952,
    description: "Nombrado en honor a Enrico Fermi, creador del primer reactor nuclear artificial. Es el elemento más pesado que puede producirse mediante captura neutrónica sucesiva en reactores.",
    summary: "El elemento más pesado producible por captura neutrónica sucesiva.",
    uses: ["Investigación en física de fisión espontánea y estructura nuclear de actínidos pesados"],
    isotopes: [
      { mass: 257, name: "²⁵⁷Fm", abundance: "Sintético", stable: false, halfLife: "100.5 días" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 101, symbol: "Md", name: "Mendelevio", latinName: "Mendelevium", mass: 258,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹³ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹³ 7s²",
    electronsPerShell: [2, 8, 18, 32, 31, 8, 2], valenceElectrons: 15, oxidationStates: [2, 3],
    phase: "solid", meltingPoint: 1100, boilingPoint: null, density: 10.3,
    atomicRadius: 194, covalentRadius: 173, electronegativity: 1.3, ionizationEnergy: 635.0, electronAffinity: 93.9,
    spectralLines: [422.0, 435.0],
    discoveredBy: "Albert Ghiorso, Glenn T. Seaborg, Bernard Harvey y Gregory Choppin", discoveryYear: 1955,
    description: "Nombrado en tributo a Dmitri Mendeléyev, padre de la Tabla Periódica moderna. Fue el primer elemento sintetizado átomo a átomo en un ciclotrón.",
    summary: "Primer elemento producido átomo a átomo, en honor a Dmitri Mendeléyev.",
    uses: ["Estudio de propiedades químicas y termodinámicas átomo a átomo"],
    isotopes: [
      { mass: 258, name: "²⁵⁸Md", abundance: "Sintético", stable: false, halfLife: "51.5 días" },
      { mass: 260, name: "²⁶⁰Md", abundance: "Sintético", stable: false, halfLife: "31.8 días" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 102, symbol: "No", name: "Nobelio", latinName: "Nobelium", mass: 259,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 8, 2], valenceElectrons: 2, oxidationStates: [2, 3],
    phase: "solid", meltingPoint: 1100, boilingPoint: null, density: 9.9,
    atomicRadius: 197, covalentRadius: 176, electronegativity: 1.3, ionizationEnergy: 642.0, electronAffinity: -223.2,
    spectralLines: [415.0],
    discoveredBy: "Instituto Conjunto para la Investigación Nuclear (Dubná) / Berkeley", discoveryYear: 1966,
    description: "Nombrado en homenaje a Alfred Nobel, inventor de la dinamita y fundador de los Premios Nobel. Presenta una química inusualmente estable en su estado de oxidación +2.",
    summary: "Nombrado en honor a Alfred Nobel, con una gran estabilidad en estado +2.",
    uses: ["Investigación en cromatografía de intercambio iónico de actínidos"],
    isotopes: [
      { mass: 259, name: "²⁵⁹No", abundance: "Sintético", stable: false, halfLife: "58 minutos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 103, symbol: "Lr", name: "Laurencio", latinName: "Lawrencium", mass: 266,
    category: "actinide", categoryName: "Actínidos", group: null, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 7s² 7p¹", electronConfigurationSemantic: "[Rn] 5f¹⁴ 7s² 7p¹",
    electronsPerShell: [2, 8, 18, 32, 32, 8, 3], valenceElectrons: 3, oxidationStates: [3],
    phase: "solid", meltingPoint: 1900, boilingPoint: null, density: 14.4,
    atomicRadius: 190, covalentRadius: 161, electronegativity: 1.3, ionizationEnergy: 470.0, electronAffinity: -30.0,
    spectralLines: [420.0],
    discoveredBy: "Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh y Robert M. Latimer", discoveryYear: 1961,
    description: "Último elemento de la serie de los actínidos. Nombrado por Ernest Lawrence, pionero del ciclotrón. Su configuración electrónica incluye un orbital 7p¹ por efectos relativistas.",
    summary: "Cierre de la serie de los actínidos en honor al creador del ciclotrón.",
    uses: ["Estudio de efectos relativistas en la primera energía de ionización de elementos pesados"],
    isotopes: [
      { mass: 266, name: "²⁶⁶Lr", abundance: "Sintético", stable: false, halfLife: "11 horas" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 104, symbol: "Rf", name: "Rutherfordio", latinName: "Rutherfordium", mass: 267,
    category: "transition-metal", categoryName: "Metales de transición", group: 4, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d² 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d² 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 10, 2], valenceElectrons: 4, oxidationStates: [4],
    phase: "solid", meltingPoint: 2400, boilingPoint: 5800, density: 17,
    atomicRadius: 157, covalentRadius: 157, electronegativity: null, ionizationEnergy: 580.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / LBNL Berkeley", discoveryYear: 1969,
    description: "El primer elemento transactínido y primer metal del bloque 6d. Nombrado en honor a Ernest Rutherford, descubridor del núcleo atómico.",
    summary: "Primer elemento transactínido superpesado en homenaje a Ernest Rutherford.",
    uses: ["Investigación en física de partículas y química nuclear de frontera"],
    isotopes: [
      { mass: 267, name: "²⁶⁷Rf", abundance: "Sintético", stable: false, halfLife: "1.3 horas" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 105, symbol: "Db", name: "Dubnio", latinName: "Dubnium", mass: 268,
    category: "transition-metal", categoryName: "Metales de transición", group: 5, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d³ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d³ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 11, 2], valenceElectrons: 5, oxidationStates: [5],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 21.6,
    atomicRadius: 149, covalentRadius: 149, electronegativity: null, ionizationEnergy: 664.8, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / LBNL Berkeley", discoveryYear: 1970,
    description: "Nombrado en tributo a Dubná (Rusia), sede del Instituto Conjunto de Investigación Nuclear. Homólogo superpesado más pesado del tántalo y niobio.",
    summary: "Metal de transición superpesado nombrado por el centro de investigación de Dubná.",
    uses: ["Estudio de reactividad en fase gaseosa y solución acuosa de cloruros superpesados"],
    isotopes: [
      { mass: 268, name: "²⁶⁸Db", abundance: "Sintético", stable: false, halfLife: "28 horas" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 106, symbol: "Sg", name: "Seaborgio", latinName: "Seaborgium", mass: 269,
    category: "transition-metal", categoryName: "Metales de transición", group: 6, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁴ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁴ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 12, 2], valenceElectrons: 6, oxidationStates: [6],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 23.5,
    atomicRadius: 143, covalentRadius: 143, electronegativity: null, ionizationEnergy: 757.4, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "Lawrence Berkeley National Laboratory (Albert Ghiorso y colaboradores)", discoveryYear: 1974,
    description: "Nombrado en honor al químico nuclear Glenn T. Seaborg, codescubridor del plutonio y de diez elementos transuránicos. Fue el primer elemento bautizado en honor a una persona viva.",
    summary: "Nombrado en vida por Glenn Seaborg, arquitecto de la serie de los actínidos.",
    uses: ["Estudios de química de carbonilos superpesados [Sg(CO)₆]"],
    isotopes: [
      { mass: 269, name: "²⁶⁹Sg", abundance: "Sintético", stable: false, halfLife: "14 minutos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 107, symbol: "Bh", name: "Bohrio", latinName: "Bohrium", mass: 270,
    category: "transition-metal", categoryName: "Metales de transición", group: 7, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁵ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁵ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 13, 2], valenceElectrons: 7, oxidationStates: [7],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 26,
    atomicRadius: 137, covalentRadius: 137, electronegativity: null, ionizationEnergy: 790.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)", discoveryYear: 1981,
    description: "Nombrado en honor a Niels Bohr, padre del modelo cuántico atómico. Forma oxicloruros volátiles que confirman que pertenece formalmente al grupo 7 de la tabla periódica.",
    summary: "Tributo a Niels Bohr, creador del modelo atómico cuántico.",
    uses: ["Comprobación experimental de la ley periódica para el grupo 7"],
    isotopes: [
      { mass: 270, name: "²⁷⁰Bh", abundance: "Sintético", stable: false, halfLife: "61 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 108, symbol: "Hs", name: "Hassio", latinName: "Hassium", mass: 269,
    category: "transition-metal", categoryName: "Metales de transición", group: 8, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁶ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁶ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 14, 2], valenceElectrons: 8, oxidationStates: [8],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 27,
    atomicRadius: 134, covalentRadius: 134, electronegativity: null, ionizationEnergy: 730.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)", discoveryYear: 1984,
    description: "Nombrado en honor al estado alemán de Hesse (Hassia en latín). Forma un tetraóxido volátil análogo al del osmio (HsO₄), demostrando que la periodicidad química persiste en elementos superpesados.",
    summary: "Forma el tetraóxido volátil HsO₄ confirmando la periodicidad del grupo 8.",
    uses: ["Investigación en termocromatografía de óxidos volátiles superpesados"],
    isotopes: [
      { mass: 269, name: "²⁶⁹Hs", abundance: "Sintético", stable: false, halfLife: "16 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 109, symbol: "Mt", name: "Meitnerio", latinName: "Meitnerium", mass: 278,
    category: "transition-metal", categoryName: "Metales de transición", group: 9, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁷ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁷ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 15, 2], valenceElectrons: 9, oxidationStates: [3, 4],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 27.8,
    atomicRadius: 131, covalentRadius: 131, electronegativity: null, ionizationEnergy: 800.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)", discoveryYear: 1982,
    description: "Nombrado en honor a la física austríaca Lise Meitner, codescubridora de la fisión nuclear teórica. El único elemento que rinde tributo exclusivo a una científica no mitológica.",
    summary: "Homenaje a Lise Meitner, pionera imprescindible de la fisión nuclear.",
    uses: ["Investigación en física nuclear y síntesis de núcleos exóticos"],
    isotopes: [
      { mass: 278, name: "²⁷⁸Mt", abundance: "Sintético", stable: false, halfLife: "8 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 110, symbol: "Ds", name: "Darmstatio", latinName: "Darmstadtium", mass: 281,
    category: "transition-metal", categoryName: "Metales de transición", group: 10, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁸ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁸ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 16, 2], valenceElectrons: 10, oxidationStates: [2, 4],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 26,
    atomicRadius: 128, covalentRadius: 128, electronegativity: null, ionizationEnergy: 955.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Sigurd Hofmann y colaboradores)", discoveryYear: 1994,
    description: "Nombrado en honor a la ciudad alemana de Darmstadt, cuna del centro de iones pesados GSI donde se crearon seis elementos superpesados.",
    summary: "Elemento sintetizado en la ciudad alemana de Darmstadt.",
    uses: ["Estudios sobre efectos relativistas en la contracción de orbitales d"],
    isotopes: [
      { mass: 281, name: "²⁸¹Ds", abundance: "Sintético", stable: false, halfLife: "12.7 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 111, symbol: "Rg", name: "Roentgenio", latinName: "Roentgenium", mass: 282,
    category: "transition-metal", categoryName: "Metales de transición", group: 11, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁹ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d⁹ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 17, 2], valenceElectrons: 11, oxidationStates: [3],
    phase: "solid", meltingPoint: null, boilingPoint: null, density: 28.7,
    atomicRadius: 121, covalentRadius: 121, electronegativity: null, ionizationEnergy: 1020.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Sigurd Hofmann y colaboradores)", discoveryYear: 1994,
    description: "Nombrado en honor a Wilhelm Conrad Röntgen, descubridor de los rayos X y primer Premio Nobel de Física. Homólogo superpesado del oro y la plata.",
    summary: "Homólogo superpesado del oro nombrado por el descubridor de los rayos X.",
    uses: ["Modelización teórica de efectos relativistas en el enlace metal-oro"],
    isotopes: [
      { mass: 282, name: "²⁸²Rg", abundance: "Sintético", stable: false, halfLife: "2.1 minutos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 112, symbol: "Cn", name: "Copernicio", latinName: "Copernicium", mass: 285,
    category: "transition-metal", categoryName: "Metales de transición", group: 12, period: 7, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 2], valenceElectrons: 2, oxidationStates: [2],
    phase: "liquid", meltingPoint: 283, boilingPoint: 340, density: 14.0,
    atomicRadius: 122, covalentRadius: 122, electronegativity: null, ionizationEnergy: 1155.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "GSI Darmstadt (Sigurd Hofmann y colaboradores)", discoveryYear: 1996,
    description: "Nombrado en memoria del astrónomo Nicolás Copérnico. Debido a efectos relativistas extremos que estabilizan los electrones 7s², se predice que es un metal sumamente volátil, posiblemente líquido o gaseoso a temperatura ambiente.",
    summary: "Metal superpesado extraordinariamente volátil por efectos relativistas cuánticos.",
    uses: ["Termocromatografía de adsorción sobre superficies de oro"],
    isotopes: [
      { mass: 285, name: "²⁸⁵Cn", abundance: "Sintético", stable: false, halfLife: "29 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 113, symbol: "Nh", name: "Nihonio", latinName: "Nihonium", mass: 286,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 13, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p¹", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 3], valenceElectrons: 3, oxidationStates: [1],
    phase: "solid", meltingPoint: 700, boilingPoint: 1400, density: 16,
    atomicRadius: 136, covalentRadius: 136, electronegativity: null, ionizationEnergy: 704.9, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "RIKEN Nishina Center (Kosuke Morita y colaboradores, Japón)", discoveryYear: 2004,
    description: "El primer elemento químico descubierto en el continente asiático. Sintetizado en el acelerador RIKEN en Japón y nombrado por 'Nihon' (tierra del sol naciente).",
    summary: "Primer elemento descubierto en Asia por científicos japoneses en el RIKEN.",
    uses: ["Estudio de reactividad química del grupo del boro en el régimen superpesado"],
    isotopes: [
      { mass: 286, name: "²⁸⁶Nh", abundance: "Sintético", stable: false, halfLife: "9.5 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 114, symbol: "Fl", name: "Flerovio", latinName: "Flerovium", mass: 289,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 14, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p²", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 4], valenceElectrons: 4, oxidationStates: [2],
    phase: "solid", meltingPoint: 340, boilingPoint: 420, density: 9.9,
    atomicRadius: 143, covalentRadius: 143, electronegativity: null, ionizationEnergy: 823.9, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / LLNL Lawrence Livermore", discoveryYear: 1998,
    description: "Nombrado por el Laboratorio Flerov de Reacciones Nucleares de Dubná y su fundador Gueorgui Fliórov. Se sitúa en la entrada de la 'Isla de Estabilidad' de la física nuclear.",
    summary: "Elemento superpesado en el umbral de la hipotética 'Isla de Estabilidad'.",
    uses: ["Investigación en la física de números mágicos de protones y neutrones"],
    isotopes: [
      { mass: 289, name: "²⁸⁹Fl", abundance: "Sintético", stable: false, halfLife: "2.6 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 115, symbol: "Mc", name: "Moscovio", latinName: "Moscovium", mass: 290,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 15, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p³", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 5], valenceElectrons: 5, oxidationStates: [1, 3],
    phase: "solid", meltingPoint: 670, boilingPoint: 1400, density: 13.5,
    atomicRadius: 156, covalentRadius: 156, electronegativity: null, ionizationEnergy: 538.4, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / LLNL Livermore", discoveryYear: 2003,
    description: "Nombrado en honor a la región y óblast de Moscú, donde se encuentra el instituto JINR. Es un elemento superpesado altamente radiactivo sintetizado al colisionar Americio-243 con Calcio-48.",
    summary: "Sintetizado mediante colisiones de iones pesados y nombrado por Moscú.",
    uses: ["Física de desintegración alfa en cadenas hacia Nihonio"],
    isotopes: [
      { mass: 290, name: "²⁹⁰Mc", abundance: "Sintético", stable: false, halfLife: "0.8 segundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 116, symbol: "Lv", name: "Livermorio", latinName: "Livermorium", mass: 293,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 16, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁴", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 6], valenceElectrons: 6, oxidationStates: [2, 4],
    phase: "solid", meltingPoint: 700, boilingPoint: 1100, density: 12.9,
    atomicRadius: 160, covalentRadius: 160, electronegativity: null, ionizationEnergy: 616.0, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / Lawrence Livermore National Laboratory (LLNL)", discoveryYear: 2000,
    description: "Nombrado en honor al Laboratorio Nacional Lawrence Livermore de California. Producido bombardeando Curio-248 con proyectiles de Calcio-48.",
    summary: "Nombrado en homenaje al prestigioso laboratorio Lawrence Livermore de EE.UU.",
    uses: ["Estudios de límites de estabilidad nuclear y fisión en elementos superpesados"],
    isotopes: [
      { mass: 293, name: "²⁹³Lv", abundance: "Sintético", stable: false, halfLife: "53 milisegundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 117, symbol: "Ts", name: "Teneso", latinName: "Tennessine", mass: 294,
    category: "metalloid", categoryName: "Metaloides", group: 17, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁵", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 7], valenceElectrons: 7, oxidationStates: [-1, 1, 3, 5],
    phase: "solid", meltingPoint: 723, boilingPoint: 883, density: 7.2,
    atomicRadius: 156, covalentRadius: 156, electronegativity: null, ionizationEnergy: 742.9, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná, LLNL Livermore y Oak Ridge National Laboratory (ORNL)", discoveryYear: 2010,
    description: "Nombrado por el estado de Tennessee, sede del Oak Ridge National Laboratory y la Universidad Vanderbilt. Es el segundo elemento más pesado sintetizado hasta la fecha.",
    summary: "Halógeno superpesado nombrado por el estado de Tennessee (ORNL).",
    uses: ["Comprobación de la interacción espín-órbita relativista extrema"],
    isotopes: [
      { mass: 294, name: "²⁹⁴Ts", abundance: "Sintético", stable: false, halfLife: "51 milisegundos" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 118, symbol: "Og", name: "Oganesón", latinName: "Oganesson", mass: 294,
    category: "noble-gas", categoryName: "Gases nobles", group: 18, period: 7, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁶", electronConfigurationSemantic: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    electronsPerShell: [2, 8, 18, 32, 32, 18, 8], valenceElectrons: 8, oxidationStates: [0, 2, 4],
    phase: "solid", meltingPoint: 325, boilingPoint: 350, density: 5.0,
    atomicRadius: 152, covalentRadius: 152, electronegativity: null, ionizationEnergy: 860.1, electronAffinity: null,
    spectralLines: [],
    discoveredBy: "JINR Dubná / LLNL Livermore (Yuri Oganessian y equipo)", discoveryYear: 2002,
    description: "El elemento químico más pesado conocido por la humanidad y el último de la tabla periódica actual. Nombrado en honor al físico ruso Yuri Oganesián. Debido a efectos relativistas en su nube de electrones, se predice que es un sólido semiconductor y no un gas.",
    summary: "El elemento 118: el más pesado del universo y cima actual de la Tabla Periódica.",
    uses: ["Frontera del conocimiento en física cuántica relativista y síntesis superpesada"],
    isotopes: [
      { mass: 294, name: "²⁹⁴Og", abundance: "Sintético", stable: false, halfLife: "0.7 milisegundos" }
    ],
    hazard: ["Radiactivo"]
  }
];

if (typeof module !== 'undefined') module.exports = elementsPart4;
