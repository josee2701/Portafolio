# Plan de Mejora — Portafolio Jose Campos (v3)

> Actualizado el 2026-11-10 tras una auditoría del repositorio. Las tareas de la v2 que ya no aplican se marcan como resueltas u obsoletas.

---

## 1. Auditoría 2026-11-10 — pendientes

Orden por importancia. Los números sirven para referirse a cada punto.

| # | Prioridad | Tarea | Archivo | Estado |
|---|-----------|-------|---------|--------|
| A1 | Debe corregirse | La página queda en blanco si el navegador bloquea el almacenamiento | `src/context/ThemeContext.tsx` | Hecho |
| A2 | Conviene corregirlo | Quitar `React` del import no usado (el `tsc` fallaba) | `src/App.tsx` | Hecho |
| A3 | Conviene corregirlo | Timeout de 15 s y error correcto cuando la respuesta no es JSON | `src/components/Contact.tsx` | Hecho |
| A4 | Conviene corregirlo | Plantilla eliminada: `.bolt/` borrado, README reescrito, paquete renombrado a `portafolio-jose-campos` | `README.md`, `.bolt/`, `package.json` | Hecho |
| A5 | Opcional | "JavaScript" duplicado en habilidades: se quitó de Frontend y queda en Lenguajes | `src/components/Skills.tsx` | Hecho |
| A6 | Opcional | "Demo en vivo" del proyecto de correos quitado (apuntaba a una API) | `src/components/Projects.tsx` | Hecho |

**Ahorro estimado:** −224 líneas (documentación y archivos sobrantes). Ninguna dependencia se puede quitar: `react-icons` aporta los logos de Spotify, Azure y las habilidades.

**Pendiente de revisar fuera del repo:** el backend de Render (validación y protección contra spam). Su código no está en este repositorio.

---

## 2. Estado de la v2

| Tarea de la v2 | Estado | Verificado en |
|----------------|--------|---------------|
| 1.1 Paths SVG incorrectos en `SkillIcons.tsx` | Obsoleto: el archivo ya no existe. Los logos vienen de `react-icons` | `src/components/` |
| 1.2 `WaveDivider` se ve como línea roja | Resuelto: el componente ya no existe | `src/components/` |
| 1.3 `Stats` fuera de lugar | Resuelto: las estadísticas están dentro de `About.tsx` y `Stats.tsx` se eliminó | `src/components/About.tsx` |
| 1.4 Favicon con ruta `public/...` | Resuelto: ahora es `/Gallery/logo192.png` | `index.html` |
| 1.4 `type="number"` en el teléfono | Resuelto: ahora es `type="tel"` | `src/components/Contact.tsx` |
| 1.4 Dependencia `idb` sin usar | Resuelto: ya no está en `package.json` | `package.json` |
| 2. Paleta indigo/morado a azul oscuro | Resuelto: no queda ninguna clase `indigo` ni `purple` en el código | `src/` |
| 3.1 Estadísticas dentro de About | Resuelto | `src/components/About.tsx` |
| 3.2 Sección de música con Spotify | Resuelto: `SpotifyPlayer.tsx` con la playlist embebida | `src/components/SpotifyPlayer.tsx` |
| 3.3 Footer rediseñado en 3 columnas | Resuelto | `src/components/Footer.tsx` |
| 3.4 Transición suave dark/light | Resuelto: hay una regla `transition` en `index.css` | `src/index.css:7` |
| 5. Pendiente del usuario (URL de la playlist y título) | Resuelto: la playlist y el título ya están en el código | `src/components/SpotifyPlayer.tsx` |

---

## 3. Próximos pasos

| # | Tarea | Impacto | Tiempo est. |
|---|-------|---------|-------------|
| 1 | A1 a A6 | Todo hecho el 2026-11-10 (ver sección 1) | — |
| 2 | Pendiente del dueño: el repo de `despertador_novia` debe ser público para que el enlace de GitHub del caso destacado funcione | Enlace roto si es privado | 1 min |
| 3 | Pendiente: la paleta usa `blue` y `sky` para el mismo acento; unificar en un token `brand` | Coherencia visual | 1 h |
| 4 | Pendiente: escala de radios y sombras para tarjetas | Consistencia | 1 h |

---

## 4. Cambios del 2026-11-10: caso destacado y accesibilidad

**Hecho:**
- Nuevo apartado compacto `ProyectoDestacado.tsx` (Bella Durmiente), después del Hero, con enlace de descarga a Google Play y tres capturas.
- Imágenes en `public/Gallery/despertador/` (WebP, convertidas desde `despertador_novia/play_store/`).
- Accesibilidad: `aria-label` en los iconos del header (escritorio y móvil), foco visible global (`:focus-visible` en `index.css`), el menú del CV se cierra con Escape.
- CV renombrados a `public/cv/cv-en.pdf` y `public/cv/cv-es.pdf`. Los enlaces de `CVDownload.tsx` ya apuntan a los nombres nuevos.
- Verificación: `tsc -b` y `npm run build` pasan. ESLint sobre `src/` sin errores.

**Pendiente de decidir:**
- Las capturas de `play_store/` son mockups de marketing con texto superpuesto, no capturas limpias. Si quieres capturas de pantalla reales, hay que sacarlas en un dispositivo.
- Los textos de "Próximas mejoras" salen de `CLAUDE.md` del repo de la app (sección 12). Si cambian los planes, actualiza `ProyectoDestacado.tsx`.
