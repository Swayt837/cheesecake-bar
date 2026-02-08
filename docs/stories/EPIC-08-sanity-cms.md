# EPIC-08: Sanity CMS Setup

## Info
| | |
|---|---|
| **Epic** | Sanity CMS Setup |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01 |

---

## Story 8.1: Création Projet Sanity

### Description
En tant qu'admin, je veux un CMS pour gérer le contenu du site.

### Tâches
- [ ] Créer compte Sanity (si pas existant)
- [ ] Initialiser projet Sanity : `npm create sanity@latest`
- [ ] Configurer dans le dossier `sanity/`
- [ ] Configurer `sanity.config.ts`
- [ ] Configurer `sanity.cli.ts`
- [ ] Déployer Sanity Studio sur sanity.io

### Critères d'acceptation
- [ ] Projet Sanity créé et accessible
- [ ] Studio déployé sur URL dédiée
- [ ] Variables d'env configurées (.env)

---

## Story 8.2: Schema Product

### Description
En tant qu'admin, je veux gérer les produits (cups et cheesecakes entiers).

### Tâches
- [ ] Créer `sanity/schemas/product.ts`
- [ ] Champs :
  - name (fr/en)
  - slug
  - category (cup/whole)
  - format
  - price
  - description (fr/en)
  - image (avec hotspot)
  - flavors (array)
  - order
  - isActive
- [ ] Validation des champs requis
- [ ] Preview custom dans le Studio

### Critères d'acceptation
- [ ] CRUD produits fonctionnel
- [ ] Images uploadables
- [ ] Preview avec nom + prix

---

## Story 8.3: Schema Formula

### Description
En tant qu'admin, je veux gérer les 3 formules événementielles.

### Tâches
- [ ] Créer `sanity/schemas/formula.ts`
- [ ] Champs :
  - name (fr/en)
  - slug (dropoff/bar/signature)
  - description (fr/en)
  - idealFor (fr/en)
  - priceRange
  - image
  - features (array fr/en)

### Critères d'acceptation
- [ ] 3 formules créables/éditables
- [ ] Features en liste

---

## Story 8.4: Schema Hero Content

### Description
En tant qu'admin, je veux gérer le contenu du hero (tagline, média).

### Tâches
- [ ] Créer `sanity/schemas/heroContent.ts`
- [ ] Champs :
  - tagline (fr/en)
  - subtitle (fr/en)
  - mediaType (image/video)
  - image
  - video
- [ ] Singleton (un seul document)

### Critères d'acceptation
- [ ] Un seul document Hero éditable
- [ ] Switch entre image et vidéo

---

## Story 8.5: Schema About Content

### Description
En tant qu'admin, je veux gérer le contenu de la page À Propos.

### Tâches
- [ ] Créer `sanity/schemas/aboutContent.ts`
- [ ] Champs :
  - title (fr/en)
  - story (fr/en) - rich text
  - founderImage
  - founderName
  - philosophy (array de piliers)

### Critères d'acceptation
- [ ] Texte riche pour storytelling
- [ ] Image uploadable

---

## Story 8.6: Schema Event Gallery

### Description
En tant qu'admin, je veux gérer les photos d'événements passés.

### Tâches
- [ ] Créer `sanity/schemas/eventGallery.ts`
- [ ] Champs :
  - title
  - eventType (particulier/entreprise)
  - images (array)
  - date

### Critères d'acceptation
- [ ] Upload multiple images
- [ ] Catégorisation par type

---

## Story 8.7: Données Initiales

### Description
En tant que développeur, je dois créer des données de test.

### Tâches
- [ ] Créer 4 produits de test (cups + entiers)
- [ ] Créer les 3 formules
- [ ] Créer contenu hero
- [ ] Créer contenu about

### Critères d'acceptation
- [ ] Données suffisantes pour développer
- [ ] Images de placeholder uploadées

---

## Checklist Epic 8

- [ ] Story 8.1: Projet Sanity
- [ ] Story 8.2: Schema Product
- [ ] Story 8.3: Schema Formula
- [ ] Story 8.4: Schema Hero Content
- [ ] Story 8.5: Schema About Content
- [ ] Story 8.6: Schema Event Gallery
- [ ] Story 8.7: Données initiales

**Critère de validation Epic** : Studio Sanity accessible, tous schemas créés, données de test présentes.
