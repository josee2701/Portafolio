# Plan de Mejora — Portafolio Jose Campos (v2)

---

## Estado actual de los cambios implementados

| Componente | Estado |
|------------|--------|
| `Hero.tsx` | Rediseñado con blobs, gradiente, botón mejorado |
| `About.tsx` | Cards con glassmorphism, hover border, animaciones framer-motion |
| `Projects.tsx` | Imagen h-48 object-cover, hover lift, gradient title |
| `Skills.tsx` | Animaciones y hover border — SVG paths incorrectos (bug activo) |
| `Stats.tsx` | Creado — posición incorrecta (sección separada, debería estar dentro de About) |
| `WaveDivider.tsx` | Creado — se renderiza como linea roja, no funciona visualmente |
| `App.tsx` | Lazy loading implementado |

---

## 1. Bugs activos a corregir (prioridad inmediata)

### 1.1 SkillIcons.tsx — SVG paths incorrectos
Los paths SVG del archivo SkillIcons.tsx no corresponden a los logos reales:
- GitIcon usa el path del logo de Twitter/X (M23.953 4.57...)
- PythonIcon, DockerIcon, PostgreSQLIcon, ReactIcon, AzureIcon, LinuxIcon tienen paths genericos o inventados

Solucion: reemplazar todos los SVG por los paths correctos de Simple Icons (simpleicons.org) para cada tecnologia.

### 1.2 WaveDivider — se renderiza como linea roja
El componente usa fill="currentColor" con text-white, pero hay un conflicto de color heredado que lo hace visible como una linea roja.

Solucion: eliminar todos los WaveDivider de App.tsx. Son decorativos y generan problemas visuales. Se reemplazaran con separacion por padding entre secciones.

### 1.3 Stats — posicion incorrecta en el layout
Stats vive como seccion independiente entre Hero y About. El link "Info" del navbar lleva a #about pero las estadisticas quedan en una seccion separada sin ancla de navegacion.

Solucion:
1. Eliminar Stats y WaveDivider de App.tsx como secciones separadas
2. Integrar el contenido de estadisticas dentro de About.tsx, debajo de las 3 cards
3. Eliminar el archivo Stats.tsx
4. El id="about" existente en la seccion cubre todo el bloque

### 1.4 Bugs originales pendientes
- Favicon: index.html linea 5 — cambiar href="public/Gallery/logo192.png" a href="/Gallery/logo192.png"
- Telefono: Contact.tsx linea 158 — cambiar type="number" a type="tel"
- Dependencia idb sin usar — ejecutar npm uninstall idb

---

## 2. Paleta de colores — cambio de indigo/morado a azul oscuro

Problema actual: el portafolio usa indigo-600 + purple-600 como colores principales, generando tonos morados que no gustan.

Nueva paleta — azul oscuro como base con contraste en azul claro/cyan:

| Token | Clase Tailwind | Uso |
|-------|---------------|-----|
| Primary dark | blue-900 | Fondos de secciones destacadas, Stats |
| Primary mid | blue-700 | Botones, acentos principales |
| Primary light | sky-400 | Highlights, hovers, segundo color de gradiente |
| Accent | cyan-400 | Detalles, badges, iconos activos |
| Text en dark bg | blue-100 | Labels sobre fondo azul oscuro |

Reemplazos globales en todos los componentes:
- from-indigo-600 to-purple-600 → from-blue-700 to-sky-500
- dark:from-indigo-400 dark:to-purple-400 → dark:from-blue-400 dark:to-sky-400
- indigo-600 suelto → blue-700
- indigo-500 en hovers → sky-500
- Stats section background: from-blue-900 to-blue-700

Archivos afectados: Hero.tsx, About.tsx, Projects.tsx, Skills.tsx, Certifications.tsx, Contact.tsx, Stats (contenido que va a About), Footer.tsx, index.css

---

## 3. Mejoras visuales por seccion

### 3.1 About — integrar Stats dentro
Estructura de la seccion despues del cambio:

  [ Titulo "Areas de trabajo" ]
  [ 3 cards: Backend | Developer | Frontend ]
  -----------------------------------------------
  [ franja azul oscuro con estadisticas ]
  [ 3+ Proyectos | 7 Cert. | 2+ Anos | 8+ Techs ]

La franja de stats usa blue-900 como fondo para crear contraste visual dentro de la misma seccion, manteniendo el id="about" como ancla del navbar.

### 3.2 Seccion de musica con Spotify (nueva)
Componente nuevo: SpotifyPlayer.tsx
Ubicacion en App.tsx: entre Certifications y Contact

Implementacion con embed publico (sin OAuth, sin API key):

  iframe src="https://open.spotify.com/embed/playlist/ID?utm_source=generator&theme=0"
  width="100%" height="352" frameBorder="0" allowFullScreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"

- El usuario proporciona la URL de su playlist de Spotify
- theme=0 usa el tema oscuro del player nativo de Spotify
- Titulo de la seccion sugerido: "Mi musica mientras codifico"
- Sin dependencias adicionales

PENDIENTE DEL USUARIO: compartir URL de su playlist de Spotify antes de implementar.

### 3.3 Footer — rediseno completo
Problema actual: demasiado minimalista, solo nombre + 3 iconos sociales. Se ve incompleto.

Diseno propuesto — 3 columnas en desktop, una columna en mobile:

  Columna 1 — Identidad:
    Jose Campos
    Ingeniero de Sistemas
    Descripcion corta (1-2 lineas)

  Columna 2 — Navegacion:
    Info | Proyectos | Skills | Certificaciones | Contacto
    (links de scroll interno)

  Columna 3 — Redes sociales:
    GitHub, LinkedIn, Email con iconos y texto

  Franja inferior:
    Hecho con React + Vite | c 2026 Jose Campos. All rights reserved.

Cambios tecnicos:
- Layout grid-cols-3 en desktop, flex-col en mobile
- Fondo blue-950 (azul muy oscuro) para contraste fuerte
- Agregar descripcion corta en columna izquierda
- Links de navegacion funcionales dentro del footer

### 3.4 Transicion suave dark/light
No implementado aun. Agregar en index.css:

  html {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

---

## 4. Orden de implementacion recomendado

| # | Tarea | Impacto | Tiempo est. |
|---|-------|---------|-------------|
| 1 | Eliminar WaveDivider de App.tsx | Elimina bug visual critico | 10 min |
| 2 | Fix SVG paths en SkillIcons.tsx | Elimina iconos incorrectos | 45 min |
| 3 | Integrar Stats dentro de About.tsx + eliminar Stats.tsx | Corrige navegacion | 20 min |
| 4 | Cambiar paleta a azul oscuro en todos los componentes | Identidad visual nueva | 45 min |
| 5 | Rediseno Footer (3 columnas, blue-950) | Visual + profesionalismo | 30 min |
| 6 | Transicion suave dark/light en index.css | UX | 5 min |
| 7 | Fix favicon + phone type="tel" + npm uninstall idb | Bugs | 10 min |
| 8 | Nueva seccion SpotifyPlayer (requiere URL playlist) | Diferenciador visual | 30 min |

---

## 5. Pendiente del usuario

- Confirmar URL de playlist de Spotify para el player embed
- Confirmar texto o titulo preferido para la seccion de musica
