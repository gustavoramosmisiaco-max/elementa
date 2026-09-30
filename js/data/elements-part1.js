// elements-part1.js - Elements 1 to 30
const elementsPart1 = [
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = elementsPart1;
}
