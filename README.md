# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


___________________

# [GLITCH_CORE]

## Qué es
Una SPA web sobre videojuegos, landing con hero, catalogo, secciones de reseñas, estadisticas del sitio, suscripción a newsletter, etc

## Cómo correrlo
npm install
npm run dev

## Uso de IA
- Herramientas que usé: Gemini para el prompt inicial, Stitch, VSCode, copilot y busqueda en Google.
- Con IA además de el diseño de la pagina en Stitch y el respectivo codigo inicial tambien hice la sección de reseñas y pedí ideas sobre componentes, a mano corregí algunos errores que tiraba VSCode en los estilos que provenian de Stitch, arreglé las clases (nada wow, solo pasandolas de class a classList), y convertí a componentes todo el html plano

## Lo que me costó
Me perdí un poco al momento de tener que conectar componentes entre sí, pero entiendo que de alguna forma eso hace que App.jsx no tenga carga de logica innecesaria. Lo solucioné con IA, que lo hizo una vez y lo tomé de ejemplo para tenerlo en cuenta en los demas casos