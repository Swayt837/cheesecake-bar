# EPIC-06: Pages Événements

## Info
| | |
|---|---|
| **Epic** | Pages Événements |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01, EPIC-02, EPIC-03, EPIC-05 |

---

## Story 6.1: Page Événements Particuliers

### Description
En tant que particulier, je veux voir une page dédiée aux événements privés pour comprendre les offres.

### Tâches
- [ ] Créer `src/pages/EventsParticuliersPage.tsx`
- [ ] Hero section avec image événement
- [ ] Liste des occasions :
  - Anniversaires
  - Baby Shower
  - EVJF / EVG
  - Mariages
- [ ] Galerie photos d'événements passés (si disponible)
- [ ] Section formules (résumé des 3 packs)
- [ ] Formulaire de devis (réutiliser QuoteForm)
- [ ] SEOHead spécifique

### Critères d'acceptation
- [ ] Contenu bilingue
- [ ] Occasions listées avec icônes/images
- [ ] QuoteForm avec type pré-sélectionné "particulier"
- [ ] Navigation retour vers accueil

### Structure
```
1. Hero "Événements Particuliers"
2. Occasions (grid 2x2)
3. Galerie (optionnel)
4. Formules (3 cards)
5. QuoteForm
```

---

## Story 6.2: Page Événements Entreprises

### Description
En tant que professionnel, je veux voir une page dédiée aux événements B2B avec des arguments adaptés.

### Tâches
- [ ] Créer `src/pages/EventsEntreprisesPage.tsx`
- [ ] Hero section avec image corporate
- [ ] Liste des occasions :
  - Séminaires
  - Afterworks
  - Lancements produit
  - Inaugurations
- [ ] Arguments B2B :
  - Professionnalisme
  - Effet wow garanti
  - Clé en main
  - Devis personnalisé
- [ ] Section formules (focus Signature Show)
- [ ] Formulaire de devis
- [ ] SEOHead spécifique

### Critères d'acceptation
- [ ] Ton plus corporate/professionnel
- [ ] Contenu bilingue
- [ ] QuoteForm avec type pré-sélectionné "entreprise"
- [ ] Arguments mis en avant

### Structure
```
1. Hero "Événements Entreprises"
2. Occasions (grid)
3. Arguments (icônes + texte)
4. Nos références (optionnel, si photos)
5. Formules
6. QuoteForm
```

---

## Story 6.3: Composant OccasionCard

### Description
En tant que développeur, je dois avoir un composant réutilisable pour afficher les occasions.

### Tâches
- [ ] Créer `src/components/ui/OccasionCard.tsx`
- [ ] Image ou icône
- [ ] Titre de l'occasion
- [ ] Description courte optionnelle
- [ ] Hover effect

### Critères d'acceptation
- [ ] Réutilisable pour les 2 pages events
- [ ] Responsive (grid adaptable)
- [ ] Animation subtle au hover

---

## Story 6.4: Composant EventGallery

### Description
En tant que visiteur, je veux voir des photos d'événements passés pour me projeter.

### Tâches
- [ ] Créer `src/components/sections/EventGallery.tsx`
- [ ] Grid de photos responsive
- [ ] Lightbox au clic (agrandissement)
- [ ] Lazy loading des images
- [ ] Filtrage par type optionnel

### Critères d'acceptation
- [ ] Images depuis Sanity
- [ ] Lightbox fonctionnel
- [ ] Performance optimisée
- [ ] Grid 3 colonnes desktop, 2 mobile

---

## Checklist Epic 6

- [ ] Story 6.1: EventsParticuliersPage
- [ ] Story 6.2: EventsEntreprisesPage
- [ ] Story 6.3: OccasionCard
- [ ] Story 6.4: EventGallery

**Critère de validation Epic** : Les 2 pages événements sont accessibles et complètes.
