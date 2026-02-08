# EPIC-09: SEO & Performance

## Info
| | |
|---|---|
| **Epic** | SEO & Performance |
| **Priorité** | P1 - Important |
| **Dépendances** | EPIC-04, EPIC-06, EPIC-07 |

---

## Story 9.1: Composant SEOHead

### Description
En tant que propriétaire, je veux que le site soit bien référencé sur Google.

### Tâches
- [ ] Créer `src/components/seo/SEOHead.tsx`
- [ ] Intégrer react-helmet-async
- [ ] Meta tags dynamiques :
  - title
  - description
  - og:title, og:description, og:image
  - twitter:card
- [ ] Balise lang dynamique (fr/en)
- [ ] Canonical URL
- [ ] Alternate hreflang (fr/en)

### Critères d'acceptation
- [ ] Chaque page a des meta uniques
- [ ] Open Graph fonctionnel (preview réseaux sociaux)
- [ ] Langue correcte dans <html lang="">

---

## Story 9.2: Schema.org LocalBusiness

### Description
En tant que propriétaire, je veux un rich snippet Google pour mon entreprise.

### Tâches
- [ ] Créer `src/components/seo/SchemaOrg.tsx`
- [ ] Schema LocalBusiness / FoodEstablishment
- [ ] Données : nom, description, zone, contact
- [ ] Injecter dans <head>

### Critères d'acceptation
- [ ] JSON-LD valide
- [ ] Testable sur Google Rich Results Test

---

## Story 9.3: Sitemap & Robots.txt

### Description
En tant que propriétaire, je veux que les moteurs de recherche indexent correctement le site.

### Tâches
- [ ] Créer `public/robots.txt`
- [ ] Générer sitemap.xml (statique ou via plugin)
- [ ] Lister toutes les pages

### Critères d'acceptation
- [ ] robots.txt accessible
- [ ] sitemap.xml valide
- [ ] Toutes URLs listées

---

## Story 9.4: Optimisation Images

### Description
En tant que visiteur, je veux un site rapide même avec beaucoup d'images.

### Tâches
- [ ] Configurer Sanity image builder (WebP, quality, width)
- [ ] Implémenter srcSet pour responsive
- [ ] Lazy loading natif (loading="lazy")
- [ ] Placeholder blur optionnel

### Critères d'acceptation
- [ ] Images servies en WebP
- [ ] Tailles adaptées au viewport
- [ ] Lazy loading fonctionnel

---

## Story 9.5: Code Splitting & Lazy Loading

### Description
En tant que visiteur, je veux un temps de chargement initial minimal.

### Tâches
- [ ] Vérifier lazy loading des pages (React.lazy)
- [ ] Lazy load des composants lourds (Swiper, VideoPlayer)
- [ ] Analyser bundle size (rollup-plugin-visualizer)
- [ ] Optimiser si nécessaire

### Critères d'acceptation
- [ ] Bundle initial < 200KB gzipped
- [ ] Chunks séparés pour pages
- [ ] Pas de dépendance inutile

---

## Story 9.6: Audit Lighthouse

### Description
En tant que développeur, je dois valider les performances du site.

### Tâches
- [ ] Exécuter audit Lighthouse
- [ ] Score Performance > 90
- [ ] Score Accessibility > 90
- [ ] Score SEO > 90
- [ ] Corriger les problèmes identifiés

### Critères d'acceptation
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] Aucune erreur critique

---

## Checklist Epic 9

- [ ] Story 9.1: SEOHead
- [ ] Story 9.2: Schema.org
- [ ] Story 9.3: Sitemap & Robots
- [ ] Story 9.4: Optimisation Images
- [ ] Story 9.5: Code Splitting
- [ ] Story 9.6: Audit Lighthouse

**Critère de validation Epic** : Score Lighthouse > 90 sur les 3 catégories.
