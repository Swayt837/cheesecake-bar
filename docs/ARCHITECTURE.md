# Architecture Technique - Cheesecake Bar

## Document Info
| | |
|---|---|
| **Projet** | Cheesecake Bar - Site Vitrine |
| **Version** | 1.0 |
| **Date** | 2026-02-08 |
| **Auteur** | Architect Agent |
| **Statut** | Approved |

---

## 1. Vue d'Ensemble

### 1.1 Architecture Globale

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│                   React + TypeScript + Vite                      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐    │
│  │   Pages   │  │Components │  │   Hooks   │  │   Utils   │    │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘    │
│         │              │              │              │          │
│         └──────────────┴──────────────┴──────────────┘          │
│                              │                                   │
│                    ┌─────────▼─────────┐                        │
│                    │   Sanity Client   │                        │
│                    └─────────┬─────────┘                        │
└──────────────────────────────┼──────────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │    SANITY CMS       │
                    │  (Content Studio)   │
                    │  - Products         │
                    │  - Media            │
                    │  - Translations     │
                    └──────────┬──────────┘
                               │
┌──────────────────────────────┼──────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐    │
│  │  Vercel   │  │ EmailJS/  │  │  WhatsApp │  │ Analytics │    │
│  │ (Hosting) │  │ Formspree │  │   API     │  │   (GA4)   │    │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Stack Technique Validée

| Couche | Technologie | Version | Justification |
|--------|-------------|---------|---------------|
| **Framework** | React | 18.x | Écosystème mature, excellente DX |
| **Langage** | TypeScript | 5.x | Type safety, maintenabilité |
| **Build** | Vite | 5.x | Build rapide, HMR, optimisé |
| **Styling** | Tailwind CSS | 3.x | Utility-first, design system intégré |
| **Animations** | Framer Motion | 11.x | Animations fluides, 3D transforms |
| **Slider** | Swiper | 11.x | Touch-friendly, effets 3D natifs |
| **CMS** | Sanity | 3.x | Headless, temps réel, plan gratuit |
| **i18n** | react-i18next | 14.x | Standard industrie, lazy loading |
| **Formulaire** | React Hook Form + EmailJS | - | Validation + envoi email |
| **Routing** | React Router | 6.x | SPA routing, lazy loading |
| **Hébergement** | Vercel | - | Intégration Vite, edge network |
| **Analytics** | GA4 | - | Standard, gratuit |

---

## 2. Structure du Projet

```
cheesecake-bar/
├── public/
│   ├── locales/
│   │   ├── fr/
│   │   │   └── translation.json
│   │   └── en/
│   │       └── translation.json
│   ├── fonts/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductSlider.tsx
│   │   │   ├── ExperienceBar.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── FormulasSection.tsx
│   │   │   ├── QuoteForm.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProductCard3D.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── seo/
│   │       ├── SEOHead.tsx
│   │       └── SchemaOrg.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── EventsParticuliersPage.tsx
│   │   ├── EventsEntreprisesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   ├── useProducts.ts
│   │   ├── useFormulas.ts
│   │   ├── useSanity.ts
│   │   ├── useScrollAnimation.ts
│   │   ├── useLanguage.ts
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts
│   │   │   ├── queries.ts
│   │   │   ├── schemas.ts
│   │   │   └── imageBuilder.ts
│   │   │
│   │   ├── i18n/
│   │   │   └── config.ts
│   │   │
│   │   └── analytics/
│   │       └── gtag.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── fonts.css
│   │   └── animations.css
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── formula.ts
│   │   ├── event.ts
│   │   └── index.ts
│   │
│   ├── data/
│   │   └── deliveryZones.ts
│   │
│   ├── utils/
│   │   ├── formatPrice.ts
│   │   ├── cn.ts (classnames utility)
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── sanity/
│   ├── schemas/
│   │   ├── product.ts
│   │   ├── formula.ts
│   │   ├── heroContent.ts
│   │   ├── aboutContent.ts
│   │   ├── eventGallery.ts
│   │   └── index.ts
│   │
│   ├── sanity.config.ts
│   └── sanity.cli.ts
│
├── docs/
│   ├── PRD.md
│   └── ARCHITECTURE.md
│
├── .env.example
├── .env.local
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. Composants - Arbre de Responsabilités

### 3.1 Hiérarchie des Composants

```
App
├── SEOHead (meta tags dynamiques)
├── Header
│   ├── Logo
│   ├── Navigation
│   └── LanguageSwitcher
│
├── Routes
│   ├── HomePage
│   │   ├── Hero
│   │   ├── ProductSlider (3D motion)
│   │   │   └── ProductCard3D[]
│   │   ├── ExperienceBar
│   │   │   └── VideoPlayer
│   │   ├── FormulasSection
│   │   │   └── FormulaCard[]
│   │   ├── QuoteForm
│   │   └── ContactSection
│   │       └── WhatsAppButton
│   │
│   ├── EventsParticuliersPage
│   │   ├── EventHero
│   │   ├── OccasionsList
│   │   ├── EventGallery
│   │   └── QuoteForm
│   │
│   ├── EventsEntreprisesPage
│   │   ├── EventHero
│   │   ├── ArgumentsList
│   │   ├── EventGallery
│   │   └── QuoteForm
│   │
│   └── AboutPage
│       ├── StorySection
│       └── PhilosophySection
│
└── Footer
    ├── SocialLinks
    ├── DeliveryZone
    └── LegalLinks
```

### 3.2 Composants Clés - Spécifications

#### ProductCard3D
```typescript
interface ProductCard3DProps {
  product: Product;
  isActive: boolean;
  onSelect: () => void;
}

// Comportement:
// - Rotation 3D légère au hover (rotateY: ±15deg)
// - Scale up quand actif (1.05)
// - Transition smooth (0.4s ease-out)
// - Affiche: image, nom, prix, description courte
```

#### ProductSlider
```typescript
interface ProductSliderProps {
  products: Product[];
}

// Comportement:
// - Swiper.js avec effet "coverflow" ou "cards"
// - Navigation: flèches (desktop) + swipe (mobile)
// - Pagination dots
// - Autoplay désactivé (UX premium)
// - Loop activé
```

#### QuoteForm
```typescript
interface QuoteFormData {
  type: 'particulier' | 'entreprise';
  date: string;
  city: string;
  guests: number;
  formula: 'dropoff' | 'bar' | 'signature';
  message?: string;
  contact: string; // WhatsApp ou Email
}

// Validation: React Hook Form + Zod
// Envoi: EmailJS vers email du client
// Feedback: Toast de confirmation
```

---

## 4. Système de Design

### 4.1 Tokens Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Palette principale
        'leather': {
          DEFAULT: '#1A1414',
          light: '#2A2020',
          dark: '#151010',
        },
        'gold': {
          DEFAULT: '#C9A45C',
          light: '#D4B574',
          dark: '#B8934B',
        },
        'ivory': {
          DEFAULT: '#E9DEC8',
          light: '#F2EBD9',
          dark: '#DDD0B5',
        },
        'sand': {
          DEFAULT: '#B8AA93',
          light: '#C5B9A5',
          dark: '#A99B82',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 4.2 Classes Utilitaires Custom

```css
/* styles/globals.css */

@layer components {
  /* Boutons */
  .btn-primary {
    @apply bg-gold text-leather font-semibold px-6 py-3
           rounded-sm transition-all duration-300
           hover:bg-gold-light hover:shadow-lg
           active:scale-95;
  }

  .btn-outline {
    @apply border-2 border-gold text-gold font-semibold px-6 py-3
           rounded-sm transition-all duration-300
           hover:bg-gold hover:text-leather;
  }

  /* Typographie */
  .heading-1 {
    @apply font-display text-4xl md:text-6xl text-ivory
           tracking-wide leading-tight;
  }

  .heading-2 {
    @apply font-display text-3xl md:text-4xl text-gold
           tracking-wide;
  }

  .body-text {
    @apply font-body text-ivory text-base leading-relaxed;
  }

  .body-secondary {
    @apply font-body text-sand text-sm leading-relaxed;
  }

  /* Cards */
  .card-premium {
    @apply bg-leather-light border border-gold/20
           rounded-sm p-6 transition-all duration-300
           hover:border-gold/40 hover:shadow-xl;
  }
}
```

### 4.3 Breakpoints Responsive

| Breakpoint | Taille | Usage |
|------------|--------|-------|
| `sm` | 640px | Mobile large |
| `md` | 768px | Tablette |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop large |
| `2xl` | 1536px | Ultra-wide |

**Approche Mobile-First** : styles de base = mobile, puis `md:`, `lg:`, etc.

---

## 5. Gestion du Contenu (Sanity)

### 5.1 Schémas Sanity

#### Product Schema
```typescript
// sanity/schemas/product.ts
export default {
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.fr' },
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Cup', value: 'cup' },
          { title: 'Entier', value: 'whole' },
        ],
      },
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      description: 'Ex: Box 4, Box 6, 8 pers, 10 pers',
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'flavors',
      title: 'Parfums disponibles',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
    },
    {
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Ordre personnalisé',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
```

#### Formula Schema
```typescript
// sanity/schemas/formula.ts
export default {
  name: 'formula',
  title: 'Formule',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Identifiant',
      type: 'string',
      options: {
        list: [
          { title: 'Drop-off', value: 'dropoff' },
          { title: 'Cheesecake Bar', value: 'bar' },
          { title: 'Signature Show', value: 'signature' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    {
      name: 'idealFor',
      title: 'Idéal pour',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'priceRange',
      title: 'Fourchette de prix',
      type: 'string',
      description: 'Ex: À partir de 150€',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'fr', title: 'Français', type: 'string' },
            { name: 'en', title: 'English', type: 'string' },
          ],
        },
      ],
    },
  ],
}
```

#### Hero Content Schema
```typescript
// sanity/schemas/heroContent.ts
export default {
  name: 'heroContent',
  title: 'Contenu Hero',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    {
      name: 'mediaType',
      title: 'Type de média',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Vidéo', value: 'video' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Image de fond',
      type: 'image',
      hidden: ({ document }) => document?.mediaType !== 'image',
    },
    {
      name: 'video',
      title: 'Vidéo de fond',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ document }) => document?.mediaType !== 'video',
    },
  ],
  // Singleton - un seul document
  __experimental_actions: ['update', 'publish'],
}
```

### 5.2 Queries GROQ

```typescript
// src/lib/sanity/queries.ts

// Récupérer tous les produits actifs
export const productsQuery = `
  *[_type == "product" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    category,
    format,
    price,
    description,
    "imageUrl": image.asset->url,
    flavors
  }
`;

// Récupérer les formules
export const formulasQuery = `
  *[_type == "formula"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    idealFor,
    priceRange,
    "imageUrl": image.asset->url,
    features
  }
`;

// Récupérer le contenu Hero
export const heroQuery = `
  *[_type == "heroContent"][0] {
    tagline,
    subtitle,
    mediaType,
    "imageUrl": image.asset->url,
    "videoUrl": video.asset->url
  }
`;

// Récupérer la galerie événements
export const eventGalleryQuery = `
  *[_type == "eventGallery"] | order(date desc) {
    _id,
    title,
    eventType,
    "images": images[].asset->url,
    date
  }
`;
```

### 5.3 Client Sanity

```typescript
// src/lib/sanity/client.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // false pour preview en temps réel
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
```

---

## 6. Internationalisation (i18n)

### 6.1 Configuration

```typescript
// src/lib/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

### 6.2 Structure des traductions

```json
// public/locales/fr/translation.json
{
  "nav": {
    "home": "Accueil",
    "creations": "Nos Créations",
    "experience": "L'Expérience",
    "events": "Événements",
    "formulas": "Nos Formules",
    "about": "À Propos",
    "quote": "Demander un Devis"
  },
  "hero": {
    "cta_discover": "Découvrir nos créations",
    "cta_quote": "Demander un devis"
  },
  "products": {
    "order_whatsapp": "Commander via WhatsApp",
    "from": "À partir de"
  },
  "events": {
    "particuliers": "Événements Particuliers",
    "entreprises": "Événements Entreprises",
    "occasions": {
      "birthday": "Anniversaires",
      "babyshower": "Baby Shower",
      "wedding": "Mariages",
      "evjf": "EVJF / EVG"
    }
  },
  "quote_form": {
    "title": "Demander un Devis",
    "type": "Type d'événement",
    "type_particulier": "Particulier",
    "type_entreprise": "Entreprise",
    "date": "Date de l'événement",
    "city": "Ville",
    "guests": "Nombre de personnes",
    "formula": "Formule souhaitée",
    "message": "Message (optionnel)",
    "contact": "WhatsApp ou Email",
    "submit": "Envoyer ma demande",
    "success": "Demande envoyée ! Nous vous répondons sous 24h.",
    "error": "Erreur lors de l'envoi. Veuillez réessayer."
  },
  "contact": {
    "whatsapp": "Nous contacter sur WhatsApp",
    "instagram": "Suivez-nous sur Instagram",
    "delivery_zone": "Zone de livraison",
    "response_time": "Réponse sous 24h"
  },
  "footer": {
    "rights": "Tous droits réservés",
    "legal": "Mentions légales"
  }
}
```

### 6.3 Contenu bilingue Sanity

Le contenu éditable (produits, formules, textes) utilise des objets `{ fr, en }` dans Sanity.

```typescript
// Hook pour récupérer le texte dans la bonne langue
export function useLocalizedValue<T extends { fr: string; en: string }>(
  obj: T | undefined
): string {
  const { i18n } = useTranslation();
  if (!obj) return '';
  return obj[i18n.language as 'fr' | 'en'] || obj.fr;
}
```

---

## 7. Performance

### 7.1 Optimisations Critiques

| Optimisation | Implémentation |
|--------------|----------------|
| **Code Splitting** | `React.lazy()` + `Suspense` pour pages |
| **Image Optimization** | Sanity Image URL avec paramètres `?w=800&q=80&fm=webp` |
| **Lazy Loading Images** | `loading="lazy"` + Intersection Observer |
| **Video Lazy Load** | Charger vidéo uniquement quand visible |
| **Font Optimization** | `font-display: swap` + preload |
| **Bundle Size** | Tree shaking, analyse avec `rollup-plugin-visualizer` |

### 7.2 Lazy Loading des Pages

```typescript
// src/App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/ui/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const EventsParticuliersPage = lazy(() => import('./pages/EventsParticuliersPage'));
const EventsEntreprisesPage = lazy(() => import('./pages/EventsEntreprisesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/evenements/particuliers" element={<EventsParticuliersPage />} />
        <Route path="/evenements/entreprises" element={<EventsEntreprisesPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}
```

### 7.3 Optimisation Images Sanity

```typescript
// src/lib/sanity/imageBuilder.ts
import { urlFor } from './client';

export function getOptimizedImageUrl(
  image: any,
  width: number = 800,
  quality: number = 80
): string {
  return urlFor(image)
    .width(width)
    .quality(quality)
    .format('webp')
    .url();
}

// Générer srcSet pour responsive
export function getImageSrcSet(image: any): string {
  const widths = [400, 800, 1200, 1600];
  return widths
    .map(w => `${urlFor(image).width(w).quality(80).format('webp').url()} ${w}w`)
    .join(', ');
}
```

---

## 8. SEO

### 8.1 Composant SEO Head

```typescript
// src/components/seo/SEOHead.tsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({ title, description, image, url }: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const defaultTitle = lang === 'fr'
    ? 'Cheesecake Bar - Cheesecakes Premium Côte d\'Azur'
    : 'Cheesecake Bar - Premium Cheesecakes French Riviera';

  const defaultDescription = lang === 'fr'
    ? 'Cheesecakes premium en cups, service événementiel avec bar et show flair. Nice, Cannes, Antibes.'
    : 'Premium cheesecakes in cups, event service with bar and flair show. Nice, Cannes, Antibes.';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || '/og-image.jpg'} />
      <meta property="og:url" content={url || 'https://cheesecakebar.fr'} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Alternate languages */}
      <link rel="alternate" hrefLang="fr" href="https://cheesecakebar.fr" />
      <link rel="alternate" hrefLang="en" href="https://cheesecakebar.fr/en" />
    </Helmet>
  );
}
```

### 8.2 Schema.org

```typescript
// src/components/seo/SchemaOrg.tsx
import { Helmet } from 'react-helmet-async';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Cheesecake Bar',
    description: 'Cheesecakes premium en cups et service événementiel',
    url: 'https://cheesecakebar.fr',
    telephone: '+33XXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nice',
      addressRegion: 'Alpes-Maritimes',
      addressCountry: 'FR',
    },
    areaServed: [
      'Nice', 'Cannes', 'Antibes', 'Cagnes-sur-Mer',
      'Villeneuve-Loubet', 'Sophia Antipolis'
    ],
    servesCuisine: 'Desserts, Cheesecake',
    priceRange: '€€',
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
```

---

## 9. Formulaire de Devis

### 9.1 Stack Formulaire

| Lib | Usage |
|-----|-------|
| **React Hook Form** | Gestion état + validation |
| **Zod** | Schéma de validation TypeScript |
| **EmailJS** | Envoi email sans backend |

### 9.2 Implémentation

```typescript
// src/components/sections/QuoteForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const quoteSchema = z.object({
  type: z.enum(['particulier', 'entreprise']),
  date: z.string().min(1, 'Date requise'),
  city: z.string().min(2, 'Ville requise'),
  guests: z.number().min(1).max(500),
  formula: z.enum(['dropoff', 'bar', 'signature']),
  message: z.string().optional(),
  contact: z.string().min(5, 'Contact requis'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          type: data.type,
          date: data.date,
          city: data.city,
          guests: data.guests,
          formula: data.formula,
          message: data.message || 'Aucun message',
          contact: data.contact,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // Show success toast
    } catch (error) {
      // Show error toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Form fields */}
    </form>
  );
}
```

---

## 10. Variables d'Environnement

```bash
# .env.example

# Sanity
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production

# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# WhatsApp
VITE_WHATSAPP_NUMBER=33XXXXXXXXX

# Instagram
VITE_INSTAGRAM_URL=https://instagram.com/cheesecakebar

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site
VITE_SITE_URL=https://cheesecakebar.fr
```

---

## 11. Déploiement

### 11.1 Architecture de Déploiement

```
┌─────────────────┐     ┌─────────────────┐
│   GitHub Repo   │────▶│     Vercel      │
│  (main branch)  │     │   (Frontend)    │
└─────────────────┘     └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │   CDN (Edge)    │
                        │   Worldwide     │
                        └─────────────────┘

┌─────────────────┐
│  Sanity Studio  │ ◀── Accès client pour édition
│   (Hosted)      │     https://cheesecakebar.sanity.studio
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Sanity CDN     │ ◀── API Content Delivery
│  (API + Assets) │
└─────────────────┘
```

### 11.2 Configuration Vercel

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 12. Récapitulatif des Décisions Architecturales

| Décision | Choix | Justification |
|----------|-------|---------------|
| **SPA vs SSR** | SPA (React) | Site vitrine simple, SEO géré par meta tags |
| **CMS** | Sanity | Interface intuitive, plan gratuit, temps réel |
| **Styling** | Tailwind | Rapidité, cohérence, bundle optimisé |
| **Animations** | Framer Motion | API déclarative, performant, 3D ready |
| **Slider** | Swiper.js | Touch natif, effets 3D, bien maintenu |
| **Forms** | React Hook Form + Zod | Léger, TypeScript-first |
| **Emails** | EmailJS | Pas de backend requis |
| **Hosting** | Vercel | Intégration Git, edge network, gratuit |
| **i18n** | react-i18next | Standard, lazy loading traductions |

---

## Prochaines Étapes

1. **Setup projet** : Initialiser Vite + React + TypeScript
2. **Configuration Tailwind** : Implémenter le design system
3. **Setup Sanity** : Créer le projet et les schemas
4. **Développement composants** : UI kit de base
5. **Intégration** : Connecter Sanity au frontend
6. **Pages** : Développer chaque page
7. **Tests** : Lighthouse, responsive, cross-browser
8. **Déploiement** : Mise en production Vercel

---

*Document généré par Architect Agent - BMAD Workflow*
