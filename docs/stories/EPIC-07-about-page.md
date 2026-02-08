# EPIC-07: Page À Propos

## Info
| | |
|---|---|
| **Epic** | Page À Propos |
| **Priorité** | P1 - Important |
| **Dépendances** | EPIC-01, EPIC-02 |

---

## Story 7.1: Page À Propos

### Description
En tant que visiteur, je veux lire l'histoire de la marque pour créer une connexion émotionnelle.

### Tâches
- [ ] Créer `src/pages/AboutPage.tsx`
- [ ] Section Hero avec titre "Notre Histoire"
- [ ] Section storytelling (texte + image fondateur)
- [ ] Section philosophie (valeurs de la marque)
- [ ] Section "Pourquoi nous choisir" (arguments)
- [ ] CTA vers devis
- [ ] SEOHead spécifique

### Critères d'acceptation
- [ ] Contenu depuis Sanity (éditable)
- [ ] Design épuré, beaucoup d'espace blanc
- [ ] Images de qualité
- [ ] Texte bilingue

### Structure
```
1. Hero "Notre Histoire"
2. Story Section
   [Image fondateur] [Texte histoire]
3. Philosophie
   - Premium
   - Artisanal
   - Expérience unique
4. CTA "Découvrir nos créations" / "Demander un devis"
```

---

## Story 7.2: Section Philosophie

### Description
En tant que développeur, je dois créer une section pour présenter les valeurs.

### Tâches
- [ ] Créer composant PhilosophySection
- [ ] 3 piliers avec icône + titre + description
- [ ] Animation au scroll (fade-in)

### Critères d'acceptation
- [ ] 3 colonnes desktop, empilé mobile
- [ ] Icônes ou illustrations
- [ ] Animation subtile

### Piliers
```
1. Premium - Ingrédients de qualité supérieure
2. Artisanal - Fait main avec passion
3. Expérience - Un moment unique et mémorable
```

---

## Checklist Epic 7

- [ ] Story 7.1: AboutPage
- [ ] Story 7.2: PhilosophySection

**Critère de validation Epic** : Page À Propos accessible et contenu éditable.
