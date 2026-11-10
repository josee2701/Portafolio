# Sistema de diseño y componentes

Documentación de las piezas reutilizables del portafolio. Todo lo descrito sale del código actual (`src/` y `tailwind.config.js`).

## Introducción

- **Tecnologías:** React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion, `lucide-react` (iconos).
- **Tema dark-first:** `darkMode: 'class'`. El tema oscuro es el predeterminado y `ThemeProvider` (`src/context/ThemeContext.tsx`) alterna la clase `dark` en `<html>`. Los estilos claros van sin prefijo y los oscuros con `dark:`.
- **Foco global:** `:focus-visible` dibuja un contorno de 2 px con el color `accent` y 2 px de separación (`src/index.css`).
- **Movimiento reducido:** con `prefers-reduced-motion: reduce` se desactivan `animate-blob`, `animate-pulse-ring` y `.caret`, y el scroll suave.

## Tokens

### Colores

| Token | Clase de ejemplo | Claro | Oscuro | Origen |
|-------|------------------|-------|--------|--------|
| `ink-950` | `bg-ink-950` | `#070B16` | `#070B16` | `tailwind.config.js` |
| `ink-900` | `bg-ink-900` | `#0A0F1E` | `#0A0F1E` | `tailwind.config.js` |
| `ink-800` | `bg-ink-800` | `#111827` | `#111827` | `tailwind.config.js` |
| `ink-700` | `bg-ink-700` | `#1B2436` | `#1B2436` | `tailwind.config.js` |
| `accent` | `text-accent`, `border-accent/40` | `rgb(2 132 199)` (sky-600) | `rgb(56 189 248)` (sky-400) | variable `--accent` en `src/index.css` |
| `accent-strong` | `hover:text-accent-strong` | `rgb(29 78 216)` (blue-700) | `rgb(125 211 252)` (sky-300) | variable `--accent-strong` en `src/index.css` |

Los `ink-*` son fijos (no cambian con el tema); se usan casi siempre con `dark:` (por ejemplo `dark:bg-ink-800`). `accent` y `accent-strong` admiten opacidad (`accent/10`) porque las variables están en formato "R G B".

### Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded-card` | `1rem` (= `rounded-2xl`) | Tarjetas, paneles, imágenes de tarjeta |
| `rounded-chip` | `0.5rem` (= `rounded-lg`) | Botones, campos, menús, iconos en caja |
| `rounded-photo-glow` | `2rem` | Resplandor de la foto del Hero |
| `rounded-photo-frame` | `1.75rem` | Marco de la foto del Hero |
| `rounded-photo-inner` | `1.65rem` | Foto interior (= marco menos el grosor `frame`) |

### Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-card` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` (= `shadow-md`) | Tarjetas en reposo |
| `shadow-card-hover` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` (= `shadow-xl`) | Tarjetas en hover, menús desplegables |
| `shadow-glow` | `0 0 40px -12px rgb(var(--accent) / 0.45)` | Resplandor del acento (hover del botón primario) |

### Escala

| Token | Valor | Uso |
|-------|-------|-----|
| `scale-102` | `1.02` | `hover:scale-102` (reemplaza `hover:scale-[1.02]`) |

### Tipografía

| Token | Valor | Uso |
|-------|-------|-----|
| `font-sans` | Inter, `ui-sans-serif`, `system-ui`, `sans-serif` | Texto general (aplicado a `body`) |
| `font-mono` | JetBrains Mono, `ui-monospace`, `SFMono-Regular`, `monospace` | Logo, eyebrows, terminal |
| `.eyebrow` | `font-mono text-xs` + `color: rgb(var(--accent))` | Sobretítulo de sección (por ejemplo `// hablemos`). Definida en `@layer components` con el color en CSS directo porque `@apply text-accent` falla en dev |

### Spacing, altura mínima y máxima extra

| Token | Valor | Uso |
|-------|-------|-----|
| `blob-lg` (spacing) | `28rem` | Blob decorativo del Hero |
| `blob-md` (spacing) | `26rem` | Blob decorativo del Hero |
| `frame` (spacing) | `2px` | Grosor del marco de la foto |
| `max-h-photo` (maxHeight) | `30rem` | Altura máxima de la foto del Hero |
| `min-h-loader` (minHeight) | `200px` | Contenedor del spinner de carga |

---

## Button

`src/components/Button.tsx`

**Descripción y cuándo usarlo.** Botón o enlace con aspecto de botón. Si se pasa `href` se renderiza un `<a>`; si no, un `<button>`. Úsalo para toda acción o llamada a la acción en lugar de escribir clases sueltas.

**Props**

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Estilo visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño |
| `fullWidth` | `boolean` | `false` | Añade `w-full` |
| `loading` | `boolean` | `false` | Estado de carga: deshabilita la acción |
| `loadingText` | `string` | `undefined` | Texto que reemplaza a `children` mientras `loading` es `true` |
| `className` | `string` | `undefined` | Clases extra, al final de la lista |
| `children` | `ReactNode` | requerido | Contenido |
| `href` | `string` | `undefined` | Si existe, se renderiza como `<a>` |
| `disabled` | `boolean` | `undefined` | Deshabilita (en `<a>` solo da `aria-disabled`) |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Solo en `<button>` |
| `target`, `rel` | atributos de `<a>` | `rel` = `noopener noreferrer` si `target="_blank"` | Solo en `<a>` |
| resto | atributos nativos del `<button>` o `<a>` | | Se propagan (`onClick`, `aria-*`, etc.). No reenvía `ref` |

**Variantes y tamaños**

| Variante | Clases |
|----------|--------|
| `primary` | `bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-glow` |
| `secondary` | `border border-gray-300 dark:border-white/20`, texto gris, `hover:border-accent hover:text-accent-strong` |

| Tamaño | Clases |
|--------|--------|
| `sm` | `px-4 py-2 text-sm` |
| `md` | `px-6 py-3` |
| `lg` | `px-6 py-3.5` |

Base común: `inline-flex items-center justify-center gap-2 rounded-chip font-semibold transition-all duration-200`.

**Estados**

- Default y hover: según la variante (el primario añade `shadow-glow`; el secundario cambia borde y texto).
- Foco: contorno global `:focus-visible`.
- Active: `active:opacity-90`.
- Disabled: `opacity-60 cursor-not-allowed` (por `disabled:` y `aria-disabled:`).
- Loading: igual que disabled, con `aria-busy` y `loadingText` si se indica.

**Accesibilidad**

- `<button>` usa `disabled` real y `type="button"` por defecto (no envía formularios por accidente).
- `<a>` inactivo (`disabled` o `loading`): `aria-disabled="true"`, `tabIndex={-1}` y `onClick` con `preventDefault`.
- `loading` añade `aria-busy="true"`.
- Si es un botón solo con icono hay que pasar `aria-label` (ver `CVDownload`).

**Qué sí / qué no**

| Sí | No |
|----|----|
| `<Button href="..." target="_blank">` para enlaces externos (agrega `rel` seguro) | Escribir `<a className="bg-gradient-to-r ...">` a mano |
| `loading` + `loadingText` durante un envío | Cambiar el texto del botón con un ternario propio para el estado de carga |
| `variant="secondary"` para la acción menos importante | Poner dos botones `primary` juntos |

**Ejemplo**

```tsx
<Button href="https://github.com/josee2701/despertador_novia" variant="secondary" size="sm" target="_blank">
  Ver código
</Button>

<Button type="submit" size="lg" fullWidth loading={isSubmitting} loadingText="Enviando…">
  Enviar mensaje
</Button>
```

---

## SectionHeading

`src/components/SectionHeading.tsx`

**Descripción y cuándo usarlo.** Encabezado de sección: eyebrow opcional, `<h2>` y una barra divisora con degradado, todo animado con Framer Motion al entrar en pantalla (una sola vez). Úsalo para el título de cada sección en lugar de escribir `<h2>` sueltos.

**Props**

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `title` | `string` | requerido | Texto del `<h2>` |
| `eyebrow` | `string` | `undefined` | Sobretítulo con clase `.eyebrow` (por ejemplo `// hablemos`) |
| `id` | `string` | `undefined` | `id` del `<h2>` (para `aria-labelledby`) |
| `size` | `'lg' \| 'sm'` | `'lg'` | Tamaño del título y del margen inferior |
| `className` | `string` | `undefined` | Clases del contenedor |

**Variantes y tamaños**

| `size` | Título | Margen bajo la barra |
|--------|--------|----------------------|
| `lg` | `text-3xl md:text-4xl` | `mb-16` |
| `sm` | `text-2xl md:text-3xl` | `mb-8` |

Barra: `w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full`.

**Estados.** Solo la animación de entrada (opacidad, desplazamiento y escala de la barra). No tiene hover, foco ni disabled.

**Accesibilidad**

- Renderiza un `<h2>`; con `id` la sección puede usar `aria-labelledby` (lo hace `FeaturedProject`).
- Sin ARIA propio. La barra es decorativa y no tiene texto.

**Qué sí / qué no**

| Sí | No |
|----|----|
| `<SectionHeading eyebrow="// hablemos" title="..." />` | Escribir `<h2>` con `text-3xl font-bold` a mano |
| `size="sm"` para apartados compactos | Cambiar tamaños con `className` |
| Pasar `id` si la sección usa `aria-labelledby` | Poner `<h1>` aquí: siempre es `<h2>` |

**Ejemplo**

```tsx
<SectionHeading eyebrow="// formación continua" title="Certificaciones y logros" />
<SectionHeading size="sm" id="featured-title" eyebrow="// caso destacado" title="Bella Durmiente" />
```

---

## IconLink

`src/components/IconLink.tsx`

**Descripción y cuándo usarlo.** Enlace de solo icono (redes, correo) del Header. Úsalo para cualquier enlace que sea solo un icono de `lucide-react`.

**Props**

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `href` | `string` | requerido | Destino. Si empieza por `http` se abre en pestaña nueva con `rel="noopener noreferrer"` |
| `aria-label` | `string` | requerido | Nombre accesible |
| `icon` | `LucideIcon` | requerido | Componente de icono |
| `size` | `number` | `20` | Tamaño del icono en px |

**Variantes y tamaños.** Una sola variante; el tamaño se controla con `size`.

**Estados**

- Default: `text-gray-600 dark:text-gray-300`.
- Hover: `text-gray-900 dark:text-white` con `transition-colors`.
- Foco: contorno global `:focus-visible`.

**Accesibilidad.** `aria-label` es obligatorio por tipo; el enlace no tiene texto visible. `mailto:` no abre pestaña nueva (no empieza por `http`).

**Qué sí / qué no**

| Sí | No |
|----|----|
| `aria-label` descriptivo (`"GitHub"`) | Dejar un enlace de icono sin nombre accesible |
| Un icono de `lucide-react` | Pasar un `<svg>` suelto |

**Ejemplo**

```tsx
<IconLink href="https://github.com/josee2701" icon={Github} aria-label="GitHub" />
```

---

## ThemeToggle

`src/components/ThemeToggle.tsx`

**Descripción y cuándo usarlo.** Botón que alterna entre tema claro y oscuro usando `useTheme()`. Se usa en el Header (escritorio y móvil). No recibe props.

**Props.** Ninguna.

**Variantes y tamaños.** Ninguna. Icono de 20 px: `Sun` cuando el tema es oscuro, `Moon` cuando es claro.

**Estados**

- Default: `text-gray-600 dark:text-gray-300`.
- Hover: `text-gray-900 dark:text-white`.
- Foco: contorno global `:focus-visible`.

**Accesibilidad**

- `aria-label` cambia: `"Activar modo claro"` / `"Activar modo oscuro"`.
- `aria-pressed` es `true` cuando el tema es oscuro.
- Es un `<button type="button">`: Enter y Espacio lo activan.

**Qué sí / qué no**

| Sí | No |
|----|----|
| Usar `<ThemeToggle />` y leer el tema con `useTheme()` | Manipular la clase `dark` del `<html>` desde otro componente |
| Mantener un solo toggle por barra | Duplicar el botón con otra lógica |

**Ejemplo**

```tsx
<div className="flex items-center space-x-4">
  <ThemeToggle />
</div>
```

---

## CVDownload

`src/components/CVDownload.tsx`

**Descripción y cuándo usarlo.** Botón "Descargar CV" que despliega un menú con dos PDF: `/cv/cv-en.pdf` ("CV English") y `/cv/cv-es.pdf` ("CV Español"). Se usa en el Header. No recibe props.

**Props.** Ninguna.

**Variantes y tamaños.** Usa `Button` `size="sm"` (primario). El texto "Descargar CV" solo se ve desde `sm` (`hidden sm:inline`); en pantallas pequeñas queda el icono.

**Estados**

- Cerrado y abierto (`isOpen`).
- Ítems del menú: hover con `hover:bg-gray-100 dark:hover:bg-ink-700`.
- Foco: contorno global.
- Se cierra al elegir un ítem, al hacer clic fuera (`mousedown`) o con Escape.

**Accesibilidad**

- Botón: `aria-label="Descargar CV"`, `aria-expanded`, `aria-haspopup="menu"`, `aria-controls="cv-menu"`.
- Menú: `id="cv-menu"`, `role="menu"`; cada enlace tiene `role="menuitem"` y atributo `download`.
- Teclado: Escape cierra y devuelve el foco al botón; flecha abajo/arriba recorre los ítems de forma circular.
- Al abrir el menú el foco no se mueve automáticamente a un ítem (el usuario usa Tab o las flechas).

**Qué sí / qué no**

| Sí | No |
|----|----|
| Añadir nuevos CV como otro `<a role="menuitem">` con `itemClass` | Añadir ítems sin `role="menuitem"` (las flechas no los encontrarían) |
| Mantener los PDF en `public/cv/` | Enlazar a rutas fuera de `public/` |

**Ejemplo**

```tsx
<CVDownload />
```

---

## navLinks y useActiveSection

`src/navLinks.ts` y `src/hooks/useActiveSection.ts`

**Descripción y cuándo usarlo.** `navLinks` es la lista única de enlaces de navegación; el Header y el Footer la filtran. `useActiveSection(ids)` devuelve el id de la sección visible para marcar el enlace activo. Para añadir una sección a la navegación, edita solo `navLinks`.

**Props / API**

`NavLink`:

| Propiedad | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `href` | `string` | requerido | Ancla (`#about`) |
| `label` | `string` | requerido | Texto visible en español |
| `inHeader` | `boolean` | requerido | Aparece en el Header |
| `inFooter` | `boolean` | requerido | Aparece en el Footer |

Enlaces actuales: `#about`, `#projects`, `#featured`, `#skills`, `#certifications`, `#music` (solo Footer) y `#contact`.

`useActiveSection(ids: string[]): string | null`: recibe ids sin `#`; devuelve el id activo o `null`. Usa `IntersectionObserver` con `rootMargin: '-40% 0px -55% 0px'` (franja central del viewport). Si `IntersectionObserver` no existe, devuelve `null`.

**Variantes y tamaños.** No aplica.

**Estados (enlace del Header)**

- Default: `text-gray-600 dark:text-gray-300`.
- Hover: `text-gray-900 dark:text-white`.
- Activo: `text-gray-900 dark:text-white` y `aria-current="location"`.

**Accesibilidad.** El `<nav>` tiene `aria-label="Principal"`. El enlace activo lleva `aria-current="location"`. El menú móvil usa `aria-expanded`, `aria-controls="mobile-menu"` y Escape lo cierra devolviendo el foco al botón.

**Qué sí / qué no**

| Sí | No |
|----|----|
| Añadir la sección en `navLinks` (una sola fuente) | Escribir enlaces a mano en Header o Footer |
| Que el `href` coincida con el `id` real de la sección | Usar un `href` sin sección con ese `id` (nunca se activará) |
| Etiquetas en español | Etiquetas en inglés |

**Ejemplo**

```tsx
const headerLinks = navLinks.filter((l) => l.inHeader);
const active = useActiveSection(headerLinks.map((l) => l.href.slice(1)));
// isActive = active === l.href.slice(1)
```

---

## cardStyles (receta de tarjeta)

`src/components/cardStyles.ts`

**Descripción y cuándo usarlo.** Exporta la constante `cardHover`, la clase de tarjeta con elevación al pasar el cursor. La usan `Projects` y `Certifications`. Úsala para tarjetas interactivas en rejilla o carrusel.

**Props.** No es un componente: es una cadena de clases. Valor: `bg-white dark:bg-ink-800 border border-transparent dark:border-white/10 rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 hover:border-accent/40 transition-all duration-300 h-full flex flex-col`.

**Variantes y tamaños.** Ninguna.

**Estados**

- Default: `shadow-card`; en oscuro, borde `white/10`.
- Hover: `shadow-card-hover`, sube 0,5 rem (`-translate-y-2`) y borde `accent/40`.
- Foco: no tiene; los elementos interactivos internos usan el foco global.

**Accesibilidad.** Solo estilo, sin roles. El contenido interactivo debe ser un enlace o botón dentro de la tarjeta.

**Qué sí / qué no**

| Sí | No |
|----|----|
| `<div className={cardHover}>` | Copiar las clases en cada tarjeta |
| Ajustar la receta en un solo lugar | Usar `rounded-2xl` o `shadow-md` en lugar de `rounded-card` / `shadow-card` |
| Tarjetas con `h-full` en una rejilla | Esperar que `overflow-hidden` deje salir elementos del borde |

**Ejemplo**

```tsx
import { cardHover } from './cardStyles';

<div className={cardHover}>
  <img src="..." alt="..." />
  <div className="p-6">...</div>
</div>
```

---

## Input y formulario de Contact

`src/components/Contact.tsx`

**Descripción y cuándo usarlo.** Formulario con campos `name`, `apellido`, `phone`, `email` y `message`. No existe un componente `Input` aparte: los campos comparten las constantes `inputClass` y `labelClass` dentro de `Contact.tsx`. El formulario envía un `POST` JSON a `https://backend-yw41.onrender.com/from_contact/` con tiempo máximo de 15 s. Si se crea otro formulario, reutiliza estas clases.

**Props.** `Contact` no recibe props. Cada campo usa: `id` y `name` iguales, `<label htmlFor>`, `value`/`onChange` controlados, `placeholder`, `required`, `disabled={isSubmitting}`.

**Validación (`validate`, solo al enviar; el `<form>` tiene `noValidate`)**

| Campo | Regla | Mensaje |
|-------|-------|---------|
| `name` | No vacío | `Ingresa tu nombre.` |
| `apellido` | No vacío | `Ingresa tu apellido.` |
| `email` | No vacío / formato `^[^\s@]+@[^\s@]+\.[^\s@]+$` | `Ingresa tu email.` / `Ingresa un email válido.` |
| `phone` | No vacío | `Ingresa tu celular o teléfono.` |
| `message` | No vacío | `Escribe tu mensaje.` |

**Variantes y tamaños.** `phone` es `type="tel"`, `email` es `type="email"`, `message` es un `<textarea rows={4}>`. El botón de envío es `Button size="lg" fullWidth`.

**Estados**

- Default: borde `gray-200` / `dark:white/10`.
- Foco: `focus:ring-2 focus:ring-accent` (y `focus:border-transparent`).
- Disabled: `disabled:opacity-60` mientras se envía.
- Error: mensaje bajo el campo (`text-sm text-red-500 dark:text-red-400`). El error del campo se limpia al escribir en él. Al fallar la validación el foco pasa al primer campo con error.
- Enviando: el botón muestra `Enviando…` (`loading`).
- Enviado: el botón queda deshabilitado con `✓ Mensaje enviado` y no se puede reenviar.
- Resultado del servidor: toast de éxito (`¡Mensaje enviado correctamente!`), de error (`Error: <mensaje o "No se pudo enviar.">`) o de red (`Error de red: No se pudo conectar con el servidor.`) con `react-toastify`, 3 s.

**Accesibilidad**

- Cada campo tiene `<label htmlFor>`.
- Con error: `aria-invalid="true"` y `aria-describedby="<campo>-error"`; el mensaje es `<p id="<campo>-error" role="alert">`, así el lector de pantalla lo anuncia.
- El foco se mueve al primer campo inválido.
- Nota: el `ToastContainer` de `react-toastify` gestiona sus propios roles ARIA.

**Qué sí / qué no**

| Sí | No |
|----|----|
| Mensajes de error en español, cortos y con acción (`Ingresa tu nombre.`) | Mensajes genéricos (`Campo inválido`) |
| `aria-invalid` + `aria-describedby` + `role="alert"` en cada campo | Mostrar el error solo con color rojo |
| `inputClass` / `labelClass` para nuevos campos | Crear campos con clases propias |

**Ejemplo**

```tsx
<div>
  <label htmlFor="email" className={labelClass}>Email</label>
  <input type="email" id="email" name="email" disabled={isSubmitting}
    aria-invalid={errors.email ? true : undefined}
    aria-describedby={errors.email ? 'email-error' : undefined}
    value={formData.email} onChange={handleChange} className={inputClass} required />
  {errors.email && <p id="email-error" role="alert" className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.email}</p>}
</div>
```

---

## FeaturedProject

`src/components/FeaturedProject.tsx`

**Descripción y cuándo usarlo.** Apartado compacto del caso destacado (la app Bella Durmiente), con descripción, etiquetas de tecnología, dos botones y tres capturas. Es una sección con `id="featured"`. No recibe props: los datos (`screenshots`, `stack`, enlaces) están dentro del archivo. Para otro caso destacado, edita esos datos o genera un componente nuevo a partir de este.

**Props.** Ninguna.

**Variantes y tamaños.** Usa `SectionHeading size="sm"` y dos `Button size="sm"`: el primario "Descargar en Google Play" y el secundario "Ver código", ambos con `target="_blank"`. Panel: `rounded-card shadow-card` con rejilla `lg:grid-cols-2`. Las imágenes usan `rounded-card`.

**Estados**

- Entrada: `motion.section` con fade-in una sola vez.
- Botones: los de `Button`.
- Capturas: contenedor con `overflow-x-auto` para desplazarse en pantallas estrechas.
- No tiene estados de error ni de carga (imágenes con `loading="lazy"`).

**Accesibilidad**

- `<section aria-labelledby="featured-title">`, enlazado al `id` del `SectionHeading`.
- Las imágenes tienen `alt` descriptivo; el icono de `ExternalLink` lleva `aria-hidden="true"`.
- El carril de capturas tiene `role="region"`, `aria-label="Capturas de la app"` y `tabIndex={0}` para desplazarlo con el teclado.

**Qué sí / qué no**

| Sí | No |
|----|----|
| Indicar `width` y `height` en las imágenes (evita saltos de maquetación) | Imágenes sin `alt` |
| `Button` para las acciones | `<a>` con clases propias |
| Etiquetas de tecnología con el estilo existente (excepción acordada) | Convertir las etiquetas a `accent` sin decidirlo antes |

**Ejemplo**

```tsx
<FeaturedProject />
```

---

## Convenciones

1. **Una sola fuente de verdad para el acento.** Usa el token `accent` (y `accent-strong` para hover). No escribas `sky-*` ni `blue-*` para el color de acento. El valor se cambia solo en `src/index.css`.
2. **Radios.** `rounded-card` para tarjetas, paneles e imágenes de tarjeta; `rounded-chip` para botones, campos, menús e iconos en caja. Los radios `photo-*` son solo para la foto del Hero. No uses `rounded-2xl` ni `rounded-lg` directos para estos casos.
3. **Sombras y escala.** `shadow-card`, `shadow-card-hover`, `shadow-glow` y `scale-102` en vez de valores arbitrarios. En `src` no hay valores arbitrarios (`[...]`) de Tailwind.
4. **Botones.** Usa `Button` en lugar de clases sueltas (también para enlaces con aspecto de botón).
5. **Títulos de sección.** Usa `SectionHeading`, no `<h2>` propios.
6. **Textos visibles en español** (etiquetas, mensajes de error, `aria-label`).
7. **Nombres de archivos de componentes en inglés** (`Button.tsx`, `FeaturedProject.tsx`).
8. **Ids de sección en inglés** (`about`, `projects`, `featured`, `skills`, `certifications`, `music`, `contact`) y deben coincidir con `navLinks`.
9. **Excepciones acordadas** (no son errores):
   - Degradados `from-blue-600 to-sky-*` de los botones primarios y de los divisores.
   - Colores de marca de los logos de Skills.
   - La terminal del Hero (colores propios).
   - Las etiquetas de tecnología con tinte azul (`bg-blue-50 ... text-blue-700`).
