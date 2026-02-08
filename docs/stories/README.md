# Stories de Développement - Cheesecake Bar

## Vue d'ensemble

Ce dossier contient les **Epics et Stories** pour le développement du site vitrine Cheesecake Bar.

---

## Ordre d'Implémentation Recommandé

| # | Epic | Stories | Priorité | Dépendances |
|---|------|---------|----------|-------------|
| 1 | [EPIC-01: Setup & Fondations](./EPIC-01-setup.md) | 5 | P0 | - |
| 2 | [EPIC-08: Sanity CMS](./EPIC-08-sanity-cms.md) | 7 | P0 | EPIC-01 |
| 3 | [EPIC-02: Layout & Navigation](./EPIC-02-layout.md) | 5 | P0 | EPIC-01 |
| 4 | [EPIC-03: Composants UI](./EPIC-03-ui-components.md) | 7 | P0 | EPIC-01, 02 |
| 5 | [EPIC-05: Formulaire Devis](./EPIC-05-quote-form.md) | 4 | P0 | EPIC-01, 03 |
| 6 | [EPIC-04: HomePage](./EPIC-04-homepage.md) | 6 | P0 | EPIC-01, 02, 03, 05 |
| 7 | [EPIC-06: Pages Événements](./EPIC-06-events-pages.md) | 4 | P0 | EPIC-01, 02, 03, 05 |
| 8 | [EPIC-07: Page À Propos](./EPIC-07-about-page.md) | 2 | P1 | EPIC-01, 02 |
| 9 | [EPIC-09: SEO & Performance](./EPIC-09-seo-performance.md) | 6 | P1 | EPIC-04, 06, 07 |
| 10 | [EPIC-10: Déploiement](./EPIC-10-deployment.md) | 6 | P0 | Tous |

---

## Résumé des Stories

### EPIC-01: Setup & Fondations (5 stories)
- 1.1: Initialisation projet Vite + React + TS
- 1.2: Configuration Tailwind + Design System
- 1.3: Configuration i18n (FR/EN)
- 1.4: Configuration Sanity Client
- 1.5: Configuration Routing

### EPIC-02: Layout & Navigation (5 stories)
- 2.1: Composant Header
- 2.2: Composant Navigation
- 2.3: Composant LanguageSwitcher
- 2.4: Composant Footer
- 2.5: Menu Mobile

### EPIC-03: Composants UI (7 stories)
- 3.1: Button
- 3.2: Card
- 3.3: ProductCard3D
- 3.4: VideoPlayer
- 3.5: WhatsAppButton
- 3.6: Modal
- 3.7: Loader

### EPIC-04: HomePage (6 stories)
- 4.1: Section Hero
- 4.2: Section ProductSlider 3D
- 4.3: Section ExperienceBar
- 4.4: Section Formules
- 4.5: Section Contact
- 4.6: Assemblage HomePage

### EPIC-05: Formulaire Devis (4 stories)
- 5.1: Structure formulaire
- 5.2: Envoi EmailJS
- 5.3: Feedback Toast
- 5.4: Protection Anti-Spam

### EPIC-06: Pages Événements (4 stories)
- 6.1: Page Événements Particuliers
- 6.2: Page Événements Entreprises
- 6.3: Composant OccasionCard
- 6.4: Composant EventGallery

### EPIC-07: Page À Propos (2 stories)
- 7.1: Page À Propos
- 7.2: Section Philosophie

### EPIC-08: Sanity CMS (7 stories)
- 8.1: Création Projet Sanity
- 8.2: Schema Product
- 8.3: Schema Formula
- 8.4: Schema Hero Content
- 8.5: Schema About Content
- 8.6: Schema Event Gallery
- 8.7: Données initiales

### EPIC-09: SEO & Performance (6 stories)
- 9.1: Composant SEOHead
- 9.2: Schema.org LocalBusiness
- 9.3: Sitemap & Robots.txt
- 9.4: Optimisation Images
- 9.5: Code Splitting
- 9.6: Audit Lighthouse

### EPIC-10: Déploiement (6 stories)
- 10.1: Configuration Vercel
- 10.2: Configuration Domaine
- 10.3: Configuration Analytics
- 10.4: Tests Cross-Browser
- 10.5: Checklist Pré-Production
- 10.6: Mise en Production

---

## Total

| Métrique | Valeur |
|----------|--------|
| **Epics** | 10 |
| **Stories** | 52 |
| **P0 (Critique)** | 8 Epics |
| **P1 (Important)** | 2 Epics |

---

## Comment utiliser ces stories

1. **Développeur** : Ouvrir l'Epic en cours, lire la story, implémenter les tâches, cocher les critères d'acceptation.

2. **Ordre** : Respecter l'ordre des Epics (les dépendances sont indiquées).

3. **Validation** : Chaque Epic a un critère de validation global à la fin.

4. **Commande** : Lancer `/dev` puis spécifier l'Epic/Story à implémenter.

---

*Document généré par John (PM Agent) - BMAD Workflow*
