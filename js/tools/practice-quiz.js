/**
 * ELEMENTA - Modo Práctica y Quiz Educativo para Estudiantes
 */
(function(window) {
  'use strict';

  class PracticeQuiz {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.currentMode = 'mixed';
      this.score = 0;
      this.streak = 0;
      this.bestStreak = parseInt(localStorage.getItem('elementa_best_streak') || '0', 10);
      this.totalAnswered = 0;
      this.currentQuestion = null;
      this.isAnswered = false;

      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="quiz-wrapper">
          <div class="tool-header">
            <h3><i class="tool-icon">🎯</i> Modo Práctica: Desafío Químico Estudiantil</h3>
            <p class="tool-desc">Pon a prueba tus conocimientos de química interactiva. Responde preguntas sobre símbolos, familias, configuraciones electrónicas y propiedades periódicas.</p>
          </div>

          <div class="quiz-stats-bar">
            <div class="quiz-stat-card">
              <span class="stat-title">Puntuación</span>
              <span class="stat-num" id="quizScore">0</span>
            </div>
            <div class="quiz-stat-card">
              <span class="stat-title">Racha Actual 🔥</span>
              <span class="stat-num" id="quizStreak">0</span>
            </div>
            <div class="quiz-stat-card">
              <span class="stat-title">Mejor Racha 🏆</span>
              <span class="stat-num" id="quizBestStreak">${this.bestStreak}</span>
            </div>
          </div>

          <div class="quiz-mode-pills">
            <button class="mode-pill active" data-mode="mixed">Aleatorio / Mixto</button>
            <button class="mode-pill" data-mode="symbol">Símbolo ↔ Nombre</button>
            <button class="mode-pill" data-mode="location">Grupos & Periodos</button>
            <button class="mode-pill" data-mode="valence">Valencia & Configuración</button>
            <button class="mode-pill" data-mode="trends">Tendencias Periódicas</button>
          </div>

          <div class="quiz-card" id="quizCard">
            <div class="quiz-badge" id="quizCategoryBadge">Pregunta Química</div>
            <h4 class="quiz-question-text" id="quizQuestionText">Cargando desafío...</h4>

            <div class="quiz-visual-hint" id="quizVisualHint"></div>

            <div class="quiz-options-grid" id="quizOptionsGrid"></div>

            <div class="quiz-feedback-box" id="quizFeedbackBox" style="display:none;"></div>

            <div class="quiz-footer">
              <button id="btnNextQuestion" class="btn-primary" style="display:none;">Siguiente Pregunta ➔</button>
            </div>
          </div>
        </div>
      `;

      this.setupEvents();
      this.generateQuestion();
    }

    setupEvents() {
      const modePills = this.container.querySelectorAll('.mode-pill');
      modePills.forEach(pill => {
        pill.addEventListener('click', () => {
          modePills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.currentMode = pill.getAttribute('data-mode');
          this.generateQuestion();
        });
      });

      document.getElementById('btnNextQuestion').addEventListener('click', () => {
        this.generateQuestion();
      });
    }

    getRandomElement() {
      const list = window.ELEMENTS_DATA || [];
      return list[Math.floor(Math.random() * list.length)];
    }

    getDistinctRandomElements(count, excludeNumber = null) {
      const list = (window.ELEMENTS_DATA || []).filter(e => e.number !== excludeNumber);
      const shuffled = [...list].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    generateQuestion() {
      this.isAnswered = false;
      const feedbackBox = document.getElementById('quizFeedbackBox');
      const nextBtn = document.getElementById('btnNextQuestion');
      const visualHint = document.getElementById('quizVisualHint');
      feedbackBox.style.display = 'none';
      nextBtn.style.display = 'none';
      visualHint.innerHTML = '';

      let mode = this.currentMode;
      if (mode === 'mixed') {
        const modes = ['symbol', 'name_to_symbol', 'location', 'valence', 'trends'];
        mode = modes[Math.floor(Math.random() * modes.length)];
      }

      let q = null;
      if (mode === 'symbol') {
        q = this.makeSymbolQuestion();
      } else if (mode === 'name_to_symbol') {
        q = this.makeNameToSymbolQuestion();
      } else if (mode === 'location') {
        q = this.makeLocationQuestion();
      } else if (mode === 'valence') {
        q = this.makeValenceQuestion();
      } else if (mode === 'trends') {
        q = this.makeTrendsQuestion();
      } else {
        q = this.makeSymbolQuestion();
      }

      this.currentQuestion = q;
      this.renderQuestion(q);
    }

    makeSymbolQuestion() {
      const target = this.getRandomElement();
      const others = this.getDistinctRandomElements(3, target.number);
      const options = [target, ...others].sort(() => 0.5 - Math.random());

      return {
        category: 'Símbolos Químicos',
        question: `¿Cuál es el nombre del elemento químico cuyo símbolo es <strong>${target.symbol}</strong> (Z = ${target.number})?`,
        correctIndex: options.indexOf(target),
        options: options.map(el => el.name),
        explanation: `El símbolo <strong>${target.symbol}</strong> corresponde al <strong>${target.name}</strong> (Z=${target.number}, masa ${target.mass} u). Pertenece a la familia de los ${target.categoryName.toLowerCase()}.`
      };
    }

    makeNameToSymbolQuestion() {
      const target = this.getRandomElement();
      const others = this.getDistinctRandomElements(3, target.number);
      const options = [target, ...others].sort(() => 0.5 - Math.random());

      return {
        category: 'Identificación de Símbolos',
        question: `¿Cuál es el símbolo químico del <strong>${target.name}</strong> (Número atómico ${target.number})?`,
        correctIndex: options.indexOf(target),
        options: options.map(el => el.symbol),
        explanation: `El <strong>${target.name}</strong> se representa con el símbolo <strong>${target.symbol}</strong> (del latín <em>${target.latinName}</em>).`
      };
    }

    makeLocationQuestion() {
      const target = this.getRandomElement();
      const types = ['category', 'group_period', 'block'];
      const chosenType = types[Math.floor(Math.random() * types.length)];

      if (chosenType === 'category') {
        const categories = [
          'Metales alcalinos', 'Metales alcalinotérreos', 'Metales de transición',
          'Metales post-transicionales', 'Metaloides', 'No metales reactivos',
          'Gases nobles', 'Lantánidos', 'Actínidos'
        ];
        const correctCategory = target.categoryName;
        const otherCategories = categories.filter(c => c !== correctCategory).sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [correctCategory, ...otherCategories].sort(() => 0.5 - Math.random());

        return {
          category: 'Familias Químicas',
          question: `¿A qué familia o categoría pertenece el elemento <strong>${target.name} (${target.symbol})</strong>?`,
          correctIndex: options.indexOf(correctCategory),
          options: options,
          explanation: `El <strong>${target.name}</strong> es un miembro de la familia de los <strong>${target.categoryName}</strong>.`
        };
      } else {
        const correctAns = `Grupo ${target.group || 'Fila f'}, Periodo ${target.period}`;
        const options = [correctAns];

        while (options.length < 4) {
          const fakeG = Math.floor(Math.random() * 18) + 1;
          const fakeP = Math.floor(Math.random() * 7) + 1;
          const fakeAns = `Grupo ${fakeG}, Periodo ${fakeP}`;
          if (!options.includes(fakeAns)) options.push(fakeAns);
        }
        options.sort(() => 0.5 - Math.random());

        return {
          category: 'Ubicación Periódica',
          question: `¿En qué grupo y periodo de la Tabla Periódica se ubica el <strong>${target.name} (${target.symbol})</strong>?`,
          correctIndex: options.indexOf(correctAns),
          options: options,
          explanation: `El <strong>${target.name}</strong> (Z=${target.number}) se sitúa en el <strong>${correctAns}</strong> (Bloque ${target.block}).`
        };
      }
    }

    makeValenceQuestion() {
      // Choose main group elements for unambiguous valence questions
      const mainGroupElements = (window.ELEMENTS_DATA || []).filter(e => e.group && (e.group <= 2 || e.group >= 13) && e.number <= 86);
      const target = mainGroupElements[Math.floor(Math.random() * mainGroupElements.length)];

      const correctValence = target.valenceElectrons;
      const possible = [1, 2, 3, 4, 5, 6, 7, 8].filter(v => v !== correctValence).sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [correctValence, ...possible].sort(() => 0.5 - Math.random());

      return {
        category: 'Electrones de Valencia',
        question: `¿Cuántos <strong>electrones de valencia</strong> (capa externa) tiene el <strong>${target.name} (${target.symbol})</strong>?`,
        correctIndex: options.indexOf(correctValence),
        options: options.map(v => `${v} electrón${v > 1 ? 'es' : ''}`),
        explanation: `El <strong>${target.name}</strong> tiene <strong>${correctValence}</strong> electrón(es) de valencia. Su configuración electrónica es <code>${target.electronConfigurationSemantic}</code>.`
      };
    }

    makeTrendsQuestion() {
      const candidates = this.getDistinctRandomElements(4).filter(e => e.electronegativity !== null);
      if (candidates.length < 4) return this.makeSymbolQuestion();

      const isElectronegativity = Math.random() > 0.5;

      if (isElectronegativity) {
        candidates.sort((a, b) => b.electronegativity - a.electronegativity);
        const correct = candidates[0];
        const shuffled = [...candidates].sort(() => 0.5 - Math.random());

        return {
          category: 'Tendencias Periódicas',
          question: `¿Cuál de los siguientes elementos posee la <strong>mayor electronegatividad</strong> en la escala de Pauling?`,
          correctIndex: shuffled.indexOf(correct),
          options: shuffled.map(el => `${el.name} (${el.symbol})`),
          explanation: `El <strong>${correct.name}</strong> tiene la electronegatividad más alta entre las opciones con <strong>${correct.electronegativity}</strong> (La electronegatividad aumenta hacia arriba y a la derecha en la tabla).`
        };
      } else {
        const withRadius = candidates.filter(e => e.atomicRadius);
        withRadius.sort((a, b) => b.atomicRadius - a.atomicRadius);
        const correct = withRadius[0];
        const shuffled = [...withRadius].sort(() => 0.5 - Math.random());

        return {
          category: 'Radio Atómico',
          question: `¿Cuál de los siguientes elementos posee el <strong>mayor radio atómico</strong>?`,
          correctIndex: shuffled.indexOf(correct),
          options: shuffled.map(el => `${el.name} (${el.symbol})`),
          explanation: `El <strong>${correct.name}</strong> tiene el radio más grande con <strong>${correct.atomicRadius} pm</strong> (El radio atómico aumenta hacia la izquierda y hacia abajo en la tabla).`
        };
      }
    }

    renderQuestion(q) {
      document.getElementById('quizCategoryBadge').textContent = q.category;
      document.getElementById('quizQuestionText').innerHTML = q.question;

      const grid = document.getElementById('quizOptionsGrid');
      grid.innerHTML = '';

      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `<span class="opt-letter">${['A', 'B', 'C', 'D'][idx]}</span> <span>${optText}</span>`;
        btn.addEventListener('click', () => this.handleAnswer(idx, btn));
        grid.appendChild(btn);
      });
    }

    handleAnswer(selectedIndex, buttonEl) {
      if (this.isAnswered) return;
      this.isAnswered = true;

      const q = this.currentQuestion;
      const isCorrect = selectedIndex === q.correctIndex;
      const allButtons = this.container.querySelectorAll('.quiz-option-btn');

      allButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
          btn.classList.add('wrong');
        }
      });

      const feedbackBox = document.getElementById('quizFeedbackBox');
      const nextBtn = document.getElementById('btnNextQuestion');

      if (isCorrect) {
        this.score += 100 + (this.streak * 20);
        this.streak += 1;
        if (this.streak > this.bestStreak) {
          this.bestStreak = this.streak;
          localStorage.setItem('elementa_best_streak', this.bestStreak);
        }
        feedbackBox.className = 'quiz-feedback-box feedback-correct';
        feedbackBox.innerHTML = `<strong>🎉 ¡Correcto! (+${100 + ((this.streak - 1) * 20)} pts)</strong><br>${q.explanation}`;
      } else {
        this.streak = 0;
        feedbackBox.className = 'quiz-feedback-box feedback-wrong';
        feedbackBox.innerHTML = `<strong>❌ Incorrecto</strong><br>${q.explanation}`;
      }

      document.getElementById('quizScore').textContent = this.score;
      document.getElementById('quizStreak').textContent = this.streak;
      document.getElementById('quizBestStreak').textContent = this.bestStreak;

      feedbackBox.style.display = 'block';
      nextBtn.style.display = 'inline-block';
    }
  }

  window.PracticeQuiz = PracticeQuiz;
})(typeof window !== 'undefined' ? window : global);
