// elements-part2.js - Elements 31 to 60
const elementsPart2 = [
  {
    number: 31, symbol: "Ga", name: "Galio", latinName: "Gallium", mass: 69.723,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 13, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p¹",
    electronsPerShell: [2, 8, 18, 3], valenceElectrons: 3, oxidationStates: [3],
    phase: "solid", meltingPoint: 302.91, boilingPoint: 2477, density: 5.91,
    atomicRadius: 136, covalentRadius: 122, electronegativity: 1.81, ionizationEnergy: 578.8, electronAffinity: 28.9,
    spectralLines: [403.3, 417.2],
    discoveredBy: "Paul-Émile Lecoq de Boisbaudran", discoveryYear: 1875,
    description: "Metal blando que se funde en la palma de la mano (29.76 °C). El arseniuro y nitruro de galio son semiconductores clave en optoelectrónica, LEDs azules y telecomunicaciones 5G.",
    summary: "Metal que se derrite en la mano y es fundamental en semiconductores y LEDs.",
    uses: ["Semiconductores de arseniuro de galio (GaAs) en telecomunicaciones", "Diodos emisores de luz (LED) y lásers de diodo", "Aleaciones eutécticas líquidas Galinstano (termómetros no tóxicos)", "Células solares de alta eficiencia para satélites espaciales"],
    isotopes: [
      { mass: 69, name: "⁶⁹Ga", abundance: "60.11%", stable: true },
      { mass: 71, name: "⁷¹Ga", abundance: "39.89%", stable: true }
    ],
    hazard: ["Corrosivo para el aluminio"]
  },
  {
    number: 32, symbol: "Ge", name: "Germanio", latinName: "Germanium", mass: 72.63,
    category: "metalloid", categoryName: "Metaloides", group: 14, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p²",
    electronsPerShell: [2, 8, 18, 4], valenceElectrons: 4, oxidationStates: [2, 4],
    phase: "solid", meltingPoint: 1211.4, boilingPoint: 3106, density: 5.323,
    atomicRadius: 125, covalentRadius: 120, electronegativity: 2.01, ionizationEnergy: 762.0, electronAffinity: 119.0,
    spectralLines: [265.1, 303.9],
    discoveredBy: "Clemens Winkler", discoveryYear: 1886,
    description: "Metaloide brillante predicho por Mendeléyev como 'eka-silicio'. Es transparente a la luz infrarroja y fue la base del primer transistor de la historia.",
    summary: "Metaloide semiconductor transparente al infrarrojo utilizado en visión nocturna.",
    uses: ["Ópticas y lentes de visión nocturna por infrarrojos", "Núcleos de fibra óptica de alta velocidad", "Catalizador para la polimerización de plásticos PET", "Células solares espaciales multijuntura"],
    isotopes: [
      { mass: 70, name: "⁷⁰Ge", abundance: "20.38%", stable: true },
      { mass: 72, name: "⁷²Ge", abundance: "27.31%", stable: true },
      { mass: 73, name: "⁷³Ge", abundance: "7.76%", stable: true },
      { mass: 74, name: "⁷⁴Ge", abundance: "36.72%", stable: true },
      { mass: 76, name: "⁷⁶Ge", abundance: "7.83%", stable: true }
    ],
    hazard: ["No peligroso"]
  },
  {
    number: 33, symbol: "As", name: "Arsénico", latinName: "Arsenicum", mass: 74.922,
    category: "metalloid", categoryName: "Metaloides", group: 15, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p³",
    electronsPerShell: [2, 8, 18, 5], valenceElectrons: 5, oxidationStates: [-3, 3, 5],
    phase: "solid", meltingPoint: 1090, boilingPoint: 887, density: 5.727,
    atomicRadius: 114, covalentRadius: 119, electronegativity: 2.18, ionizationEnergy: 947.0, electronAffinity: 78.2,
    spectralLines: [228.8, 234.9],
    discoveredBy: "Alberto Magno", discoveryYear: 1250,
    description: "Metaloide gris acero tristemente célebre en la historia por su alta toxicidad. En microelectrónica es un dopante semiconductor de tipo n fundamental.",
    summary: "Metaloide tóxico histórico utilizado como dopante en microelectrónica.",
    uses: ["Dopante tipo n en microcircuitos integrados de silicio", "Semiconductores de arseniuro de galio (GaAs)", "Tratamiento de la leucemia promielocítica aguda (trióxido de arsénico)", "Aleaciones de plomo para perdigones y rejillas de baterías"],
    isotopes: [
      { mass: 75, name: "⁷⁵As", abundance: "100%", stable: true }
    ],
    hazard: ["Tóxico agudo", "Carcinógeno", "Peligro ambiental"]
  },
  {
    number: 34, symbol: "Se", name: "Selenio", latinName: "Selenium", mass: 78.971,
    category: "reactive-nonmetal", categoryName: "No metales reactivos", group: 16, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p⁴",
    electronsPerShell: [2, 8, 18, 6], valenceElectrons: 6, oxidationStates: [-2, 2, 4, 6],
    phase: "solid", meltingPoint: 494, boilingPoint: 958, density: 4.81,
    atomicRadius: 103, covalentRadius: 120, electronegativity: 2.55, ionizationEnergy: 941.0, electronAffinity: 195.0,
    spectralLines: [196.0, 203.9],
    discoveredBy: "Jöns Jacob Berzelius", discoveryYear: 1817,
    description: "No metal fotoconductor cuya resistencia eléctrica disminuye drásticamente al recibir luz. Es un oligoelemento antioxidante esencial presente en la selenocisteína.",
    summary: "No metal fotoconductor y micronutriente antioxidante celular.",
    uses: ["Células fotoconductoras y fotorreceptores de fotocopiadoras xerográficas", "Suplementos dietéticos antioxidantes (glutatión peroxidasa)", "Decoloración y tintado rojo del vidrio", "Células solares CIGS de capa delgada"],
    isotopes: [
      { mass: 74, name: "⁷⁴Se", abundance: "0.89%", stable: true },
      { mass: 76, name: "⁷⁶Se", abundance: "9.37%", stable: true },
      { mass: 77, name: "⁷⁷Se", abundance: "7.63%", stable: true },
      { mass: 78, name: "⁷⁸Se", abundance: "23.77%", stable: true },
      { mass: 80, name: "⁸⁰Se", abundance: "49.61%", stable: true },
      { mass: 82, name: "⁸²Se", abundance: "8.73%", stable: true }
    ],
    hazard: ["Tóxico por inhalación e ingestión"]
  },
  {
    number: 35, symbol: "Br", name: "Bromo", latinName: "Bromum", mass: 79.904,
    category: "reactive-nonmetal", categoryName: "No metales reactivos", group: 17, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p⁵",
    electronsPerShell: [2, 8, 18, 7], valenceElectrons: 7, oxidationStates: [-1, 1, 3, 5],
    phase: "liquid", meltingPoint: 265.8, boilingPoint: 332.0, density: 3.1028,
    atomicRadius: 94, covalentRadius: 120, electronegativity: 2.96, ionizationEnergy: 1139.9, electronAffinity: 324.6,
    spectralLines: [470.5, 478.6, 521.8],
    discoveredBy: "Antoine Jérôme Balard y Carl Löwig", discoveryYear: 1826,
    description: "El único no metal líquido a temperatura ambiente. Es un líquido pardo rojizo denso que se evapora con rapidez emitiendo un vapor sofocante e irritante.",
    summary: "Líquido rojo oscuro volátil y denso, único no metal líquido a 20 °C.",
    uses: ["Retardantes de llama bromados en plásticos y textiles electrónicos", "Fármacos sedantes y anestésicos", "Tratamiento y purificación de aguas de spas", "Emulsiones fotográficas clásicas de bromuro de plata"],
    isotopes: [
      { mass: 79, name: "⁷⁹Br", abundance: "50.69%", stable: true },
      { mass: 81, name: "⁸¹Br", abundance: "49.31%", stable: true }
    ],
    hazard: ["Tóxico muy severo", "Corrosivo", "Peligro ambiental"]
  },
  {
    number: 36, symbol: "Kr", name: "Kriptón", latinName: "Krypton", mass: 83.798,
    category: "noble-gas", categoryName: "Gases nobles", group: 18, period: 4, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶", electronConfigurationSemantic: "[Ar] 3d¹⁰ 4s² 4p⁶",
    electronsPerShell: [2, 8, 18, 8], valenceElectrons: 8, oxidationStates: [2],
    phase: "gas", meltingPoint: 115.79, boilingPoint: 119.93, density: 0.003749,
    atomicRadius: 88, covalentRadius: 116, electronegativity: 3.00, ionizationEnergy: 1350.8, electronAffinity: -96.0,
    spectralLines: [557.0, 587.1, 760.1, 810.4],
    discoveredBy: "William Ramsay y Morris Travers", discoveryYear: 1898,
    description: "Gas noble incoloro caracterizado por sus brillantes líneas espectrales verdes y anaranjadas. Se utilizó históricamente (1960-1983) para definir el metro patrón internacional.",
    summary: "Gas noble denso utilizado en iluminación fotográfica de alta velocidad y láseres.",
    uses: ["Flashes estroboscópicos de fotografía de alta velocidad", "Aislamiento térmico de triple acristalamiento en arquitectura", "Láseres de fluoruro de kriptón (KrF) para fotolitografía ultravioleta", "Proyectores de pistas de aterrizaje en aeropuertos"],
    isotopes: [
      { mass: 78, name: "⁷⁸Kr", abundance: "0.35%", stable: true },
      { mass: 80, name: "⁸⁰Kr", abundance: "2.28%", stable: true },
      { mass: 82, name: "⁸²Kr", abundance: "11.58%", stable: true },
      { mass: 83, name: "⁸³Kr", abundance: "11.49%", stable: true },
      { mass: 84, name: "⁸⁴Kr", abundance: "57.00%", stable: true },
      { mass: 86, name: "⁸⁶Kr", abundance: "17.30%", stable: true }
    ],
    hazard: ["Gas a presión", "Asfixiante"]
  },
  {
    number: 37, symbol: "Rb", name: "Rubidio", latinName: "Rubidium", mass: 85.468,
    category: "alkali-metal", categoryName: "Metales alcalinos", group: 1, period: 5, block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹", electronConfigurationSemantic: "[Kr] 5s¹",
    electronsPerShell: [2, 8, 18, 8, 1], valenceElectrons: 1, oxidationStates: [1],
    phase: "solid", meltingPoint: 312.46, boilingPoint: 961, density: 1.532,
    atomicRadius: 265, covalentRadius: 220, electronegativity: 0.82, ionizationEnergy: 403.0, electronAffinity: 46.9,
    spectralLines: [780.0, 794.8, 420.2],
    discoveredBy: "Robert Bunsen y Gustav Kirchhoff", discoveryYear: 1861,
    description: "Metal alcalino muy blando y reactivo que se inflama espontáneamente en el aire y reacciona de forma explosiva con el agua. Base de los relojes atómicos compactos.",
    summary: "Metal alcalino ultrarreactivo fundamental en relojes atómicos y condensados BEC.",
    uses: ["Relojes atómicos de rubidio en sistemas satelitales GPS", "Enfriamiento láser y creación de condensados de Bose-Einstein", "Células fotoeléctricas y tubos fotomultiplicadores", "Fuegos artificiales de tonalidad violeta"],
    isotopes: [
      { mass: 85, name: "⁸⁵Rb", abundance: "72.17%", stable: true },
      { mass: 87, name: "⁸⁷Rb", abundance: "27.83%", stable: false, halfLife: "4.92 × 10¹⁰ años" }
    ],
    hazard: ["Inflamable espontáneo", "Corrosivo", "Reactivo con agua"]
  },
  {
    number: 38, symbol: "Sr", name: "Estroncio", latinName: "Strontium", mass: 87.62,
    category: "alkaline-earth", categoryName: "Metales alcalinotérreos", group: 2, period: 5, block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²", electronConfigurationSemantic: "[Kr] 5s²",
    electronsPerShell: [2, 8, 18, 8, 2], valenceElectrons: 2, oxidationStates: [2],
    phase: "solid", meltingPoint: 1050, boilingPoint: 1655, density: 2.64,
    atomicRadius: 219, covalentRadius: 195, electronegativity: 0.95, ionizationEnergy: 549.5, electronAffinity: 5.0,
    spectralLines: [460.7, 407.8, 421.6],
    discoveredBy: "Adair Crawford", discoveryYear: 1790,
    description: "Metal alcalinotérreo blanco plateado que arde con una intensa y deslumbrante llama color carmesí. Sus isótopos se emplean en radioterapia oncológica y datación geológica.",
    summary: "Metal que produce el color rojo intenso en pirotecnia y base de relojes atómicos ópticos.",
    uses: ["Colorante rojo brillante en fuegos artificiales y bengalas de emergencia", "Relojes atómicos de red óptica de estroncio (los más precisos del mundo)", "Cloruro de estroncio en pastas dentales para dientes sensibles", "Ferritas de estroncio para imanes permanentes cerámicos"],
    isotopes: [
      { mass: 84, name: "⁸⁴Sr", abundance: "0.56%", stable: true },
      { mass: 86, name: "⁸⁶Sr", abundance: "9.86%", stable: true },
      { mass: 87, name: "⁸⁷Sr", abundance: "7.00%", stable: true },
      { mass: 88, name: "⁸⁸Sr", abundance: "82.58%", stable: true }
    ],
    hazard: ["Inflamable", "Reactivo con agua"]
  },
  {
    number: 39, symbol: "Y", name: "Itrio", latinName: "Yttrium", mass: 88.906,
    category: "transition-metal", categoryName: "Metales de transición", group: 3, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²", electronConfigurationSemantic: "[Kr] 4d¹ 5s²",
    electronsPerShell: [2, 8, 18, 9, 2], valenceElectrons: 3, oxidationStates: [3],
    phase: "solid", meltingPoint: 1799, boilingPoint: 3609, density: 4.472,
    atomicRadius: 212, covalentRadius: 190, electronegativity: 1.22, ionizationEnergy: 600.0, electronAffinity: 29.6,
    spectralLines: [407.7, 410.2, 417.8],
    discoveredBy: "Johan Gadolin", discoveryYear: 1794,
    description: "Metal de transición perteneciente a las tierras raras. Nombrado en honor a la aldea sueca de Ytterby. Indispensable en superconductores de alta temperatura (YBCO) y láseres quirúrgicos YAG.",
    summary: "Metal de tierras raras utilizado en superconductores y láseres Nd:YAG.",
    uses: ["Superconductores cerámicos de alta temperatura YBCO", "Cristales de granate de itrio y aluminio (YAG) en láseres médicos e industriales", "Fósforos rojos de europio-itrio para pantallas y LEDs blancos", "Bujías de encendido y cerámicas de circonia estabilizada con itria (YSZ)"],
    isotopes: [
      { mass: 89, name: "⁸⁹Y", abundance: "100%", stable: true }
    ],
    hazard: ["No peligroso en forma sólida"]
  },
  {
    number: 40, symbol: "Zr", name: "Circonio", latinName: "Zirconium", mass: 91.224,
    category: "transition-metal", categoryName: "Metales de transición", group: 4, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²", electronConfigurationSemantic: "[Kr] 4d² 5s²",
    electronsPerShell: [2, 8, 18, 10, 2], valenceElectrons: 4, oxidationStates: [4],
    phase: "solid", meltingPoint: 2128, boilingPoint: 4682, density: 6.52,
    atomicRadius: 206, covalentRadius: 175, electronegativity: 1.33, ionizationEnergy: 640.1, electronAffinity: 41.1,
    spectralLines: [360.1, 468.8],
    discoveredBy: "Martin Heinrich Klaproth", discoveryYear: 1789,
    description: "Metal resistente a la corrosión con una bajísima sección eficaz de absorción de neutrones, lo que lo hace el material supremo para recubrir las varillas de combustible nuclear (zircaloy).",
    summary: "Metal ultrarresistente al calor y a la radiación en reactores nucleares.",
    uses: ["Vainas de combustible nuclear de aleación Zircaloy", "Circonia cúbica (ZrO₂) como gema imitadora del diamante", "Implantes dentales biocompatibles de circonia monolítica", "Crisoles refractarios y cuchillas cerámicas indeformables"],
    isotopes: [
      { mass: 90, name: "⁹⁰Zr", abundance: "51.45%", stable: true },
      { mass: 91, name: "⁹¹Zr", abundance: "11.22%", stable: true },
      { mass: 92, name: "⁹²Zr", abundance: "17.15%", stable: true },
      { mass: 94, name: "⁹⁴Zr", abundance: "17.38%", stable: true },
      { mass: 96, name: "⁹⁶Zr", abundance: "2.80%", stable: true }
    ],
    hazard: ["Inflamable (en polvo fino)"]
  },
  {
    number: 41, symbol: "Nb", name: "Niobio", latinName: "Niobium", mass: 92.906,
    category: "transition-metal", categoryName: "Metales de transición", group: 5, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹", electronConfigurationSemantic: "[Kr] 4d⁴ 5s¹",
    electronsPerShell: [2, 8, 18, 12, 1], valenceElectrons: 5, oxidationStates: [3, 5],
    phase: "solid", meltingPoint: 2750, boilingPoint: 5017, density: 8.57,
    atomicRadius: 198, covalentRadius: 164, electronegativity: 1.6, ionizationEnergy: 652.1, electronAffinity: 86.1,
    spectralLines: [405.9, 407.9],
    discoveredBy: "Charles Hatchett", discoveryYear: 1801,
    description: "Metal de transición dúctil que se vuelve superconductor a temperaturas criogénicas. Las aleaciones de niobio-titanio y niobio-estaño alimentan los imanes del Gran Colisionador de Hadrones (LHC).",
    summary: "Metal refractario clave en imanes superconductores y superaleaciones de turbinas.",
    uses: ["Electroimanes superconductores en aceleradores de partículas (LHC)", "Microaleaciones para gasoductos y carrocerías de alta resistencia", "Toberas de motores de cohetes espaciales", "Joyería anodizada hipoalergénica con colores iridiscentes"],
    isotopes: [
      { mass: 93, name: "⁹³Nb", abundance: "100%", stable: true }
    ],
    hazard: ["No peligroso"]
  },
  {
    number: 42, symbol: "Mo", name: "Molibdeno", latinName: "Molybdenum", mass: 95.95,
    category: "transition-metal", categoryName: "Metales de transición", group: 6, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹", electronConfigurationSemantic: "[Kr] 4d⁵ 5s¹",
    electronsPerShell: [2, 8, 18, 13, 1], valenceElectrons: 6, oxidationStates: [2, 3, 4, 5, 6],
    phase: "solid", meltingPoint: 2896, boilingPoint: 4912, density: 10.28,
    atomicRadius: 190, covalentRadius: 154, electronegativity: 2.16, ionizationEnergy: 684.3, electronAffinity: 71.9,
    spectralLines: [379.8, 386.4, 390.3],
    discoveredBy: "Carl Wilhelm Scheele", discoveryYear: 1778,
    description: "Metal con uno de los puntos de fusión más altos. Es un oligoelemento vital para la vida, cofactor de enzimas como la nitrogenasa bacteriana y la sulfito oxidasa humana.",
    summary: "Metal refractario endurecedor de aceros y cofactor enzimático esencial.",
    uses: ["Aceros estructurales de ultra-alta resistencia y blindajes", "Disulfuro de molibdeno (MoS₂) como lubricante seco para vacío espacial", "Generadores de Tecnecio-99m para diagnóstico médico radiológico", "Electrodos para hornos de fusión de vidrio"],
    isotopes: [
      { mass: 92, name: "⁹²Mo", abundance: "14.77%", stable: true },
      { mass: 94, name: "⁹⁴Mo", abundance: "9.23%", stable: true },
      { mass: 95, name: "⁹⁵Mo", abundance: "15.90%", stable: true },
      { mass: 96, name: "⁹⁶Mo", abundance: "16.68%", stable: true },
      { mass: 97, name: "⁹⁷Mo", abundance: "9.56%", stable: true },
      { mass: 98, name: "⁹⁸Mo", abundance: "24.19%", stable: true },
      { mass: 100, name: "¹⁰⁰Mo", abundance: "9.67%", stable: true }
    ],
    hazard: ["No peligroso"]
  },
  {
    number: 43, symbol: "Tc", name: "Tecnecio", latinName: "Technetium", mass: 98,
    category: "transition-metal", categoryName: "Metales de transición", group: 7, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²", electronConfigurationSemantic: "[Kr] 4d⁵ 5s²",
    electronsPerShell: [2, 8, 18, 13, 2], valenceElectrons: 7, oxidationStates: [4, 7],
    phase: "solid", meltingPoint: 2430, boilingPoint: 4538, density: 11.5,
    atomicRadius: 183, covalentRadius: 147, electronegativity: 1.9, ionizationEnergy: 702.0, electronAffinity: 53.0,
    spectralLines: [429.7, 426.2],
    discoveredBy: "Emilio Segrè y Carlo Perrier", discoveryYear: 1937,
    description: "El primer elemento producido artificialmente por el ser humano. Es el elemento más ligero sin ningún isótopo estable. Su isómero nuclear Tc-99m es el radiofármaco más usado en medicina nuclear.",
    summary: "Primer elemento artificial; su isótopo Tc-99m salva vidas en medicina nuclear.",
    uses: ["Gammagrafías de perfusión miocárdica, cerebro y huesos con Tecnecio-99m", "Estándar de calibración de radiación beta", "Inhibidor de corrosión en aceros especiales experimentales", "Investigación en física de materiales radiactivos"],
    isotopes: [
      { mass: 97, name: "⁹⁷Tc", abundance: "Sintético", stable: false, halfLife: "4.21 × 10⁶ años" },
      { mass: 98, name: "⁹⁸Tc", abundance: "Sintético", stable: false, halfLife: "4.2 × 10⁶ años" },
      { mass: 99, name: "⁹⁹ᵐTc", abundance: "Sintético", stable: false, halfLife: "6.01 horas (diagnóstico)" }
    ],
    hazard: ["Radiactivo"]
  },
  {
    number: 44, symbol: "Ru", name: "Rutenio", latinName: "Ruthenium", mass: 101.07,
    category: "transition-metal", categoryName: "Metales de transición", group: 8, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹", electronConfigurationSemantic: "[Kr] 4d⁷ 5s¹",
    electronsPerShell: [2, 8, 18, 15, 1], valenceElectrons: 8, oxidationStates: [2, 3, 4, 8],
    phase: "solid", meltingPoint: 2607, boilingPoint: 4423, density: 12.37,
    atomicRadius: 178, covalentRadius: 146, electronegativity: 2.2, ionizationEnergy: 710.2, electronAffinity: 101.3,
    spectralLines: [349.9, 372.8],
    discoveredBy: "Karl Ernst Claus", discoveryYear: 1844,
    description: "Metal precioso del grupo del platino sumamente duro y resistente a los ataques químicos. El catalizador de Grubbs a base de rutenio revolucionó la metátesis de olefinas en química orgánica.",
    summary: "Metal noble del grupo del platino usado en contactos eléctricos y catálisis.",
    uses: ["Contactos eléctricos resistentes al desgaste en conmutadores de precisión", "Catalizadores de metátesis de olefinas (Premio Nobel 2005)", "Capas magnéticas en discos duros HDD de alta densidad", "Ánodos de titanio recubiertos de óxido de rutenio para electrólisis de cloro"],
    isotopes: [
      { mass: 96, name: "⁹⁶Ru", abundance: "5.54%", stable: true },
      { mass: 98, name: "⁹⁸Ru", abundance: "1.87%", stable: true },
      { mass: 99, name: "⁹⁹Ru", abundance: "12.76%", stable: true },
      { mass: 100, name: "¹⁰⁰Ru", abundance: "12.60%", stable: true },
      { mass: 101, name: "¹⁰¹Ru", abundance: "17.06%", stable: true },
      { mass: 102, name: "¹⁰²Ru", abundance: "31.55%", stable: true },
      { mass: 104, name: "¹⁰⁴Ru", abundance: "18.62%", stable: true }
    ],
    hazard: ["Tóxico (tetraóxido de rutenio RuO₄)"]
  },
  {
    number: 45, symbol: "Rh", name: "Rodio", latinName: "Rhodium", mass: 102.91,
    category: "transition-metal", categoryName: "Metales de transición", group: 9, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹", electronConfigurationSemantic: "[Kr] 4d⁸ 5s¹",
    electronsPerShell: [2, 8, 18, 16, 1], valenceElectrons: 9, oxidationStates: [3],
    phase: "solid", meltingPoint: 2237, boilingPoint: 3968, density: 12.41,
    atomicRadius: 173, covalentRadius: 142, electronegativity: 2.28, ionizationEnergy: 719.7, electronAffinity: 109.7,
    spectralLines: [343.5, 369.2],
    discoveredBy: "William Hyde Wollaston", discoveryYear: 1803,
    description: "Uno de los metales preciosos más escasos y costosos del planeta. Su reflectividad y resistencia a la corrosión son legendarias, y es el componente activo esencial de los catalizadores de automóviles.",
    summary: "Metal precioso ultrarrofundido y carísimo clave en catalizadores de coches.",
    uses: ["Catalizadores automotrices de tres vías para reducir óxidos de nitrógeno (NOx)", "Bañado electrolítico de joyería de oro blanco y plata para evitar el deslustre", "Espejos de alta reflectividad para instrumentos ópticos", "Crisoles de alta temperatura para el crecimiento de monocristales"],
    isotopes: [
      { mass: 103, name: "¹⁰³Rh", abundance: "100%", stable: true }
    ],
    hazard: ["No peligroso (forma masiva)"]
  },
  {
    number: 46, symbol: "Pd", name: "Paladio", latinName: "Palladium", mass: 106.42,
    category: "transition-metal", categoryName: "Metales de transición", group: 10, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰", electronConfigurationSemantic: "[Kr] 4d¹⁰",
    electronsPerShell: [2, 8, 18, 18], valenceElectrons: 10, oxidationStates: [2, 4],
    phase: "solid", meltingPoint: 1828.05, boilingPoint: 3236, density: 12.023,
    atomicRadius: 169, covalentRadius: 139, electronegativity: 2.20, ionizationEnergy: 804.4, electronAffinity: 53.7,
    spectralLines: [340.5, 360.9],
    discoveredBy: "William Hyde Wollaston", discoveryYear: 1802,
    description: "Metal blanco plateado que posee la asombrosa propiedad de absorber hasta 900 veces su propio volumen de gas hidrógeno. Clave en los acoplamientos cruzados catalíticos de Suzuki y Heck.",
    summary: "Metal precioso que absorbe hidrógeno y cataliza reacciones farmacéuticas.",
    uses: ["Convertidores catalíticos de automóviles de gasolina", "Condensadores cerámicos multicapa (MLCC) en smartphones y portátiles", "Joyería fina y aleaciones dentales", "Catálisis de acoplamiento de Suzuki premiada con el Nobel"],
    isotopes: [
      { mass: 102, name: "¹⁰²Pd", abundance: "1.02%", stable: true },
      { mass: 104, name: "¹⁰⁴Pd", abundance: "11.14%", stable: true },
      { mass: 105, name: "¹⁰⁵Pd", abundance: "22.33%", stable: true },
      { mass: 106, name: "¹⁰⁶Pd", abundance: "27.33%", stable: true },
      { mass: 108, name: "¹⁰⁸Pd", abundance: "26.46%", stable: true },
      { mass: 110, name: "¹¹⁰Pd", abundance: "11.72%", stable: true }
    ],
    hazard: ["No peligroso"]
  },
  {
    number: 47, symbol: "Ag", name: "Plata", latinName: "Argentum", mass: 107.87,
    category: "transition-metal", categoryName: "Metales de transición", group: 11, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s¹",
    electronsPerShell: [2, 8, 18, 18, 1], valenceElectrons: 11, oxidationStates: [1],
    phase: "solid", meltingPoint: 1234.93, boilingPoint: 2435, density: 10.49,
    atomicRadius: 165, covalentRadius: 145, electronegativity: 1.93, ionizationEnergy: 731.0, electronAffinity: 125.6,
    spectralLines: [328.1, 338.3, 520.9, 546.5],
    discoveredBy: "Conocido desde la Antigüedad", discoveryYear: "Antigüedad",
    description: "El elemento con la conductividad eléctrica, conductividad térmica y reflectividad óptica más elevadas de todos los metales. Usado milenariamente como moneda, orfebrería y medicina.",
    summary: "El mejor conductor eléctrico y térmico de toda la tabla periódica.",
    uses: ["Pastas conductoras en células solares fotovoltaicas", "Contactos eléctricos de alta fidelidad en interruptores industriales", "Joyería, orfebrería y acuñación de monedas lingote", "Apósitos antimicrobianos para quemaduras graves (sulfadiazina de plata)"],
    isotopes: [
      { mass: 107, name: "¹⁰⁷Ag", abundance: "51.84%", stable: true },
      { mass: 109, name: "¹⁰⁹Ag", abundance: "48.16%", stable: true }
    ],
    hazard: ["Tóxico para organismos acuáticos"]
  },
  {
    number: 48, symbol: "Cd", name: "Cadmio", latinName: "Cadmium", mass: 112.41,
    category: "transition-metal", categoryName: "Metales de transición", group: 12, period: 5, block: "d",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s²",
    electronsPerShell: [2, 8, 18, 18, 2], valenceElectrons: 2, oxidationStates: [2],
    phase: "solid", meltingPoint: 594.22, boilingPoint: 1040, density: 8.65,
    atomicRadius: 161, covalentRadius: 144, electronegativity: 1.69, ionizationEnergy: 867.8, electronAffinity: -68.0,
    spectralLines: [228.8, 326.1, 508.6, 643.8],
    discoveredBy: "Karl Samuel Leberecht Hermann y Friedrich Stromeyer", discoveryYear: 1817,
    description: "Metal blando y tóxico que absorbe neutrones térmicos con gran avidez. Históricamente se utilizó en pigmentos amarillos de artistas y en acumuladores de níquel-cadmio.",
    summary: "Metal blando absorbente de neutrones en reactores nucleares.",
    uses: ["Barras de control de parada en reactores nucleares", "Células solares de película fina de telururo de cadmio (CdTe)", "Pigmentos amarillos, naranjas y rojos resistentes al calor", "Puntos cuánticos de CdSe en pantallas QLED avanzadas"],
    isotopes: [
      { mass: 106, name: "¹⁰⁶Cd", abundance: "1.25%", stable: true },
      { mass: 108, name: "¹⁰⁸Cd", abundance: "0.89%", stable: true },
      { mass: 110, name: "¹¹⁰Cd", abundance: "12.49%", stable: true },
      { mass: 111, name: "¹¹¹Cd", abundance: "12.80%", stable: true },
      { mass: 112, name: "¹¹²Cd", abundance: "24.13%", stable: true },
      { mass: 114, name: "¹¹⁴Cd", abundance: "28.73%", stable: true }
    ],
    hazard: ["Tóxico mortal", "Carcinógeno", "Peligro ambiental"]
  },
  {
    number: 49, symbol: "In", name: "Indio", latinName: "Indium", mass: 114.82,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 13, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p¹",
    electronsPerShell: [2, 8, 18, 18, 3], valenceElectrons: 3, oxidationStates: [3],
    phase: "solid", meltingPoint: 429.75, boilingPoint: 2345, density: 7.31,
    atomicRadius: 156, covalentRadius: 142, electronegativity: 1.78, ionizationEnergy: 558.3, electronAffinity: 38.9,
    spectralLines: [410.2, 451.1],
    discoveredBy: "Ferdinand Reich e Hieronymous Theodor Richter", discoveryYear: 1863,
    description: "Metal muy blando que produce un crujido característico al doblarse. Su óxido combinado con estaño (ITO) es transparente y conductor eléctrico, haciendo posibles las pantallas táctiles.",
    summary: "Metal maleable cuyo óxido ITO es la base de las pantallas táctiles modernas.",
    uses: ["Películas conductoras transparentes de óxido de indio y estaño (ITO) en pantallas táctiles y LCDs", "Soldaduras criogénicas y sellados herméticos de alto vacío", "Semiconductores de fosfuro de indio (InP) para láseres de fibra óptica", "Aleaciones de bajo punto de fusión para fusibles térmicos"],
    isotopes: [
      { mass: 113, name: "¹¹³In", abundance: "4.29%", stable: true },
      { mass: 115, name: "¹¹⁵In", abundance: "95.71%", stable: true }
    ],
    hazard: ["Tóxico por ingestión de sales"]
  },
  {
    number: 50, symbol: "Sn", name: "Estaño", latinName: "Stannum", mass: 118.71,
    category: "post-transition-metal", categoryName: "Metales post-transicionales", group: 14, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p²",
    electronsPerShell: [2, 8, 18, 18, 4], valenceElectrons: 4, oxidationStates: [2, 4],
    phase: "solid", meltingPoint: 505.08, boilingPoint: 2875, density: 7.287,
    atomicRadius: 145, covalentRadius: 139, electronegativity: 1.96, ionizationEnergy: 708.6, electronAffinity: 107.3,
    spectralLines: [284.0, 286.3, 317.5],
    discoveredBy: "Conocido desde la Antigüedad", discoveryYear: "Antigüedad",
    description: "Metal maleable plateado que formó la aleación de bronce hace más de 5000 años. Hoy es insustituible en las soldaduras libres de plomo para toda la electrónica mundial.",
    summary: "Metal milenario indispensable para soldaduras electrónicas e hojalata.",
    uses: ["Soldadura blanda de estaño en placas de circuitos electrónicos", "Recubrimiento anticorrosivo en latas de conservas (hojalata)", "Aleaciones de bronce y peltre", "Generación de luz ultravioleta extrema (EUV) para litografía de microchips"],
    isotopes: [
      { mass: 112, name: "¹¹²Sn", abundance: "0.97%", stable: true },
      { mass: 114, name: "¹¹⁴Sn", abundance: "0.66%", stable: true },
      { mass: 115, name: "¹¹⁵Sn", abundance: "0.34%", stable: true },
      { mass: 116, name: "¹¹⁶Sn", abundance: "14.54%", stable: true },
      { mass: 118, name: "¹¹⁸Sn", abundance: "24.22%", stable: true },
      { mass: 120, name: "¹²⁰Sn", abundance: "32.58%", stable: true }
    ],
    hazard: ["No peligroso (forma masiva)"]
  },
  {
    number: 51, symbol: "Sb", name: "Antimonio", latinName: "Stibium", mass: 121.76,
    category: "metalloid", categoryName: "Metaloides", group: 15, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p³",
    electronsPerShell: [2, 8, 18, 18, 5], valenceElectrons: 5, oxidationStates: [-3, 3, 5],
    phase: "solid", meltingPoint: 903.78, boilingPoint: 1860, density: 6.685,
    atomicRadius: 133, covalentRadius: 139, electronegativity: 2.05, ionizationEnergy: 834.0, electronAffinity: 103.2,
    spectralLines: [252.8, 259.8],
    discoveredBy: "Conocido desde la Antigüedad", discoveryYear: "Antigüedad",
    description: "Metaloide lustroso que se expande al solidificarse, permitiendo tipos de imprenta tipográficos de nitidez perfecta. Se utiliza ampliamente como retardante de llama en plásticos.",
    summary: "Metaloide usado en tipos de imprenta históricos y retardantes de llama.",
    uses: ["Trióxido de antimonio como sinérgico retardante de llama", "Aleaciones con plomo para endurecer baterías de coche y proyectiles", "Semiconductores de antimonuro de indio para detectores infrarrojos", "Dopante en la fabricación de diodos y dispositivos de efecto Hall"],
    isotopes: [
      { mass: 121, name: "¹²¹Sb", abundance: "57.21%", stable: true },
      { mass: 123, name: "¹²³Sb", abundance: "42.79%", stable: true }
    ],
    hazard: ["Tóxico", "Peligro para la salud"]
  },
  {
    number: 52, symbol: "Te", name: "Telurio", latinName: "Tellurium", mass: 127.60,
    category: "metalloid", categoryName: "Metaloides", group: 16, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p⁴",
    electronsPerShell: [2, 8, 18, 18, 6], valenceElectrons: 6, oxidationStates: [-2, 2, 4, 6],
    phase: "solid", meltingPoint: 722.66, boilingPoint: 1261, density: 6.232,
    atomicRadius: 123, covalentRadius: 138, electronegativity: 2.1, ionizationEnergy: 869.3, electronAffinity: 190.2,
    spectralLines: [214.3, 238.6],
    discoveredBy: "Franz-Joseph Müller von Reichenstein", discoveryYear: 1782,
    description: "Metaloide quebradizo blanco plateado. Es uno de los elementos más raros de la corteza terrestre pero es un componente estelar de los módulos solares fotovoltaicos de capa delgada de CdTe.",
    summary: "Metaloide raro clave en paneles solares CdTe y memorias de cambio de fase.",
    uses: ["Paneles solares de película delgada de telururo de cadmio (CdTe)", "Dispositivos termoeléctricos de refrigeración Peltier (Bi₂Te₃)", "Memorias de cambio de fase (PCM) y discos ópticos regrabables", "Aditivo metalúrgico para mejorar la maquinabilidad del acero y cobre"],
    isotopes: [
      { mass: 120, name: "¹²⁰Te", abundance: "0.09%", stable: true },
      { mass: 122, name: "¹²²Te", abundance: "2.55%", stable: true },
      { mass: 124, name: "¹²⁴Te", abundance: "4.74%", stable: true },
      { mass: 125, name: "¹²⁵Te", abundance: "7.07%", stable: true },
      { mass: 126, name: "¹²⁶Te", abundance: "18.84%", stable: true },
      { mass: 128, name: "¹²⁸Te", abundance: "31.74%", stable: true },
      { mass: 130, name: "¹³⁰Te", abundance: "34.08%", stable: true }
    ],
    hazard: ["Tóxico por inhalación"]
  },
  {
    number: 53, symbol: "I", name: "Yodo", latinName: "Iodium", mass: 126.90,
    category: "reactive-nonmetal", categoryName: "No metales reactivos", group: 17, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p⁵",
    electronsPerShell: [2, 8, 18, 18, 7], valenceElectrons: 7, oxidationStates: [-1, 1, 3, 5, 7],
    phase: "solid", meltingPoint: 386.85, boilingPoint: 457.4, density: 4.933,
    atomicRadius: 115, covalentRadius: 139, electronegativity: 2.66, ionizationEnergy: 1008.4, electronAffinity: 295.2,
    spectralLines: [206.2, 511.9],
    discoveredBy: "Bernard Courtois", discoveryYear: 1811,
    description: "Sólido cristalino negro violáceo brillante que sublima fácilmente produciendo un vapor violeta intenso. Esencial en la tiroides humana para la síntesis de hormonas tiroxina (T4) y triyodotironina (T3).",
    summary: "Halógeno de vapores violetas indispensable para el tiroides y desinfección.",
    uses: ["Desinfectante antiséptico de heridas (tintura de yodo y povidona yodada)", "Prevención del bocio mediante sal yodada alimentaria", "Medios de contraste radiológicos para tomografía computarizada (TAC)", "Células solares de perovskita de haluro de plomo"],
    isotopes: [
      { mass: 127, name: "¹²⁷I", abundance: "100%", stable: true },
      { mass: 131, name: "¹³¹I", abundance: "Sintético", stable: false, halfLife: "8.02 días (tratamiento tiroideo)" }
    ],
    hazard: ["Tóxico", "Corrosivo", "Peligro para la salud"]
  },
  {
    number: 54, symbol: "Xe", name: "Xenón", latinName: "Xenon", mass: 131.29,
    category: "noble-gas", categoryName: "Gases nobles", group: 18, period: 5, block: "p",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶", electronConfigurationSemantic: "[Kr] 4d¹⁰ 5s² 5p⁶",
    electronsPerShell: [2, 8, 18, 18, 8], valenceElectrons: 8, oxidationStates: [2, 4, 6, 8],
    phase: "gas", meltingPoint: 161.4, boilingPoint: 165.051, density: 0.005887,
    atomicRadius: 108, covalentRadius: 140, electronegativity: 2.6, ionizationEnergy: 1170.4, electronAffinity: -77.0,
    spectralLines: [462.4, 467.1, 823.2, 881.9],
    discoveredBy: "William Ramsay y Morris Travers", discoveryYear: 1898,
    description: "Gas noble pesado y denso capaz de formar compuestos químicos reales como fluoruros y óxidos. Se utiliza como propelente en motores iónicos espaciales por su gran masa atómica.",
    summary: "Gas noble denso propulsor de sondas espaciales con motores iónicos.",
    uses: ["Propelente iónico para satélites y misiones interplanetarias", "Faros de descarga de alta intensidad en automóviles de xenón", "Anestésico inhalatorio neuroprotector de última generación", "Lámparas estroboscópicas de alta potencia en cine y fotografía"],
    isotopes: [
      { mass: 124, name: "¹²⁴Xe", abundance: "0.09%", stable: true },
      { mass: 126, name: "¹²⁶Xe", abundance: "0.09%", stable: true },
      { mass: 128, name: "¹²⁸Xe", abundance: "1.92%", stable: true },
      { mass: 129, name: "¹²⁹Xe", abundance: "26.44%", stable: true },
      { mass: 130, name: "¹³⁰Xe", abundance: "4.08%", stable: true },
      { mass: 131, name: "¹³¹Xe", abundance: "21.18%", stable: true },
      { mass: 132, name: "¹³²Xe", abundance: "26.89%", stable: true },
      { mass: 134, name: "¹³⁴Xe", abundance: "10.44%", stable: true },
      { mass: 136, name: "¹³⁶Xe", abundance: "8.87%", stable: true }
    ],
    hazard: ["Gas a presión", "Asfixiante"]
  },
  {
    number: 55, symbol: "Cs", name: "Cesio", latinName: "Caesium", mass: 132.91,
    category: "alkali-metal", categoryName: "Metales alcalinos", group: 1, period: 6, block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹", electronConfigurationSemantic: "[Xe] 6s¹",
    electronsPerShell: [2, 8, 18, 18, 8, 1], valenceElectrons: 1, oxidationStates: [1],
    phase: "solid", meltingPoint: 301.59, boilingPoint: 944, density: 1.93,
    atomicRadius: 298, covalentRadius: 244, electronegativity: 0.79, ionizationEnergy: 375.7, electronAffinity: 45.5,
    spectralLines: [852.1, 894.3, 455.5],
    discoveredBy: "Robert Bunsen y Gustav Kirchhoff", discoveryYear: 1860,
    description: "El metal más blando, electropositivo y reactivo. La definición internacional del 'segundo' se basa exactamente en 9.192.631.770 oscilaciones del átomo de cesio-133.",
    summary: "Metal ultrarreactivo cuya frecuencia atómica define el segundo oficial.",
    uses: ["Relojes atómicos primarios de cesio del Tiempo Universal Coordinado (UTC)", "Fluidos de perforación de formiato de cesio en pozos petroleros", "Células fotoeléctricas de respuesta infrarroja", "Propelente iónico avanzado en física espacial"],
    isotopes: [
      { mass: 133, name: "¹³³Cs", abundance: "100%", stable: true },
      { mass: 137, name: "¹³⁷Cs", abundance: "Sintético", stable: false, halfLife: "30.17 años" }
    ],
    hazard: ["Inflamable espontáneo", "Corrosivo violento", "Reactivo con agua"]
  },
  {
    number: 56, symbol: "Ba", name: "Bario", latinName: "Barium", mass: 137.33,
    category: "alkaline-earth", categoryName: "Metales alcalinotérreos", group: 2, period: 6, block: "s",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²", electronConfigurationSemantic: "[Xe] 6s²",
    electronsPerShell: [2, 8, 18, 18, 8, 2], valenceElectrons: 2, oxidationStates: [2],
    phase: "solid", meltingPoint: 1000, boilingPoint: 2170, density: 3.51,
    atomicRadius: 253, covalentRadius: 215, electronegativity: 0.89, ionizationEnergy: 502.9, electronAffinity: 13.95,
    spectralLines: [455.4, 493.4, 553.5],
    discoveredBy: "Carl Wilhelm Scheele y Humphry Davy", discoveryYear: 1808,
    description: "Metal alcalinotérreo blanco plateado de gran densidad. Aporta el llamativo color verde esmeralda a los fuegos artificiales y el sulfato de bario permite radiografías del tracto digestivo.",
    summary: "Metal pesado utilizado en contrastes radiológicos y pirotecnia verde.",
    uses: ["Papilla de sulfato de bario como contraste radiológico gastrointestinal", "Colorante verde en fuegos artificiales y bengalas", "Lodos de perforación densos de baritina para pozos de gas y petróleo", "Filtro de impurezas 'getter' en tubos de vacío"],
    isotopes: [
      { mass: 130, name: "¹³⁰Ba", abundance: "0.11%", stable: true },
      { mass: 132, name: "¹³²Ba", abundance: "0.10%", stable: true },
      { mass: 134, name: "¹³⁴Ba", abundance: "2.42%", stable: true },
      { mass: 135, name: "¹³⁵Ba", abundance: "6.59%", stable: true },
      { mass: 136, name: "¹³⁶Ba", abundance: "7.85%", stable: true },
      { mass: 137, name: "¹³⁷Ba", abundance: "11.23%", stable: true },
      { mass: 138, name: "¹³⁸Ba", abundance: "71.70%", stable: true }
    ],
    hazard: ["Inflamable", "Tóxico (sales solubles de bario)"]
  },
  {
    number: 57, symbol: "La", name: "Lantano", latinName: "Lanthanum", mass: 138.91,
    category: "lanthanide", categoryName: "Lantánidos", group: null, period: 6, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²", electronConfigurationSemantic: "[Xe] 5d¹ 6s²",
    electronsPerShell: [2, 8, 18, 18, 9, 2], valenceElectrons: 3, oxidationStates: [3],
    phase: "solid", meltingPoint: 1193, boilingPoint: 3737, density: 6.162,
    atomicRadius: 187, covalentRadius: 207, electronegativity: 1.10, ionizationEnergy: 538.1, electronAffinity: 48.0,
    spectralLines: [394.9, 398.9, 408.7],
    discoveredBy: "Carl Gustaf Mosander", discoveryYear: 1839,
    description: "El primer elemento de la serie de los lantánidos. Su óxido confiere un altísimo índice de refracción y baja dispersión al vidrio de objetivos fotográficos de gama alta.",
    summary: "Primer lantánido utilizado en lentes ópticas de precisión y baterías híbridas.",
    uses: ["Vidrios ópticos de alta calidad para lentes de cámaras y telescopios", "Ánodos de hidruro metálico de níquel (NiMH) en coches híbridos", "Piedras de chispa para mecheros (mischmetal)", "Craqueo catalítico de petróleo para gasolina"],
    isotopes: [
      { mass: 138, name: "¹³⁸La", abundance: "0.09%", stable: false, halfLife: "1.02 × 10¹¹ años" },
      { mass: 139, name: "¹³⁹La", abundance: "99.91%", stable: true }
    ],
    hazard: ["No peligroso en forma sólida"]
  },
  {
    number: 58, symbol: "Ce", name: "Cerio", latinName: "Cerium", mass: 140.12,
    category: "lanthanide", categoryName: "Lantánidos", group: null, period: 6, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹ 5s² 5p⁶ 5d¹ 6s²", electronConfigurationSemantic: "[Xe] 4f¹ 5d¹ 6s²",
    electronsPerShell: [2, 8, 18, 19, 9, 2], valenceElectrons: 4, oxidationStates: [3, 4],
    phase: "solid", meltingPoint: 1068, boilingPoint: 3716, density: 6.77,
    atomicRadius: 181, covalentRadius: 204, electronegativity: 1.12, ionizationEnergy: 534.4, electronAffinity: 50.0,
    spectralLines: [418.7, 456.2],
    discoveredBy: "Martin Heinrich Klaproth, Jöns Jacob Berzelius y Wilhelm Hisinger", discoveryYear: 1803,
    description: "El lantánido más abundante en la corteza terrestre. El óxido de cerio (CeO₂) es el polvo pulidor más eficaz para lentes, pantallas de cristal y catalizadores de automóviles.",
    summary: "Lantánido abundante usado en pulido de cristales y catalizadores diésel.",
    uses: ["Polvo pulidor de óxido de cerio para cristales ópticos y espejos", "Catalizador en convertidores de escape para oxidar monóxido de carbono", "Aleación mischmetal para piedras de encendedores", "Decolorante y absorbente de luz UV en vidrios"],
    isotopes: [
      { mass: 136, name: "¹³⁶Ce", abundance: "0.185%", stable: true },
      { mass: 138, name: "¹³⁸Ce", abundance: "0.251%", stable: true },
      { mass: 140, name: "¹⁴⁰Ce", abundance: "88.450%", stable: true },
      { mass: 142, name: "¹⁴²Ce", abundance: "11.114%", stable: true }
    ],
    hazard: ["Inflamable (polvo fino de cerio)"]
  },
  {
    number: 59, symbol: "Pr", name: "Praseodimio", latinName: "Praseodymium", mass: 140.91,
    category: "lanthanide", categoryName: "Lantánidos", group: null, period: 6, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f³ 5s² 5p⁶ 6s²", electronConfigurationSemantic: "[Xe] 4f³ 6s²",
    electronsPerShell: [2, 8, 18, 21, 8, 2], valenceElectrons: 5, oxidationStates: [3, 4],
    phase: "solid", meltingPoint: 1208, boilingPoint: 3793, density: 6.77,
    atomicRadius: 182, covalentRadius: 203, electronegativity: 1.13, ionizationEnergy: 527.0, electronAffinity: 50.0,
    spectralLines: [414.3, 422.5],
    discoveredBy: "Carl Auer von Welsbach", discoveryYear: 1885,
    description: "Metal de tierras raras maleable de tono plateado. Forma vidrios protectores de didimio que absorben la luz de sodio dañina en la soldadura autógena y el soplado de vidrio.",
    summary: "Lantánido que protege los ojos de los soldadores e intensifica imanes.",
    uses: ["Gafas de soldador y soplador de vidrio de didimio (Pr-Nd)", "Imanes permanentes de neodimio de alta potencia (Nd-Pr-Fe-B)", "Pigmento amarillo praseodimio en azulejos y cerámica", "Amplificadores ópticos de fibra dopada con praseodimio (PDFA)"],
    isotopes: [
      { mass: 141, name: "¹⁴¹Pr", abundance: "100%", stable: true }
    ],
    hazard: ["No peligroso en forma masiva"]
  },
  {
    number: 60, symbol: "Nd", name: "Neodimio", latinName: "Neodymium", mass: 144.24,
    category: "lanthanide", categoryName: "Lantánidos", group: null, period: 6, block: "f",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁴ 5s² 5p⁶ 6s²", electronConfigurationSemantic: "[Xe] 4f⁴ 6s²",
    electronsPerShell: [2, 8, 18, 22, 8, 2], valenceElectrons: 6, oxidationStates: [3],
    phase: "solid", meltingPoint: 1297, boilingPoint: 3347, density: 7.01,
    atomicRadius: 181, covalentRadius: 201, electronegativity: 1.14, ionizationEnergy: 533.1, electronAffinity: 50.0,
    spectralLines: [401.2, 430.3],
    discoveredBy: "Carl Auer von Welsbach", discoveryYear: 1885,
    description: "El rey de los imanes permanentes. Las aleaciones Nd₂Fe₁₄B generan campos magnéticos ultrapotentes esenciales para motores de coches eléctricos, generadores eólicos y discos duros.",
    summary: "Pilar de los imanes permanentes más potentes para aerogeneradores y coches eléctricos.",
    uses: ["Imanes permanentes de neodimio (NdFeB) para aerogeneradores y tracción eléctrica", "Láseres de estado sólido Nd:YAG en cirugía y corte industrial", "Auriculares, altavoces y micrófonos de alta fidelidad", "Gafas de sol y filtros que aumentan el contraste visual"],
    isotopes: [
      { mass: 142, name: "¹⁴²Nd", abundance: "27.15%", stable: true },
      { mass: 143, name: "¹⁴³Nd", abundance: "12.17%", stable: true },
      { mass: 144, name: "¹⁴⁴Nd", abundance: "23.80%", stable: true },
      { mass: 145, name: "¹⁴⁵Nd", abundance: "8.30%", stable: true },
      { mass: 146, name: "¹⁴⁶Nd", abundance: "17.19%", stable: true },
      { mass: 148, name: "¹⁴⁸Nd", abundance: "5.76%", stable: true },
      { mass: 150, name: "¹⁵⁰Nd", abundance: "5.63%", stable: true }
    ],
    hazard: ["Inflamable (en polvo)"]
  }
];

if (typeof module !== 'undefined') module.exports = elementsPart2;
