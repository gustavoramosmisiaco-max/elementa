// scripts/test-organic.js — Casos de nomenclatura orgánica con respuesta conocida
// Se ejecuta desde scripts/test-nomenclature.js
module.exports = function testOrganic(Org, check) {
  // [entrada, nombre IUPAC, nombre común (o null), fórmula molecular, semidesarrollada]
  const CASES = [
    [{ fn: 'alcano', n: 1 }, 'metano', null, 'CH4', 'CH4'],
    [{ fn: 'alcano', n: 4 }, 'butano', null, 'C4H10', 'CH3–CH2–CH2–CH3'],
    [{ fn: 'alcano', n: 3, subs: [{ type: 'metil', pos: 2 }] }, '2-metilpropano', 'isobutano', 'C4H10', 'CH3–CH(CH3)–CH3'],
    [{ fn: 'alcano', n: 5, subs: [{ type: 'metil', pos: 4 }] }, '2-metilpentano', null, 'C6H14', 'CH3–CH(CH3)–CH2–CH2–CH3'],
    [{ fn: 'alcano', n: 5, subs: [{ type: 'metil', pos: 2 }, { type: 'metil', pos: 3 }] }, '2,3-dimetilpentano', null, 'C7H16'],
    [{ fn: 'alcano', n: 3, subs: [{ type: 'metil', pos: 2 }, { type: 'metil', pos: 2 }] }, '2,2-dimetilpropano', 'neopentano', 'C5H12', 'CH3–C(CH3)2–CH3'],
    [{ fn: 'alcano', n: 5, subs: [{ type: 'etil', pos: 3 }] }, '3-etilpentano', null, 'C7H16'],
    [{ fn: 'alcano', n: 6, subs: [{ type: 'metil', pos: 2 }, { type: 'etil', pos: 4 }] }, '4-etil-2-metilhexano', null, 'C9H20'],
    [{ fn: 'alcano', n: 6, subs: [{ type: 'metil', pos: 5 }, { type: 'etil', pos: 3 }] }, '4-etil-2-metilhexano', null, 'C9H20'],
    [{ fn: 'alcano', n: 1, subs: [{ type: 'cloro', pos: 1 }, { type: 'cloro', pos: 1 }, { type: 'cloro', pos: 1 }] }, 'triclorometano', 'cloroformo', 'CHCl3', 'CHCl3'],
    [{ fn: 'alcano', n: 2, subs: [{ type: 'cloro', pos: 2 }] }, 'cloroetano', 'cloruro de etilo', 'C2H5Cl', 'CH3–CH2Cl'],
    [{ fn: 'alcano', n: 2, subs: [{ type: 'cloro', pos: 1 }, { type: 'cloro', pos: 2 }] }, '1,2-dicloroetano', null, 'C2H4Cl2'],
    [{ fn: 'alcano', n: 4, subs: [{ type: 'bromo', pos: 4 }, { type: 'cloro', pos: 2 }] }, '1-bromo-3-clorobutano', null, 'C4H8BrCl'],
    [{ fn: 'alcano', n: 5, subs: [{ type: 'cloro', pos: 2 }, { type: 'bromo', pos: 4 }] }, '2-bromo-4-cloropentano', null, 'C5H10BrCl'],
    [{ fn: 'alqueno', n: 2, pos: 1 }, 'eteno', 'etileno', 'C2H4', 'CH2=CH2'],
    [{ fn: 'alqueno', n: 3, pos: 2 }, 'propeno', 'propileno', 'C3H6', 'CH2=CH–CH3'],
    [{ fn: 'alqueno', n: 4, pos: 2 }, 'but-2-eno', null, 'C4H8', 'CH3–CH=CH–CH3'],
    [{ fn: 'alqueno', n: 4, pos: 3 }, 'but-1-eno', null, 'C4H8', 'CH2=CH–CH2–CH3'],
    [{ fn: 'alqueno', n: 5, pos: 2, subs: [{ type: 'metil', pos: 4 }] }, '4-metilpent-2-eno', null, 'C6H12', 'CH3–CH=CH–CH(CH3)–CH3'],
    [{ fn: 'alqueno', n: 2, pos: 1, subs: [{ type: 'cloro', pos: 1 }] }, 'cloroeteno', 'cloruro de vinilo', 'C2H3Cl'],
    [{ fn: 'alquino', n: 2, pos: 1 }, 'etino', 'acetileno', 'C2H2', 'CH≡CH'],
    [{ fn: 'alquino', n: 5, pos: 1 }, 'pent-1-ino', null, 'C5H8', 'CH≡C–CH2–CH2–CH3'],
    [{ fn: 'alcohol', n: 1, pos: 1 }, 'metanol', 'alcohol metílico', 'CH4O', 'CH3OH'],
    [{ fn: 'alcohol', n: 2, pos: 1 }, 'etanol', 'alcohol etílico', 'C2H6O', 'CH3–CH2OH'],
    [{ fn: 'alcohol', n: 3, pos: 2 }, 'propan-2-ol', 'alcohol isopropílico', 'C3H8O', 'CH3–CH(OH)–CH3'],
    [{ fn: 'alcohol', n: 4, pos: 4 }, 'butan-1-ol', 'alcohol butílico', 'C4H10O', 'CH3–CH2–CH2–CH2OH'],
    [{ fn: 'alcohol', n: 4, pos: 2, subs: [{ type: 'metil', pos: 2 }] }, '2-metilbutan-2-ol', null, 'C5H12O', 'CH3–C(CH3)(OH)–CH2–CH3'],
    [{ fn: 'alcohol', n: 3, pos: 2, subs: [{ type: 'metil', pos: 2 }] }, '2-metilpropan-2-ol', 'alcohol terc-butílico', 'C4H10O'],
    [{ fn: 'aldehido', n: 1 }, 'metanal', 'formaldehído (formol)', 'CH2O', 'HCHO'],
    [{ fn: 'aldehido', n: 2 }, 'etanal', 'acetaldehído', 'C2H4O', 'CH3–CHO'],
    [{ fn: 'aldehido', n: 4, subs: [{ type: 'metil', pos: 3 }] }, '3-metilbutanal', null, 'C5H10O', 'CH3–CH(CH3)–CH2–CHO'],
    [{ fn: 'cetona', n: 3, pos: 2 }, 'propanona', 'acetona (dimetilcetona)', 'C3H6O', 'CH3–CO–CH3'],
    [{ fn: 'cetona', n: 4, pos: 3 }, 'butanona', 'etil metil cetona (MEK)', 'C4H8O', 'CH3–CO–CH2–CH3'],
    [{ fn: 'cetona', n: 5, pos: 4 }, 'pentan-2-ona', null, 'C5H10O', 'CH3–CO–CH2–CH2–CH3'],
    [{ fn: 'cetona', n: 5, pos: 3 }, 'pentan-3-ona', null, 'C5H10O'],
    [{ fn: 'acido', n: 1 }, 'ácido metanoico', 'ácido fórmico', 'CH2O2', 'HCOOH'],
    [{ fn: 'acido', n: 2 }, 'ácido etanoico', 'ácido acético', 'C2H4O2', 'CH3–COOH'],
    [{ fn: 'acido', n: 3, subs: [{ type: 'cloro', pos: 2 }] }, 'ácido 2-cloropropanoico', null, 'C3H5ClO2', 'CH3–CHCl–COOH'],
    [{ fn: 'acido', n: 4 }, 'ácido butanoico', 'ácido butírico', 'C4H8O2'],
    [{ fn: 'amina', n: 1, pos: 1 }, 'metanamina', 'metilamina', 'CH5N', 'CH3NH2'],
    [{ fn: 'amina', n: 2, pos: 2 }, 'etanamina', 'etilamina', 'C2H7N'],
    [{ fn: 'amina', n: 3, pos: 3 }, 'propan-1-amina', 'propilamina', 'C3H9N', 'CH3–CH2–CH2NH2'],
    [{ fn: 'amida', n: 1 }, 'metanamida', 'formamida', 'CH3NO', 'HCONH2'],
    [{ fn: 'amida', n: 2 }, 'etanamida', 'acetamida', 'C2H5NO', 'CH3–CONH2'],
    [{ fn: 'amida', n: 4, subs: [{ type: 'metil', pos: 3 }] }, '3-metilbutanamida', null, 'C5H11NO', 'CH3–CH(CH3)–CH2–CONH2'],
    [{ fn: 'nitrilo', n: 1 }, 'metanonitrilo', 'cianuro de hidrógeno (ácido cianhídrico)', 'CHN', 'HCN'],
    [{ fn: 'nitrilo', n: 2 }, 'etanonitrilo', 'acetonitrilo', 'C2H3N', 'CH3–CN'],
    [{ fn: 'eter', n: 1, m: 1 }, 'metoximetano', 'dimetil éter', 'C2H6O', 'CH3–O–CH3'],
    [{ fn: 'eter', n: 2, m: 2 }, 'etoxietano', 'dietil éter (éter etílico)', 'C4H10O', 'CH3–CH2–O–CH2–CH3'],
    [{ fn: 'eter', n: 2, m: 1 }, 'metoxietano', 'etil metil éter', 'C3H8O', 'CH3–O–CH2–CH3'],
    [{ fn: 'eter', n: 1, m: 3 }, '1-metoxipropano', 'metil propil éter', 'C4H10O', 'CH3–O–CH2–CH2–CH3'],
    [{ fn: 'eter', n: 5, m: 5 }, '1-pentiloxipentano', 'dipentil éter', 'C10H22O'],
    [{ fn: 'ester', n: 2, m: 1 }, 'etanoato de metilo', 'acetato de metilo', 'C3H6O2', 'CH3–COO–CH3'],
    [{ fn: 'ester', n: 2, m: 2 }, 'etanoato de etilo', 'acetato de etilo', 'C4H8O2', 'CH3–COO–CH2–CH3'],
    [{ fn: 'ester', n: 1, m: 1 }, 'metanoato de metilo', 'formiato de metilo', 'C2H4O2', 'HCOO–CH3'],
    [{ fn: 'ester', n: 5, m: 5 }, 'pentanoato de pentilo', 'valerato de pentilo', 'C10H20O2'],
    [{ fn: 'ester', n: 8, m: 2 }, 'octanoato de etilo', null, 'C10H20O2']
  ];

  CASES.forEach(([input, name, common, formula, condensed]) => {
    const r = Org.build(input);
    const label = `orgánico ${JSON.stringify(input)}`;
    if (!r.ok) {
      check(`${label} válido`, r.errors.join('; '), 'sin errores');
      return;
    }
    check(`${label} nombre`, r.name, name);
    check(`${label} común`, r.commonName, common);
    check(`${label} fórmula`, r.formula, formula);
    if (condensed) check(`${label} semidesarrollada`, r.condensed, condensed);
  });

  // Entradas no válidas deben rechazarse con un mensaje
  const INVALID = [
    { fn: 'alqueno', n: 1, pos: 1 },
    { fn: 'cetona', n: 4, pos: 1 },
    { fn: 'alcano', n: 4, subs: [{ type: 'metil', pos: 1 }] },
    { fn: 'alcano', n: 4, subs: [{ type: 'etil', pos: 2 }] },
    { fn: 'alquino', n: 3, pos: 1, subs: [{ type: 'cloro', pos: 2 }] },
    { fn: 'acido', n: 3, subs: [{ type: 'cloro', pos: 1 }] }
  ];
  INVALID.forEach(input => {
    const r = Org.build(input);
    check(`inválido ${JSON.stringify(input)}`, r.ok, false);
  });

  // Barrido: todas las cadenas y posiciones sin sustituyentes producen resultados coherentes
  let sweep = 0;
  Object.keys(Org.FUNCS).filter(fn => !Org.FUNCS[fn].twoChains).forEach(fn => {
    for (let n = 1; n <= Org.MAX_C; n++) {
      const range = Org.positionRange(fn, n) || [1, 1];
      for (let p = range[0]; p <= range[1]; p++) {
        const r = Org.build({ fn, n, pos: p });
        if (n < Org.FUNCS[fn].min) { check(`${fn} n=${n} rechazado`, r.ok, false); continue; }
        sweep++;
        if (!r.ok || /undefined|NaN/.test(r.name + r.formula + r.condensed) || !(r.molarMass > 0)) {
          check(`barrido ${fn} n=${n} p=${p}`, JSON.stringify(r).slice(0, 120), 'resultado válido');
        }
      }
    }
  });
  ['eter', 'ester'].forEach(fn => {
    for (let n = 1; n <= (fn === 'eter' ? Org.MAX_SIDE : Org.MAX_C); n++) {
      for (let m = 1; m <= Org.MAX_SIDE; m++) {
        const r = Org.build({ fn, n, m });
        sweep++;
        if (!r.ok || /undefined|NaN/.test(r.name + r.formula + r.condensed + r.commonName) || !(r.molarMass > 0) || !r.drawing) {
          check(`barrido ${fn} n=${n} m=${m}`, JSON.stringify(r).slice(0, 120), 'resultado válido');
        }
      }
    }
  });
  check('éster con sustituyente rechazado', Org.build({ fn: 'ester', n: 2, m: 1, subs: [{ type: 'cloro', pos: 2 }] }).ok, false);
  console.log(`Estructuras orgánicas probadas en barrido: ${sweep}`);
};
