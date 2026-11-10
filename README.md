# Portafolio — Jose Campos

Portafolio personal con proyectos, habilidades, certificaciones y contacto. Hecho con React, TypeScript, Tailwind CSS y Framer Motion. Tiene tema oscuro por defecto y modo claro.

## Requisitos

- Node.js 20 o superior (recomendado la última versión LTS).
- npm (viene con Node).

## Cómo arrancarlo

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
```

Después abre la dirección que aparece en la terminal (normalmente `http://localhost:5173`). Los cambios se ven al guardar el archivo.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local para desarrollar. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión generada con `build`. |
| `npm run lint` | Revisa el código con ESLint. |

## Cómo funciona

- `index.html` es la página base. `src/main.tsx` monta la aplicación React en ella.
- `src/App.tsx` junta las secciones de la página en orden.
- Cada sección (Sobre mí, Proyectos, Habilidades, Certificaciones, Contacto…) es un componente en `src/components/`.
- El menú de navegación se define en `src/navLinks.ts`. Para añadir o quitar un enlace, edita ese archivo.
- El tema claro/oscuro está en `src/context/` (`ThemeProvider`).

## Dónde editar el contenido

- **Textos y proyectos:** los componentes de `src/components/`.
- **Imágenes de proyectos y certificados:** `public/Gallery/`.
- **Currículum en PDF:** `public/cv/`.
- **Sistema de diseño** (colores, tipografía, componentes y convenciones): [`docs/COMPONENTES.md`](docs/COMPONENTES.md).
