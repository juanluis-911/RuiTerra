# RuiTerra

Landing page oficial de **RuiTerra** — plataforma de automatización empresarial para restaurantes y negocios locales.

Construida con **React + Vite + Tailwind CSS**.

---

## Tecnologías

- [React 18](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Inter Font](https://fonts.google.com/specimen/Inter) (Google Fonts)

---

## Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Logo.jsx          # Logotipo SVG (raíces + circuito)
    ├── Navbar.jsx        # Navegación sticky con menú mobile
    ├── Hero.jsx          # Hero + mockup de dashboard
    ├── Features.jsx      # Sección de funcionalidades (4 cards)
    ├── UseCases.jsx      # Casos de uso para restaurantes
    ├── Pricing.jsx       # Precios (Starter / Pro / Business)
    ├── Testimonials.jsx  # Testimonios de clientes
    ├── CTA.jsx           # Llamada a la acción final
    └── Footer.jsx        # Pie de página con links y redes
```

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/juanluis-911/RuiTerra.git
cd RuiTerra

# Instalar dependencias
npm install --include=dev

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Scripts disponibles

| Comando           | Descripción                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo     |
| `npm run build`   | Genera el build de producción        |
| `npm run preview` | Previsualiza el build de producción  |

---

## Identidad visual

| Token         | Valor     | Uso                  |
|---------------|-----------|----------------------|
| Primary       | `#0F2A44` | Azul marino          |
| Secondary     | `#1F7A4C` | Verde bosque         |
| Background    | `#F5F7FA` | Gris claro           |
| White         | `#FFFFFF` | Fondos de sección    |

---

## Secciones de la landing

1. **Navbar** — Logo, links de navegación y CTA "Comenzar gratis"
2. **Hero** — Titular principal + mockup interactivo de dashboard
3. **Funcionalidades** — 4 cards: automatización, integraciones, dashboards, escalabilidad
4. **Casos de uso** — Foco en restaurantes y negocios locales + mockup de gestión de mesas
5. **Precios** — 3 planes (Starter, Pro recomendado, Business)
6. **Testimonios** — 3 opiniones de clientes
7. **CTA final** — Llamada a la acción con estadísticas
8. **Footer** — Links, redes sociales y copyright

---

## Licencia

© 2026 RuiTerra. Todos los derechos reservados.
