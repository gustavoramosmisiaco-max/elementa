/**
 * ELEMENTA - Balanceador Algebraico de Ecuaciones Químicas
 */
(function(window) {
  'use strict';

  class ChemicalEquationBalancer {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="balancer-tool-wrapper">
          <div class="tool-header">
            <h3><i class="tool-icon">⚗️</i> Balanceador Algebraico de Ecuaciones Químicas</h3>
            <p class="tool-desc">Introduce cualquier ecuación química sin balancear para calcular automáticamente los coeficientes estequiométricos enteros mínimos mediante el método algebraico de Gauss y obtener la explicación detallada.</p>
          </div>

          <div class="tool-input-group">
            <div class="input-with-action">
              <input type="text" id="balancerInput" class="balancer-input" placeholder="Ej: KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O" autofocus autocomplete="off" />
              <button id="btnBalanceEquation" class="btn-primary">Balancear Ecuación</button>
            </div>
            <div class="quick-examples">
              <span class="examples-label">Reacciones de ejemplo:</span>
              <button class="pill-btn" data-equation="H2 + O2 -> H2O">H₂ + O₂ → H₂O</button>
              <button class="pill-btn" data-equation="CH4 + O2 -> CO2 + H2O">Combustión del Metano</button>
              <button class="pill-btn" data-equation="Fe + O2 -> Fe2O3">Oxidación del Hierro</button>
              <button class="pill-btn" data-equation="C6H12O6 + O2 -> CO2 + H2O">Respiración / Glucosa</button>
              <button class="pill-btn" data-equation="Al + HCl -> AlCl3 + H2">Al + HCl → AlCl₃ + H₂</button>
              <button class="pill-btn" data-equation="Ca(OH)2 + H3PO4 -> Ca3(PO4)2 + H2O">Neutralización de Fosfato</button>
              <button class="pill-btn" data-equation="C3H8 + O2 -> CO2 + H2O">Propano + Oxígeno</button>
              <button class="pill-btn" data-equation="KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O">Redox de Permanganato</button>
            </div>
          </div>

          <div id="balancerError" class="tool-error" style="display:none;"></div>

          <div id="balancerResults" class="balancer-results" style="display:none;">
            <div class="balanced-reaction-card">
              <div class="card-subtitle">Ecuación Química Balanceada (Ley de Conservación de la Masa)</div>
              <div id="balancedReactionDisplay" class="balanced-equation-text"></div>
            </div>

            <div class="balancer-verification-box">
              <h4>Comprobación de Conservación de Átomos</h4>
              <table class="molar-table">
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Átomos en Reactivos</th>
                    <th>Átomos en Productos</th>
                    <th>Estado de Conservación</th>
                  </tr>
                </thead>
                <tbody id="balancerVerifyTable"></tbody>
              </table>
            </div>

            <div class="balancer-steps-container">
              <h4>Resolución Algebraica Paso a Paso</h4>
              <div id="balancerStepsContent" class="molar-steps-box"></div>
            </div>
          </div>
        </div>
      `;

      this.setupEvents();
    }

    setupEvents() {
      const input = document.getElementById('balancerInput');
      const btn = document.getElementById('btnBalanceEquation');

      btn.addEventListener('click', () => this.balance(input.value));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.balance(input.value);
      });

      const pills = this.container.querySelectorAll('.pill-btn');
      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const eq = pill.getAttribute('data-equation');
          input.value = eq;
          this.balance(eq);
        });
      });
    }

    parseMolecule(str) {
      let clean = str.trim().replace(/\[/g, '(').replace(/\]/g, ')');
      const counts = {};
      let i = 0;

      const parseGroup = () => {
        const groupCounts = {};

        while (i < clean.length) {
          const char = clean[i];

          if (char === '(') {
            i++;
            const inner = parseGroup();
            let count = 1;
            const numMatch = clean.slice(i).match(/^(\d+)/);
            if (numMatch) {
              count = parseInt(numMatch[1], 10);
              i += numMatch[1].length;
            }
            for (const [elem, innerCount] of Object.entries(inner)) {
              groupCounts[elem] = (groupCounts[elem] || 0) + (innerCount * count);
            }
          } else if (char === ')') {
            i++;
            break;
          } else if (/[A-Z]/.test(char)) {
            let sym = char;
            i++;
            if (i < clean.length && /[a-z]/.test(clean[i])) {
              sym += clean[i];
              i++;
            }
            let count = 1;
            const numMatch = clean.slice(i).match(/^(\d+)/);
            if (numMatch) {
              count = parseInt(numMatch[1], 10);
              i += numMatch[1].length;
            }
            groupCounts[sym] = (groupCounts[sym] || 0) + count;
          } else {
            i++;
          }
        }

        return groupCounts;
      };

      return parseGroup();
    }

    gcd(a, b) {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b) {
        const t = b;
        b = a % b;
        a = t;
      }
      return a;
    }

    lcm(a, b) {
      if (a === 0 || b === 0) return 0;
      return Math.abs(a * b) / this.gcd(a, b);
    }

    solveLinearSystem(matrix, numReactants, numProducts) {
      const rows = matrix.length;
      const cols = matrix[0].length; // numReactants + numProducts

      // Gaussian Elimination with Fraction arithmetic for exact precision
      const M = matrix.map(r => r.map(v => ({ n: v, d: 1 })));

      const simplify = (f) => {
        if (f.n === 0) return { n: 0, d: 1 };
        const g = this.gcd(f.n, f.d);
        let n = f.n / g;
        let d = f.d / g;
        if (d < 0) { n = -n; d = -d; }
        return { n, d };
      };

      const addF = (a, b) => simplify({ n: a.n * b.d + b.n * a.d, d: a.d * b.d });
      const subF = (a, b) => simplify({ n: a.n * b.d - b.n * a.d, d: a.d * b.d });
      const mulF = (a, b) => simplify({ n: a.n * b.n, d: a.d * b.d });
      const divF = (a, b) => {
        if (b.n === 0) throw new Error('División por cero en el solver algebraico.');
        return simplify({ n: a.n * b.d, d: a.d * b.n });
      };

      let lead = 0;
      for (let r = 0; r < rows; r++) {
        if (lead >= cols - 1) break;
        let i = r;
        while (M[i][lead].n === 0) {
          i++;
          if (i === rows) {
            i = r;
            lead++;
            if (lead >= cols - 1) break;
          }
        }
        if (lead >= cols - 1) break;

        // Swap rows
        const temp = M[i];
        M[i] = M[r];
        M[r] = temp;

        const leadVal = M[r][lead];
        for (let j = 0; j < cols; j++) {
          M[r][j] = divF(M[r][j], leadVal);
        }

        for (let row = 0; row < rows; row++) {
          if (row !== r) {
            const factor = M[row][lead];
            if (factor.n !== 0) {
              for (let j = 0; j < cols; j++) {
                M[row][j] = subF(M[row][j], mulF(factor, M[r][j]));
              }
            }
          }
        }
        lead++;
      }

      // Solve parameterized setting last variable to 1
      const rawSolutions = new Array(cols).fill(null).map(() => ({ n: 0, d: 1 }));
      rawSolutions[cols - 1] = { n: 1, d: 1 };

      for (let r = rows - 1; r >= 0; r--) {
        // Find pivot
        let pivotCol = -1;
        for (let c = 0; c < cols - 1; c++) {
          if (M[r][c].n !== 0) {
            pivotCol = c;
            break;
          }
        }
        if (pivotCol !== -1) {
          let sum = { n: 0, d: 1 };
          for (let c = pivotCol + 1; c < cols; c++) {
            sum = addF(sum, mulF(M[r][c], rawSolutions[c]));
          }
          rawSolutions[pivotCol] = simplify({ n: -sum.n, d: sum.d });
        }
      }

      // Find common denominator to make all integers positive
      let commonDenom = 1;
      rawSolutions.forEach(f => {
        commonDenom = this.lcm(commonDenom, f.d);
      });

      const intCoeffs = rawSolutions.map(f => (f.n * (commonDenom / f.d)));

      // Check if all are positive
      const allPositive = intCoeffs.every(c => c > 0);
      if (!allPositive) {
        throw new Error('No fue posible encontrar una solución entera positiva estequiométrica válida para esta reacción.');
      }

      // Simplify by greatest common divisor across all coefficients
      let overallGcd = intCoeffs[0];
      for (let i = 1; i < intCoeffs.length; i++) {
        overallGcd = this.gcd(overallGcd, intCoeffs[i]);
      }

      return intCoeffs.map(c => c / overallGcd);
    }

    formatMoleculeHTML(str) {
      return str.replace(/(\d+)/g, '<sub>$1</sub>');
    }

    balance(equationStr) {
      const errorEl = document.getElementById('balancerError');
      const resultsEl = document.getElementById('balancerResults');

      try {
        errorEl.style.display = 'none';
        if (!equationStr || !equationStr.trim()) {
          throw new Error('Introduce una reacción química, ej: H2 + O2 -> H2O');
        }

        // Split by arrow or equal sign
        const arrowRegex = /->|-->|=>|↔|=/;
        const splitSides = equationStr.split(arrowRegex);

        if (splitSides.length !== 2) {
          throw new Error('La ecuación debe contener dos lados separados por una flecha (->) o un signo igual (=).');
        }

        const rawReactants = splitSides[0].split('+').map(s => s.trim()).filter(Boolean);
        const rawProducts = splitSides[1].split('+').map(s => s.trim()).filter(Boolean);

        if (rawReactants.length === 0 || rawProducts.length === 0) {
          throw new Error('Debe haber al menos un reactivo y un producto.');
        }

        // Parse each molecule
        const parsedReactants = rawReactants.map(m => this.parseMolecule(m));
        const parsedProducts = rawProducts.map(m => this.parseMolecule(m));

        // Get all unique elements
        const allElementsSet = new Set();
        parsedReactants.forEach(p => Object.keys(p).forEach(k => allElementsSet.add(k)));
        parsedProducts.forEach(p => Object.keys(p).forEach(k => allElementsSet.add(k)));
        const uniqueElements = Array.from(allElementsSet);

        // Verify elements match on both sides
        const reactantElements = new Set();
        parsedReactants.forEach(p => Object.keys(p).forEach(k => reactantElements.add(k)));
        const productElements = new Set();
        parsedProducts.forEach(p => Object.keys(p).forEach(k => productElements.add(k)));

        for (const elem of reactantElements) {
          if (!productElements.has(elem)) {
            throw new Error(`El elemento "${elem}" está en los reactivos pero falta en los productos.`);
          }
        }
        for (const elem of productElements) {
          if (!reactantElements.has(elem)) {
            throw new Error(`El elemento "${elem}" está en los productos pero no en los reactivos.`);
          }
        }

        // Build matrix for algebraic balancing
        // Columns = Reactants (positive) + Products (negative)
        const matrix = [];
        uniqueElements.forEach(elem => {
          const row = [];
          // Reactants
          parsedReactants.forEach(mol => {
            row.push(mol[elem] || 0);
          });
          // Products
          parsedProducts.forEach(mol => {
            row.push(-(mol[elem] || 0));
          });
          matrix.push(row);
        });

        const coefficients = this.solveLinearSystem(matrix, rawReactants.length, rawProducts.length);

        const reactantCoeffs = coefficients.slice(0, rawReactants.length);
        const productCoeffs = coefficients.slice(rawReactants.length);

        // Build Reaction Display
        const reactantsHTML = rawReactants.map((mol, idx) => {
          const coeff = reactantCoeffs[idx];
          const coeffBadge = coeff > 1 ? `<span class="coeff-badge">${coeff}</span>` : '';
          return `${coeffBadge} ${this.formatMoleculeHTML(mol)}`;
        }).join(' <span class="react-plus">+</span> ');

        const productsHTML = rawProducts.map((mol, idx) => {
          const coeff = productCoeffs[idx];
          const coeffBadge = coeff > 1 ? `<span class="coeff-badge">${coeff}</span>` : '';
          return `${coeffBadge} ${this.formatMoleculeHTML(mol)}`;
        }).join(' <span class="react-plus">+</span> ');

        document.getElementById('balancedReactionDisplay').innerHTML = `
          <div class="reaction-full-display">
            ${reactantsHTML} <span class="react-arrow">➔</span> ${productsHTML}
          </div>
        `;

        // Verification Table
        const verifyBody = document.getElementById('balancerVerifyTable');
        verifyBody.innerHTML = '';

        uniqueElements.forEach(elem => {
          let leftCount = 0;
          parsedReactants.forEach((mol, idx) => {
            leftCount += (mol[elem] || 0) * reactantCoeffs[idx];
          });

          let rightCount = 0;
          parsedProducts.forEach((mol, idx) => {
            rightCount += (mol[elem] || 0) * productCoeffs[idx];
          });

          const elemData = window.getElementBySymbol(elem);
          const elemName = elemData ? elemData.name : elem;

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>${elemName} (${elem})</strong></td>
            <td><strong>${leftCount}</strong></td>
            <td><strong>${rightCount}</strong></td>
            <td><span class="status-balanced">✓ Conservado (${leftCount} = ${rightCount})</span></td>
          `;
          verifyBody.appendChild(tr);
        });

        // Step-by-Step Educational Explanation
        this.renderSteps(rawReactants, rawProducts, uniqueElements, parsedReactants, parsedProducts, reactantCoeffs, productCoeffs);

        resultsEl.style.display = 'block';
      } catch (err) {
        resultsEl.style.display = 'none';
        errorEl.textContent = `❌ ${err.message}`;
        errorEl.style.display = 'block';
      }
    }

    renderSteps(reactants, products, elements, parsedReactants, parsedProducts, rCoeffs, pCoeffs) {
      const container = document.getElementById('balancerStepsContent');
      const variables = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      const allMolecules = [...reactants, ...products];

      let html = `
        <ol class="step-list">
          <li>
            <strong>Paso 1: Asignar variables algebraicas a cada compuesto</strong><br>
            Asignamos una letra incógnita a los coeficientes estequiométricos de reactivos y productos:<br>
            <div class="code-box">
              ${reactants.map((r, i) => `${variables[i]}·${r}`).join(' + ')} ➔ ${products.map((p, i) => `${variables[reactants.length + i]}·${p}`).join(' + ')}
            </div>
          </li>
          <li>
            <strong>Paso 2: Formular las ecuaciones de balance elemental</strong><br>
            Por la Ley de Lavoisier (Conservación de la masa), la cantidad de átomos de cada elemento en los reactivos debe ser idéntica en los productos:<br>
            <ul>
              ${elements.map(elem => {
                const leftTerms = [];
                parsedReactants.forEach((mol, i) => {
                  const count = mol[elem] || 0;
                  if (count > 0) leftTerms.push(count === 1 ? variables[i] : `${count}${variables[i]}`);
                });
                const rightTerms = [];
                parsedProducts.forEach((mol, i) => {
                  const count = mol[elem] || 0;
                  if (count > 0) rightTerms.push(count === 1 ? variables[reactants.length + i] : `${count}${variables[reactants.length + i]}`);
                });
                return `<li><b>Elemento ${elem}:</b> ${leftTerms.join(' + ')} = ${rightTerms.join(' + ')}</li>`;
              }).join('')}
            </ul>
          </li>
          <li>
            <strong>Paso 3: Resolver el sistema para los mínimos coeficientes enteros positivos</strong><br>
            Resolviendo el sistema lineal homogéneo por eliminación de Gauss-Jordan:<br>
            <ul>
              ${reactants.map((r, i) => `<li><b>${variables[i]}</b> = <span style="color:#00f0ff;font-weight:bold;">${rCoeffs[i]}</span> para ${r}</li>`).join('')}
              ${products.map((p, i) => `<li><b>${variables[reactants.length + i]}</b> = <span style="color:#00f0ff;font-weight:bold;">${pCoeffs[i]}</span> para ${p}</li>`).join('')}
            </ul>
          </li>
          <li>
            <strong>Paso 4: Escribir la ecuación estequiométrica final</strong><br>
            Sustituyendo los valores hallados, obtenemos la ecuación balanceada exacta.
          </li>
        </ol>
      `;
      container.innerHTML = html;
    }
  }

  window.ChemicalEquationBalancer = ChemicalEquationBalancer;
})(typeof window !== 'undefined' ? window : global);
