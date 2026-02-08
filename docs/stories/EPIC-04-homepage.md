# EPIC-04: Page d'Accueil (HomePage)

## Info
| | |
|---|---|
| **Epic** | Page d'Accueil |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01, EPIC-02, EPIC-03 |

---

## Story 4.1: Section Hero

### Description
En tant que visiteur, je veux voir une section hero impactante qui communique immédiatement le positionnement premium.

### Tâches
- [ ] Créer `src/components/sections/Hero.tsx`
- [ ] Média plein écran (image ou vidéo depuis Sanity)
- [ ] Overlay gradient pour lisibilité texte
- [ ] Tagline principale (depuis Sanity, bilingue)
- [ ] Sous-titre
- [ ] 2 CTA : "Découvrir nos créations" + "Demander un devis"
- [ ] Animation d'entrée (fade-in + slide-up)
- [ ] Scroll indicator animé

### Critères d'acceptation
- [ ] Hauteur 100vh
- [ ] Vidéo autoplay muet ou image
- [ ] Texte lisible sur le média
- [ ] CTAs bien visibles
- [ ] Responsive (texte adapté mobile)
- [ ] Contenu depuis Sanity

### Design
```
┌────────────────────────────────────┐
│                                    │
│     [VIDEO/IMAGE FULLSCREEN]       │
│                                    │
│     "Des cheesecake cups           │
│      premium servis comme          │
│      un cocktail"                  │
│                                    │
│   [Découvrir]  [Demander devis]    │
│                                    │
│              ↓                     │
└────────────────────────────────────┘
```

---

## Story 4.2: Section ProductSlider (3D Motion)

### Description
En tant que visiteur, je veux voir les produits dans un slider interactif avec effet 3D pour une expérience premium.

### Tâches
- [ ] Créer `src/components/sections/ProductSlider.tsx`
- [ ] Intégrer Swiper.js avec effet "coverflow" ou "cards"
- [ ] Charger produits depuis Sanity
- [ ] Afficher ProductCard3D pour chaque produit
- [ ] Navigation : flèches desktop + swipe mobile
- [ ] Pagination dots
- [ ] Titre de section avec traduction

### Critères d'acceptation
- [ ] Effet 3D visible au slide
- [ ] Swipe fluide sur mobile
- [ ] Flèches navigation sur desktop
- [ ] Produits affichés : image, nom, format, prix
- [ ] CTA "Commander via WhatsApp"
- [ ] Responsive

### Config Swiper
```javascript
{
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: { clickable: true },
  navigation: true,
}
```

---

## Story 4.3: Section Expérience Bar

### Description
En tant que visiteur, je veux voir une vidéo du show flair pour comprendre l'expérience unique.

### Tâches
- [ ] Créer `src/components/sections/ExperienceBar.tsx`
- [ ] Titre de section "L'Expérience Bar"
- [ ] Vidéo du show flair (VideoPlayer)
- [ ] Texte explicatif (depuis Sanity)
- [ ] CTA vers devis

### Critères d'acceptation
- [ ] Vidéo lazy-loaded
- [ ] Poster avant lecture
- [ ] Texte bilingue
- [ ] Layout 2 colonnes desktop, empilé mobile

### Layout
```
Desktop:
[Vidéo 60%]  [Texte + CTA 40%]

Mobile:
[Vidéo]
[Texte + CTA]
```

---

## Story 4.4: Section Formules

### Description
En tant que visiteur, je veux comprendre les 3 formules événementielles pour choisir celle qui me convient.

### Tâches
- [ ] Créer `src/components/sections/FormulasSection.tsx`
- [ ] Charger formules depuis Sanity
- [ ] Afficher 3 cards : Drop-off, Cheesecake Bar, Signature Show
- [ ] Chaque card : nom, description, "Idéal pour", caractéristiques
- [ ] CTA "Demander un devis" par formule

### Critères d'acceptation
- [ ] 3 colonnes desktop, scroll horizontal ou empilé mobile
- [ ] Cards avec hover effect
- [ ] Contenu bilingue
- [ ] Design premium cohérent

### Structure Card Formule
```
┌─────────────────────┐
│      [Image]        │
│                     │
│   Signature Show    │
│   ─────────────     │
│   Description...    │
│                     │
│   ✓ Feature 1       │
│   ✓ Feature 2       │
│                     │
│   Idéal pour:       │
│   Events premium    │
│                     │
│  [Demander devis]   │
└─────────────────────┘
```

---

## Story 4.5: Section Contact

### Description
En tant que visiteur, je veux voir les moyens de contact et la zone de livraison.

### Tâches
- [ ] Créer `src/components/sections/ContactSection.tsx`
- [ ] Bouton WhatsApp proéminent
- [ ] Lien Instagram
- [ ] Liste zone de livraison (ou carte simple)
- [ ] Horaires de réponse

### Critères d'acceptation
- [ ] WhatsApp button avec icône
- [ ] Instagram avec icône
- [ ] Zone affichée clairement
- [ ] Design cohérent

---

## Story 4.6: Assemblage HomePage

### Description
En tant que développeur, je dois assembler toutes les sections dans la page d'accueil.

### Tâches
- [ ] Créer `src/pages/HomePage.tsx`
- [ ] Intégrer dans l'ordre :
  1. Hero
  2. ProductSlider
  3. ExperienceBar
  4. FormulasSection
  5. QuoteForm (Epic 5)
  6. ContactSection
- [ ] IDs pour navigation anchor (#creations, #experience, #formulas, #quote)
- [ ] SEOHead avec meta tags
- [ ] SchemaOrg LocalBusiness

### Critères d'acceptation
- [ ] Toutes sections visibles
- [ ] Smooth scroll vers anchors
- [ ] SEO meta tags présents
- [ ] Performance : lazy loading images/vidéos

---

## Checklist Epic 4

- [ ] Story 4.1: Hero
- [ ] Story 4.2: ProductSlider 3D
- [ ] Story 4.3: ExperienceBar
- [ ] Story 4.4: FormulasSection
- [ ] Story 4.5: ContactSection
- [ ] Story 4.6: Assemblage HomePage

**Critère de validation Epic** : Page d'accueil complète, tous contenus chargés depuis Sanity (ou mock data).
