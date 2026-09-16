# ELEMENTA — Tabla Periódica Interactiva ⚛️

Aplicación web educativa interactiva y moderna de los 118 elementos químicos, diseñada para estudiantes y profesores de química de secundaria y universidad.

![ELEMENTA](https://img.shields.io/badge/ELEMENTA-v1.0.0-00f0ff?style=for-the-badge&logo=atom)
![IUPAC Verified](https://img.shields.io/badge/Datos-IUPAC%20%26%20NIST-10b981?style=for-the-badge)
![Offline Ready](https://img.shields.io/badge/Offline-100%25-3b82f6?style=for-the-badge)

---

## 🌟 Características Principales

- 📊 **Tabla Periódica Completa (118 Elementos)**: Formato póster clásico con los 6 datos clave por casilla (Número atómico, Masa atómica, Electronegatividad, Estados de oxidación, Configuración electrónica y Nombre) más cuadro explicativo de Notación.
- 🎨 **Mapas de Calor Periódicos**: Gradientes visuales en tiempo real para Electronegatividad de Pauling, Radio Atómico, Primera Energía de Ionización, Densidad y Punto de Fusión.
- 🌡️ **Control de Temperatura y Estados**: Control deslizante de 0 K a 6000 K que calcula si cada elemento es sólido, líquido o gas a cualquier temperatura.
- ⚛️ **Modelo Atómico de Bohr 2D**: Órbitas cuánticas animadas con electrones en movimiento, velocidad regulable y capacidad por capa ($2n^2$).
- 🌐 **Visualizador Atómico 3D con Three.js**: Órbitas tridimensionales interactivas y núcleo con protones y neutrones agrupados.
- 🧬 **Tabla Periódica 3D**: Vistas espaciales en *Plano 3D*, *Hélice Cilíndrica* y *Esfera Atómica*.
- 🌈 **Espectro Óptico de Emisión**: Líneas espectrales de emisión física visible (380–750 nm) con cálculo de energía en eV y frecuencia en THz.
- ⚖️ **Calculadora de Masa Molar**: Soporta paréntesis `Ca(OH)2`, hidratos `CuSO4·5H2O` y desglose porcentual con gráficos Donut.
- ⚗️ **Balanceador de Ecuaciones Químicas**: Solucionador algebraico gaussiano de coeficientes estequiométricos con explicación paso a paso.
- 🔍 **Comparador Multi-Elemento**: Compara hasta 4 elementos con gráfico Radar multivariable y radios a escala.
- 🎯 **Modo Práctica / Quiz**: Cuestionario interactivo con puntuación y rachas para estudiantes.
- 🌓 **Modos Claro y Oscuro**: Diseño visual limpio, nítido y adaptable.
- 🖨️ **Impresión / Exportación**: Optimizado para imprimir como chuleta de estudio químico.

---

## 🚀 Cómo Publicar en GitHub Pages

1. Sube este proyecto a tu repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Lanzamiento inicial de ELEMENTA"
   git branch -M main
   git remote add origin https://github.com/gustavoramosmisiaco-max/elementa.git
   git push -u origin main
   ```

2. En tu repositorio de GitHub:
   - Ve a **Settings** ➔ **Pages**.
   - En **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` / `(root)` y haz clic en **Save**.
   - Tu sitio estará público en: `https://gustavoramosmisiaco-max.github.io/elementa/`

---

## 📁 Estructura del Proyecto

```
elementa/
├── index.html                     # Aplicación principal SPA
├── css/
│   ├── styles.css                 # Estilos globales y navegación
│   ├── periodic-table.css         # Cuadrícula clásica y cuadro de notación
│   ├── element-modal.css          # Ficha técnica multi-pestaña
│   ├── tools.css                  # Calculadora, balanceador, comparador y quiz
│   └── theme.css                  # Temas claro y oscuro
├── js/
│   ├── data/
│   │   └── elements-data.js       # Base de datos completa verificada de 118 elementos
│   ├── components/
│   │   ├── table-renderer.js      # Renderizador de cuadrícula periódica
│   │   ├── bohr-model.js          # Modelo de Bohr 2D animado
│   │   ├── atom-3d.js             # Átomo 3D con Three.js
│   │   ├── table-3d.js            # Tabla periódica 3D (Plano, Hélice, Esfera)
│   │   ├── emission-spectrum.js   # Espectro de emisión óptica
│   │   └── element-modal.js       # Controlador del modal de detalles
│   ├── tools/
│   │   ├── molar-mass.js          # Calculadora de masa molar
│   │   ├── equation-balancer.js   # Balanceador de ecuaciones
│   │   ├── comparator.js          # Comparador multi-elemento
│   │   └── practice-quiz.js       # Modo práctica / Quiz
│   ├── lib/
│   │   └── three.min.js           # Three.js local para funcionamiento offline
│   └── app.js                     # Inicializador y controlador SPA
└── server.js                      # Servidor local de desarrollo
```

---

## 📜 Licencia y Autoría

Desarrollado para educación científica. Datos validados según la IUPAC (International Union of Pure and Applied Chemistry) y el NIST.
