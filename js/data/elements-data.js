/**
 * ELEMENTA - Base de datos química verificada de 118 Elementos (IUPAC / NIST)
 * Idioma: Español
 */
(function(window) {
  'use strict';

  const CATEGORY_META = {
  "alkali-metal": {
    "name": "Metales alcalinos",
    "color": "#ff6b6b",
    "colorDark": "#ff5252",
    "bgAlpha": "rgba(255, 107, 107, 0.18)",
    "border": "#ff6b6b"
  },
  "alkaline-earth": {
    "name": "Metales alcalinotérreos",
    "color": "#ffa94d",
    "colorDark": "#ff922b",
    "bgAlpha": "rgba(255, 169, 77, 0.18)",
    "border": "#ffa94d"
  },
  "transition-metal": {
    "name": "Metales de transición",
    "color": "#ffd43b",
    "colorDark": "#fcc419",
    "bgAlpha": "rgba(255, 212, 59, 0.18)",
    "border": "#ffd43b"
  },
  "post-transition-metal": {
    "name": "Metales post-transicionales",
    "color": "#69db7c",
    "colorDark": "#51cf66",
    "bgAlpha": "rgba(105, 219, 124, 0.18)",
    "border": "#69db7c"
  },
  "metalloid": {
    "name": "Metaloides",
    "color": "#38d9a9",
    "colorDark": "#20c997",
    "bgAlpha": "rgba(56, 217, 169, 0.18)",
    "border": "#38d9a9"
  },
  "reactive-nonmetal": {
    "name": "No metales reactivos",
    "color": "#4dabf7",
    "colorDark": "#339af0",
    "bgAlpha": "rgba(77, 171, 247, 0.18)",
    "border": "#4dabf7"
  },
  "noble-gas": {
    "name": "Gases nobles",
    "color": "#da77f2",
    "colorDark": "#cc5de8",
    "bgAlpha": "rgba(218, 119, 242, 0.18)",
    "border": "#da77f2"
  },
  "lanthanide": {
    "name": "Lantánidos",
    "color": "#748ffc",
    "colorDark": "#5c7cfa",
    "bgAlpha": "rgba(116, 143, 252, 0.18)",
    "border": "#748ffc"
  },
  "actinide": {
    "name": "Actínidos",
    "color": "#ff8787",
    "colorDark": "#fa5252",
    "bgAlpha": "rgba(255, 135, 135, 0.18)",
    "border": "#ff8787"
  }
};

  const ELEMENTS_DATA = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hidrógeno",
    "latinName": "Hydrogenium",
    "mass": 1.008,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 1,
    "period": 1,
    "block": "s",
    "electronConfiguration": "1s¹",
    "electronConfigurationSemantic": "1s¹",
    "electronsPerShell": [
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      -1,
      1
    ],
    "phase": "gas",
    "meltingPoint": 13.99,
    "boilingPoint": 20.271,
    "density": 0.00008988,
    "atomicRadius": 53,
    "covalentRadius": 31,
    "electronegativity": 2.2,
    "ionizationEnergy": 1312,
    "electronAffinity": 72.8,
    "spectralLines": [
      656.3,
      486.1,
      434,
      410.2
    ],
    "discoveredBy": "Henry Cavendish",
    "discoveryYear": 1766,
    "description": "El elemento más ligero y abundante del universo observable (75% de la masa bariónica). Combustible de las estrellas y pilar fundamental del agua y la vida.",
    "summary": "Gas incoloro, inodoro e inflamable. Forma el agua y es clave para toda la vida.",
    "uses": [
      "Producción de amoníaco para fertilizantes",
      "Combustible limpio para celdas de hidrógeno",
      "Hidrogenación de aceites vegetales",
      "Refinado de hidrocarburos"
    ],
    "isotopes": [
      {
        "mass": 1,
        "name": "¹H (Protio)",
        "abundance": "99.9885%",
        "stable": true
      },
      {
        "mass": 2,
        "name": "²H (Deuterio)",
        "abundance": "0.0115%",
        "stable": true
      },
      {
        "mass": 3,
        "name": "³H (Tritio)",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "12.32 años"
      }
    ],
    "hazard": [
      "Inflamable",
      "Gas a presión"
    ]
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helio",
    "latinName": "Helium",
    "mass": 4.0026,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 1,
    "block": "s",
    "electronConfiguration": "1s²",
    "electronConfigurationSemantic": "1s²",
    "electronsPerShell": [
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      0
    ],
    "phase": "gas",
    "meltingPoint": 0.95,
    "boilingPoint": 4.222,
    "density": 0.0001785,
    "atomicRadius": 31,
    "covalentRadius": 28,
    "electronegativity": null,
    "ionizationEnergy": 2372.3,
    "electronAffinity": -48,
    "spectralLines": [
      706.5,
      667.8,
      587.6,
      501.6,
      447.1,
      388.9
    ],
    "discoveredBy": "Pierre Janssen y Norman Lockyer",
    "discoveryYear": 1868,
    "description": "Gas noble inerte con el punto de ebullición más bajo de toda la materia conocida. Esencial en criogenia y tecnología de resonancia magnética.",
    "summary": "Gas noble incoloro, no reactivo y ultraligero.",
    "uses": [
      "Refrigeración de imanes superconductores en resonancias magnéticas",
      "Inflado de globos meteorológicos y dirigibles",
      "Atmósferas inertes para soldadura avanzada",
      "Mezclas de gases para buceo profundo"
    ],
    "isotopes": [
      {
        "mass": 3,
        "name": "³He",
        "abundance": "0.000137%",
        "stable": true
      },
      {
        "mass": 4,
        "name": "⁴He",
        "abundance": "99.99986%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Litio",
    "latinName": "Lithium",
    "mass": 6.94,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 2,
    "block": "s",
    "electronConfiguration": "1s² 2s¹",
    "electronConfigurationSemantic": "[He] 2s¹",
    "electronsPerShell": [
      2,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 453.65,
    "boilingPoint": 1603,
    "density": 0.534,
    "atomicRadius": 167,
    "covalentRadius": 128,
    "electronegativity": 0.98,
    "ionizationEnergy": 520.2,
    "electronAffinity": 59.6,
    "spectralLines": [
      670.8,
      610.4,
      460.3
    ],
    "discoveredBy": "Johan August Arfwedson",
    "discoveryYear": 1817,
    "description": "El metal sólido más ligero y de menor densidad. Clave mundial para la movilidad eléctrica y el almacenamiento electroquímico moderno.",
    "summary": "Metal blando, blanco plateado, vital para la era de la electrificación.",
    "uses": [
      "Baterías recargables de iones de litio en smartphones y vehículos eléctricos",
      "Estabilizador del ánimo en psiquiatría (carbonato de litio)",
      "Grasas lubricantes para automoción y aviación",
      "Vidrios y cerámicas de baja dilatación térmica"
    ],
    "isotopes": [
      {
        "mass": 6,
        "name": "⁶Li",
        "abundance": "7.59%",
        "stable": true
      },
      {
        "mass": 7,
        "name": "⁷Li",
        "abundance": "92.41%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Corrosivo",
      "Reactivo con agua"
    ]
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Berilio",
    "latinName": "Beryllium",
    "mass": 9.0122,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 2,
    "block": "s",
    "electronConfiguration": "1s² 2s²",
    "electronConfigurationSemantic": "[He] 2s²",
    "electronsPerShell": [
      2,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 1560,
    "boilingPoint": 2742,
    "density": 1.85,
    "atomicRadius": 112,
    "covalentRadius": 96,
    "electronegativity": 1.57,
    "ionizationEnergy": 899.5,
    "electronAffinity": -48,
    "spectralLines": [
      457.3,
      313.1,
      234.9
    ],
    "discoveredBy": "Louis-Nicolas Vauquelin",
    "discoveryYear": 1798,
    "description": "Metal alcalinotérreo ultraligero y rígido de gran conductividad térmica y resistencia a la fatiga mecánica. Usado en telescopios espaciales.",
    "summary": "Metal plateado de alta rigidez utilizado en tecnología aeroespacial y nuclear.",
    "uses": [
      "Espejos del telescopio espacial James Webb",
      "Ventanas transparentes a rayos X en tubos radiológicos",
      "Aleaciones antichispas de cobre-berilio",
      "Reflector de neutrones en reactores nucleares"
    ],
    "isotopes": [
      {
        "mass": 9,
        "name": "⁹Be",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico",
      "Carcinógeno",
      "Peligro respiratorio"
    ]
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boro",
    "latinName": "Borum",
    "mass": 10.81,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 13,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p¹",
    "electronConfigurationSemantic": "[He] 2s² 2p¹",
    "electronsPerShell": [
      2,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 2349,
    "boilingPoint": 4200,
    "density": 2.34,
    "atomicRadius": 87,
    "covalentRadius": 84,
    "electronegativity": 2.04,
    "ionizationEnergy": 800.6,
    "electronAffinity": 26.7,
    "spectralLines": [
      249.8,
      208.9
    ],
    "discoveredBy": "Joseph Louis Gay-Lussac y Louis Jacques Thénard",
    "discoveryYear": 1808,
    "description": "Metaloide semiconductor duro y refractario. Forma enlaces covalentes multicéntricos de gran estabilidad química.",
    "summary": "Metaloide pardo oscuro clave para vidrios resistentes y semiconductores.",
    "uses": [
      "Vidrio borosilicatado resistente al choque térmico (Pyrex)",
      "Fibras de boro de ultra-alta resistencia",
      "Dopante tipo p en obleas de silicio",
      "Ácido bórico como antiséptico y retardante de llama"
    ],
    "isotopes": [
      {
        "mass": 10,
        "name": "¹⁰B",
        "abundance": "19.9%",
        "stable": true
      },
      {
        "mass": 11,
        "name": "¹¹B",
        "abundance": "80.1%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico para la reproducción"
    ]
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbono",
    "latinName": "Carbonium",
    "mass": 12.011,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 14,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p²",
    "electronConfigurationSemantic": "[He] 2s² 2p²",
    "electronsPerShell": [
      2,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      -4,
      -2,
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 3823,
    "boilingPoint": 4098,
    "density": 2.267,
    "atomicRadius": 67,
    "covalentRadius": 76,
    "electronegativity": 2.55,
    "ionizationEnergy": 1086.5,
    "electronAffinity": 121.8,
    "spectralLines": [
      247.9,
      193.1
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "La columna vertebral de la química orgánica y de la vida. Sus alótropos abarcan el grafito blando, el diamante superduro y el grafeno bidimensional.",
    "summary": "Elemento tetravalente que origina desde el diamante hasta las moléculas de la vida.",
    "uses": [
      "Base estructural del ADN y proteínas",
      "Materiales avanzados de grafeno y fibra de carbono",
      "Joyería y herramientas industriales de corte",
      "Datación radiométrica con Carbono-14"
    ],
    "isotopes": [
      {
        "mass": 12,
        "name": "¹²C",
        "abundance": "98.93%",
        "stable": true
      },
      {
        "mass": 13,
        "name": "¹³C",
        "abundance": "1.07%",
        "stable": true
      },
      {
        "mass": 14,
        "name": "¹⁴C",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "5,730 años"
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrógeno",
    "latinName": "Nitrogenium",
    "mass": 14.007,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 15,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p³",
    "electronConfigurationSemantic": "[He] 2s² 2p³",
    "electronsPerShell": [
      2,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      -3,
      -2,
      -1,
      1,
      2,
      3,
      4,
      5
    ],
    "phase": "gas",
    "meltingPoint": 63.15,
    "boilingPoint": 77.36,
    "density": 0.0012506,
    "atomicRadius": 56,
    "covalentRadius": 71,
    "electronegativity": 3.04,
    "ionizationEnergy": 1402.3,
    "electronAffinity": -6.8,
    "spectralLines": [
      174.3,
      149.3,
      120
    ],
    "discoveredBy": "Daniel Rutherford",
    "discoveryYear": 1772,
    "description": "Gas diatómico inodoro que conforma el 78% de la atmósfera terrestre. Nutriente insustituible en la síntesis de aminoácidos y proteínas.",
    "summary": "Gas primordial de la atmósfera, base de proteínas y abonos agrícolas.",
    "uses": [
      "Fertilizantes nitrogenados para la producción mundial de alimentos",
      "Criogenia con nitrógeno líquido a -196 °C",
      "Atmósfera protectora en empaquetado de alimentos",
      "Síntesis de nylon y fibras sintéticas"
    ],
    "isotopes": [
      {
        "mass": 14,
        "name": "¹⁴N",
        "abundance": "99.636%",
        "stable": true
      },
      {
        "mass": 15,
        "name": "¹⁵N",
        "abundance": "0.364%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxígeno",
    "latinName": "Oxygenium",
    "mass": 15.999,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 16,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁴",
    "electronConfigurationSemantic": "[He] 2s² 2p⁴",
    "electronsPerShell": [
      2,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      -2,
      -1,
      1,
      2
    ],
    "phase": "gas",
    "meltingPoint": 54.36,
    "boilingPoint": 90.2,
    "density": 0.001429,
    "atomicRadius": 48,
    "covalentRadius": 66,
    "electronegativity": 3.44,
    "ionizationEnergy": 1313.9,
    "electronAffinity": 141,
    "spectralLines": [
      777.4,
      844.6,
      615.8
    ],
    "discoveredBy": "Carl Wilhelm Scheele y Joseph Priestley",
    "discoveryYear": 1774,
    "description": "El elemento más común en la corteza terrestre y el cuerpo humano. Vital para la respiración aeróbica celular y el comburente principal de la combustión.",
    "summary": "Gas comburente vital para la respiración y componente del agua y del ozono.",
    "uses": [
      "Oxigenoterapia médica hospitalaria",
      "Fabricación y refinado de acero industrial",
      "Comburente criogénico para cohetes espaciales",
      "Tratamiento y potabilización de aguas"
    ],
    "isotopes": [
      {
        "mass": 16,
        "name": "¹⁶O",
        "abundance": "99.757%",
        "stable": true
      },
      {
        "mass": 17,
        "name": "¹⁷O",
        "abundance": "0.038%",
        "stable": true
      },
      {
        "mass": 18,
        "name": "¹⁸O",
        "abundance": "0.205%",
        "stable": true
      }
    ],
    "hazard": [
      "Comburente",
      "Gas a presión"
    ]
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Flúor",
    "latinName": "Fluorum",
    "mass": 18.998,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 17,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁵",
    "electronConfigurationSemantic": "[He] 2s² 2p⁵",
    "electronsPerShell": [
      2,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1
    ],
    "phase": "gas",
    "meltingPoint": 53.53,
    "boilingPoint": 85.03,
    "density": 0.001696,
    "atomicRadius": 42,
    "covalentRadius": 57,
    "electronegativity": 3.98,
    "ionizationEnergy": 1681,
    "electronAffinity": 328.2,
    "spectralLines": [
      685.6,
      703.7,
      712.8
    ],
    "discoveredBy": "Henri Moissan",
    "discoveryYear": 1886,
    "description": "El elemento más electronegativo y reactivo químicamente. Reacciona violentamente con casi todos los elementos, incluso a temperaturas bajo cero.",
    "summary": "Gas halógeno amarillo pálido extremadamente oxidante y reactivo.",
    "uses": [
      "Fluoruro en pastas dentales para prevenir la caries",
      "Revestimientos antiadherentes de teflón (PTFE)",
      "Fármacos fluorados de alta biodisponibilidad",
      "Hexafluoruro de azufre dieléctrico para alta tensión"
    ],
    "isotopes": [
      {
        "mass": 19,
        "name": "¹⁹F",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico agudo",
      "Corrosivo",
      "Comburente"
    ]
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neón",
    "latinName": "Neon",
    "mass": 20.18,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 2,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶",
    "electronConfigurationSemantic": "[He] 2s² 2p⁶",
    "electronsPerShell": [
      2,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      0
    ],
    "phase": "gas",
    "meltingPoint": 24.56,
    "boilingPoint": 27.07,
    "density": 0.0008999,
    "atomicRadius": 38,
    "covalentRadius": 58,
    "electronegativity": null,
    "ionizationEnergy": 2080.7,
    "electronAffinity": -116,
    "spectralLines": [
      640.2,
      614.3,
      585.2,
      540
    ],
    "discoveredBy": "William Ramsay y Morris Travers",
    "discoveryYear": 1898,
    "description": "Gas noble incoloro e inerte que emite un distintivo y brillante resplandor rojo-anaranjado cuando se excita eléctricamente.",
    "summary": "Gas noble incoloro famoso por su brillo rojizo en tubos de descarga.",
    "uses": [
      "Rótulos luminosos de iluminación neón",
      "Láseres de Helio-Neón en laboratorios ópticos",
      "Criogenia de alta capacidad frigorífica",
      "Descargadores de sobretensión en electrónica"
    ],
    "isotopes": [
      {
        "mass": 20,
        "name": "²⁰Ne",
        "abundance": "90.48%",
        "stable": true
      },
      {
        "mass": 21,
        "name": "²¹Ne",
        "abundance": "0.27%",
        "stable": true
      },
      {
        "mass": 22,
        "name": "²²Ne",
        "abundance": "9.25%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodio",
    "latinName": "Natrium",
    "mass": 22.99,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 3,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s¹",
    "electronConfigurationSemantic": "[Ne] 3s¹",
    "electronsPerShell": [
      2,
      8,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 370.87,
    "boilingPoint": 1156,
    "density": 0.968,
    "atomicRadius": 190,
    "covalentRadius": 166,
    "electronegativity": 0.93,
    "ionizationEnergy": 495.8,
    "electronAffinity": 52.8,
    "spectralLines": [
      589,
      589.6,
      819.5
    ],
    "discoveredBy": "Humphry Davy",
    "discoveryYear": 1807,
    "description": "Metal alcalino blando y reactivo que se oxida al instante en el aire y arde con llama amarilla brillante. Electrolito indispensable en la fisiología de los impulsos nerviosos.",
    "summary": "Metal blando que reacciona con agua y forma la sal de mesa común.",
    "uses": [
      "Sal común (NaCl) y bicarbonato de sodio",
      "Lámparas de vapor de sodio para alumbrado público",
      "Líquido refrigerante en reactores nucleares rápidos",
      "Síntesis de jabones e hidróxido de sodio"
    ],
    "isotopes": [
      {
        "mass": 23,
        "name": "²³Na",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Corrosivo",
      "Reactivo con agua"
    ]
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesio",
    "latinName": "Magnesium",
    "mass": 24.305,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 3,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s²",
    "electronConfigurationSemantic": "[Ne] 3s²",
    "electronsPerShell": [
      2,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 923,
    "boilingPoint": 1363,
    "density": 1.738,
    "atomicRadius": 145,
    "covalentRadius": 141,
    "electronegativity": 1.31,
    "ionizationEnergy": 737.7,
    "electronAffinity": -40,
    "spectralLines": [
      518.4,
      517.3,
      516.7,
      383.8
    ],
    "discoveredBy": "Joseph Black / Humphry Davy",
    "discoveryYear": 1808,
    "description": "Metal ligero y resistente de tono gris plateado. Es el átomo central de la molécula de clorofila, haciendo posible la fotosíntesis vegetal en la biosfera.",
    "summary": "Metal ultraligero que arde con intensa luz blanca y es centro de la clorofila.",
    "uses": [
      "Aleaciones ligeras de aluminio-magnesio en aeronáutica y automoción",
      "Bengalas y fuegos artificiales de luz blanca",
      "Suplementos dietéticos y sales de Epsom",
      "Reactivos de Grignard en síntesis orgánica"
    ],
    "isotopes": [
      {
        "mass": 24,
        "name": "²⁴Mg",
        "abundance": "78.99%",
        "stable": true
      },
      {
        "mass": 25,
        "name": "²⁵Mg",
        "abundance": "10.00%",
        "stable": true
      },
      {
        "mass": 26,
        "name": "²⁶Mg",
        "abundance": "11.01%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo o cinta)"
    ]
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminio",
    "latinName": "Aluminium",
    "mass": 26.982,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 13,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p¹",
    "electronConfigurationSemantic": "[Ne] 3s² 3p¹",
    "electronsPerShell": [
      2,
      8,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 933.47,
    "boilingPoint": 2792,
    "density": 2.7,
    "atomicRadius": 118,
    "covalentRadius": 121,
    "electronegativity": 1.61,
    "ionizationEnergy": 577.5,
    "electronAffinity": 42.5,
    "spectralLines": [
      396.2,
      394.4,
      308.2
    ],
    "discoveredBy": "Hans Christian Ørsted",
    "discoveryYear": 1825,
    "description": "El metal más abundante en la corteza terrestre (8.1%). Destaca por su baja densidad, alta resistencia a la corrosión mediante pasivación y excelente conductividad térmica y eléctrica.",
    "summary": "Metal ligero, no corrosivo y 100% reciclable ampliamente usado en la industria.",
    "uses": [
      "Estructuras de aeronaves, trenes y carrocerías de vehículos",
      "Laminados de envasado alimentario y latas reciclables",
      "Conductores eléctricos en redes de alta tensión",
      "Marcos de construcción civil y perfiles de ventanas"
    ],
    "isotopes": [
      {
        "mass": 27,
        "name": "²⁷Al",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso (forma masiva)"
    ]
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicio",
    "latinName": "Silicium",
    "mass": 28.085,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 14,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p²",
    "electronConfigurationSemantic": "[Ne] 3s² 3p²",
    "electronsPerShell": [
      2,
      8,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      -4,
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1687,
    "boilingPoint": 3538,
    "density": 2.329,
    "atomicRadius": 111,
    "covalentRadius": 111,
    "electronegativity": 1.9,
    "ionizationEnergy": 786.5,
    "electronAffinity": 134.1,
    "spectralLines": [
      288.2,
      251.6,
      252.4
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "discoveryYear": 1824,
    "description": "Segundo elemento más abundante en la corteza terrestre después del oxígeno. Base fundamental de la microelectrónica moderna, la informática e internet.",
    "summary": "Semiconductor clave para la fabricación de microprocesadores y paneles solares.",
    "uses": [
      "Microchips y circuitos integrados para ordenadores y teléfonos",
      "Celdas fotovoltaicas de paneles solares",
      "Siliconas para sellado, prótesis y cosmética",
      "Vidrio común y cerámicas de construcción (sílice)"
    ],
    "isotopes": [
      {
        "mass": 28,
        "name": "²⁸Si",
        "abundance": "92.23%",
        "stable": true
      },
      {
        "mass": 29,
        "name": "²⁹Si",
        "abundance": "4.67%",
        "stable": true
      },
      {
        "mass": 30,
        "name": "³⁰Si",
        "abundance": "3.10%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso (forma cristalina)"
    ]
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Fósforo",
    "latinName": "Phosphorus",
    "mass": 30.974,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 15,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p³",
    "electronConfigurationSemantic": "[Ne] 3s² 3p³",
    "electronsPerShell": [
      2,
      8,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 317.3,
    "boilingPoint": 553.6,
    "density": 1.823,
    "atomicRadius": 98,
    "covalentRadius": 107,
    "electronegativity": 2.19,
    "ionizationEnergy": 1011.8,
    "electronAffinity": 72,
    "spectralLines": [
      253.6,
      214.9,
      213.6
    ],
    "discoveredBy": "Hennig Brand",
    "discoveryYear": 1669,
    "description": "No metal biológicamente esencial que compone la columna de soporte del ADN y ARN, el esqueleto óseo (fosfato de calcio) y la moneda energética celular ATP.",
    "summary": "No metal reactivo vital para la bioenergética celular (ATP) y los huesos.",
    "uses": [
      "Fertilizantes agrícolas fosfatados (NPK)",
      "Cabezas de cerillas de seguridad y fósforos",
      "Detergentes y aditivos alimentarios",
      "Aleaciones de bronce fosforoso resistentes al desgaste"
    ],
    "isotopes": [
      {
        "mass": 31,
        "name": "³¹P",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Tóxico (fósforo blanco)"
    ]
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Azufre",
    "latinName": "Sulfur",
    "mass": 32.06,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 16,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁴",
    "electronConfigurationSemantic": "[Ne] 3s² 3p⁴",
    "electronsPerShell": [
      2,
      8,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "phase": "solid",
    "meltingPoint": 388.36,
    "boilingPoint": 717.8,
    "density": 2.07,
    "atomicRadius": 88,
    "covalentRadius": 105,
    "electronegativity": 2.58,
    "ionizationEnergy": 999.6,
    "electronAffinity": 200.4,
    "spectralLines": [
      469.5,
      469.6,
      182.6
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "Sólido cristalino amarillo brillante que compone aminoácidos esenciales como la cisteína y metionina (puentes disulfuro en proteínas). El ácido sulfúrico es uno de los compuestos químicos industriales más producidos del mundo.",
    "summary": "Sólido amarillo aromático básico para el ácido sulfúrico y la vulcanización.",
    "uses": [
      "Fabricación de ácido sulfúrico industrial (H₂SO₄)",
      "Vulcanización del caucho para neumáticos",
      "Fungicidas y pesticidas agrícolas",
      "Pólvora negra y productos farmacéuticos"
    ],
    "isotopes": [
      {
        "mass": 32,
        "name": "³²S",
        "abundance": "94.99%",
        "stable": true
      },
      {
        "mass": 33,
        "name": "³³S",
        "abundance": "0.75%",
        "stable": true
      },
      {
        "mass": 34,
        "name": "³⁴S",
        "abundance": "4.25%",
        "stable": true
      },
      {
        "mass": 36,
        "name": "³⁶S",
        "abundance": "0.01%",
        "stable": true
      }
    ],
    "hazard": [
      "Irritante"
    ]
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Cloro",
    "latinName": "Chlorum",
    "mass": 35.45,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 17,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁵",
    "electronConfigurationSemantic": "[Ne] 3s² 3p⁵",
    "electronsPerShell": [
      2,
      8,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1,
      1,
      3,
      5,
      7
    ],
    "phase": "gas",
    "meltingPoint": 171.6,
    "boilingPoint": 239.11,
    "density": 0.0032,
    "atomicRadius": 79,
    "covalentRadius": 102,
    "electronegativity": 3.16,
    "ionizationEnergy": 1251.2,
    "electronAffinity": 349,
    "spectralLines": [
      452.6,
      460.1,
      725.7
    ],
    "discoveredBy": "Carl Wilhelm Scheele",
    "discoveryYear": 1774,
    "description": "Gas halógeno amarillo verdoso muy oxidante y reactivo. Esencial para la potabilización del agua potable y la síntesis de plásticos de policloruro de vinilo (PVC).",
    "summary": "Gas halógeno verdoso desinfectante indispensable para el agua potable y plásticos.",
    "uses": [
      "Desinfección y potabilización del agua pública",
      "Producción de plásticos PVC para tuberías y construcción",
      "Blanqueadores y productos de limpieza doméstica",
      "Síntesis de disolventes y fármacos"
    ],
    "isotopes": [
      {
        "mass": 35,
        "name": "³⁵Cl",
        "abundance": "75.76%",
        "stable": true
      },
      {
        "mass": 37,
        "name": "³⁷Cl",
        "abundance": "24.24%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico por inhalación",
      "Corrosivo",
      "Comburente"
    ]
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argón",
    "latinName": "Argon",
    "mass": 39.948,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 3,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶",
    "electronConfigurationSemantic": "[Ne] 3s² 3p⁶",
    "electronsPerShell": [
      2,
      8,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      0
    ],
    "phase": "gas",
    "meltingPoint": 83.81,
    "boilingPoint": 87.3,
    "density": 0.001784,
    "atomicRadius": 71,
    "covalentRadius": 106,
    "electronegativity": null,
    "ionizationEnergy": 1520.6,
    "electronAffinity": -96,
    "spectralLines": [
      696.5,
      750.4,
      763.5,
      811.5
    ],
    "discoveredBy": "Lord Rayleigh y William Ramsay",
    "discoveryYear": 1894,
    "description": "El gas noble más abundante en la atmósfera terrestre (0.934%). Químicamente inerte, se utiliza profusamente como escudo protector en soldadura de metales reactivos.",
    "summary": "Gas inerte abundante en el aire utilizado como atmósfera protectora.",
    "uses": [
      "Gas de protección en soldadura por arco TIG y MIG",
      "Aislamiento térmico en ventanas de doble acristalamiento",
      "Relleno de bombillas incandescentes para evitar oxidación del filamento",
      "Preservación de documentos históricos y vinos"
    ],
    "isotopes": [
      {
        "mass": 36,
        "name": "³⁶Ar",
        "abundance": "0.334%",
        "stable": true
      },
      {
        "mass": 38,
        "name": "³⁸Ar",
        "abundance": "0.063%",
        "stable": true
      },
      {
        "mass": 40,
        "name": "⁴⁰Ar",
        "abundance": "99.604%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potasio",
    "latinName": "Kalium",
    "mass": 39.098,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 4,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    "electronConfigurationSemantic": "[Ar] 4s¹",
    "electronsPerShell": [
      2,
      8,
      8,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 336.7,
    "boilingPoint": 1032,
    "density": 0.862,
    "atomicRadius": 243,
    "covalentRadius": 203,
    "electronegativity": 0.82,
    "ionizationEnergy": 418.8,
    "electronAffinity": 48.4,
    "spectralLines": [
      766.5,
      769.9,
      404.4
    ],
    "discoveredBy": "Humphry Davy",
    "discoveryYear": 1807,
    "description": "Metal alcalino blanco plateado tan blando que puede cortarse con un cuchillo. Es el catión intracelular principal en los organismos vivos, regulando el potencial de membrana celular.",
    "summary": "Metal alcalino blando y reactivo fundamental para el sistema nervioso y muscular.",
    "uses": [
      "Fertilizantes potásicos para cultivos agrícolas (potasa)",
      "Regulación del ritmo cardíaco y contracción muscular en medicina",
      "Jabones líquidos de potasio",
      "Generadores de oxígeno químico (superóxido de potasio)"
    ],
    "isotopes": [
      {
        "mass": 39,
        "name": "³⁹K",
        "abundance": "93.26%",
        "stable": true
      },
      {
        "mass": 40,
        "name": "⁴⁰K",
        "abundance": "0.0117%",
        "stable": false,
        "halfLife": "1.25 × 10⁹ años"
      },
      {
        "mass": 41,
        "name": "⁴¹K",
        "abundance": "6.73%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Corrosivo",
      "Reactivo con agua"
    ]
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcio",
    "latinName": "Calcium",
    "mass": 40.078,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 4,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    "electronConfigurationSemantic": "[Ar] 4s²",
    "electronsPerShell": [
      2,
      8,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 1115,
    "boilingPoint": 1757,
    "density": 1.55,
    "atomicRadius": 194,
    "covalentRadius": 176,
    "electronegativity": 1,
    "ionizationEnergy": 589.8,
    "electronAffinity": 2.37,
    "spectralLines": [
      422.7,
      393.4,
      396.8
    ],
    "discoveredBy": "Humphry Davy",
    "discoveryYear": 1808,
    "description": "El metal más abundante en el cuerpo humano y el quinto en la corteza terrestre. Forma la hidroxiapatita de huesos y dientes y el carbonato de calcio de las rocas calizas.",
    "summary": "Metal esencial para la estructura esquelética ósea, dientes y el cemento civil.",
    "uses": [
      "Cemento Portland y morteros de construcción (cal)",
      "Suplementos de fortalecimiento óseo y antiácidos",
      "Agente reductor en la metalurgia de metales raros",
      "Quesos y procesamiento de alimentos lácteos"
    ],
    "isotopes": [
      {
        "mass": 40,
        "name": "⁴⁰Ca",
        "abundance": "96.94%",
        "stable": true
      },
      {
        "mass": 42,
        "name": "⁴²Ca",
        "abundance": "0.647%",
        "stable": true
      },
      {
        "mass": 44,
        "name": "⁴⁴Ca",
        "abundance": "2.086%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Reactivo con agua"
    ]
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Escandio",
    "latinName": "Scandium",
    "mass": 44.956,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 3,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d¹ 4s²",
    "electronsPerShell": [
      2,
      8,
      9,
      2
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1814,
    "boilingPoint": 3109,
    "density": 2.985,
    "atomicRadius": 184,
    "covalentRadius": 170,
    "electronegativity": 1.36,
    "ionizationEnergy": 633.1,
    "electronAffinity": 18,
    "spectralLines": [
      361.4,
      391.2,
      402.4
    ],
    "discoveredBy": "Lars Fredrik Nilson",
    "discoveryYear": 1879,
    "description": "Metal de transición blanco plateado ligero. Sus aleaciones con aluminio ofrecen una excepcional resistencia mecánica y facilidad de soldadura para cuadros aeroespaciales.",
    "summary": "Metal ligero de transición que refuerza dramáticamente el aluminio.",
    "uses": [
      "Aleaciones de aluminio-escandio en aviones de combate y bicicletas de élite",
      "Lámparas de halogenuros metálicos para estadios deportivos",
      "Celdas de combustible de óxido sólido (SOFC)",
      "Trazador radiactivo en refinerías de petróleo"
    ],
    "isotopes": [
      {
        "mass": 45,
        "name": "⁴⁵Sc",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)"
    ]
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanio",
    "latinName": "Titanium",
    "mass": 47.867,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 4,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²",
    "electronConfigurationSemantic": "[Ar] 3d² 4s²",
    "electronsPerShell": [
      2,
      8,
      10,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      2,
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1941,
    "boilingPoint": 3560,
    "density": 4.506,
    "atomicRadius": 176,
    "covalentRadius": 160,
    "electronegativity": 1.54,
    "ionizationEnergy": 658.8,
    "electronAffinity": 7.6,
    "spectralLines": [
      365.4,
      399.9,
      498.2
    ],
    "discoveredBy": "William Gregor",
    "discoveryYear": 1791,
    "description": "Metal lustroso con la relación resistencia-peso más alta de todos los metales comunes. Es completamente biocompatible y resistente a la corrosión por agua de mar y cloro.",
    "summary": "Metal superresistente, ultraligero y biocompatible para medicina y aeronáutica.",
    "uses": [
      "Implantes médicos ortopédicos, prótesis dentales y marcapasos",
      "Fuselajes de aviones comerciales y turbinas a reacción",
      "Pigmento blanco de dióxido de titanio (TiO₂) en pinturas y protectores solares",
      "Cascos de submarinos militares de inmersión profunda"
    ],
    "isotopes": [
      {
        "mass": 46,
        "name": "⁴⁶Ti",
        "abundance": "8.25%",
        "stable": true
      },
      {
        "mass": 47,
        "name": "⁴⁷Ti",
        "abundance": "7.44%",
        "stable": true
      },
      {
        "mass": 48,
        "name": "⁴⁸Ti",
        "abundance": "73.72%",
        "stable": true
      },
      {
        "mass": 49,
        "name": "⁴⁹Ti",
        "abundance": "5.41%",
        "stable": true
      },
      {
        "mass": 50,
        "name": "⁵⁰Ti",
        "abundance": "5.18%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadio",
    "latinName": "Vanadium",
    "mass": 50.942,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 5,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d³ 4s²",
    "electronsPerShell": [
      2,
      8,
      11,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      2,
      3,
      4,
      5
    ],
    "phase": "solid",
    "meltingPoint": 2183,
    "boilingPoint": 3680,
    "density": 6.11,
    "atomicRadius": 171,
    "covalentRadius": 153,
    "electronegativity": 1.63,
    "ionizationEnergy": 650.9,
    "electronAffinity": 50.6,
    "spectralLines": [
      437.9,
      318.4,
      310.2
    ],
    "discoveredBy": "Andrés Manuel del Río",
    "discoveryYear": 1801,
    "description": "Metal de transición dúctil descubierto originalmente en México. Aporta una tremenda resistencia al choque y al desgaste cuando se alea con el acero.",
    "summary": "Metal endurecedor del acero y base de baterías redox de flujo.",
    "uses": [
      "Aceros especiales de herramientas, resortes y llaves mecánicas (cromo-vanadio)",
      "Baterías de flujo redox de vanadio para almacenamiento renovable a gran escala",
      "Catalizador de pentóxido de vanadio en la producción de ácido sulfúrico",
      "Aleaciones de titanio para motores a reacción"
    ],
    "isotopes": [
      {
        "mass": 50,
        "name": "⁵⁰V",
        "abundance": "0.25%",
        "stable": false,
        "halfLife": "1.4 × 10¹⁷ años"
      },
      {
        "mass": 51,
        "name": "⁵¹V",
        "abundance": "99.75%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico (compuestos de vanadio)"
    ]
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Cromo",
    "latinName": "Chromium",
    "mass": 51.996,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 6,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
    "electronConfigurationSemantic": "[Ar] 3d⁵ 4s¹",
    "electronsPerShell": [
      2,
      8,
      13,
      1
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      3,
      6
    ],
    "phase": "solid",
    "meltingPoint": 2180,
    "boilingPoint": 2944,
    "density": 7.15,
    "atomicRadius": 166,
    "covalentRadius": 139,
    "electronegativity": 1.66,
    "ionizationEnergy": 652.9,
    "electronAffinity": 64.3,
    "spectralLines": [
      425.4,
      427.5,
      428.9,
      520.8
    ],
    "discoveredBy": "Louis-Nicolas Vauquelin",
    "discoveryYear": 1797,
    "description": "Metal duro y brillante famoso por su alta resistencia al deslustre. Es el elemento que convierte el hierro común en acero inoxidable al formar una capa pasiva protectora.",
    "summary": "Metal brillante anticorrosión que confiere propiedades al acero inoxidable.",
    "uses": [
      "Acero inoxidable resistente a la corrosión (mínimo 10.5% Cr)",
      "Cromado protector y decorativo de piezas mecánicas",
      "Pigmentos amarillos y verdes para cerámica y vidrio",
      "Curtido mineral de pieles y cueros"
    ],
    "isotopes": [
      {
        "mass": 50,
        "name": "⁵⁰Cr",
        "abundance": "4.345%",
        "stable": true
      },
      {
        "mass": 52,
        "name": "⁵²Cr",
        "abundance": "83.789%",
        "stable": true
      },
      {
        "mass": 53,
        "name": "⁵³Cr",
        "abundance": "9.501%",
        "stable": true
      },
      {
        "mass": 54,
        "name": "⁵⁴Cr",
        "abundance": "2.365%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico y carcinógeno (Cromo hexavalente Cr-VI)"
    ]
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganeso",
    "latinName": "Manganum",
    "mass": 54.938,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 7,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d⁵ 4s²",
    "electronsPerShell": [
      2,
      8,
      13,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      2,
      3,
      4,
      6,
      7
    ],
    "phase": "solid",
    "meltingPoint": 1519,
    "boilingPoint": 2334,
    "density": 7.44,
    "atomicRadius": 161,
    "covalentRadius": 139,
    "electronegativity": 1.55,
    "ionizationEnergy": 717.3,
    "electronAffinity": -50,
    "spectralLines": [
      403.1,
      403.3,
      403.4,
      279.5
    ],
    "discoveredBy": "Carl Wilhelm Scheele y Johan Gottlieb Gahn",
    "discoveryYear": 1774,
    "description": "Metal de transición esencial en la metalurgia del hierro para desoxidar y desulfurar el acero fundido. Es cofactor de enzimas antioxidantes como la superóxido dismutasa.",
    "summary": "Metal indispensable para la dureza del acero y las pilas alcalinas.",
    "uses": [
      "Desoxidación y desulfuración en siderurgia (ferromanganeso)",
      "Cátodos de dióxido de manganeso en pilas alcalinas comunes",
      "Aleaciones de latas de aluminio para aumentar la rigidez",
      "Permanganato de potasio como potente desinfectante y reactivo redox"
    ],
    "isotopes": [
      {
        "mass": 55,
        "name": "⁵⁵Mn",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Irritante",
      "Tóxico crónico por inhalación"
    ]
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Hierro",
    "latinName": "Ferrum",
    "mass": 55.845,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 8,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d⁶ 4s²",
    "electronsPerShell": [
      2,
      8,
      14,
      2
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      2,
      3,
      6
    ],
    "phase": "solid",
    "meltingPoint": 1811,
    "boilingPoint": 3134,
    "density": 7.874,
    "atomicRadius": 156,
    "covalentRadius": 132,
    "electronegativity": 1.83,
    "ionizationEnergy": 762.5,
    "electronAffinity": 15.7,
    "spectralLines": [
      371.9,
      404.6,
      438.3,
      440.5
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "El metal más utilizado por la humanidad (95% de la producción mundial de metales). Forma el núcleo terrestre y transporta el oxígeno en la hemoglobina de la sangre.",
    "summary": "El metal estructural por excelencia y núcleo del transporte de oxígeno en sangre.",
    "uses": [
      "Construcción civil de vigas, hormigón armado y puentes (acero)",
      "Estructuras de barcos, ferrocarriles y maquinaria pesada",
      "Hemoglobina transportadora de oxígeno en glóbulos rojos",
      "Electroimanes, generadores eléctricos y transformadores"
    ],
    "isotopes": [
      {
        "mass": 54,
        "name": "⁵⁴Fe",
        "abundance": "5.85%",
        "stable": true
      },
      {
        "mass": 56,
        "name": "⁵⁶Fe",
        "abundance": "91.75%",
        "stable": true
      },
      {
        "mass": 57,
        "name": "⁵⁷Fe",
        "abundance": "2.12%",
        "stable": true
      },
      {
        "mass": 58,
        "name": "⁵⁸Fe",
        "abundance": "0.28%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso (metal sólido)"
    ]
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalto",
    "latinName": "Cobaltum",
    "mass": 58.933,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 9,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d⁷ 4s²",
    "electronsPerShell": [
      2,
      8,
      15,
      2
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1768,
    "boilingPoint": 3200,
    "density": 8.9,
    "atomicRadius": 152,
    "covalentRadius": 126,
    "electronegativity": 1.88,
    "ionizationEnergy": 760.4,
    "electronAffinity": 63.7,
    "spectralLines": [
      345.3,
      350.2,
      387.3
    ],
    "discoveredBy": "Georg Brandt",
    "discoveryYear": 1735,
    "description": "Metal ferromagnético de gran dureza y brillo plateado azulado. Átomo central de la vitamina B12 (cobalamina) y componente clave de los cátodos de baterías de iones de litio.",
    "summary": "Metal magnético clave para baterías de alta densidad y vitamina B12.",
    "uses": [
      "Cátodos NMC en baterías de vehículos eléctricos",
      "Superaleaciones resistentes al calor en turbinas de aviones",
      "Imanes permanentes de Alnico y Samario-Cobalto",
      "Pigmento azul cobalto en cerámica y vidrieras históricas"
    ],
    "isotopes": [
      {
        "mass": 59,
        "name": "⁵⁹Co",
        "abundance": "100%",
        "stable": true
      },
      {
        "mass": 60,
        "name": "⁶⁰Co",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "5.27 años (radioterapia)"
      }
    ],
    "hazard": [
      "Sensibilizante",
      "Peligro para la salud"
    ]
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Níquel",
    "latinName": "Niccolum",
    "mass": 58.693,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 10,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d⁸ 4s²",
    "electronsPerShell": [
      2,
      8,
      16,
      2
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1728,
    "boilingPoint": 3186,
    "density": 8.908,
    "atomicRadius": 149,
    "covalentRadius": 124,
    "electronegativity": 1.91,
    "ionizationEnergy": 737.1,
    "electronAffinity": 112,
    "spectralLines": [
      341.5,
      352.5,
      361.9
    ],
    "discoveredBy": "Axel Fredrik Cronstedt",
    "discoveryYear": 1751,
    "description": "Metal de transición ferromagnético, resistente a la corrosión y dúctil. Fundamental en acuñación de monedas, acero inoxidable y baterías avanzadas de almacenamiento.",
    "summary": "Metal brillante resistente a la oxidación usado en monedas y baterías.",
    "uses": [
      "Componente clave del acero inoxidable austenítico (serie 300)",
      "Baterías recargables de níquel-cadmio y iones de litio",
      "Monedas de circulación y niquelado galvánico anticorrosivo",
      "Cuerdas de guitarra eléctrica y superaleaciones de turbinas"
    ],
    "isotopes": [
      {
        "mass": 58,
        "name": "⁵⁸Ni",
        "abundance": "68.077%",
        "stable": true
      },
      {
        "mass": 60,
        "name": "⁶⁰Ni",
        "abundance": "26.223%",
        "stable": true
      },
      {
        "mass": 61,
        "name": "⁶¹Ni",
        "abundance": "1.140%",
        "stable": true
      },
      {
        "mass": 62,
        "name": "⁶²Ni",
        "abundance": "3.634%",
        "stable": true
      },
      {
        "mass": 64,
        "name": "⁶⁴Ni",
        "abundance": "0.926%",
        "stable": true
      }
    ],
    "hazard": [
      "Sensibilizante cutáneo",
      "Carcinógeno"
    ]
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Cobre",
    "latinName": "Cuprum",
    "mass": 63.546,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 11,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      1
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      1,
      2
    ],
    "phase": "solid",
    "meltingPoint": 1357.77,
    "boilingPoint": 2835,
    "density": 8.96,
    "atomicRadius": 145,
    "covalentRadius": 132,
    "electronegativity": 1.9,
    "ionizationEnergy": 745.5,
    "electronAffinity": 118.4,
    "spectralLines": [
      324.7,
      327.4,
      510.5,
      521.8
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "Uno de los pocos metales de coloración natural no grisácea. Destaca por su extraordinaria conductividad eléctrica y térmica y sus propiedades antimicrobianas naturales.",
    "summary": "Conductor eléctrico por excelencia y base del bronce y el latón.",
    "uses": [
      "Cables de tendido eléctrico y bobinados de motores eléctricos",
      "Tuberías de agua potable y climatización",
      "Aleaciones de bronce (cobre-estaño) y latón (cobre-zinc)",
      "Superficies de contacto antimicrobianas en hospitales"
    ],
    "isotopes": [
      {
        "mass": 63,
        "name": "⁶³Cu",
        "abundance": "69.15%",
        "stable": true
      },
      {
        "mass": 65,
        "name": "⁶⁵Cu",
        "abundance": "30.85%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico para organismos acuáticos"
    ]
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "latinName": "Zincum",
    "mass": 65.38,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 12,
    "period": 4,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s²",
    "electronsPerShell": [
      2,
      8,
      18,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 692.68,
    "boilingPoint": 1180,
    "density": 7.14,
    "atomicRadius": 142,
    "covalentRadius": 122,
    "electronegativity": 1.65,
    "ionizationEnergy": 906.4,
    "electronAffinity": -58,
    "spectralLines": [
      468,
      472.2,
      481,
      213.8
    ],
    "discoveredBy": "Conocido en India / Andreas Sigismund Marggraf",
    "discoveryYear": 1746,
    "description": "Metal blanco azulado utilizado predominantemente para galvanizar el acero y protegerlo de la oxidación. Oligoelemento biológico indispensable para el sistema inmunitario.",
    "summary": "Metal protector contra la herrumbre (galvanizado) y nutriente inmunológico.",
    "uses": [
      "Galvanizado de láminas de acero y piezas exteriores",
      "Fabricación de latón junto con el cobre",
      "Óxido de zinc en cremas solares y pomadas protectoras",
      "Suplementos de apoyo inmune y síntesis proteica"
    ],
    "isotopes": [
      {
        "mass": 64,
        "name": "⁶⁴Zn",
        "abundance": "49.17%",
        "stable": true
      },
      {
        "mass": 66,
        "name": "⁶⁶Zn",
        "abundance": "27.73%",
        "stable": true
      },
      {
        "mass": 67,
        "name": "⁶⁷Zn",
        "abundance": "4.04%",
        "stable": true
      },
      {
        "mass": 68,
        "name": "⁶⁸Zn",
        "abundance": "18.45%",
        "stable": true
      },
      {
        "mass": 70,
        "name": "⁷⁰Zn",
        "abundance": "0.61%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)",
      "Tóxico para vida acuática"
    ]
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Galio",
    "latinName": "Gallium",
    "mass": 69.723,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 13,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 302.91,
    "boilingPoint": 2477,
    "density": 5.91,
    "atomicRadius": 136,
    "covalentRadius": 122,
    "electronegativity": 1.81,
    "ionizationEnergy": 578.8,
    "electronAffinity": 28.9,
    "spectralLines": [
      403.3,
      417.2
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": 1875,
    "description": "Metal blando que se funde en la palma de la mano (29.76 °C). El arseniuro y nitruro de galio son semiconductores clave en optoelectrónica, LEDs azules y telecomunicaciones 5G.",
    "summary": "Metal que se derrite en la mano y es fundamental en semiconductores y LEDs.",
    "uses": [
      "Semiconductores de arseniuro de galio (GaAs) en telecomunicaciones",
      "Diodos emisores de luz (LED) y lásers de diodo",
      "Aleaciones eutécticas líquidas Galinstano (termómetros no tóxicos)",
      "Células solares de alta eficiencia para satélites espaciales"
    ],
    "isotopes": [
      {
        "mass": 69,
        "name": "⁶⁹Ga",
        "abundance": "60.11%",
        "stable": true
      },
      {
        "mass": 71,
        "name": "⁷¹Ga",
        "abundance": "39.89%",
        "stable": true
      }
    ],
    "hazard": [
      "Corrosivo para el aluminio"
    ]
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanio",
    "latinName": "Germanium",
    "mass": 72.63,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 14,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p²",
    "electronsPerShell": [
      2,
      8,
      18,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1211.4,
    "boilingPoint": 3106,
    "density": 5.323,
    "atomicRadius": 125,
    "covalentRadius": 120,
    "electronegativity": 2.01,
    "ionizationEnergy": 762,
    "electronAffinity": 119,
    "spectralLines": [
      265.1,
      303.9
    ],
    "discoveredBy": "Clemens Winkler",
    "discoveryYear": 1886,
    "description": "Metaloide brillante predicho por Mendeléyev como 'eka-silicio'. Es transparente a la luz infrarroja y fue la base del primer transistor de la historia.",
    "summary": "Metaloide semiconductor transparente al infrarrojo utilizado en visión nocturna.",
    "uses": [
      "Ópticas y lentes de visión nocturna por infrarrojos",
      "Núcleos de fibra óptica de alta velocidad",
      "Catalizador para la polimerización de plásticos PET",
      "Células solares espaciales multijuntura"
    ],
    "isotopes": [
      {
        "mass": 70,
        "name": "⁷⁰Ge",
        "abundance": "20.38%",
        "stable": true
      },
      {
        "mass": 72,
        "name": "⁷²Ge",
        "abundance": "27.31%",
        "stable": true
      },
      {
        "mass": 73,
        "name": "⁷³Ge",
        "abundance": "7.76%",
        "stable": true
      },
      {
        "mass": 74,
        "name": "⁷⁴Ge",
        "abundance": "36.72%",
        "stable": true
      },
      {
        "mass": 76,
        "name": "⁷⁶Ge",
        "abundance": "7.83%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsénico",
    "latinName": "Arsenicum",
    "mass": 74.922,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 15,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p³",
    "electronsPerShell": [
      2,
      8,
      18,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 1090,
    "boilingPoint": 887,
    "density": 5.727,
    "atomicRadius": 114,
    "covalentRadius": 119,
    "electronegativity": 2.18,
    "ionizationEnergy": 947,
    "electronAffinity": 78.2,
    "spectralLines": [
      228.8,
      234.9
    ],
    "discoveredBy": "Alberto Magno",
    "discoveryYear": 1250,
    "description": "Metaloide gris acero tristemente célebre en la historia por su alta toxicidad. En microelectrónica es un dopante semiconductor de tipo n fundamental.",
    "summary": "Metaloide tóxico histórico utilizado como dopante en microelectrónica.",
    "uses": [
      "Dopante tipo n en microcircuitos integrados de silicio",
      "Semiconductores de arseniuro de galio (GaAs)",
      "Tratamiento de la leucemia promielocítica aguda (trióxido de arsénico)",
      "Aleaciones de plomo para perdigones y rejillas de baterías"
    ],
    "isotopes": [
      {
        "mass": 75,
        "name": "⁷⁵As",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico agudo",
      "Carcinógeno",
      "Peligro ambiental"
    ]
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenio",
    "latinName": "Selenium",
    "mass": 78.971,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 16,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "phase": "solid",
    "meltingPoint": 494,
    "boilingPoint": 958,
    "density": 4.81,
    "atomicRadius": 103,
    "covalentRadius": 120,
    "electronegativity": 2.55,
    "ionizationEnergy": 941,
    "electronAffinity": 195,
    "spectralLines": [
      196,
      203.9
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "discoveryYear": 1817,
    "description": "No metal fotoconductor cuya resistencia eléctrica disminuye drásticamente al recibir luz. Es un oligoelemento antioxidante esencial presente en la selenocisteína.",
    "summary": "No metal fotoconductor y micronutriente antioxidante celular.",
    "uses": [
      "Células fotoconductoras y fotorreceptores de fotocopiadoras xerográficas",
      "Suplementos dietéticos antioxidantes (glutatión peroxidasa)",
      "Decoloración y tintado rojo del vidrio",
      "Células solares CIGS de capa delgada"
    ],
    "isotopes": [
      {
        "mass": 74,
        "name": "⁷⁴Se",
        "abundance": "0.89%",
        "stable": true
      },
      {
        "mass": 76,
        "name": "⁷⁶Se",
        "abundance": "9.37%",
        "stable": true
      },
      {
        "mass": 77,
        "name": "⁷⁷Se",
        "abundance": "7.63%",
        "stable": true
      },
      {
        "mass": 78,
        "name": "⁷⁸Se",
        "abundance": "23.77%",
        "stable": true
      },
      {
        "mass": 80,
        "name": "⁸⁰Se",
        "abundance": "49.61%",
        "stable": true
      },
      {
        "mass": 82,
        "name": "⁸²Se",
        "abundance": "8.73%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico por inhalación e ingestión"
    ]
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromo",
    "latinName": "Bromum",
    "mass": 79.904,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 17,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1,
      1,
      3,
      5
    ],
    "phase": "liquid",
    "meltingPoint": 265.8,
    "boilingPoint": 332,
    "density": 3.1028,
    "atomicRadius": 94,
    "covalentRadius": 120,
    "electronegativity": 2.96,
    "ionizationEnergy": 1139.9,
    "electronAffinity": 324.6,
    "spectralLines": [
      470.5,
      478.6,
      521.8
    ],
    "discoveredBy": "Antoine Jérôme Balard y Carl Löwig",
    "discoveryYear": 1826,
    "description": "El único no metal líquido a temperatura ambiente. Es un líquido pardo rojizo denso que se evapora con rapidez emitiendo un vapor sofocante e irritante.",
    "summary": "Líquido rojo oscuro volátil y denso, único no metal líquido a 20 °C.",
    "uses": [
      "Retardantes de llama bromados en plásticos y textiles electrónicos",
      "Fármacos sedantes y anestésicos",
      "Tratamiento y purificación de aguas de spas",
      "Emulsiones fotográficas clásicas de bromuro de plata"
    ],
    "isotopes": [
      {
        "mass": 79,
        "name": "⁷⁹Br",
        "abundance": "50.69%",
        "stable": true
      },
      {
        "mass": 81,
        "name": "⁸¹Br",
        "abundance": "49.31%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico muy severo",
      "Corrosivo",
      "Peligro ambiental"
    ]
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Kriptón",
    "latinName": "Krypton",
    "mass": 83.798,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 4,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
    "electronConfigurationSemantic": "[Ar] 3d¹⁰ 4s² 4p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      2
    ],
    "phase": "gas",
    "meltingPoint": 115.79,
    "boilingPoint": 119.93,
    "density": 0.003749,
    "atomicRadius": 88,
    "covalentRadius": 116,
    "electronegativity": 3,
    "ionizationEnergy": 1350.8,
    "electronAffinity": -96,
    "spectralLines": [
      557,
      587.1,
      760.1,
      810.4
    ],
    "discoveredBy": "William Ramsay y Morris Travers",
    "discoveryYear": 1898,
    "description": "Gas noble incoloro caracterizado por sus brillantes líneas espectrales verdes y anaranjadas. Se utilizó históricamente (1960-1983) para definir el metro patrón internacional.",
    "summary": "Gas noble denso utilizado en iluminación fotográfica de alta velocidad y láseres.",
    "uses": [
      "Flashes estroboscópicos de fotografía de alta velocidad",
      "Aislamiento térmico de triple acristalamiento en arquitectura",
      "Láseres de fluoruro de kriptón (KrF) para fotolitografía ultravioleta",
      "Proyectores de pistas de aterrizaje en aeropuertos"
    ],
    "isotopes": [
      {
        "mass": 78,
        "name": "⁷⁸Kr",
        "abundance": "0.35%",
        "stable": true
      },
      {
        "mass": 80,
        "name": "⁸⁰Kr",
        "abundance": "2.28%",
        "stable": true
      },
      {
        "mass": 82,
        "name": "⁸²Kr",
        "abundance": "11.58%",
        "stable": true
      },
      {
        "mass": 83,
        "name": "⁸³Kr",
        "abundance": "11.49%",
        "stable": true
      },
      {
        "mass": 84,
        "name": "⁸⁴Kr",
        "abundance": "57.00%",
        "stable": true
      },
      {
        "mass": 86,
        "name": "⁸⁶Kr",
        "abundance": "17.30%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidio",
    "latinName": "Rubidium",
    "mass": 85.468,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 5,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹",
    "electronConfigurationSemantic": "[Kr] 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 312.46,
    "boilingPoint": 961,
    "density": 1.532,
    "atomicRadius": 265,
    "covalentRadius": 220,
    "electronegativity": 0.82,
    "ionizationEnergy": 403,
    "electronAffinity": 46.9,
    "spectralLines": [
      780,
      794.8,
      420.2
    ],
    "discoveredBy": "Robert Bunsen y Gustav Kirchhoff",
    "discoveryYear": 1861,
    "description": "Metal alcalino muy blando y reactivo que se inflama espontáneamente en el aire y reacciona de forma explosiva con el agua. Base de los relojes atómicos compactos.",
    "summary": "Metal alcalino ultrarreactivo fundamental en relojes atómicos y condensados BEC.",
    "uses": [
      "Relojes atómicos de rubidio en sistemas satelitales GPS",
      "Enfriamiento láser y creación de condensados de Bose-Einstein",
      "Células fotoeléctricas y tubos fotomultiplicadores",
      "Fuegos artificiales de tonalidad violeta"
    ],
    "isotopes": [
      {
        "mass": 85,
        "name": "⁸⁵Rb",
        "abundance": "72.17%",
        "stable": true
      },
      {
        "mass": 87,
        "name": "⁸⁷Rb",
        "abundance": "27.83%",
        "stable": false,
        "halfLife": "4.92 × 10¹⁰ años"
      }
    ],
    "hazard": [
      "Inflamable espontáneo",
      "Corrosivo",
      "Reactivo con agua"
    ]
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Estroncio",
    "latinName": "Strontium",
    "mass": 87.62,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 5,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²",
    "electronConfigurationSemantic": "[Kr] 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 1050,
    "boilingPoint": 1655,
    "density": 2.64,
    "atomicRadius": 219,
    "covalentRadius": 195,
    "electronegativity": 0.95,
    "ionizationEnergy": 549.5,
    "electronAffinity": 5,
    "spectralLines": [
      460.7,
      407.8,
      421.6
    ],
    "discoveredBy": "Adair Crawford",
    "discoveryYear": 1790,
    "description": "Metal alcalinotérreo blanco plateado que arde con una intensa y deslumbrante llama color carmesí. Sus isótopos se emplean en radioterapia oncológica y datación geológica.",
    "summary": "Metal que produce el color rojo intenso en pirotecnia y base de relojes atómicos ópticos.",
    "uses": [
      "Colorante rojo brillante en fuegos artificiales y bengalas de emergencia",
      "Relojes atómicos de red óptica de estroncio (los más precisos del mundo)",
      "Cloruro de estroncio en pastas dentales para dientes sensibles",
      "Ferritas de estroncio para imanes permanentes cerámicos"
    ],
    "isotopes": [
      {
        "mass": 84,
        "name": "⁸⁴Sr",
        "abundance": "0.56%",
        "stable": true
      },
      {
        "mass": 86,
        "name": "⁸⁶Sr",
        "abundance": "9.86%",
        "stable": true
      },
      {
        "mass": 87,
        "name": "⁸⁷Sr",
        "abundance": "7.00%",
        "stable": true
      },
      {
        "mass": 88,
        "name": "⁸⁸Sr",
        "abundance": "82.58%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Reactivo con agua"
    ]
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Itrio",
    "latinName": "Yttrium",
    "mass": 88.906,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 3,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²",
    "electronConfigurationSemantic": "[Kr] 4d¹ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      9,
      2
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1799,
    "boilingPoint": 3609,
    "density": 4.472,
    "atomicRadius": 212,
    "covalentRadius": 190,
    "electronegativity": 1.22,
    "ionizationEnergy": 600,
    "electronAffinity": 29.6,
    "spectralLines": [
      407.7,
      410.2,
      417.8
    ],
    "discoveredBy": "Johan Gadolin",
    "discoveryYear": 1794,
    "description": "Metal de transición perteneciente a las tierras raras. Nombrado en honor a la aldea sueca de Ytterby. Indispensable en superconductores de alta temperatura (YBCO) y láseres quirúrgicos YAG.",
    "summary": "Metal de tierras raras utilizado en superconductores y láseres Nd:YAG.",
    "uses": [
      "Superconductores cerámicos de alta temperatura YBCO",
      "Cristales de granate de itrio y aluminio (YAG) en láseres médicos e industriales",
      "Fósforos rojos de europio-itrio para pantallas y LEDs blancos",
      "Bujías de encendido y cerámicas de circonia estabilizada con itria (YSZ)"
    ],
    "isotopes": [
      {
        "mass": 89,
        "name": "⁸⁹Y",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en forma sólida"
    ]
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Circonio",
    "latinName": "Zirconium",
    "mass": 91.224,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 4,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²",
    "electronConfigurationSemantic": "[Kr] 4d² 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      10,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      4
    ],
    "phase": "solid",
    "meltingPoint": 2128,
    "boilingPoint": 4682,
    "density": 6.52,
    "atomicRadius": 206,
    "covalentRadius": 175,
    "electronegativity": 1.33,
    "ionizationEnergy": 640.1,
    "electronAffinity": 41.1,
    "spectralLines": [
      360.1,
      468.8
    ],
    "discoveredBy": "Martin Heinrich Klaproth",
    "discoveryYear": 1789,
    "description": "Metal resistente a la corrosión con una bajísima sección eficaz de absorción de neutrones, lo que lo hace el material supremo para recubrir las varillas de combustible nuclear (zircaloy).",
    "summary": "Metal ultrarresistente al calor y a la radiación en reactores nucleares.",
    "uses": [
      "Vainas de combustible nuclear de aleación Zircaloy",
      "Circonia cúbica (ZrO₂) como gema imitadora del diamante",
      "Implantes dentales biocompatibles de circonia monolítica",
      "Crisoles refractarios y cuchillas cerámicas indeformables"
    ],
    "isotopes": [
      {
        "mass": 90,
        "name": "⁹⁰Zr",
        "abundance": "51.45%",
        "stable": true
      },
      {
        "mass": 91,
        "name": "⁹¹Zr",
        "abundance": "11.22%",
        "stable": true
      },
      {
        "mass": 92,
        "name": "⁹²Zr",
        "abundance": "17.15%",
        "stable": true
      },
      {
        "mass": 94,
        "name": "⁹⁴Zr",
        "abundance": "17.38%",
        "stable": true
      },
      {
        "mass": 96,
        "name": "⁹⁶Zr",
        "abundance": "2.80%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo fino)"
    ]
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobio",
    "latinName": "Niobium",
    "mass": 92.906,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 5,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹",
    "electronConfigurationSemantic": "[Kr] 4d⁴ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      12,
      1
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 2750,
    "boilingPoint": 5017,
    "density": 8.57,
    "atomicRadius": 198,
    "covalentRadius": 164,
    "electronegativity": 1.6,
    "ionizationEnergy": 652.1,
    "electronAffinity": 86.1,
    "spectralLines": [
      405.9,
      407.9
    ],
    "discoveredBy": "Charles Hatchett",
    "discoveryYear": 1801,
    "description": "Metal de transición dúctil que se vuelve superconductor a temperaturas criogénicas. Las aleaciones de niobio-titanio y niobio-estaño alimentan los imanes del Gran Colisionador de Hadrones (LHC).",
    "summary": "Metal refractario clave en imanes superconductores y superaleaciones de turbinas.",
    "uses": [
      "Electroimanes superconductores en aceleradores de partículas (LHC)",
      "Microaleaciones para gasoductos y carrocerías de alta resistencia",
      "Toberas de motores de cohetes espaciales",
      "Joyería anodizada hipoalergénica con colores iridiscentes"
    ],
    "isotopes": [
      {
        "mass": 93,
        "name": "⁹³Nb",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molibdeno",
    "latinName": "Molybdenum",
    "mass": 95.95,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 6,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹",
    "electronConfigurationSemantic": "[Kr] 4d⁵ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      1
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      3,
      4,
      5,
      6
    ],
    "phase": "solid",
    "meltingPoint": 2896,
    "boilingPoint": 4912,
    "density": 10.28,
    "atomicRadius": 190,
    "covalentRadius": 154,
    "electronegativity": 2.16,
    "ionizationEnergy": 684.3,
    "electronAffinity": 71.9,
    "spectralLines": [
      379.8,
      386.4,
      390.3
    ],
    "discoveredBy": "Carl Wilhelm Scheele",
    "discoveryYear": 1778,
    "description": "Metal con uno de los puntos de fusión más altos. Es un oligoelemento vital para la vida, cofactor de enzimas como la nitrogenasa bacteriana y la sulfito oxidasa humana.",
    "summary": "Metal refractario endurecedor de aceros y cofactor enzimático esencial.",
    "uses": [
      "Aceros estructurales de ultra-alta resistencia y blindajes",
      "Disulfuro de molibdeno (MoS₂) como lubricante seco para vacío espacial",
      "Generadores de Tecnecio-99m para diagnóstico médico radiológico",
      "Electrodos para hornos de fusión de vidrio"
    ],
    "isotopes": [
      {
        "mass": 92,
        "name": "⁹²Mo",
        "abundance": "14.77%",
        "stable": true
      },
      {
        "mass": 94,
        "name": "⁹⁴Mo",
        "abundance": "9.23%",
        "stable": true
      },
      {
        "mass": 95,
        "name": "⁹⁵Mo",
        "abundance": "15.90%",
        "stable": true
      },
      {
        "mass": 96,
        "name": "⁹⁶Mo",
        "abundance": "16.68%",
        "stable": true
      },
      {
        "mass": 97,
        "name": "⁹⁷Mo",
        "abundance": "9.56%",
        "stable": true
      },
      {
        "mass": 98,
        "name": "⁹⁸Mo",
        "abundance": "24.19%",
        "stable": true
      },
      {
        "mass": 100,
        "name": "¹⁰⁰Mo",
        "abundance": "9.67%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Tecnecio",
    "latinName": "Technetium",
    "mass": 98,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 7,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²",
    "electronConfigurationSemantic": "[Kr] 4d⁵ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      4,
      7
    ],
    "phase": "solid",
    "meltingPoint": 2430,
    "boilingPoint": 4538,
    "density": 11.5,
    "atomicRadius": 183,
    "covalentRadius": 147,
    "electronegativity": 1.9,
    "ionizationEnergy": 702,
    "electronAffinity": 53,
    "spectralLines": [
      429.7,
      426.2
    ],
    "discoveredBy": "Emilio Segrè y Carlo Perrier",
    "discoveryYear": 1937,
    "description": "El primer elemento producido artificialmente por el ser humano. Es el elemento más ligero sin ningún isótopo estable. Su isómero nuclear Tc-99m es el radiofármaco más usado en medicina nuclear.",
    "summary": "Primer elemento artificial; su isótopo Tc-99m salva vidas en medicina nuclear.",
    "uses": [
      "Gammagrafías de perfusión miocárdica, cerebro y huesos con Tecnecio-99m",
      "Estándar de calibración de radiación beta",
      "Inhibidor de corrosión en aceros especiales experimentales",
      "Investigación en física de materiales radiactivos"
    ],
    "isotopes": [
      {
        "mass": 97,
        "name": "⁹⁷Tc",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "4.21 × 10⁶ años"
      },
      {
        "mass": 98,
        "name": "⁹⁸Tc",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "4.2 × 10⁶ años"
      },
      {
        "mass": 99,
        "name": "⁹⁹ᵐTc",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "6.01 horas (diagnóstico)"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Rutenio",
    "latinName": "Ruthenium",
    "mass": 101.07,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 8,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹",
    "electronConfigurationSemantic": "[Kr] 4d⁷ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      15,
      1
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      2,
      3,
      4,
      8
    ],
    "phase": "solid",
    "meltingPoint": 2607,
    "boilingPoint": 4423,
    "density": 12.37,
    "atomicRadius": 178,
    "covalentRadius": 146,
    "electronegativity": 2.2,
    "ionizationEnergy": 710.2,
    "electronAffinity": 101.3,
    "spectralLines": [
      349.9,
      372.8
    ],
    "discoveredBy": "Karl Ernst Claus",
    "discoveryYear": 1844,
    "description": "Metal precioso del grupo del platino sumamente duro y resistente a los ataques químicos. El catalizador de Grubbs a base de rutenio revolucionó la metátesis de olefinas en química orgánica.",
    "summary": "Metal noble del grupo del platino usado en contactos eléctricos y catálisis.",
    "uses": [
      "Contactos eléctricos resistentes al desgaste en conmutadores de precisión",
      "Catalizadores de metátesis de olefinas (Premio Nobel 2005)",
      "Capas magnéticas en discos duros HDD de alta densidad",
      "Ánodos de titanio recubiertos de óxido de rutenio para electrólisis de cloro"
    ],
    "isotopes": [
      {
        "mass": 96,
        "name": "⁹⁶Ru",
        "abundance": "5.54%",
        "stable": true
      },
      {
        "mass": 98,
        "name": "⁹⁸Ru",
        "abundance": "1.87%",
        "stable": true
      },
      {
        "mass": 99,
        "name": "⁹⁹Ru",
        "abundance": "12.76%",
        "stable": true
      },
      {
        "mass": 100,
        "name": "¹⁰⁰Ru",
        "abundance": "12.60%",
        "stable": true
      },
      {
        "mass": 101,
        "name": "¹⁰¹Ru",
        "abundance": "17.06%",
        "stable": true
      },
      {
        "mass": 102,
        "name": "¹⁰²Ru",
        "abundance": "31.55%",
        "stable": true
      },
      {
        "mass": 104,
        "name": "¹⁰⁴Ru",
        "abundance": "18.62%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico (tetraóxido de rutenio RuO₄)"
    ]
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rodio",
    "latinName": "Rhodium",
    "mass": 102.91,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 9,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹",
    "electronConfigurationSemantic": "[Kr] 4d⁸ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      16,
      1
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 2237,
    "boilingPoint": 3968,
    "density": 12.41,
    "atomicRadius": 173,
    "covalentRadius": 142,
    "electronegativity": 2.28,
    "ionizationEnergy": 719.7,
    "electronAffinity": 109.7,
    "spectralLines": [
      343.5,
      369.2
    ],
    "discoveredBy": "William Hyde Wollaston",
    "discoveryYear": 1803,
    "description": "Uno de los metales preciosos más escasos y costosos del planeta. Su reflectividad y resistencia a la corrosión son legendarias, y es el componente activo esencial de los catalizadores de automóviles.",
    "summary": "Metal precioso ultrarrofundido y carísimo clave en catalizadores de coches.",
    "uses": [
      "Catalizadores automotrices de tres vías para reducir óxidos de nitrógeno (NOx)",
      "Bañado electrolítico de joyería de oro blanco y plata para evitar el deslustre",
      "Espejos de alta reflectividad para instrumentos ópticos",
      "Crisoles de alta temperatura para el crecimiento de monocristales"
    ],
    "isotopes": [
      {
        "mass": 103,
        "name": "¹⁰³Rh",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso (forma masiva)"
    ]
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Paladio",
    "latinName": "Palladium",
    "mass": 106.42,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 10,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰",
    "electronsPerShell": [
      2,
      8,
      18,
      18
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1828.05,
    "boilingPoint": 3236,
    "density": 12.023,
    "atomicRadius": 169,
    "covalentRadius": 139,
    "electronegativity": 2.2,
    "ionizationEnergy": 804.4,
    "electronAffinity": 53.7,
    "spectralLines": [
      340.5,
      360.9
    ],
    "discoveredBy": "William Hyde Wollaston",
    "discoveryYear": 1802,
    "description": "Metal blanco plateado que posee la asombrosa propiedad de absorber hasta 900 veces su propio volumen de gas hidrógeno. Clave en los acoplamientos cruzados catalíticos de Suzuki y Heck.",
    "summary": "Metal precioso que absorbe hidrógeno y cataliza reacciones farmacéuticas.",
    "uses": [
      "Convertidores catalíticos de automóviles de gasolina",
      "Condensadores cerámicos multicapa (MLCC) en smartphones y portátiles",
      "Joyería fina y aleaciones dentales",
      "Catálisis de acoplamiento de Suzuki premiada con el Nobel"
    ],
    "isotopes": [
      {
        "mass": 102,
        "name": "¹⁰²Pd",
        "abundance": "1.02%",
        "stable": true
      },
      {
        "mass": 104,
        "name": "¹⁰⁴Pd",
        "abundance": "11.14%",
        "stable": true
      },
      {
        "mass": 105,
        "name": "¹⁰⁵Pd",
        "abundance": "22.33%",
        "stable": true
      },
      {
        "mass": 106,
        "name": "¹⁰⁶Pd",
        "abundance": "27.33%",
        "stable": true
      },
      {
        "mass": 108,
        "name": "¹⁰⁸Pd",
        "abundance": "26.46%",
        "stable": true
      },
      {
        "mass": 110,
        "name": "¹¹⁰Pd",
        "abundance": "11.72%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Plata",
    "latinName": "Argentum",
    "mass": 107.87,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 11,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      1
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 1234.93,
    "boilingPoint": 2435,
    "density": 10.49,
    "atomicRadius": 165,
    "covalentRadius": 145,
    "electronegativity": 1.93,
    "ionizationEnergy": 731,
    "electronAffinity": 125.6,
    "spectralLines": [
      328.1,
      338.3,
      520.9,
      546.5
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "El elemento con la conductividad eléctrica, conductividad térmica y reflectividad óptica más elevadas de todos los metales. Usado milenariamente como moneda, orfebrería y medicina.",
    "summary": "El mejor conductor eléctrico y térmico de toda la tabla periódica.",
    "uses": [
      "Pastas conductoras en células solares fotovoltaicas",
      "Contactos eléctricos de alta fidelidad en interruptores industriales",
      "Joyería, orfebrería y acuñación de monedas lingote",
      "Apósitos antimicrobianos para quemaduras graves (sulfadiazina de plata)"
    ],
    "isotopes": [
      {
        "mass": 107,
        "name": "¹⁰⁷Ag",
        "abundance": "51.84%",
        "stable": true
      },
      {
        "mass": 109,
        "name": "¹⁰⁹Ag",
        "abundance": "48.16%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico para organismos acuáticos"
    ]
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmio",
    "latinName": "Cadmium",
    "mass": 112.41,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 12,
    "period": 5,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 594.22,
    "boilingPoint": 1040,
    "density": 8.65,
    "atomicRadius": 161,
    "covalentRadius": 144,
    "electronegativity": 1.69,
    "ionizationEnergy": 867.8,
    "electronAffinity": -68,
    "spectralLines": [
      228.8,
      326.1,
      508.6,
      643.8
    ],
    "discoveredBy": "Karl Samuel Leberecht Hermann y Friedrich Stromeyer",
    "discoveryYear": 1817,
    "description": "Metal blando y tóxico que absorbe neutrones térmicos con gran avidez. Históricamente se utilizó en pigmentos amarillos de artistas y en acumuladores de níquel-cadmio.",
    "summary": "Metal blando absorbente de neutrones en reactores nucleares.",
    "uses": [
      "Barras de control de parada en reactores nucleares",
      "Células solares de película fina de telururo de cadmio (CdTe)",
      "Pigmentos amarillos, naranjas y rojos resistentes al calor",
      "Puntos cuánticos de CdSe en pantallas QLED avanzadas"
    ],
    "isotopes": [
      {
        "mass": 106,
        "name": "¹⁰⁶Cd",
        "abundance": "1.25%",
        "stable": true
      },
      {
        "mass": 108,
        "name": "¹⁰⁸Cd",
        "abundance": "0.89%",
        "stable": true
      },
      {
        "mass": 110,
        "name": "¹¹⁰Cd",
        "abundance": "12.49%",
        "stable": true
      },
      {
        "mass": 111,
        "name": "¹¹¹Cd",
        "abundance": "12.80%",
        "stable": true
      },
      {
        "mass": 112,
        "name": "¹¹²Cd",
        "abundance": "24.13%",
        "stable": true
      },
      {
        "mass": 114,
        "name": "¹¹⁴Cd",
        "abundance": "28.73%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico mortal",
      "Carcinógeno",
      "Peligro ambiental"
    ]
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indio",
    "latinName": "Indium",
    "mass": 114.82,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 13,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 429.75,
    "boilingPoint": 2345,
    "density": 7.31,
    "atomicRadius": 156,
    "covalentRadius": 142,
    "electronegativity": 1.78,
    "ionizationEnergy": 558.3,
    "electronAffinity": 37,
    "spectralLines": [
      410.2,
      451.1
    ],
    "discoveredBy": "Ferdinand Reich e Hieronymous Theodor Richter",
    "discoveryYear": 1863,
    "description": "Metal muy blando que produce un crujido característico al doblarse. Su óxido combinado con estaño (ITO) es transparente y conductor eléctrico, haciendo posibles las pantallas táctiles.",
    "summary": "Metal maleable cuyo óxido ITO es la base de las pantallas táctiles modernas.",
    "uses": [
      "Películas conductoras transparentes de óxido de indio y estaño (ITO) en pantallas táctiles y LCDs",
      "Soldaduras criogénicas y sellados herméticos de alto vacío",
      "Semiconductores de fosfuro de indio (InP) para láseres de fibra óptica",
      "Aleaciones de bajo punto de fusión para fusibles térmicos"
    ],
    "isotopes": [
      {
        "mass": 113,
        "name": "¹¹³In",
        "abundance": "4.29%",
        "stable": true
      },
      {
        "mass": 115,
        "name": "¹¹⁵In",
        "abundance": "95.71%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico por ingestión de sales"
    ]
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Estaño",
    "latinName": "Stannum",
    "mass": 118.71,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 14,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 505.08,
    "boilingPoint": 2875,
    "density": 7.287,
    "atomicRadius": 145,
    "covalentRadius": 139,
    "electronegativity": 1.96,
    "ionizationEnergy": 708.6,
    "electronAffinity": 107.3,
    "spectralLines": [
      284,
      286.3,
      317.5
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "Metal maleable plateado que formó la aleación de bronce hace más de 5000 años. Hoy es insustituible en las soldaduras libres de plomo para toda la electrónica mundial.",
    "summary": "Metal milenario indispensable para soldaduras electrónicas e hojalata.",
    "uses": [
      "Soldadura blanda de estaño en placas de circuitos electrónicos",
      "Recubrimiento anticorrosivo en latas de conservas (hojalata)",
      "Aleaciones de bronce y peltre",
      "Generación de luz ultravioleta extrema (EUV) para litografía de microchips"
    ],
    "isotopes": [
      {
        "mass": 112,
        "name": "¹¹²Sn",
        "abundance": "0.97%",
        "stable": true
      },
      {
        "mass": 114,
        "name": "¹¹⁴Sn",
        "abundance": "0.66%",
        "stable": true
      },
      {
        "mass": 115,
        "name": "¹¹⁵Sn",
        "abundance": "0.34%",
        "stable": true
      },
      {
        "mass": 116,
        "name": "¹¹⁶Sn",
        "abundance": "14.54%",
        "stable": true
      },
      {
        "mass": 118,
        "name": "¹¹⁸Sn",
        "abundance": "24.22%",
        "stable": true
      },
      {
        "mass": 120,
        "name": "¹²⁰Sn",
        "abundance": "32.58%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso (forma masiva)"
    ]
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimonio",
    "latinName": "Stibium",
    "mass": 121.76,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 15,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p³",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 903.78,
    "boilingPoint": 1860,
    "density": 6.685,
    "atomicRadius": 133,
    "covalentRadius": 139,
    "electronegativity": 2.05,
    "ionizationEnergy": 834,
    "electronAffinity": 103.2,
    "spectralLines": [
      252.8,
      259.8
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "Metaloide lustroso que se expande al solidificarse, permitiendo tipos de imprenta tipográficos de nitidez perfecta. Se utiliza ampliamente como retardante de llama en plásticos.",
    "summary": "Metaloide usado en tipos de imprenta históricos y retardantes de llama.",
    "uses": [
      "Trióxido de antimonio como sinérgico retardante de llama",
      "Aleaciones con plomo para endurecer baterías de coche y proyectiles",
      "Semiconductores de antimonuro de indio para detectores infrarrojos",
      "Dopante en la fabricación de diodos y dispositivos de efecto Hall"
    ],
    "isotopes": [
      {
        "mass": 121,
        "name": "¹²¹Sb",
        "abundance": "57.21%",
        "stable": true
      },
      {
        "mass": 123,
        "name": "¹²³Sb",
        "abundance": "42.79%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico",
      "Peligro para la salud"
    ]
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Telurio",
    "latinName": "Tellurium",
    "mass": 127.6,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 16,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "phase": "solid",
    "meltingPoint": 722.66,
    "boilingPoint": 1261,
    "density": 6.232,
    "atomicRadius": 123,
    "covalentRadius": 138,
    "electronegativity": 2.1,
    "ionizationEnergy": 869.3,
    "electronAffinity": 190.2,
    "spectralLines": [
      214.3,
      238.6
    ],
    "discoveredBy": "Franz-Joseph Müller von Reichenstein",
    "discoveryYear": 1782,
    "description": "Metaloide quebradizo blanco plateado. Es uno de los elementos más raros de la corteza terrestre pero es un componente estelar de los módulos solares fotovoltaicos de capa delgada de CdTe.",
    "summary": "Metaloide raro clave en paneles solares CdTe y memorias de cambio de fase.",
    "uses": [
      "Paneles solares de película delgada de telururo de cadmio (CdTe)",
      "Dispositivos termoeléctricos de refrigeración Peltier (Bi₂Te₃)",
      "Memorias de cambio de fase (PCM) y discos ópticos regrabables",
      "Aditivo metalúrgico para mejorar la maquinabilidad del acero y cobre"
    ],
    "isotopes": [
      {
        "mass": 120,
        "name": "¹²⁰Te",
        "abundance": "0.09%",
        "stable": true
      },
      {
        "mass": 122,
        "name": "¹²²Te",
        "abundance": "2.55%",
        "stable": true
      },
      {
        "mass": 124,
        "name": "¹²⁴Te",
        "abundance": "4.74%",
        "stable": true
      },
      {
        "mass": 125,
        "name": "¹²⁵Te",
        "abundance": "7.07%",
        "stable": true
      },
      {
        "mass": 126,
        "name": "¹²⁶Te",
        "abundance": "18.84%",
        "stable": true
      },
      {
        "mass": 128,
        "name": "¹²⁸Te",
        "abundance": "31.74%",
        "stable": true
      },
      {
        "mass": 130,
        "name": "¹³⁰Te",
        "abundance": "34.08%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico por inhalación"
    ]
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Yodo",
    "latinName": "Iodium",
    "mass": 126.9,
    "category": "reactive-nonmetal",
    "categoryName": "No metales reactivos",
    "group": 17,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1,
      1,
      3,
      5,
      7
    ],
    "phase": "solid",
    "meltingPoint": 386.85,
    "boilingPoint": 457.4,
    "density": 4.933,
    "atomicRadius": 115,
    "covalentRadius": 139,
    "electronegativity": 2.66,
    "ionizationEnergy": 1008.4,
    "electronAffinity": 295.2,
    "spectralLines": [
      206.2,
      511.9
    ],
    "discoveredBy": "Bernard Courtois",
    "discoveryYear": 1811,
    "description": "Sólido cristalino negro violáceo brillante que sublima fácilmente produciendo un vapor violeta intenso. Esencial en la tiroides humana para la síntesis de hormonas tiroxina (T4) y triyodotironina (T3).",
    "summary": "Halógeno de vapores violetas indispensable para el tiroides y desinfección.",
    "uses": [
      "Desinfectante antiséptico de heridas (tintura de yodo y povidona yodada)",
      "Prevención del bocio mediante sal yodada alimentaria",
      "Medios de contraste radiológicos para tomografía computarizada (TAC)",
      "Células solares de perovskita de haluro de plomo"
    ],
    "isotopes": [
      {
        "mass": 127,
        "name": "¹²⁷I",
        "abundance": "100%",
        "stable": true
      },
      {
        "mass": 131,
        "name": "¹³¹I",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "8.02 días (tratamiento tiroideo)"
      }
    ],
    "hazard": [
      "Tóxico",
      "Corrosivo",
      "Peligro para la salud"
    ]
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenón",
    "latinName": "Xenon",
    "mass": 131.29,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 5,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
    "electronConfigurationSemantic": "[Kr] 4d¹⁰ 5s² 5p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      2,
      4,
      6,
      8
    ],
    "phase": "gas",
    "meltingPoint": 161.4,
    "boilingPoint": 165.051,
    "density": 0.005887,
    "atomicRadius": 108,
    "covalentRadius": 140,
    "electronegativity": 2.6,
    "ionizationEnergy": 1170.4,
    "electronAffinity": -77,
    "spectralLines": [
      462.4,
      467.1,
      823.2,
      881.9
    ],
    "discoveredBy": "William Ramsay y Morris Travers",
    "discoveryYear": 1898,
    "description": "Gas noble pesado y denso capaz de formar compuestos químicos reales como fluoruros y óxidos. Se utiliza como propelente en motores iónicos espaciales por su gran masa atómica.",
    "summary": "Gas noble denso propulsor de sondas espaciales con motores iónicos.",
    "uses": [
      "Propelente iónico para satélites y misiones interplanetarias",
      "Faros de descarga de alta intensidad en automóviles de xenón",
      "Anestésico inhalatorio neuroprotector de última generación",
      "Lámparas estroboscópicas de alta potencia en cine y fotografía"
    ],
    "isotopes": [
      {
        "mass": 124,
        "name": "¹²⁴Xe",
        "abundance": "0.09%",
        "stable": true
      },
      {
        "mass": 126,
        "name": "¹²⁶Xe",
        "abundance": "0.09%",
        "stable": true
      },
      {
        "mass": 128,
        "name": "¹²⁸Xe",
        "abundance": "1.92%",
        "stable": true
      },
      {
        "mass": 129,
        "name": "¹²⁹Xe",
        "abundance": "26.44%",
        "stable": true
      },
      {
        "mass": 130,
        "name": "¹³⁰Xe",
        "abundance": "4.08%",
        "stable": true
      },
      {
        "mass": 131,
        "name": "¹³¹Xe",
        "abundance": "21.18%",
        "stable": true
      },
      {
        "mass": 132,
        "name": "¹³²Xe",
        "abundance": "26.89%",
        "stable": true
      },
      {
        "mass": 134,
        "name": "¹³⁴Xe",
        "abundance": "10.44%",
        "stable": true
      },
      {
        "mass": 136,
        "name": "¹³⁶Xe",
        "abundance": "8.87%",
        "stable": true
      }
    ],
    "hazard": [
      "Gas a presión",
      "Asfixiante"
    ]
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Cesio",
    "latinName": "Caesium",
    "mass": 132.91,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 6,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹",
    "electronConfigurationSemantic": "[Xe] 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 301.59,
    "boilingPoint": 944,
    "density": 1.93,
    "atomicRadius": 298,
    "covalentRadius": 244,
    "electronegativity": 0.79,
    "ionizationEnergy": 375.7,
    "electronAffinity": 45.5,
    "spectralLines": [
      852.1,
      894.3,
      455.5
    ],
    "discoveredBy": "Robert Bunsen y Gustav Kirchhoff",
    "discoveryYear": 1860,
    "description": "El metal más blando, electropositivo y reactivo. La definición internacional del 'segundo' se basa exactamente en 9.192.631.770 oscilaciones del átomo de cesio-133.",
    "summary": "Metal ultrarreactivo cuya frecuencia atómica define el segundo oficial.",
    "uses": [
      "Relojes atómicos primarios de cesio del Tiempo Universal Coordinado (UTC)",
      "Fluidos de perforación de formiato de cesio en pozos petroleros",
      "Células fotoeléctricas de respuesta infrarroja",
      "Propelente iónico avanzado en física espacial"
    ],
    "isotopes": [
      {
        "mass": 133,
        "name": "¹³³Cs",
        "abundance": "100%",
        "stable": true
      },
      {
        "mass": 137,
        "name": "¹³⁷Cs",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "30.17 años"
      }
    ],
    "hazard": [
      "Inflamable espontáneo",
      "Corrosivo violento",
      "Reactivo con agua"
    ]
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Bario",
    "latinName": "Barium",
    "mass": 137.33,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 6,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 1000,
    "boilingPoint": 2170,
    "density": 3.51,
    "atomicRadius": 253,
    "covalentRadius": 215,
    "electronegativity": 0.89,
    "ionizationEnergy": 502.9,
    "electronAffinity": 13.95,
    "spectralLines": [
      455.4,
      493.4,
      553.5
    ],
    "discoveredBy": "Carl Wilhelm Scheele y Humphry Davy",
    "discoveryYear": 1808,
    "description": "Metal alcalinotérreo blanco plateado de gran densidad. Aporta el llamativo color verde esmeralda a los fuegos artificiales y el sulfato de bario permite radiografías del tracto digestivo.",
    "summary": "Metal pesado utilizado en contrastes radiológicos y pirotecnia verde.",
    "uses": [
      "Papilla de sulfato de bario como contraste radiológico gastrointestinal",
      "Colorante verde en fuegos artificiales y bengalas",
      "Lodos de perforación densos de baritina para pozos de gas y petróleo",
      "Filtro de impurezas 'getter' en tubos de vacío"
    ],
    "isotopes": [
      {
        "mass": 130,
        "name": "¹³⁰Ba",
        "abundance": "0.11%",
        "stable": true
      },
      {
        "mass": 132,
        "name": "¹³²Ba",
        "abundance": "0.10%",
        "stable": true
      },
      {
        "mass": 134,
        "name": "¹³⁴Ba",
        "abundance": "2.42%",
        "stable": true
      },
      {
        "mass": 135,
        "name": "¹³⁵Ba",
        "abundance": "6.59%",
        "stable": true
      },
      {
        "mass": 136,
        "name": "¹³⁶Ba",
        "abundance": "7.85%",
        "stable": true
      },
      {
        "mass": 137,
        "name": "¹³⁷Ba",
        "abundance": "11.23%",
        "stable": true
      },
      {
        "mass": 138,
        "name": "¹³⁸Ba",
        "abundance": "71.70%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable",
      "Tóxico (sales solubles de bario)"
    ]
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lantano",
    "latinName": "Lanthanum",
    "mass": 138.91,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²",
    "electronConfigurationSemantic": "[Xe] 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1193,
    "boilingPoint": 3737,
    "density": 6.162,
    "atomicRadius": 187,
    "covalentRadius": 207,
    "electronegativity": 1.1,
    "ionizationEnergy": 538.1,
    "electronAffinity": 48,
    "spectralLines": [
      394.9,
      398.9,
      408.7
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "discoveryYear": 1839,
    "description": "El primer elemento de la serie de los lantánidos. Su óxido confiere un altísimo índice de refracción y baja dispersión al vidrio de objetivos fotográficos de gama alta.",
    "summary": "Primer lantánido utilizado en lentes ópticas de precisión y baterías híbridas.",
    "uses": [
      "Vidrios ópticos de alta calidad para lentes de cámaras y telescopios",
      "Ánodos de hidruro metálico de níquel (NiMH) en coches híbridos",
      "Piedras de chispa para mecheros (mischmetal)",
      "Craqueo catalítico de petróleo para gasolina"
    ],
    "isotopes": [
      {
        "mass": 138,
        "name": "¹³⁸La",
        "abundance": "0.09%",
        "stable": false,
        "halfLife": "1.02 × 10¹¹ años"
      },
      {
        "mass": 139,
        "name": "¹³⁹La",
        "abundance": "99.91%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en forma sólida"
    ]
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerio",
    "latinName": "Cerium",
    "mass": 140.12,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹ 5s² 5p⁶ 5d¹ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1068,
    "boilingPoint": 3716,
    "density": 6.77,
    "atomicRadius": 181,
    "covalentRadius": 204,
    "electronegativity": 1.12,
    "ionizationEnergy": 534.4,
    "electronAffinity": 50,
    "spectralLines": [
      418.7,
      456.2
    ],
    "discoveredBy": "Martin Heinrich Klaproth, Jöns Jacob Berzelius y Wilhelm Hisinger",
    "discoveryYear": 1803,
    "description": "El lantánido más abundante en la corteza terrestre. El óxido de cerio (CeO₂) es el polvo pulidor más eficaz para lentes, pantallas de cristal y catalizadores de automóviles.",
    "summary": "Lantánido abundante usado en pulido de cristales y catalizadores diésel.",
    "uses": [
      "Polvo pulidor de óxido de cerio para cristales ópticos y espejos",
      "Catalizador en convertidores de escape para oxidar monóxido de carbono",
      "Aleación mischmetal para piedras de encendedores",
      "Decolorante y absorbente de luz UV en vidrios"
    ],
    "isotopes": [
      {
        "mass": 136,
        "name": "¹³⁶Ce",
        "abundance": "0.185%",
        "stable": true
      },
      {
        "mass": 138,
        "name": "¹³⁸Ce",
        "abundance": "0.251%",
        "stable": true
      },
      {
        "mass": 140,
        "name": "¹⁴⁰Ce",
        "abundance": "88.450%",
        "stable": true
      },
      {
        "mass": 142,
        "name": "¹⁴²Ce",
        "abundance": "11.114%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (polvo fino de cerio)"
    ]
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodimio",
    "latinName": "Praseodymium",
    "mass": 140.91,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f³ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1208,
    "boilingPoint": 3793,
    "density": 6.77,
    "atomicRadius": 182,
    "covalentRadius": 203,
    "electronegativity": 1.13,
    "ionizationEnergy": 527,
    "electronAffinity": 50,
    "spectralLines": [
      414.3,
      422.5
    ],
    "discoveredBy": "Carl Auer von Welsbach",
    "discoveryYear": 1885,
    "description": "Metal de tierras raras maleable de tono plateado. Forma vidrios protectores de didimio que absorben la luz de sodio dañina en la soldadura autógena y el soplado de vidrio.",
    "summary": "Lantánido que protege los ojos de los soldadores e intensifica imanes.",
    "uses": [
      "Gafas de soldador y soplador de vidrio de didimio (Pr-Nd)",
      "Imanes permanentes de neodimio de alta potencia (Nd-Pr-Fe-B)",
      "Pigmento amarillo praseodimio en azulejos y cerámica",
      "Amplificadores ópticos de fibra dopada con praseodimio (PDFA)"
    ],
    "isotopes": [
      {
        "mass": 141,
        "name": "¹⁴¹Pr",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en forma masiva"
    ]
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodimio",
    "latinName": "Neodymium",
    "mass": 144.24,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁴ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1297,
    "boilingPoint": 3347,
    "density": 7.01,
    "atomicRadius": 181,
    "covalentRadius": 201,
    "electronegativity": 1.14,
    "ionizationEnergy": 533.1,
    "electronAffinity": 50,
    "spectralLines": [
      401.2,
      430.3
    ],
    "discoveredBy": "Carl Auer von Welsbach",
    "discoveryYear": 1885,
    "description": "El rey de los imanes permanentes. Las aleaciones Nd₂Fe₁₄B generan campos magnéticos ultrapotentes esenciales para motores de coches eléctricos, generadores eólicos y discos duros.",
    "summary": "Pilar de los imanes permanentes más potentes para aerogeneradores y coches eléctricos.",
    "uses": [
      "Imanes permanentes de neodimio (NdFeB) para aerogeneradores y tracción eléctrica",
      "Láseres de estado sólido Nd:YAG en cirugía y corte industrial",
      "Auriculares, altavoces y micrófonos de alta fidelidad",
      "Gafas de sol y filtros que aumentan el contraste visual"
    ],
    "isotopes": [
      {
        "mass": 142,
        "name": "¹⁴²Nd",
        "abundance": "27.15%",
        "stable": true
      },
      {
        "mass": 143,
        "name": "¹⁴³Nd",
        "abundance": "12.17%",
        "stable": true
      },
      {
        "mass": 144,
        "name": "¹⁴⁴Nd",
        "abundance": "23.80%",
        "stable": true
      },
      {
        "mass": 145,
        "name": "¹⁴⁵Nd",
        "abundance": "8.30%",
        "stable": true
      },
      {
        "mass": 146,
        "name": "¹⁴⁶Nd",
        "abundance": "17.19%",
        "stable": true
      },
      {
        "mass": 148,
        "name": "¹⁴⁸Nd",
        "abundance": "5.76%",
        "stable": true
      },
      {
        "mass": 150,
        "name": "¹⁵⁰Nd",
        "abundance": "5.63%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)"
    ]
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Prometio",
    "latinName": "Promethium",
    "mass": 145,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁵ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁵ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1315,
    "boilingPoint": 3273,
    "density": 7.26,
    "atomicRadius": 180,
    "covalentRadius": 199,
    "electronegativity": 1.13,
    "ionizationEnergy": 540,
    "electronAffinity": 50,
    "spectralLines": [
      391.9,
      399.9
    ],
    "discoveredBy": "Jacob A. Marinsky, Lawrence E. Glendenin y Charles D. Coryell",
    "discoveryYear": 1945,
    "description": "El único lantánido radiactivo sin isótopos estables. Emite partículas beta que excitan fósforos luminiscentes para producir fuentes de luz duraderas durante décadas sin electricidad.",
    "summary": "Lantánido radiactivo generador de energía en microbaterías nucleares beta.",
    "uses": [
      "Microbaterías atómicas de partículas beta para sondas espaciales y marcapasos históricos",
      "Pinturas luminiscentes para señales de seguridad y diales de aviación",
      "Medidores de espesor sin contacto para láminas metálicas y plásticos",
      "Investigación en física nuclear"
    ],
    "isotopes": [
      {
        "mass": 145,
        "name": "¹⁴⁵Pm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "17.7 años"
      },
      {
        "mass": 147,
        "name": "¹⁴⁷Pm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "2.62 años"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samario",
    "latinName": "Samarium",
    "mass": 150.36,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁶ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁶ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1345,
    "boilingPoint": 2067,
    "density": 7.52,
    "atomicRadius": 180,
    "covalentRadius": 198,
    "electronegativity": 1.17,
    "ionizationEnergy": 544.5,
    "electronAffinity": 50,
    "spectralLines": [
      429.7,
      442.4
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": 1879,
    "description": "Lantánido magnético que forma imanes de Samario-Cobalto (SmCo) capaces de mantener su potente magnetismo a temperaturas superiores a los 300 °C, donde los imanes de neodimio fallan.",
    "summary": "Lantánido base de imanes de alta temperatura y radioterapia oncológica.",
    "uses": [
      "Imanes permanentes de Samario-Cobalto para motores aeroespaciales y de alta temperatura",
      "Fármaco radiofármaco Samario-153 (Quadramet) para alivio del dolor óseo metastásico",
      "Catalizador de yoduro de samario (SmI₂, reactivo de Kagan) en síntesis orgánica",
      "Absorbente de neutrones en varillas de reactores nucleares"
    ],
    "isotopes": [
      {
        "mass": 144,
        "name": "¹⁴⁴Sm",
        "abundance": "3.08%",
        "stable": true
      },
      {
        "mass": 149,
        "name": "¹⁴⁹Sm",
        "abundance": "13.82%",
        "stable": true
      },
      {
        "mass": 150,
        "name": "¹⁵⁰Sm",
        "abundance": "7.37%",
        "stable": true
      },
      {
        "mass": 152,
        "name": "¹⁵²Sm",
        "abundance": "26.74%",
        "stable": true
      },
      {
        "mass": 154,
        "name": "¹⁵⁴Sm",
        "abundance": "22.75%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)"
    ]
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europio",
    "latinName": "Europium",
    "mass": 151.96,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁷ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁷ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1099,
    "boilingPoint": 1802,
    "density": 5.244,
    "atomicRadius": 199,
    "covalentRadius": 198,
    "electronegativity": 1.2,
    "ionizationEnergy": 547.1,
    "electronAffinity": 50,
    "spectralLines": [
      459.4,
      462.7,
      466.2
    ],
    "discoveredBy": "Eugène-Anatole Demarçay",
    "discoveryYear": 1901,
    "description": "El más reactivo y dúctil de los lantánidos. Su fluorescencia roja brillante bajo luz ultravioleta es el estándar mundial antifalsificación en los billetes de euro y pasaportes.",
    "summary": "Lantánido fosforescente rojo usado como marca de seguridad en billetes de euro.",
    "uses": [
      "Medidas antifalsificación fosforescentes en billetes de euro y documentos de identidad",
      "Fósforo emisor de luz roja en pantallas de televisión, monitores y LEDs blancos",
      "Sondas fluorescentes biológicas para análisis de ADN y proteínas",
      "Varillas de absorción de neutrones en centrales nucleares"
    ],
    "isotopes": [
      {
        "mass": 151,
        "name": "¹⁵¹Eu",
        "abundance": "47.81%",
        "stable": true
      },
      {
        "mass": 153,
        "name": "¹⁵³Eu",
        "abundance": "52.19%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (se oxida rápidamente)"
    ]
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinio",
    "latinName": "Gadolinium",
    "mass": 157.25,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁷ 5s² 5p⁶ 5d¹ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁷ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1585,
    "boilingPoint": 3546,
    "density": 7.9,
    "atomicRadius": 180,
    "covalentRadius": 196,
    "electronegativity": 1.2,
    "ionizationEnergy": 593.4,
    "electronAffinity": 50,
    "spectralLines": [
      364.6,
      407.9
    ],
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "discoveryYear": 1880,
    "description": "Lantánido con siete electrones desapareados que le otorgan un paramagnetismo extraordinario. Los quelatos de gadolinio son los agentes de contraste por excelencia en resonancia magnética (RM).",
    "summary": "Lantánido paramagnético supremo para contrastes de resonancia magnética (RM).",
    "uses": [
      "Medio de contraste intravenoso para imágenes de resonancia magnética (RM)",
      "Material magneto-calórico para refrigeración magnética ecológica sin gases",
      "Refrigeración nuclear de neutrones térmicos (máxima captura de neutrones)",
      "Fósforos verdes de oxisulfuro de gadolinio para pantallas radiológicas"
    ],
    "isotopes": [
      {
        "mass": 154,
        "name": "¹⁵⁴Gd",
        "abundance": "2.18%",
        "stable": true
      },
      {
        "mass": 155,
        "name": "¹⁵⁵Gd",
        "abundance": "14.80%",
        "stable": true
      },
      {
        "mass": 156,
        "name": "¹⁵⁶Gd",
        "abundance": "20.47%",
        "stable": true
      },
      {
        "mass": 157,
        "name": "¹⁵⁷Gd",
        "abundance": "15.65%",
        "stable": true
      },
      {
        "mass": 158,
        "name": "¹⁵⁸Gd",
        "abundance": "24.84%",
        "stable": true
      },
      {
        "mass": 160,
        "name": "¹⁶⁰Gd",
        "abundance": "21.86%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico en forma libre (seguro en quelatos)"
    ]
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbio",
    "latinName": "Terbium",
    "mass": 158.93,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁹ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f⁹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1629,
    "boilingPoint": 3503,
    "density": 8.23,
    "atomicRadius": 177,
    "covalentRadius": 194,
    "electronegativity": 1.2,
    "ionizationEnergy": 565.8,
    "electronAffinity": 50,
    "spectralLines": [
      432.6,
      433.8
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "discoveryYear": 1843,
    "description": "Metal plateado de tierras raras. La aleación Terfenol-D posee la magnetostricción más alta conocida: cambia de tamaño en presencia de un campo magnético, moviendo transductores sonares de alta potencia.",
    "summary": "Lantánido emisor de luz verde y base de materiales magnetostrictivos Terfenol-D.",
    "uses": [
      "Aleación magnetostrictiva Terfenol-D para actuadores de precisión y sonares navales",
      "Fósforo emisor de luz verde en pantallas de visualización y lámparas fluorescentes",
      "Celdas de combustible de óxido sólido de alta temperatura",
      "Sensores magneto-ópticos"
    ],
    "isotopes": [
      {
        "mass": 159,
        "name": "¹⁵⁹Tb",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en bloque sólido"
    ]
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Disprosio",
    "latinName": "Dysprosium",
    "mass": 162.5,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁰ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁰ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1680,
    "boilingPoint": 2840,
    "density": 8.54,
    "atomicRadius": 178,
    "covalentRadius": 192,
    "electronegativity": 1.22,
    "ionizationEnergy": 573,
    "electronAffinity": 50,
    "spectralLines": [
      404.6,
      421.2
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "discoveryYear": 1886,
    "description": "Lantánido con una de las susceptibilidades magnéticas más potentes. Se agrega a los imanes de neodimio para evitar que pierdan su magnetismo con el calor extremo en motores de tracción vehicular.",
    "summary": "Lantánido termoestabilizador de imanes de tracción en coches eléctricos.",
    "uses": [
      "Aditivo térmico indispensable en imanes NdFeB para vehículos eléctricos y turbinas",
      "Barras de control de reactores nucleares de absorción neutrónica",
      "Lámparas de descarga de halogenuros metálicos para rodajes cinematográficos",
      "Discos de almacenamiento magneto-óptico"
    ],
    "isotopes": [
      {
        "mass": 156,
        "name": "¹⁵⁶Dy",
        "abundance": "0.06%",
        "stable": true
      },
      {
        "mass": 158,
        "name": "¹⁵⁸Dy",
        "abundance": "0.10%",
        "stable": true
      },
      {
        "mass": 160,
        "name": "¹⁶⁰Dy",
        "abundance": "2.34%",
        "stable": true
      },
      {
        "mass": 161,
        "name": "¹⁶¹Dy",
        "abundance": "18.91%",
        "stable": true
      },
      {
        "mass": 162,
        "name": "¹⁶²Dy",
        "abundance": "25.51%",
        "stable": true
      },
      {
        "mass": 163,
        "name": "¹⁶³Dy",
        "abundance": "24.90%",
        "stable": true
      },
      {
        "mass": 164,
        "name": "¹⁶⁴Dy",
        "abundance": "28.18%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)"
    ]
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmio",
    "latinName": "Holmium",
    "mass": 164.93,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹¹ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1734,
    "boilingPoint": 2993,
    "density": 8.79,
    "atomicRadius": 176,
    "covalentRadius": 192,
    "electronegativity": 1.23,
    "ionizationEnergy": 581,
    "electronAffinity": 50,
    "spectralLines": [
      405.4,
      410.4
    ],
    "discoveredBy": "Per Teodor Cleve y Marc Delafontaine",
    "discoveryYear": 1878,
    "description": "Elemento con el momento magnético natural más alto de la tabla periódica. Sus polos magnéticos concentran líneas de flujo y sus láseres de holmio (Ho:YAG) realizan cirugías urológicas precisas.",
    "summary": "Lantánido con el mayor momento magnético natural y láseres quirúrgicos Ho:YAG.",
    "uses": [
      "Láseres médicos Ho:YAG para fragmentación de cálculos renales y urología",
      "Piezas polares magnéticas para concentrar campos en resonadores",
      "Calibración de espectrofotómetros ópticos (óxido de holmio)",
      "Colorante amarillo-rosado para vidrio y circonia cúbica"
    ],
    "isotopes": [
      {
        "mass": 165,
        "name": "¹⁶⁵Ho",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en sólido"
    ]
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbio",
    "latinName": "Erbium",
    "mass": 167.26,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹² 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹² 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "valenceElectrons": 12,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1802,
    "boilingPoint": 3141,
    "density": 9.066,
    "atomicRadius": 175,
    "covalentRadius": 189,
    "electronegativity": 1.24,
    "ionizationEnergy": 589.3,
    "electronAffinity": 50,
    "spectralLines": [
      400.8,
      440.9
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "discoveryYear": 1843,
    "description": "El elemento que hace posible la internet transoceánica. Los amplificadores ópticos de fibra dopada con erbio (EDFA) amplifican directamente las señales de luz de fibra óptica sin conversión electrónica.",
    "summary": "Lantánido que amplifica las señales de luz en la red mundial de fibra óptica.",
    "uses": [
      "Amplificadores de fibra óptica dopada con erbio (EDFA) de internet mundial",
      "Láseres dermatológicos y odontológicos Er:YAG",
      "Colorante rosa característico para gafas de sol y joyas de circonia",
      "Varillas absorbedoras de neutrones para centrales nucleares"
    ],
    "isotopes": [
      {
        "mass": 162,
        "name": "¹⁶²Er",
        "abundance": "0.14%",
        "stable": true
      },
      {
        "mass": 164,
        "name": "¹⁶⁴Er",
        "abundance": "1.60%",
        "stable": true
      },
      {
        "mass": 166,
        "name": "¹⁶⁶Er",
        "abundance": "33.50%",
        "stable": true
      },
      {
        "mass": 167,
        "name": "¹⁶⁷Er",
        "abundance": "22.87%",
        "stable": true
      },
      {
        "mass": 168,
        "name": "¹⁶⁸Er",
        "abundance": "26.98%",
        "stable": true
      },
      {
        "mass": 170,
        "name": "¹⁷⁰Er",
        "abundance": "14.91%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en sólido"
    ]
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Tulio",
    "latinName": "Thulium",
    "mass": 168.93,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹³ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "valenceElectrons": 13,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1818,
    "boilingPoint": 2223,
    "density": 9.32,
    "atomicRadius": 174,
    "covalentRadius": 190,
    "electronegativity": 1.25,
    "ionizationEnergy": 596.7,
    "electronAffinity": 50,
    "spectralLines": [
      371.8,
      384.8
    ],
    "discoveredBy": "Per Teodor Cleve",
    "discoveryYear": 1879,
    "description": "El lantánido natural más escaso. Tras ser bombardeado en un reactor nuclear, emite rayos X portátiles ideales para radiografías médicas de campaña en zonas remotas.",
    "summary": "El lantánido más escaso, fuente de rayos X en dispositivos médicos portátiles.",
    "uses": [
      "Dispositivos portátiles de rayos X alimentados por Tulio-170",
      "Láseres de tulio (Tm:YAG) para cirugía de próstata de mínima invasión",
      "Fósforos azules en pantallas y billetes bancarios de alta seguridad",
      "Materiales cerámicos de alta temperatura para microondas"
    ],
    "isotopes": [
      {
        "mass": 169,
        "name": "¹⁶⁹Tm",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en sólido"
    ]
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Iterbio",
    "latinName": "Ytterbium",
    "mass": 173.05,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1097,
    "boilingPoint": 1469,
    "density": 6.9,
    "atomicRadius": 173,
    "covalentRadius": 187,
    "electronegativity": 1.1,
    "ionizationEnergy": 603.4,
    "electronAffinity": -2,
    "spectralLines": [
      398.8,
      555.6
    ],
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "discoveryYear": 1878,
    "description": "Lantánido blando con capa 4f completamente llena. Base de los relojes atómicos de red óptica más estables del mundo y de láseres industriales de corte por fibra de alta potencia.",
    "summary": "Lantánido de precisión extrema para relojes atómicos y láseres de corte de fibra.",
    "uses": [
      "Relojes atómicos ópticos de iterbio con precisión de 1 segundo en la edad del universo",
      "Láseres de fibra dopada con iterbio para corte industrial de chapa de acero",
      "Sensores de estrés y manómetros de presión extrema en sismología",
      "Radioterapia médica con isótopo Iterbio-169"
    ],
    "isotopes": [
      {
        "mass": 168,
        "name": "¹⁶⁸Yb",
        "abundance": "0.13%",
        "stable": true
      },
      {
        "mass": 170,
        "name": "¹⁷⁰Yb",
        "abundance": "3.04%",
        "stable": true
      },
      {
        "mass": 171,
        "name": "¹⁷¹Yb",
        "abundance": "14.28%",
        "stable": true
      },
      {
        "mass": 172,
        "name": "¹⁷²Yb",
        "abundance": "21.83%",
        "stable": true
      },
      {
        "mass": 173,
        "name": "¹⁷³Yb",
        "abundance": "16.13%",
        "stable": true
      },
      {
        "mass": 174,
        "name": "¹⁷⁴Yb",
        "abundance": "31.83%",
        "stable": true
      },
      {
        "mass": 176,
        "name": "¹⁷⁶Yb",
        "abundance": "12.76%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo)"
    ]
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutecio",
    "latinName": "Lutetium",
    "mass": 174.97,
    "category": "lanthanide",
    "categoryName": "Lantánidos",
    "group": null,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1925,
    "boilingPoint": 3675,
    "density": 9.841,
    "atomicRadius": 172,
    "covalentRadius": 187,
    "electronegativity": 1.27,
    "ionizationEnergy": 523.5,
    "electronAffinity": 33.4,
    "spectralLines": [
      451.9,
      465.8
    ],
    "discoveredBy": "Georges Urbain y Carl Auer von Welsbach",
    "discoveryYear": 1907,
    "description": "El último, más pesado, denso y duro de los lantánidos. El isótopo Lutecio-177, unido a moléculas que se dirigen al tumor (como el PSMA-617), es un tratamiento de medicina nuclear de vanguardia contra el cáncer de próstata avanzado.",
    "summary": "El lantánido más denso; su isótopo Lu-177 destruye células cancerígenas con precisión.",
    "uses": [
      "Radioterapia dirigida con Lutecio-177 (Pluvicto) contra el cáncer de próstata metastásico",
      "Detectores de centelleo de oxiortosilicato de lutecio (LSO) en escáneres PET",
      "Catalizadores para craqueo e hidrogenación en petroquímica",
      "Datación radiométrica geológica Lutecio-Hafnio de rocas y meteoritos"
    ],
    "isotopes": [
      {
        "mass": 175,
        "name": "¹⁷⁵Lu",
        "abundance": "97.41%",
        "stable": true
      },
      {
        "mass": 176,
        "name": "¹⁷⁶Lu",
        "abundance": "2.59%",
        "stable": false,
        "halfLife": "3.78 × 10¹⁰ años"
      }
    ],
    "hazard": [
      "No peligroso en sólido"
    ]
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnio",
    "latinName": "Hafnium",
    "mass": 178.49,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 4,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d² 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d² 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      4
    ],
    "phase": "solid",
    "meltingPoint": 2506,
    "boilingPoint": 4876,
    "density": 13.31,
    "atomicRadius": 159,
    "covalentRadius": 175,
    "electronegativity": 1.3,
    "ionizationEnergy": 658.5,
    "electronAffinity": 17,
    "spectralLines": [
      286.2,
      343.8
    ],
    "discoveredBy": "Dirk Coster y George de Hevesy",
    "discoveryYear": 1923,
    "description": "Metal lustroso que absorbe neutrones de forma excepcional. El dióxido de hafnio (HfO₂) sustituyó al dióxido de silicio (SiO₂) como aislante dieléctrico de alta constante k en los transistores de los microprocesadores modernos.",
    "summary": "Metal absorbente de neutrones e innovador dieléctrico high-k en microchips.",
    "uses": [
      "Dieléctrico de puerta 'high-k' de HfO₂ en microprocesadores de última generación",
      "Barras de control de reactores nucleares en submarinos atómicos",
      "Superaleaciones para toberas de cohetes y turbinas de gas",
      "Electrodos de corte por plasma térmico"
    ],
    "isotopes": [
      {
        "mass": 174,
        "name": "¹⁷⁴Hf",
        "abundance": "0.16%",
        "stable": false,
        "halfLife": "2.0 × 10¹⁵ años"
      },
      {
        "mass": 176,
        "name": "¹⁷⁶Hf",
        "abundance": "5.26%",
        "stable": true
      },
      {
        "mass": 177,
        "name": "¹⁷⁷Hf",
        "abundance": "18.60%",
        "stable": true
      },
      {
        "mass": 178,
        "name": "¹⁷⁸Hf",
        "abundance": "27.28%",
        "stable": true
      },
      {
        "mass": 179,
        "name": "¹⁷⁹Hf",
        "abundance": "13.62%",
        "stable": true
      },
      {
        "mass": 180,
        "name": "¹⁸⁰Hf",
        "abundance": "35.08%",
        "stable": true
      }
    ],
    "hazard": [
      "Inflamable (en polvo fino)"
    ]
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tántalo",
    "latinName": "Tantalum",
    "mass": 180.95,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 5,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d³ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      5
    ],
    "phase": "solid",
    "meltingPoint": 3290,
    "boilingPoint": 5731,
    "density": 16.69,
    "atomicRadius": 146,
    "covalentRadius": 170,
    "electronegativity": 1.5,
    "ionizationEnergy": 761,
    "electronAffinity": 31,
    "spectralLines": [
      240,
      268.5
    ],
    "discoveredBy": "Anders Gustaf Ekeberg",
    "discoveryYear": 1802,
    "description": "Metal refractario casi inmune al ataque químico de ácidos a menos de 150 °C. Sus polvos forman condensadores de tántalo de altísima capacitancia miniaturizados en todos los smartphones.",
    "summary": "Metal anticorrosivo supremo miniaturizado en condensadores de móviles.",
    "uses": [
      "Condensadores electrolíticos de tántalo para teléfonos móviles y portátiles",
      "Implantes ortopédicos y mallas craneales quirúrgicas biocompatibles",
      "Recubrimientos resistentes a ácidos en reactores químicos industriales",
      "Superaleaciones para motores a reacción aeronáuticos"
    ],
    "isotopes": [
      {
        "mass": 180,
        "name": "¹⁸⁰ᵐTa",
        "abundance": "0.012%",
        "stable": true
      },
      {
        "mass": 181,
        "name": "¹⁸¹Ta",
        "abundance": "99.988%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en bloque"
    ]
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Wolframio",
    "latinName": "Wolframium",
    "mass": 183.84,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 6,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁴ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      4,
      6
    ],
    "phase": "solid",
    "meltingPoint": 3695,
    "boilingPoint": 5828,
    "density": 19.25,
    "atomicRadius": 139,
    "covalentRadius": 162,
    "electronegativity": 2.36,
    "ionizationEnergy": 770,
    "electronAffinity": 78.6,
    "spectralLines": [
      400.9,
      429.5
    ],
    "discoveredBy": "Hermanos Juan José y Fausto Delhuyar",
    "discoveryYear": 1783,
    "description": "El metal con el punto de fusión más alto de todos los metales (3422 °C) y la menor presión de vapor. El carburo de wolframio es casi tan duro como el diamante.",
    "summary": "Metal con el punto de fusión más alto del universo de elementos.",
    "uses": [
      "Herramientas de corte y brocas mineras de carburo de wolframio",
      "Filamentos clásicos de bombillas y tubos de rayos X",
      "Electrodos para soldadura por arco TIG",
      "Armaduras y proyectiles cinéticos de alta densidad"
    ],
    "isotopes": [
      {
        "mass": 182,
        "name": "¹⁸²W",
        "abundance": "26.50%",
        "stable": true
      },
      {
        "mass": 183,
        "name": "¹⁸³W",
        "abundance": "14.31%",
        "stable": true
      },
      {
        "mass": 184,
        "name": "¹⁸⁴W",
        "abundance": "30.64%",
        "stable": true
      },
      {
        "mass": 186,
        "name": "¹⁸⁶W",
        "abundance": "28.43%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en forma maciza"
    ]
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Renio",
    "latinName": "Rhenium",
    "mass": 186.21,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 7,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁵ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d⁵ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      4,
      6,
      7
    ],
    "phase": "solid",
    "meltingPoint": 3459,
    "boilingPoint": 5869,
    "density": 21.02,
    "atomicRadius": 137,
    "covalentRadius": 151,
    "electronegativity": 1.9,
    "ionizationEnergy": 760,
    "electronAffinity": 14.5,
    "spectralLines": [
      346,
      346.4
    ],
    "discoveredBy": "Masataka Ogawa / Ida Noddack, Walter Noddack y Otto Berg",
    "discoveryYear": 1925,
    "description": "Uno de los metales más raros de la corteza. El renio tiene el tercer punto de fusión más alto y se añade a las superaleaciones de turbinas de reactores de aviones comerciales y militares.",
    "summary": "Metal superdenso y refractario que permite operar turbinas de avión al límite térmico.",
    "uses": [
      "Superaleaciones monocristalinas para álabes de turbinas de reactores de aviones",
      "Catalizadores bimetálicos de platino-renio para reformado catalítico de gasolinas",
      "Termopares para medir temperaturas extremas hasta 2200 °C",
      "Contactos eléctricos resistentes a arcos voltaicos"
    ],
    "isotopes": [
      {
        "mass": 185,
        "name": "¹⁸⁵Re",
        "abundance": "37.40%",
        "stable": true
      },
      {
        "mass": 187,
        "name": "¹⁸⁷Re",
        "abundance": "62.60%",
        "stable": false,
        "halfLife": "4.12 × 10¹⁰ años"
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmio",
    "latinName": "Osmium",
    "mass": 190.23,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 8,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁶ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d⁶ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      2,
      3,
      4,
      8
    ],
    "phase": "solid",
    "meltingPoint": 3306,
    "boilingPoint": 5285,
    "density": 22.59,
    "atomicRadius": 135,
    "covalentRadius": 144,
    "electronegativity": 2.2,
    "ionizationEnergy": 840,
    "electronAffinity": 106.1,
    "spectralLines": [
      290.9,
      426.1
    ],
    "discoveredBy": "Smithson Tennant",
    "discoveryYear": 1803,
    "description": "El elemento natural más denso de todos los conocidos (22.59 g/cm³), dos veces más denso que el plomo. Su tetraóxido (OsO₄) se usa como fijador celular en microscopía electrónica.",
    "summary": "El elemento más denso conocido por el ser humano (22.59 g/cm³).",
    "uses": [
      "Fijador y contraste de lípidos en microscopía electrónica de transmisión (TEM)",
      "Puntas ultra-duraderas de plumas estilográficas de lujo y agujas de tocadiscos",
      "Contactos eléctricos resistentes a arcos y fricción extrema",
      "Catalizador de dihidroxilación asimétrica de Sharpless"
    ],
    "isotopes": [
      {
        "mass": 184,
        "name": "¹⁸⁴Os",
        "abundance": "0.02%",
        "stable": true
      },
      {
        "mass": 187,
        "name": "¹⁸⁷Os",
        "abundance": "1.96%",
        "stable": true
      },
      {
        "mass": 188,
        "name": "¹⁸⁸Os",
        "abundance": "13.24%",
        "stable": true
      },
      {
        "mass": 189,
        "name": "¹⁸⁹Os",
        "abundance": "16.15%",
        "stable": true
      },
      {
        "mass": 190,
        "name": "¹⁹⁰Os",
        "abundance": "26.26%",
        "stable": true
      },
      {
        "mass": 192,
        "name": "¹⁹²Os",
        "abundance": "40.78%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico severo (tetraóxido de osmio OsO₄)"
    ]
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridio",
    "latinName": "Iridium",
    "mass": 192.22,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 9,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁷ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d⁷ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 2719,
    "boilingPoint": 4701,
    "density": 22.56,
    "atomicRadius": 136,
    "covalentRadius": 141,
    "electronegativity": 2.2,
    "ionizationEnergy": 880,
    "electronAffinity": 151,
    "spectralLines": [
      351.4,
      380
    ],
    "discoveredBy": "Smithson Tennant",
    "discoveryYear": 1803,
    "description": "El metal más resistente a la corrosión que existe. Una capa anómala de iridio en estratos de 66 millones de años en todo el mundo demostró el impacto del asteroide que extinguió a los dinosaurios.",
    "summary": "Metal anticorrosivo supremo y testigo del impacto del meteorito de los dinosaurios.",
    "uses": [
      "Crisoles de iridio para fundir monocristales láser a más de 2000 °C",
      "Bujías de alto rendimiento de iridio para aviación y automoción",
      "Electrodos para estimulación cerebral profunda y marcapasos",
      "Catalizadores para electrolizadores de agua de membrana PEM para hidrógeno verde"
    ],
    "isotopes": [
      {
        "mass": 191,
        "name": "¹⁹¹Ir",
        "abundance": "37.3%",
        "stable": true
      },
      {
        "mass": 193,
        "name": "¹⁹³Ir",
        "abundance": "62.7%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso en sólido"
    ]
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platino",
    "latinName": "Platinum",
    "mass": 195.08,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 10,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁹ 6s¹",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 2041.4,
    "boilingPoint": 4098,
    "density": 21.45,
    "atomicRadius": 139,
    "covalentRadius": 136,
    "electronegativity": 2.28,
    "ionizationEnergy": 870,
    "electronAffinity": 205.3,
    "spectralLines": [
      306.5,
      340.8
    ],
    "discoveredBy": "Antonio de Ulloa",
    "discoveryYear": 1735,
    "description": "Metal precioso noble sumamente denso y maleable. El cisplatino a base de platino es uno de los medicamentos de quimioterapia oncológica más eficaces de la medicina moderna.",
    "summary": "Metal noble precioso clave en catálisis de automóviles, hidrógeno y fármacos oncológicos.",
    "uses": [
      "Convertidores catalíticos de emisiones de vehículos",
      "Fármacos quimioterápicos contra el cáncer (cisplatino y carboplatino)",
      "Catalizadores de celdas de combustible de hidrógeno de membrana PEM",
      "Joyería fina inalterable y electrodos de laboratorio"
    ],
    "isotopes": [
      {
        "mass": 190,
        "name": "¹⁹⁰Pt",
        "abundance": "0.012%",
        "stable": false,
        "halfLife": "6.5 × 10¹¹ años"
      },
      {
        "mass": 192,
        "name": "¹⁹²Pt",
        "abundance": "0.782%",
        "stable": true
      },
      {
        "mass": 194,
        "name": "¹⁹⁴Pt",
        "abundance": "32.864%",
        "stable": true
      },
      {
        "mass": 195,
        "name": "¹⁹⁵Pt",
        "abundance": "33.775%",
        "stable": true
      },
      {
        "mass": 196,
        "name": "¹⁹⁶Pt",
        "abundance": "25.211%",
        "stable": true
      },
      {
        "mass": 198,
        "name": "¹⁹⁸Pt",
        "abundance": "7.356%",
        "stable": true
      }
    ],
    "hazard": [
      "Sensibilizante (complejos de platino)"
    ]
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Oro",
    "latinName": "Aurum",
    "mass": 196.97,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 11,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s¹",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      1,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1337.33,
    "boilingPoint": 3243,
    "density": 19.3,
    "atomicRadius": 144,
    "covalentRadius": 136,
    "electronegativity": 2.54,
    "ionizationEnergy": 890.1,
    "electronAffinity": 222.8,
    "spectralLines": [
      242.8,
      267.6,
      583.7
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "El metal más maleable y dúctil que existe. Un solo gramo puede estirarse en un hilo de más de 2 kilómetros. No se oxida ni deslustra jamás debido a efectos relativistas sobre sus electrones.",
    "summary": "El metal precioso incorruptible símbolo de riqueza y reflector infrarrojo espacial.",
    "uses": [
      "Contactos eléctricos dorados inmunes a la corrosión en microelectrónica y audio",
      "Recubrimientos reflectores de infrarrojos en visores de astronautas y satélites",
      "Joyería fina, lingotes de reserva bancaria y orfebrería",
      "Nanopartículas de oro en pruebas de diagnóstico rápido (antígenos) y terapias tumorales"
    ],
    "isotopes": [
      {
        "mass": 197,
        "name": "¹⁹⁷Au",
        "abundance": "100%",
        "stable": true
      }
    ],
    "hazard": [
      "No peligroso"
    ]
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercurio",
    "latinName": "Hydrargyrum",
    "mass": 200.59,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 12,
    "period": 6,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      1,
      2
    ],
    "phase": "liquid",
    "meltingPoint": 234.32,
    "boilingPoint": 629.88,
    "density": 13.534,
    "atomicRadius": 151,
    "covalentRadius": 132,
    "electronegativity": 2,
    "ionizationEnergy": 1007.1,
    "electronAffinity": -48,
    "spectralLines": [
      253.7,
      404.7,
      435.8,
      546.1,
      579.1
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "El único metal líquido a temperatura ambiente. Conocido antiguamente como 'plata líquida'. Sus vapores y compuestos orgánicos como el metilmercurio son neurotóxicos graves.",
    "summary": "Único metal elemental líquido a temperatura ambiente, denso y neurotóxico.",
    "uses": [
      "Lámparas de vapor de mercurio y tubos fluorescentes de descarga",
      "Amalgamas dentales clásicas de plata-estaño-mercurio",
      "Electrodos de mercurio para la producción electroquímica de cloro-sosa",
      "Barómetros y manómetros de presión de precisión históricos"
    ],
    "isotopes": [
      {
        "mass": 196,
        "name": "¹⁹⁶Hg",
        "abundance": "0.15%",
        "stable": true
      },
      {
        "mass": 198,
        "name": "¹⁹⁸Hg",
        "abundance": "10.04%",
        "stable": true
      },
      {
        "mass": 199,
        "name": "¹⁹⁹Hg",
        "abundance": "16.94%",
        "stable": true
      },
      {
        "mass": 200,
        "name": "²⁰⁰Hg",
        "abundance": "23.14%",
        "stable": true
      },
      {
        "mass": 201,
        "name": "²⁰¹Hg",
        "abundance": "13.17%",
        "stable": true
      },
      {
        "mass": 202,
        "name": "²⁰²Hg",
        "abundance": "29.74%",
        "stable": true
      },
      {
        "mass": 204,
        "name": "²⁰⁴Hg",
        "abundance": "6.82%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico mortal por inhalación",
      "Peligro para la salud reproductiva",
      "Peligro ambiental"
    ]
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Talio",
    "latinName": "Thallium",
    "mass": 204.38,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 13,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p¹",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      1,
      3
    ],
    "phase": "solid",
    "meltingPoint": 577,
    "boilingPoint": 1746,
    "density": 11.85,
    "atomicRadius": 170,
    "covalentRadius": 145,
    "electronegativity": 1.62,
    "ionizationEnergy": 589.4,
    "electronAffinity": 36.4,
    "spectralLines": [
      377.6,
      535
    ],
    "discoveredBy": "William Crookes",
    "discoveryYear": 1861,
    "description": "Metal blando sumamente tóxico que imita químicamente al potasio en el organismo, interfiriendo en procesos celulares vitales. Su isótopo Talio-201 se usa en pruebas cardíacas de esfuerzo.",
    "summary": "Metal blando altamente tóxico cuyo isótopo Tl-201 evalúa la salud cardíaca.",
    "uses": [
      "Gammagrafías de perfusión miocárdica de estrés con Talio-201 en cardiología",
      "Vidrios de alto índice de refracción y bajo punto de fusión",
      "Materiales superconductores de alta temperatura basados en talio",
      "Detectores fotoeléctricos de infrarrojos"
    ],
    "isotopes": [
      {
        "mass": 203,
        "name": "²⁰³Tl",
        "abundance": "29.52%",
        "stable": true
      },
      {
        "mass": 205,
        "name": "²⁰⁵Tl",
        "abundance": "70.48%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico mortal",
      "Peligro acumulativo"
    ]
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Plomo",
    "latinName": "Plumbum",
    "mass": 207.2,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 14,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p²",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 600.61,
    "boilingPoint": 2022,
    "density": 11.34,
    "atomicRadius": 175,
    "covalentRadius": 146,
    "electronegativity": 2.33,
    "ionizationEnergy": 715.6,
    "electronAffinity": 34.4,
    "spectralLines": [
      283.3,
      368.3,
      405.8
    ],
    "discoveredBy": "Conocido desde la Antigüedad",
    "discoveryYear": "Antigüedad",
    "description": "Metal pesado denso, maleable y dúctil que detiene eficazmente la radiación ionizante. Es el producto final estable de las cadenas de desintegración radiactiva naturales del uranio y torio.",
    "summary": "Metal pesado denso que actúa como escudo contra radiación y rayos X.",
    "uses": [
      "Baterías de plomo-ácido de arranque en automóviles de combustión",
      "Blindaje contra rayos X y radiación gamma en hospitales y salas radiológicas",
      "Lastres de inmersión para buceo y embarcaciones marítimas",
      "Células solares de perovskita híbridas de haluro de plomo"
    ],
    "isotopes": [
      {
        "mass": 204,
        "name": "²⁰⁴Pb",
        "abundance": "1.4%",
        "stable": true
      },
      {
        "mass": 206,
        "name": "²⁰⁶Pb",
        "abundance": "24.1%",
        "stable": true
      },
      {
        "mass": 207,
        "name": "²⁰⁷Pb",
        "abundance": "22.1%",
        "stable": true
      },
      {
        "mass": 208,
        "name": "²⁰⁸Pb",
        "abundance": "52.4%",
        "stable": true
      }
    ],
    "hazard": [
      "Tóxico para el desarrollo neurológico",
      "Peligro reproductivo"
    ]
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuto",
    "latinName": "Bismuthum",
    "mass": 208.98,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 15,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p³",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 544.7,
    "boilingPoint": 1837,
    "density": 9.78,
    "atomicRadius": 155,
    "covalentRadius": 148,
    "electronegativity": 2.02,
    "ionizationEnergy": 703,
    "electronAffinity": 91.2,
    "spectralLines": [
      289.8,
      306.8
    ],
    "discoveredBy": "Claude François Geoffroy",
    "discoveryYear": 1753,
    "description": "Metal pesado prácticamente no tóxico con cristales iridiscentes en forma de tolva que reflejan colores del arco iris. Su isótopo Bi-209 es técnicamente radiactivo pero con una vida media de 20 trillones de años.",
    "summary": "Metal pesado no tóxico con cristales iridiscentes y aplicaciones gástricas.",
    "uses": [
      "Subsalicilato de bismuto (Pepto-Bismol) para el alivio del malestar estomacal",
      "Sistemas contra incendios de rociadores automáticos (aleación de Wood)",
      "Sustituto ecológico no tóxico del plomo en perdigones y plomadas de pesca",
      "Termoelectricidad para refrigeradores compactos de estado sólido"
    ],
    "isotopes": [
      {
        "mass": 209,
        "name": "²⁰⁹Bi",
        "abundance": "100%",
        "stable": false,
        "halfLife": "2.01 × 10¹⁹ años"
      }
    ],
    "hazard": [
      "No peligroso (baja toxicidad)"
    ]
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonio",
    "latinName": "Polonium",
    "mass": 209,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 16,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁴",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 527,
    "boilingPoint": 1235,
    "density": 9.196,
    "atomicRadius": 167,
    "covalentRadius": 140,
    "electronegativity": 2,
    "ionizationEnergy": 812.1,
    "electronAffinity": 183.3,
    "spectralLines": [
      417,
      429
    ],
    "discoveredBy": "Marie Curie y Pierre Curie",
    "discoveryYear": 1898,
    "description": "Descubierto por Marie Curie y nombrado en honor a su tierra natal Polonia. Emisor alfa de extraordinaria potencia que genera tanto calor por desintegración que una cápsula puede alcanzar los 500 °C espontáneamente.",
    "summary": "Emisor alfa superpotente descubierto por Marie Curie.",
    "uses": [
      "Generadores termoeléctricos de radioisótopos (RTG) en sondas lunares soviéticas Lunojod",
      "Cepillos antiestáticos de descarga para películas fotográficas e industrias textiles",
      "Fuentes de neutrones junto con berilio para reactores de investigación",
      "Investigación en física radiológica"
    ],
    "isotopes": [
      {
        "mass": 209,
        "name": "²⁰⁹Po",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "125 años"
      },
      {
        "mass": 210,
        "name": "²¹⁰Po",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "138.38 días"
      }
    ],
    "hazard": [
      "Radiactivo extremo",
      "Tóxico letal"
    ]
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Ástato",
    "latinName": "Astatum",
    "mass": 210,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 17,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁵",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1,
      1,
      3,
      5,
      7
    ],
    "phase": "solid",
    "meltingPoint": 575,
    "boilingPoint": 610,
    "density": 7,
    "atomicRadius": 145,
    "covalentRadius": 150,
    "electronegativity": 2.2,
    "ionizationEnergy": 899,
    "electronAffinity": 270.1,
    "spectralLines": [
      224.4,
      244
    ],
    "discoveredBy": "Dale R. Corson, Kenneth Ross MacKenzie y Emilio Segrè",
    "discoveryYear": 1940,
    "description": "El elemento natural más raro de la corteza terrestre (menos de 30 gramos en todo el planeta en un momento dado). Su isótopo Ástato-211 es un candidato prometedor en terapia alfa dirigida contra tumores.",
    "summary": "El elemento natural más escaso de la Tierra, prometedor en terapia alfa dirigida.",
    "uses": [
      "Radioterapia alfa dirigida con Ástato-211 para destruir células cancerígenas individuales",
      "Investigación sobre enlace halógeno pesado y efectos relativistas",
      "Física de radioelementos ultra-pesados"
    ],
    "isotopes": [
      {
        "mass": 210,
        "name": "²¹⁰At",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "8.1 horas"
      },
      {
        "mass": 211,
        "name": "²¹¹At",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "7.21 horas"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico"
    ]
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radón",
    "latinName": "Radon",
    "mass": 222,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 6,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶",
    "electronConfigurationSemantic": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      0,
      2
    ],
    "phase": "gas",
    "meltingPoint": 202,
    "boilingPoint": 211.5,
    "density": 0.00973,
    "atomicRadius": 120,
    "covalentRadius": 150,
    "electronegativity": 2.2,
    "ionizationEnergy": 1037,
    "electronAffinity": -68,
    "spectralLines": [
      705.5,
      745
    ],
    "discoveredBy": "Friedrich Ernst Dorn",
    "discoveryYear": 1900,
    "description": "Gas noble radiactivo e incoloro que emana de rocas y suelos que contienen uranio (como el granito). Es la principal causa ambiental de cáncer de pulmón en no fumadores por acumulación en sótanos mal ventilados.",
    "summary": "Gas noble radiactivo natural que emana de rocas graníticas.",
    "uses": [
      "Trazador hidrológico para detectar flujos de aguas subterráneas",
      "Predicción sismológica mediante monitorización de fugas de gas en fallas tectónicas",
      "Radioterapia histórica mediante semillas de radón encapsuladas",
      "Estudio de ventilación ambiental en edificios"
    ],
    "isotopes": [
      {
        "mass": 222,
        "name": "²²²Rn",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "3.82 días"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Carcinógeno por inhalación",
      "Gas peligroso"
    ]
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francio",
    "latinName": "Francium",
    "mass": 223,
    "category": "alkali-metal",
    "categoryName": "Metales alcalinos",
    "group": 1,
    "period": 7,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s¹",
    "electronConfigurationSemantic": "[Rn] 7s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "valenceElectrons": 1,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 300,
    "boilingPoint": 950,
    "density": 2.48,
    "atomicRadius": 348,
    "covalentRadius": 260,
    "electronegativity": 0.7,
    "ionizationEnergy": 380,
    "electronAffinity": 46.9,
    "spectralLines": [
      718,
      817
    ],
    "discoveredBy": "Marguerite Perey",
    "discoveryYear": 1939,
    "description": "Descubierto por Marguerite Perey en el Instituto Curie de París. Es el segundo elemento natural más escaso y el metal alcalino más inestable; su isótopo más duradero tiene una vida media de solo 22 minutos.",
    "summary": "Metal alcalino fugaz descubierto por Marguerite Perey en Francia.",
    "uses": [
      "Atrapamiento magneto-óptico de átomos fríos para comprobar el Modelo Estándar de la física",
      "Estudios sobre la fuerza nuclear débil y violación de paridad atómica",
      "Investigación en física atómica cuántica"
    ],
    "isotopes": [
      {
        "mass": 223,
        "name": "²²³Fr",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "22.0 minutos"
      }
    ],
    "hazard": [
      "Radiactivo extremo",
      "Reactivo"
    ]
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radio",
    "latinName": "Radium",
    "mass": 226,
    "category": "alkaline-earth",
    "categoryName": "Metales alcalinotérreos",
    "group": 2,
    "period": 7,
    "block": "s",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 973,
    "boilingPoint": 2010,
    "density": 5.5,
    "atomicRadius": 283,
    "covalentRadius": 221,
    "electronegativity": 0.9,
    "ionizationEnergy": 509.3,
    "electronAffinity": 9.6,
    "spectralLines": [
      381.5,
      468.2,
      482.6
    ],
    "discoveredBy": "Marie Curie y Pierre Curie",
    "discoveryYear": 1898,
    "description": "Metal alcalinotérreo intensamente radiactivo que brilla en la oscuridad con una tenue luz azulada. Marie Curie aisló el elemento a partir de toneladas de pechblenda, iniciando la era de la radioterapia.",
    "summary": "Metal radiactivo icónico aislado por Marie Curie que impulsó la radioterapia moderna.",
    "uses": [
      "Radiofármaco Radio-223 (Xofigo) para tratar metástasis óseas en cáncer de próstata",
      "Pinturas luminiscentes históricas para relojes e instrumentos de aviación",
      "Fuentes de neutrones portátiles al mezclarse con berilio",
      "Estudios pioneros de física atómica"
    ],
    "isotopes": [
      {
        "mass": 226,
        "name": "²²⁶Ra",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "1,600 años"
      },
      {
        "mass": 228,
        "name": "²²⁸Ra",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "5.75 años"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico para los huesos",
      "Carcinógeno"
    ]
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinio",
    "latinName": "Actinium",
    "mass": 227,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 6d¹ 7s²",
    "electronConfigurationSemantic": "[Rn] 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1500,
    "boilingPoint": 3500,
    "density": 10.07,
    "atomicRadius": 195,
    "covalentRadius": 215,
    "electronegativity": 1.1,
    "ionizationEnergy": 499,
    "electronAffinity": 33.8,
    "spectralLines": [
      416.8,
      418
    ],
    "discoveredBy": "André-Louis Debierne",
    "discoveryYear": 1899,
    "description": "Primer elemento de la serie de los actínidos. Su brillo azul intenso proviene de la ionización del aire circundante debida a su potente actividad radiactiva. El Actinio-225 es la estrella de la terapia alfa médica.",
    "summary": "Primer actínido; su isótopo Ac-225 es una revolución en inmunoterapia contra el cáncer.",
    "uses": [
      "Terapia de radionúclidos dirigida con Actinio-225 contra tumores y cáncer de próstata",
      "Generador de Bismuto-213 para medicina nuclear",
      "Fuente termoeléctrica y generador de neutrones",
      "Investigación en física de actínidos"
    ],
    "isotopes": [
      {
        "mass": 225,
        "name": "²²⁵Ac",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "9.92 días (terapia oncológica)"
      },
      {
        "mass": 227,
        "name": "²²⁷Ac",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "21.77 años"
      }
    ],
    "hazard": [
      "Radiactivo severo"
    ]
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Torio",
    "latinName": "Thorium",
    "mass": 232.04,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 6d² 7s²",
    "electronConfigurationSemantic": "[Rn] 6d² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      4
    ],
    "phase": "solid",
    "meltingPoint": 2023,
    "boilingPoint": 5061,
    "density": 11.72,
    "atomicRadius": 180,
    "covalentRadius": 206,
    "electronegativity": 1.3,
    "ionizationEnergy": 587,
    "electronAffinity": 112.7,
    "spectralLines": [
      401.9,
      408.6
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "discoveryYear": 1829,
    "description": "Actínido tres veces más abundante en la corteza terrestre que el uranio. Es un combustible nuclear fértil prometedor para los reactores de sales fundidas (MSR), que generan mucha menor cantidad de residuos de larga vida.",
    "summary": "Combustible nuclear alternativo y limpio para reactores de sales fundidas.",
    "uses": [
      "Combustible fértil en reactores nucleares avanzados de ciclo de torio (MSR)",
      "Electrodos de tungsteno toriado para soldadura TIG de alta estabilidad de arco",
      "Camisas incandescentes de linternas de gas de camping (óxido de torio)",
      "Vidrios ópticos de alta refracción para lentes científicas"
    ],
    "isotopes": [
      {
        "mass": 232,
        "name": "²³²Th",
        "abundance": "100%",
        "stable": false,
        "halfLife": "1.405 × 10¹⁰ años"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico"
    ]
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinio",
    "latinName": "Protactinium",
    "mass": 231.04,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f² 6s² 6p⁶ 6d¹ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f² 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      4,
      5
    ],
    "phase": "solid",
    "meltingPoint": 1841,
    "boilingPoint": 4300,
    "density": 15.37,
    "atomicRadius": 169,
    "covalentRadius": 200,
    "electronegativity": 1.5,
    "ionizationEnergy": 568,
    "electronAffinity": 53,
    "spectralLines": [
      395.7,
      402.4
    ],
    "discoveredBy": "Kasimir Fajans, Oswald Helmuth Göhring, Lise Meitner y Otto Hahn",
    "discoveryYear": 1913,
    "description": "Actínido intermedio en la cadena de desintegración radiactiva del Uranio-235. Es extremadamente radiactivo y se emplea en oceanografía y geocronología de sedimentos marinos.",
    "summary": "Actínido radiactivo utilizado para datar sedimentos marinos de hasta 175.000 años.",
    "uses": [
      "Datación radiométrica de sedimentos oceánicos profundos (Pa-231/Th-230)",
      "Intermedio en el ciclo de combustible nuclear de torio",
      "Investigación fundamental de la química de actínidos"
    ],
    "isotopes": [
      {
        "mass": 231,
        "name": "²³¹Pa",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "32,760 años"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico"
    ]
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranio",
    "latinName": "Uranium",
    "mass": 238.03,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f³ 6s² 6p⁶ 6d¹ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f³ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      3,
      4,
      5,
      6
    ],
    "phase": "solid",
    "meltingPoint": 1405.3,
    "boilingPoint": 4404,
    "density": 19.1,
    "atomicRadius": 156,
    "covalentRadius": 196,
    "electronegativity": 1.38,
    "ionizationEnergy": 597.6,
    "electronAffinity": 50.9,
    "spectralLines": [
      385.9,
      409
    ],
    "discoveredBy": "Martin Heinrich Klaproth",
    "discoveryYear": 1789,
    "description": "El elemento primordial de la energía nuclear. Su isótopo fisible Uranio-235 alimenta los reactores nucleares civiles mundiales, generando electricidad masiva con bajas emisiones de carbono.",
    "summary": "El combustible nuclear por excelencia que alimenta las centrales atómicas del mundo.",
    "uses": [
      "Combustible nuclear de fisión para centrales nucleares comerciales (U-235)",
      "Blindaje contra radiaciones y penetradores de blindaje con uranio empobrecido",
      "Datación geológica de la edad de la Tierra (Uranio-Plomo, 4500 millones de años)",
      "Colorante histórico verde fluorescente para cristal de uranio (vaselina)"
    ],
    "isotopes": [
      {
        "mass": 234,
        "name": "²³⁴U",
        "abundance": "0.0054%",
        "stable": false,
        "halfLife": "2.45 × 10⁵ años"
      },
      {
        "mass": 235,
        "name": "²³⁵U",
        "abundance": "0.7204%",
        "stable": false,
        "halfLife": "7.04 × 10⁸ años (fisión)"
      },
      {
        "mass": 238,
        "name": "²³⁸U",
        "abundance": "99.2742%",
        "stable": false,
        "halfLife": "4.468 × 10⁹ años"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico químico renal"
    ]
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunio",
    "latinName": "Neptunium",
    "mass": 237,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁴ 6s² 6p⁶ 6d¹ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f⁴ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      3,
      4,
      5,
      6,
      7
    ],
    "phase": "solid",
    "meltingPoint": 917,
    "boilingPoint": 4273,
    "density": 20.45,
    "atomicRadius": 155,
    "covalentRadius": 190,
    "electronegativity": 1.36,
    "ionizationEnergy": 604.5,
    "electronAffinity": 45.8,
    "spectralLines": [
      410.8,
      430
    ],
    "discoveredBy": "Edwin McMillan y Philip H. Abelson",
    "discoveryYear": 1940,
    "description": "El primer elemento transuránico sintético producido en la historia. Se forma como subproducto en reactores nucleares y es el precursor para fabricar Plutonio-238 para misiones espaciales.",
    "summary": "Primer transuránico sintetizado, precursor del Plutonio-238 espacial.",
    "uses": [
      "Precursor en la síntesis nuclear de Plutonio-238 para baterías espaciales RTG",
      "Detectores de neutrones de alta energía en física nuclear",
      "Investigación en física de actínidos transuránicos"
    ],
    "isotopes": [
      {
        "mass": 237,
        "name": "²³⁷Np",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "2.14 × 10⁶ años"
      }
    ],
    "hazard": [
      "Radiactivo",
      "Tóxico"
    ]
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonio",
    "latinName": "Plutonium",
    "mass": 244,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁶ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f⁶ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      3,
      4,
      5,
      6,
      7
    ],
    "phase": "solid",
    "meltingPoint": 912.5,
    "boilingPoint": 3505,
    "density": 19.816,
    "atomicRadius": 159,
    "covalentRadius": 187,
    "electronegativity": 1.28,
    "ionizationEnergy": 584.7,
    "electronAffinity": -48,
    "spectralLines": [
      398.9,
      412.5
    ],
    "discoveredBy": "Glenn T. Seaborg, Edwin McMillan, Joseph W. Kennedy y Arthur Wahl",
    "discoveryYear": 1940,
    "description": "Actínido artificial sumamente potente. El calor producido por el Plutonio-238 alimenta los generadores RTG de las sondas espaciales Voyager, New Horizons y los rovers marcianos Curiosity y Perseverance.",
    "summary": "Combustible de las baterías atómicas que impulsan las sondas espaciales lejanas.",
    "uses": [
      "Generadores termoeléctricos de radioisótopos (RTG) en sondas espaciales (Voyager, Perseverance)",
      "Combustible nuclear MOX para reactores comerciales",
      "Armas nucleares de disuasión estratégica (Pu-239)",
      "Marcapasos cardíacos atómicos de larga duración históricos"
    ],
    "isotopes": [
      {
        "mass": 238,
        "name": "²³⁸Pu",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "87.7 años (RTG espacial)"
      },
      {
        "mass": 239,
        "name": "²³⁹Pu",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "24,110 años (fisión)"
      },
      {
        "mass": 244,
        "name": "²⁴⁴Pu",
        "abundance": "Trazas",
        "stable": false,
        "halfLife": "8.0 × 10⁷ años"
      }
    ],
    "hazard": [
      "Radiactivo extremo",
      "Tóxico celular y óseo"
    ]
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americio",
    "latinName": "Americium",
    "mass": 243,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁷ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f⁷ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      2,
      3,
      4,
      5,
      6
    ],
    "phase": "solid",
    "meltingPoint": 1449,
    "boilingPoint": 2880,
    "density": 12,
    "atomicRadius": 173,
    "covalentRadius": 180,
    "electronegativity": 1.3,
    "ionizationEnergy": 578,
    "electronAffinity": 9.9,
    "spectralLines": [
      457.5,
      466.2
    ],
    "discoveredBy": "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan y Albert Ghiorso",
    "discoveryYear": 1944,
    "description": "El único elemento sintético presente en los hogares cotidianos. Una fracción de microgramo de Americio-241 ioniza el aire en los detectores de humo residenciales para salvar vidas ante conatos de incendio.",
    "summary": "Elemento radiactivo guardián en millones de detectores de humo domésticos.",
    "uses": [
      "Detectores de humo domésticos por cámara de ionización (Americio-241)",
      "Medidores de densidad y humedad en obras civiles mediante atenuación de rayos gamma",
      "Fuentes portátiles de neutrones para prospección petrolera",
      "Baterías térmicas espaciales de larga vida"
    ],
    "isotopes": [
      {
        "mass": 241,
        "name": "²⁴¹Am",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "432.2 años (detectores de humo)"
      },
      {
        "mass": 243,
        "name": "²⁴³Am",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "7,370 años"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curio",
    "latinName": "Curium",
    "mass": 247,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁷ 6s² 6p⁶ 6d¹ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f⁷ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1613,
    "boilingPoint": 3383,
    "density": 13.51,
    "atomicRadius": 174,
    "covalentRadius": 169,
    "electronegativity": 1.3,
    "ionizationEnergy": 581,
    "electronAffinity": 27.2,
    "spectralLines": [
      420.7,
      431.1
    ],
    "discoveredBy": "Glenn T. Seaborg, Ralph A. James y Albert Ghiorso",
    "discoveryYear": 1944,
    "description": "Nombrado en honor a Marie y Pierre Curie. Es un emisor alfa tan potente que sus muestras sólidas se calientan solas por su propia radiactividad. El Curio-244 alimentó los espectrómetros de rayos X y partículas alfa (APXS) de los rovers en Marte.",
    "summary": "Nombrado por los Curie; analizó las rocas de Marte con espectrómetros APXS.",
    "uses": [
      "Espectrómetros de rayos X de partículas alfa (APXS) en misiones a Marte (Pathfinder, Spirit, Opportunity)",
      "Generadores termoeléctricos de radioisótopos especiales",
      "Precursor para sintetizar elementos superpesados como californio"
    ],
    "isotopes": [
      {
        "mass": 244,
        "name": "²⁴⁴Cm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "18.11 años (APXS)"
      },
      {
        "mass": 247,
        "name": "²⁴⁷Cm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "1.56 × 10⁷ años"
      },
      {
        "mass": 248,
        "name": "²⁴⁸Cm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "3.48 × 10⁵ años"
      }
    ],
    "hazard": [
      "Radiactivo extremo"
    ]
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelio",
    "latinName": "Berkelium",
    "mass": 247,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f⁹ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f⁹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1259,
    "boilingPoint": 2900,
    "density": 14.78,
    "atomicRadius": 170,
    "covalentRadius": 168,
    "electronegativity": 1.3,
    "ionizationEnergy": 601,
    "electronAffinity": -165,
    "spectralLines": [
      412,
      425
    ],
    "discoveredBy": "Lawrence Berkeley National Laboratory (Seaborg, Thompson, Ghiorso)",
    "discoveryYear": 1949,
    "description": "Sintetizado en la Universidad de California en Berkeley. El blanco de Berkelio-249 fue bombardeado con iones de Calcio-48 para descubrir en 2010 el elemento 117 (Teneso).",
    "summary": "Actínido sintético clave que permitió descubrir el elemento Teneso.",
    "uses": [
      "Blanco nuclear diana para la síntesis de elementos superpesados (Teneso-117)",
      "Investigación en química de coordinación de actínidos tardíos"
    ],
    "isotopes": [
      {
        "mass": 247,
        "name": "²⁴⁷Bk",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "1,380 años"
      },
      {
        "mass": 249,
        "name": "²⁴⁹Bk",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "330 días"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californio",
    "latinName": "Californium",
    "mass": 251,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁰ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁰ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "valenceElectrons": 12,
    "oxidationStates": [
      2,
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": 1173,
    "boilingPoint": 1743,
    "density": 15.1,
    "atomicRadius": 186,
    "covalentRadius": 168,
    "electronegativity": 1.3,
    "ionizationEnergy": 608,
    "electronAffinity": -97,
    "spectralLines": [
      410,
      430
    ],
    "discoveredBy": "Lawrence Berkeley National Laboratory (Seaborg, Thompson, Street, Ghiorso)",
    "discoveryYear": 1950,
    "description": "Uno de los emisores de neutrones más potentes que existen. Un solo microgramo de Californio-252 emite 2.3 millones de neutrones por segundo, permitiendo encender reactores nucleares y detectar explosivos.",
    "summary": "Prodigiosa fuente portátil de neutrones para iniciar reactores nucleares.",
    "uses": [
      "Fuente de neutrones de arranque para poner en marcha reactores nucleares",
      "Análisis por activación neutrónica para detectar explosivos y drogas en aduanas",
      "Braquiterapia de radiación neutrónica contra cánceres cervicales y cerebrales",
      "Radiografía neutrónica para inspeccionar componentes de aeronaves"
    ],
    "isotopes": [
      {
        "mass": 249,
        "name": "²⁴⁹Cf",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "351 años"
      },
      {
        "mass": 251,
        "name": "²⁵¹Cf",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "898 años"
      },
      {
        "mass": 252,
        "name": "²⁵²Cf",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "2.645 años (fuente de neutrones)"
      }
    ],
    "hazard": [
      "Radiactivo extremo"
    ]
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einstenio",
    "latinName": "Einsteinium",
    "mass": 252,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹¹ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "valenceElectrons": 13,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1133,
    "boilingPoint": 1269,
    "density": 8.84,
    "atomicRadius": 186,
    "covalentRadius": 165,
    "electronegativity": 1.3,
    "ionizationEnergy": 619,
    "electronAffinity": -28.6,
    "spectralLines": [
      418,
      432
    ],
    "discoveredBy": "Albert Ghiorso y colaboradores",
    "discoveryYear": 1952,
    "description": "Descubierto en los restos radiactivos de la primera explosión de una bomba de hidrógeno termonuclear ('Ivy Mike') en 1952 y nombrado en homenaje a Albert Einstein.",
    "summary": "Descubierto en los restos de la primera bomba de hidrógeno en honor a Einstein.",
    "uses": [
      "Síntesis del elemento 101 Mendelevio mediante bombardeo con partículas alfa",
      "Investigación sobre la auto-irradiación y daño en redes cristalinas"
    ],
    "isotopes": [
      {
        "mass": 252,
        "name": "²⁵²Es",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "471.7 días"
      },
      {
        "mass": 253,
        "name": "²⁵³Es",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "20.47 días"
      }
    ],
    "hazard": [
      "Radiactivo severo"
    ]
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermio",
    "latinName": "Fermium",
    "mass": 257,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹² 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "valenceElectrons": 14,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1800,
    "boilingPoint": null,
    "density": 9.7,
    "atomicRadius": 198,
    "covalentRadius": 167,
    "electronegativity": 1.3,
    "ionizationEnergy": 627,
    "electronAffinity": 33.9,
    "spectralLines": [
      415,
      428
    ],
    "discoveredBy": "Albert Ghiorso y colaboradores",
    "discoveryYear": 1952,
    "description": "Nombrado en honor a Enrico Fermi, creador del primer reactor nuclear artificial. Es el elemento más pesado que puede producirse mediante captura neutrónica sucesiva en reactores.",
    "summary": "El elemento más pesado producible por captura neutrónica sucesiva.",
    "uses": [
      "Investigación en física de fisión espontánea y estructura nuclear de actínidos pesados"
    ],
    "isotopes": [
      {
        "mass": 257,
        "name": "²⁵⁷Fm",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "100.5 días"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevio",
    "latinName": "Mendelevium",
    "mass": 258,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹³ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹³ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "valenceElectrons": 15,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1100,
    "boilingPoint": null,
    "density": 10.3,
    "atomicRadius": 194,
    "covalentRadius": 173,
    "electronegativity": 1.3,
    "ionizationEnergy": 635,
    "electronAffinity": 93.9,
    "spectralLines": [
      422,
      435
    ],
    "discoveredBy": "Albert Ghiorso, Glenn T. Seaborg, Bernard Harvey y Gregory Choppin",
    "discoveryYear": 1955,
    "description": "Nombrado en tributo a Dmitri Mendeléyev, padre de la Tabla Periódica moderna. Fue el primer elemento sintetizado átomo a átomo en un ciclotrón.",
    "summary": "Primer elemento producido átomo a átomo, en honor a Dmitri Mendeléyev.",
    "uses": [
      "Estudio de propiedades químicas y termodinámicas átomo a átomo"
    ],
    "isotopes": [
      {
        "mass": 258,
        "name": "²⁵⁸Md",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "51.5 días"
      },
      {
        "mass": 260,
        "name": "²⁶⁰Md",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "31.8 días"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelio",
    "latinName": "Nobelium",
    "mass": 259,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "f",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2,
      3
    ],
    "phase": "solid",
    "meltingPoint": 1100,
    "boilingPoint": null,
    "density": 9.9,
    "atomicRadius": 197,
    "covalentRadius": 176,
    "electronegativity": 1.3,
    "ionizationEnergy": 642,
    "electronAffinity": -223.2,
    "spectralLines": [
      415
    ],
    "discoveredBy": "Instituto Conjunto para la Investigación Nuclear (Dubná) / Berkeley",
    "discoveryYear": 1966,
    "description": "Nombrado en homenaje a Alfred Nobel, inventor de la dinamita y fundador de los Premios Nobel. Presenta una química inusualmente estable en su estado de oxidación +2.",
    "summary": "Nombrado en honor a Alfred Nobel, con una gran estabilidad en estado +2.",
    "uses": [
      "Investigación en cromatografía de intercambio iónico de actínidos"
    ],
    "isotopes": [
      {
        "mass": 259,
        "name": "²⁵⁹No",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "58 minutos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Laurencio",
    "latinName": "Lawrencium",
    "mass": 266,
    "category": "actinide",
    "categoryName": "Actínidos",
    "group": null,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 7s² 7p¹",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 7s² 7p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": 1900,
    "boilingPoint": null,
    "density": 14.4,
    "atomicRadius": 190,
    "covalentRadius": 161,
    "electronegativity": 1.3,
    "ionizationEnergy": 470,
    "electronAffinity": -30,
    "spectralLines": [
      420
    ],
    "discoveredBy": "Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh y Robert M. Latimer",
    "discoveryYear": 1961,
    "description": "Último elemento de la serie de los actínidos. Nombrado por Ernest Lawrence, pionero del ciclotrón. Su configuración electrónica incluye un orbital 7p¹ por efectos relativistas.",
    "summary": "Cierre de la serie de los actínidos en honor al creador del ciclotrón.",
    "uses": [
      "Estudio de efectos relativistas en la primera energía de ionización de elementos pesados"
    ],
    "isotopes": [
      {
        "mass": 266,
        "name": "²⁶⁶Lr",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "11 horas"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordio",
    "latinName": "Rutherfordium",
    "mass": 267,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 4,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d² 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      4
    ],
    "phase": "solid",
    "meltingPoint": 2400,
    "boilingPoint": 5800,
    "density": 17,
    "atomicRadius": 157,
    "covalentRadius": 157,
    "electronegativity": null,
    "ionizationEnergy": 580,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / LBNL Berkeley",
    "discoveryYear": 1969,
    "description": "El primer elemento transactínido y primer metal del bloque 6d. Nombrado en honor a Ernest Rutherford, descubridor del núcleo atómico.",
    "summary": "Primer elemento transactínido superpesado en homenaje a Ernest Rutherford.",
    "uses": [
      "Investigación en física de partículas y química nuclear de frontera"
    ],
    "isotopes": [
      {
        "mass": 267,
        "name": "²⁶⁷Rf",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "1.3 horas"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnio",
    "latinName": "Dubnium",
    "mass": 268,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 5,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d³ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d³ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      5
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 21.6,
    "atomicRadius": 149,
    "covalentRadius": 149,
    "electronegativity": null,
    "ionizationEnergy": 664.8,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / LBNL Berkeley",
    "discoveryYear": 1970,
    "description": "Nombrado en tributo a Dubná (Rusia), sede del Instituto Conjunto de Investigación Nuclear. Homólogo superpesado más pesado del tántalo y niobio.",
    "summary": "Metal de transición superpesado nombrado por el centro de investigación de Dubná.",
    "uses": [
      "Estudio de reactividad en fase gaseosa y solución acuosa de cloruros superpesados"
    ],
    "isotopes": [
      {
        "mass": 268,
        "name": "²⁶⁸Db",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "28 horas"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgio",
    "latinName": "Seaborgium",
    "mass": 269,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 6,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁴ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁴ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      6
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 23.5,
    "atomicRadius": 143,
    "covalentRadius": 143,
    "electronegativity": null,
    "ionizationEnergy": 757.4,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "Lawrence Berkeley National Laboratory (Albert Ghiorso y colaboradores)",
    "discoveryYear": 1974,
    "description": "Nombrado en honor al químico nuclear Glenn T. Seaborg, codescubridor del plutonio y de diez elementos transuránicos. Fue el primer elemento bautizado en honor a una persona viva.",
    "summary": "Nombrado en vida por Glenn Seaborg, arquitecto de la serie de los actínidos.",
    "uses": [
      "Estudios de química de carbonilos superpesados [Sg(CO)₆]"
    ],
    "isotopes": [
      {
        "mass": 269,
        "name": "²⁶⁹Sg",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "14 minutos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrio",
    "latinName": "Bohrium",
    "mass": 270,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 7,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁵ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁵ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      7
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 26,
    "atomicRadius": 137,
    "covalentRadius": 137,
    "electronegativity": null,
    "ionizationEnergy": 790,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)",
    "discoveryYear": 1981,
    "description": "Nombrado en honor a Niels Bohr, padre del modelo cuántico atómico. Forma oxicloruros volátiles que confirman que pertenece formalmente al grupo 7 de la tabla periódica.",
    "summary": "Tributo a Niels Bohr, creador del modelo atómico cuántico.",
    "uses": [
      "Comprobación experimental de la ley periódica para el grupo 7"
    ],
    "isotopes": [
      {
        "mass": 270,
        "name": "²⁷⁰Bh",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "61 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassio",
    "latinName": "Hassium",
    "mass": 269,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 8,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁶ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁶ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      8
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 27,
    "atomicRadius": 134,
    "covalentRadius": 134,
    "electronegativity": null,
    "ionizationEnergy": 730,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)",
    "discoveryYear": 1984,
    "description": "Nombrado en honor al estado alemán de Hesse (Hassia en latín). Forma un tetraóxido volátil análogo al del osmio (HsO₄), demostrando que la periodicidad química persiste en elementos superpesados.",
    "summary": "Forma el tetraóxido volátil HsO₄ confirmando la periodicidad del grupo 8.",
    "uses": [
      "Investigación en termocromatografía de óxidos volátiles superpesados"
    ],
    "isotopes": [
      {
        "mass": 269,
        "name": "²⁶⁹Hs",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "16 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerio",
    "latinName": "Meitnerium",
    "mass": 278,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 9,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁷ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁷ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "valenceElectrons": 9,
    "oxidationStates": [
      3,
      4
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 27.8,
    "atomicRadius": 131,
    "covalentRadius": 131,
    "electronegativity": null,
    "ionizationEnergy": 800,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Peter Armbruster y Gottfried Münzenberg)",
    "discoveryYear": 1982,
    "description": "Nombrado en honor a la física austríaca Lise Meitner, codescubridora de la fisión nuclear teórica. El único elemento que rinde tributo exclusivo a una científica no mitológica.",
    "summary": "Homenaje a Lise Meitner, pionera imprescindible de la fisión nuclear.",
    "uses": [
      "Investigación en física nuclear y síntesis de núcleos exóticos"
    ],
    "isotopes": [
      {
        "mass": 278,
        "name": "²⁷⁸Mt",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "8 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstatio",
    "latinName": "Darmstadtium",
    "mass": 281,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 10,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁸ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁸ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      16,
      2
    ],
    "valenceElectrons": 10,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 26,
    "atomicRadius": 128,
    "covalentRadius": 128,
    "electronegativity": null,
    "ionizationEnergy": 955,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Sigurd Hofmann y colaboradores)",
    "discoveryYear": 1994,
    "description": "Nombrado en honor a la ciudad alemana de Darmstadt, cuna del centro de iones pesados GSI donde se crearon seis elementos superpesados.",
    "summary": "Elemento sintetizado en la ciudad alemana de Darmstadt.",
    "uses": [
      "Estudios sobre efectos relativistas en la contracción de orbitales d"
    ],
    "isotopes": [
      {
        "mass": 281,
        "name": "²⁸¹Ds",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "12.7 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenio",
    "latinName": "Roentgenium",
    "mass": 282,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 11,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d⁹ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d⁹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      17,
      2
    ],
    "valenceElectrons": 11,
    "oxidationStates": [
      3
    ],
    "phase": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 28.7,
    "atomicRadius": 121,
    "covalentRadius": 121,
    "electronegativity": null,
    "ionizationEnergy": 1020,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Sigurd Hofmann y colaboradores)",
    "discoveryYear": 1994,
    "description": "Nombrado en honor a Wilhelm Conrad Röntgen, descubridor de los rayos X y primer Premio Nobel de Física. Homólogo superpesado del oro y la plata.",
    "summary": "Homólogo superpesado del oro nombrado por el descubridor de los rayos X.",
    "uses": [
      "Modelización teórica de efectos relativistas en el enlace metal-oro"
    ],
    "isotopes": [
      {
        "mass": 282,
        "name": "²⁸²Rg",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "2.1 minutos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicio",
    "latinName": "Copernicium",
    "mass": 285,
    "category": "transition-metal",
    "categoryName": "Metales de transición",
    "group": 12,
    "period": 7,
    "block": "d",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "valenceElectrons": 2,
    "oxidationStates": [
      2
    ],
    "phase": "liquid",
    "meltingPoint": 283,
    "boilingPoint": 340,
    "density": 14,
    "atomicRadius": 122,
    "covalentRadius": 122,
    "electronegativity": null,
    "ionizationEnergy": 1155,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "GSI Darmstadt (Sigurd Hofmann y colaboradores)",
    "discoveryYear": 1996,
    "description": "Nombrado en memoria del astrónomo Nicolás Copérnico. Debido a efectos relativistas extremos que estabilizan los electrones 7s², se predice que es un metal sumamente volátil, posiblemente líquido o gaseoso a temperatura ambiente.",
    "summary": "Metal superpesado extraordinariamente volátil por efectos relativistas cuánticos.",
    "uses": [
      "Termocromatografía de adsorción sobre superficies de oro"
    ],
    "isotopes": [
      {
        "mass": 285,
        "name": "²⁸⁵Cn",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "29 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonio",
    "latinName": "Nihonium",
    "mass": 286,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 13,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p¹",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "valenceElectrons": 3,
    "oxidationStates": [
      1
    ],
    "phase": "solid",
    "meltingPoint": 700,
    "boilingPoint": 1400,
    "density": 16,
    "atomicRadius": 136,
    "covalentRadius": 136,
    "electronegativity": null,
    "ionizationEnergy": 704.9,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "RIKEN Nishina Center (Kosuke Morita y colaboradores, Japón)",
    "discoveryYear": 2004,
    "description": "El primer elemento químico descubierto en el continente asiático. Sintetizado en el acelerador RIKEN en Japón y nombrado por 'Nihon' (tierra del sol naciente).",
    "summary": "Primer elemento descubierto en Asia por científicos japoneses en el RIKEN.",
    "uses": [
      "Estudio de reactividad química del grupo del boro en el régimen superpesado"
    ],
    "isotopes": [
      {
        "mass": 286,
        "name": "²⁸⁶Nh",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "9.5 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovio",
    "latinName": "Flerovium",
    "mass": 289,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 14,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p²",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "valenceElectrons": 4,
    "oxidationStates": [
      2
    ],
    "phase": "solid",
    "meltingPoint": 340,
    "boilingPoint": 420,
    "density": 9.9,
    "atomicRadius": 143,
    "covalentRadius": 143,
    "electronegativity": null,
    "ionizationEnergy": 823.9,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / LLNL Lawrence Livermore",
    "discoveryYear": 1998,
    "description": "Nombrado por el Laboratorio Flerov de Reacciones Nucleares de Dubná y su fundador Gueorgui Fliórov. Se sitúa en la entrada de la 'Isla de Estabilidad' de la física nuclear.",
    "summary": "Elemento superpesado en el umbral de la hipotética 'Isla de Estabilidad'.",
    "uses": [
      "Investigación en la física de números mágicos de protones y neutrones"
    ],
    "isotopes": [
      {
        "mass": 289,
        "name": "²⁸⁹Fl",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "2.6 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovio",
    "latinName": "Moscovium",
    "mass": 290,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 15,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p³",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "valenceElectrons": 5,
    "oxidationStates": [
      1,
      3
    ],
    "phase": "solid",
    "meltingPoint": 670,
    "boilingPoint": 1400,
    "density": 13.5,
    "atomicRadius": 156,
    "covalentRadius": 156,
    "electronegativity": null,
    "ionizationEnergy": 538.4,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / LLNL Livermore",
    "discoveryYear": 2003,
    "description": "Nombrado en honor a la región y óblast de Moscú, donde se encuentra el instituto JINR. Es un elemento superpesado altamente radiactivo sintetizado al colisionar Americio-243 con Calcio-48.",
    "summary": "Sintetizado mediante colisiones de iones pesados y nombrado por Moscú.",
    "uses": [
      "Física de desintegración alfa en cadenas hacia Nihonio"
    ],
    "isotopes": [
      {
        "mass": 290,
        "name": "²⁹⁰Mc",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "0.8 segundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorio",
    "latinName": "Livermorium",
    "mass": 293,
    "category": "post-transition-metal",
    "categoryName": "Metales post-transicionales",
    "group": 16,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁴",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "valenceElectrons": 6,
    "oxidationStates": [
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 700,
    "boilingPoint": 1100,
    "density": 12.9,
    "atomicRadius": 160,
    "covalentRadius": 160,
    "electronegativity": null,
    "ionizationEnergy": 616,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / Lawrence Livermore National Laboratory (LLNL)",
    "discoveryYear": 2000,
    "description": "Nombrado en honor al Laboratorio Nacional Lawrence Livermore de California. Producido bombardeando Curio-248 con proyectiles de Calcio-48.",
    "summary": "Nombrado en homenaje al prestigioso laboratorio Lawrence Livermore de EE.UU.",
    "uses": [
      "Estudios de límites de estabilidad nuclear y fisión en elementos superpesados"
    ],
    "isotopes": [
      {
        "mass": 293,
        "name": "²⁹³Lv",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "53 milisegundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Teneso",
    "latinName": "Tennessine",
    "mass": 294,
    "category": "metalloid",
    "categoryName": "Metaloides",
    "group": 17,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁵",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "valenceElectrons": 7,
    "oxidationStates": [
      -1,
      1,
      3,
      5
    ],
    "phase": "solid",
    "meltingPoint": 723,
    "boilingPoint": 883,
    "density": 7.2,
    "atomicRadius": 156,
    "covalentRadius": 156,
    "electronegativity": null,
    "ionizationEnergy": 742.9,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná, LLNL Livermore y Oak Ridge National Laboratory (ORNL)",
    "discoveryYear": 2010,
    "description": "Nombrado por el estado de Tennessee, sede del Oak Ridge National Laboratory y la Universidad Vanderbilt. Es el segundo elemento más pesado sintetizado hasta la fecha.",
    "summary": "Halógeno superpesado nombrado por el estado de Tennessee (ORNL).",
    "uses": [
      "Comprobación de la interacción espín-órbita relativista extrema"
    ],
    "isotopes": [
      {
        "mass": 294,
        "name": "²⁹⁴Ts",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "51 milisegundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesón",
    "latinName": "Oganesson",
    "mass": 294,
    "category": "noble-gas",
    "categoryName": "Gases nobles",
    "group": 18,
    "period": 7,
    "block": "p",
    "electronConfiguration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f¹⁴ 6s² 6p⁶ 6d¹⁰ 7s² 7p⁶",
    "electronConfigurationSemantic": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "valenceElectrons": 8,
    "oxidationStates": [
      0,
      2,
      4
    ],
    "phase": "solid",
    "meltingPoint": 325,
    "boilingPoint": 350,
    "density": 5,
    "atomicRadius": 152,
    "covalentRadius": 152,
    "electronegativity": null,
    "ionizationEnergy": 860.1,
    "electronAffinity": null,
    "spectralLines": [],
    "discoveredBy": "JINR Dubná / LLNL Livermore (Yuri Oganessian y equipo)",
    "discoveryYear": 2002,
    "description": "El elemento químico más pesado conocido por la humanidad y el último de la tabla periódica actual. Nombrado en honor al físico ruso Yuri Oganesián. Debido a efectos relativistas en su nube de electrones, se predice que es un sólido semiconductor y no un gas.",
    "summary": "El elemento 118: el más pesado del universo y cima actual de la Tabla Periódica.",
    "uses": [
      "Frontera del conocimiento en física cuántica relativista y síntesis superpesada"
    ],
    "isotopes": [
      {
        "mass": 294,
        "name": "²⁹⁴Og",
        "abundance": "Sintético",
        "stable": false,
        "halfLife": "0.7 milisegundos"
      }
    ],
    "hazard": [
      "Radiactivo"
    ]
  }
];

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
