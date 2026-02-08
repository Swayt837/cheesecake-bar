# EPIC-01: Setup & Fondations

## Info
| | |
|---|---|
| **Epic** | Setup & Fondations |
| **Priorité** | P0 - Critique |
| **Dépendances** | Aucune |

---

## Story 1.1: Initialisation du projet Vite + React + TypeScript

### Description
En tant que développeur, je dois initialiser le projet avec la stack technique définie pour pouvoir commencer le développement.

### Tâches
- [ ] Créer le projet Vite avec template React + TypeScript
- [ ] Configurer `tsconfig.json` avec paths aliases (@/)
- [ ] Installer les dépendances core :
  - react-router-dom
  - framer-motion
  - swiper
  - react-i18next + i18next + i18next-http-backend + i18next-browser-languagedetector
  - react-hook-form + @hookform/resolvers + zod
  - @sanity/client + @sanity/image-url
  - @emailjs/browser
  - react-helmet-async
- [ ] Créer la structure de dossiers selon l'architecture
- [ ] Configurer les scripts npm (dev, build, preview, lint)
- [ ] Créer `.env.example` avec toutes les variables

### Critères d'acceptation
- [ ] `npm run dev` démarre sans erreur
- [ ] `npm run build` compile sans erreur
- [ ] Structure de dossiers conforme à `docs/ARCHITECTURE.md`
- [ ] TypeScript strict mode activé

### Notes techniques
```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── seo/
├── pages/
├── hooks/
├── lib/
│   ├── sanity/
│   ├── i18n/
│   └── analytics/
├── styles/
├── types/
├── data/
└── utils/
```

---

## Story 1.2: Configuration Tailwind + Design System

### Description
En tant que développeur, je dois configurer Tailwind avec les tokens de la charte graphique pour assurer la cohérence visuelle.

### Tâches
- [ ] Installer Tailwind CSS + PostCSS + Autoprefixer
- [ ] Configurer `tailwind.config.js` avec :
  - Couleurs custom (leather, gold, ivory, sand)
  - Fonts (Playfair Display, Montserrat)
  - Animations custom (float, fade-in, slide-up)
- [ ] Créer `src/styles/globals.css` avec :
  - Import Tailwind directives
  - Classes utilitaires custom (@layer components)
  - Reset et styles de base
- [ ] Configurer les fonts Google (Playfair Display, Montserrat)
- [ ] Créer `src/utils/cn.ts` (classnames utility)

### Critères d'acceptation
- [ ] Couleurs disponibles : `bg-leather`, `text-gold`, `text-ivory`, `text-sand`
- [ ] Classes disponibles : `btn-primary`, `btn-outline`, `heading-1`, `heading-2`, `body-text`, `card-premium`
- [ ] Fonts chargées et appliquées
- [ ] Build CSS optimisé (purge actif)

### Palette de référence
```
leather: #1A1414 (fond)
gold: #C9A45C (accents)
ivory: #E9DEC8 (texte principal)
sand: #B8AA93 (texte secondaire)
```

---

## Story 1.3: Configuration i18n (FR/EN)

### Description
En tant que développeur, je dois configurer l'internationalisation pour supporter le français et l'anglais.

### Tâches
- [ ] Créer `src/lib/i18n/config.ts` avec configuration react-i18next
- [ ] Créer `public/locales/fr/translation.json` (structure complète)
- [ ] Créer `public/locales/en/translation.json` (structure complète)
- [ ] Créer hook `src/hooks/useLanguage.ts`
- [ ] Intégrer i18n dans `main.tsx`

### Critères d'acceptation
- [ ] Langue par défaut : français
- [ ] Détection langue navigateur fonctionnelle
- [ ] Persistance choix langue (localStorage)
- [ ] Hook `useTranslation()` disponible dans tous les composants
- [ ] Traductions lazy-loaded

### Structure traductions
```json
{
  "nav": { ... },
  "hero": { ... },
  "products": { ... },
  "events": { ... },
  "quote_form": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

---

## Story 1.4: Configuration Sanity Client

### Description
En tant que développeur, je dois configurer le client Sanity pour récupérer le contenu dynamique.

### Tâches
- [ ] Créer `src/lib/sanity/client.ts` (client Sanity)
- [ ] Créer `src/lib/sanity/queries.ts` (requêtes GROQ)
- [ ] Créer `src/lib/sanity/imageBuilder.ts` (optimisation images)
- [ ] Créer hook `src/hooks/useSanity.ts` (fetch générique)
- [ ] Créer les types dans `src/types/`

### Critères d'acceptation
- [ ] Client configuré avec variables d'environnement
- [ ] Queries GROQ pour : products, formulas, heroContent, eventGallery
- [ ] Image builder avec optimisation WebP
- [ ] Types TypeScript pour chaque schéma

### Types requis
```typescript
// src/types/product.ts
interface Product {
  _id: string;
  name: { fr: string; en: string };
  slug: string;
  category: 'cup' | 'whole';
  format: string;
  price: number;
  description: { fr: string; en: string };
  imageUrl: string;
  flavors: string[];
}
```

---

## Story 1.5: Configuration Routing

### Description
En tant que développeur, je dois configurer le routing SPA avec lazy loading des pages.

### Tâches
- [ ] Configurer React Router dans `App.tsx`
- [ ] Créer les pages avec lazy loading :
  - HomePage
  - EventsParticuliersPage
  - EventsEntreprisesPage
  - AboutPage
- [ ] Créer composant `Loader.tsx` pour Suspense
- [ ] Configurer les routes

### Critères d'acceptation
- [ ] Navigation sans rechargement page
- [ ] Lazy loading fonctionnel (chunks séparés)
- [ ] Loader affiché pendant chargement
- [ ] URLs propres

### Routes
```
/                        → HomePage
/evenements/particuliers → EventsParticuliersPage
/evenements/entreprises  → EventsEntreprisesPage
/a-propos               → AboutPage
```

---

## Checklist Epic 1

- [ ] Story 1.1: Projet initialisé
- [ ] Story 1.2: Tailwind configuré
- [ ] Story 1.3: i18n configuré
- [ ] Story 1.4: Sanity client configuré
- [ ] Story 1.5: Routing configuré

**Critère de validation Epic** : Le projet démarre, les styles sont appliqués, les routes fonctionnent.
