# Salud & Vida — Spa · Estética

Sitio web estático para un spa de estética (tratamientos faciales, corporales y de salud). Landing con storytelling animado por scroll: hero, pilares de marca, showcase de tratamientos por categoría (con vista pineada en desktop y carriles deslizables en móvil), sección de experiencia y ficha de detalle por servicio.

## Stack

- **[Astro](https://astro.build)** — sitio estático, sin SSR
- **Tailwind CSS** — estilos utility-first
- **GSAP** (+ ScrollTrigger) — animaciones y scrollytelling
- **pnpm** — gestor de paquetes

## Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── assets/            # imágenes y recursos
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   ├── Cursor.astro
│   │   ├── RotatingSeal.astro
│   │   ├── PillarsRail.astro          # carril pineado de pilares de marca
│   │   ├── CategoryShowcase.astro     # showcase de tratamientos por categoría
│   │   ├── ServiceCard.astro
│   │   ├── ServiceArt.astro
│   │   ├── StatRing.astro
│   │   ├── OrganicClips.astro         # clip-paths orgánicos reutilizables
│   │   └── Animations.astro           # orquestación global de GSAP/ScrollTrigger
│   ├── data/
│   │   └── services.ts                # catálogo de tratamientos y metadata
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── servicios/[slug].astro     # ficha de detalle por tratamiento
│   └── styles/
│       └── global.css
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando          | Acción                                              |
| :--------------- | :--------------------------------------------------- |
| `pnpm install`    | Instala las dependencias                             |
| `pnpm dev`        | Levanta el servidor local en `localhost:4321`        |
| `pnpm build`      | Genera el sitio estático en `./dist/`                |
| `pnpm preview`    | Sirve el build de producción localmente              |
| `pnpm astro ...`  | Ejecuta comandos de la CLI de Astro (`astro check`, etc.) |

## Notas de desarrollo

- Los tratamientos se definen en [`src/data/services.ts`](src/data/services.ts); agregar uno ahí genera automáticamente su card y su página de detalle.
- Las animaciones GSAP usan `gsap.context()` para scope y limpieza entre navegaciones (View Transitions de Astro); ver [`Animations.astro`](src/components/Animations.astro).
- En móvil, los carriles con scroll-jacking (pin + scrub) se reemplazan por un fallback simple de carriles arrastrables.
