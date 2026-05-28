# magnetic-ia-website

Site web officiel de **Magnetic-IA** — Cadrage de projets IA pour dirigeants TPE et PME.

Construit avec [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com).

## Démarrage local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:4321`.

## Build production

```bash
npm run build
npm run preview
```

Le build statique est généré dans `dist/`.

## Déploiement

Le site est déployé automatiquement sur [Vercel](https://vercel.com) à chaque push sur `main`.

Production : [magnetic-ia.fr](https://magnetic-ia.fr)

## Structure

```
src/
├── pages/          # Routes du site (Astro file-based routing)
│   └── index.astro # Home
├── layouts/        # Layouts partagés
│   └── Layout.astro
├── components/     # Composants réutilisables (Hero, Manifesto, etc.)
└── styles/         # Styles globaux Tailwind
    └── global.css
```

## Design system

Voir `src/styles/global.css` pour les tokens (couleurs, polices, espacements).

Polices : Instrument Serif (titres italiques), Bricolage Grotesque (corps), JetBrains Mono (eyebrows), Caveat (post-its).

Palette : bleu nuit `#0b1426`, accent `#4d6fff`, hot pink `#ff5d8f`.

## Licence

MIT — David Gacquer / Magnetic-IA, 2026.
