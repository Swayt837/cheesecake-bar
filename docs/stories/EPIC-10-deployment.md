# EPIC-10: Déploiement

## Info
| | |
|---|---|
| **Epic** | Déploiement |
| **Priorité** | P0 - Critique |
| **Dépendances** | Tous les autres Epics |

---

## Story 10.1: Configuration Vercel

### Description
En tant que propriétaire, je veux que le site soit accessible en ligne.

### Tâches
- [ ] Créer compte Vercel (si pas existant)
- [ ] Connecter repo GitHub
- [ ] Créer `vercel.json` avec config
- [ ] Configurer variables d'environnement sur Vercel
- [ ] Déployer en preview

### Critères d'acceptation
- [ ] Déploiement automatique sur push
- [ ] Preview sur chaque PR
- [ ] Variables d'env configurées
- [ ] Build réussi

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Story 10.2: Configuration Domaine

### Description
En tant que propriétaire, je veux que le site soit accessible sur mon domaine.

### Tâches
- [ ] Acheter domaine (si pas fait)
- [ ] Configurer DNS vers Vercel
- [ ] Configurer domaine sur Vercel
- [ ] Vérifier HTTPS automatique

### Critères d'acceptation
- [ ] Site accessible sur domaine custom
- [ ] HTTPS actif
- [ ] Redirect www vers non-www (ou inverse)

---

## Story 10.3: Configuration Analytics

### Description
En tant que propriétaire, je veux suivre le trafic du site.

### Tâches
- [ ] Créer propriété Google Analytics 4
- [ ] Configurer tracking code
- [ ] Créer `src/lib/analytics/gtag.ts`
- [ ] Tracker page views
- [ ] Tracker events (clics WhatsApp, soumissions formulaire)

### Critères d'acceptation
- [ ] GA4 fonctionnel
- [ ] Page views trackées
- [ ] Events custom configurés

### Events à tracker
```
- whatsapp_click
- form_submit_success
- form_submit_error
- language_change
```

---

## Story 10.4: Tests Cross-Browser

### Description
En tant que développeur, je dois valider le site sur différents navigateurs.

### Tâches
- [ ] Tester sur Chrome
- [ ] Tester sur Firefox
- [ ] Tester sur Safari
- [ ] Tester sur Edge
- [ ] Tester sur mobile iOS
- [ ] Tester sur mobile Android
- [ ] Corriger les incompatibilités

### Critères d'acceptation
- [ ] Fonctionnel sur tous les navigateurs majeurs
- [ ] Pas de bug visuel critique
- [ ] Animations fluides partout

---

## Story 10.5: Checklist Pré-Production

### Description
En tant que développeur, je dois valider tous les points avant mise en prod.

### Tâches
- [ ] Vérifier toutes les URLs
- [ ] Vérifier formulaire (envoi réel)
- [ ] Vérifier liens WhatsApp
- [ ] Vérifier liens Instagram
- [ ] Vérifier SEO meta sur chaque page
- [ ] Vérifier traductions complètes
- [ ] Vérifier responsive toutes pages
- [ ] Vérifier score Lighthouse
- [ ] Vérifier contenu Sanity en prod

### Critères d'acceptation
- [ ] Tous les points validés
- [ ] Aucun TODO ou placeholder restant
- [ ] Prêt pour mise en ligne

---

## Story 10.6: Mise en Production

### Description
En tant que propriétaire, je veux que le site soit live.

### Tâches
- [ ] Merge branche main
- [ ] Vérifier déploiement Vercel
- [ ] Tester sur domaine prod
- [ ] Configurer Sanity dataset prod
- [ ] Communiquer URL au client

### Critères d'acceptation
- [ ] Site live et fonctionnel
- [ ] Contenu final visible
- [ ] Formulaire envoie vers bon email

---

## Checklist Epic 10

- [ ] Story 10.1: Config Vercel
- [ ] Story 10.2: Config Domaine
- [ ] Story 10.3: Config Analytics
- [ ] Story 10.4: Tests Cross-Browser
- [ ] Story 10.5: Checklist Pré-Prod
- [ ] Story 10.6: Mise en Production

**Critère de validation Epic** : Site live, accessible, fonctionnel.
