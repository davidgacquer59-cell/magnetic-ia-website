# Historique des erreurs responsive — magnetic-ia.fr

---

## 2026-06-03 — Contraste insuffisant `--text-tertiary` en mode light

**Fichier :** `src/styles/global.css`
**Problème :** `--text-tertiary: #94a3b8` sur fond blanc `#ffffff` = ratio 2.53:1, bien en dessous du minimum WCAG AA (4.5:1 pour texte normal).
**Manifestation :** Lighthouse Accessibility — audit `color-contrast` échoue en mode light sur tous les éléments utilisant cette variable (labels, dates, mentions légales, descriptions secondaires).
**Correction appliquée :** `#94a3b8` → `#596475` (ratio 5.37:1 ✅)
**À surveiller :** Ne jamais utiliser `--text-tertiary` pour du texte normal en mode light sans vérifier le ratio. Pour le mode dark, la valeur `#64748b` (ratio 4.39:1) a aussi été renforcée en `#8394a8` (ratio 6.15:1).

---

## 2026-06-03 — Liens icônes sociales sans texte accessible (footer)

**Fichier :** `src/components/Footer.astro`
**Problème :** Les 3 liens sociaux (LinkedIn, Twitter, WhatsApp) contenaient uniquement un SVG sans `aria-label`. Lighthouse `link-name` échoue : les lecteurs d'écran annoncent juste "lien" sans description.
**Manifestation :** Lighthouse Accessibility — audit `link-name` échoue. Également problème de tap target : les liens faisaient 16x16px (juste la taille du SVG).
**Correction appliquée :** Ajout de `aria-label="LinkedIn de David Gacquer"` etc. sur chaque lien + `aria-hidden="true"` sur les SVGs + taille touch target portée à 44x44px (`w-11 h-11 flex items-center justify-center`).
**À surveiller :** Tout lien contenant uniquement une icône SVG sans texte visible doit avoir un `aria-label`. Ne pas oublier `aria-hidden="true"` sur le SVG pour éviter la double annonce.

---

## 2026-06-03 — FAQ sans `aria-expanded`

**Fichier :** `src/components/FAQ.astro`
**Problème :** Les boutons d'accordéon FAQ n'avaient pas d'attribut `aria-expanded`. Les lecteurs d'écran ne pouvaient pas savoir si une question était ouverte ou fermée.
**Manifestation :** Lighthouse Accessibility — audit `aria-required-attr` ou `button-name`. Les technologies d'assistance annonçaient les boutons sans état.
**Correction appliquée :** Ajout de `aria-expanded="false"` + `aria-controls="faq-answer-{i}"` sur chaque bouton. Les panels ont reçu `id="faq-answer-{i}"` + `role="region"`. Le script JS met à jour `aria-expanded` à chaque clic.
**À surveiller :** Tout accordéon ou composant dépliable doit implémenter `aria-expanded` + `aria-controls`. Ne pas oublier de synchroniser la valeur dans le JS.

---

## 2026-06-03 — Image WebP existante ignorée (charlotte-baert)

**Fichier :** `src/components/CaseStudy.astro`
**Problème :** Le composant utilisait `charlotte-baert.jpg` alors qu'un fichier `charlotte-baert.webp` existe dans `/public/images/`. WebP est 25-35% plus léger que JPEG.
**Manifestation :** Lighthouse Performance — audit `uses-webp-images` signale les images JPEG/PNG pouvant être converties.
**Correction appliquée :** `.jpg` → `.webp` sur la balise `<img>`.
**À surveiller :** Quand une version `.webp` existe dans `/public/images/`, toujours la préférer. Vérifier aussi `david-gacquer.png` (une version `.webp` devrait être créée).

---

## 2026-06-03 — manifest.json icon purpose déprécié

**Fichier :** `public/manifest.json`
**Problème :** `"purpose": "any maskable"` est un format déprécié. La valeur doit être soit `"any"` soit `"maskable"`, pas les deux dans la même entrée.
**Manifestation :** Lighthouse Best Practices — audit `maskable-icon` échoue.
**Correction appliquée :** Séparation en deux entrées distinctes : une avec `"purpose": "any"` et une avec `"purpose": "maskable"`.
**À surveiller :** Le format des icônes PWA évolue. Toujours utiliser une entrée par valeur de `purpose`.

---

## 2026-06-03 — Tap targets trop petits sur menu mobile

**Fichier :** `src/components/Nav.astro`
**Problème :** Les liens du menu mobile avaient `py-2` (8px padding vertical), résultant en une zone de clic de ~36px — en dessous du minimum de 48px requis par Lighthouse SEO.
**Manifestation :** Lighthouse SEO — audit `tap-targets` échoue sur mobile.
**Correction appliquée :** `py-2` → `py-3` (12px padding vertical), zone de clic portée à ~44px.
**À surveiller :** Sur mobile, tout lien ou bouton doit avoir une zone de tap d'au minimum 44-48px. Utiliser `py-3` minimum sur les liens de navigation mobile.
