# EPIC-02: Layout & Navigation

## Info
| | |
|---|---|
| **Epic** | Layout & Navigation |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01 |

---

## Story 2.1: Composant Header

### Description
En tant que visiteur, je veux voir un header élégant avec navigation et sélecteur de langue pour naviguer facilement sur le site.

### Tâches
- [ ] Créer `src/components/layout/Header.tsx`
- [ ] Implémenter le logo (texte stylisé ou image)
- [ ] Intégrer le composant Navigation
- [ ] Intégrer le composant LanguageSwitcher
- [ ] Header sticky avec effet de fond au scroll
- [ ] Menu hamburger pour mobile

### Critères d'acceptation
- [ ] Header fixe en haut de page
- [ ] Fond transparent → fond leather au scroll
- [ ] Logo cliquable (retour accueil)
- [ ] Navigation visible sur desktop, menu burger sur mobile
- [ ] Transition smooth au scroll

### Design
```
Desktop:
[LOGO]                    [Nav Links]     [FR|EN]

Mobile:
[LOGO]                              [☰]
```

---

## Story 2.2: Composant Navigation

### Description
En tant que visiteur, je veux naviguer entre les sections/pages du site.

### Tâches
- [ ] Créer `src/components/layout/Navigation.tsx`
- [ ] Liens de navigation avec traductions i18n
- [ ] Smooth scroll vers sections (pour HomePage)
- [ ] Active state sur lien courant
- [ ] Style hover gold

### Critères d'acceptation
- [ ] Liens : Accueil, Nos Créations, L'Expérience, Événements (dropdown), Formules, À Propos, Devis
- [ ] Dropdown Événements → Particuliers / Entreprises
- [ ] Texte en ivoire, hover en or
- [ ] Smooth scroll fonctionnel

### Liens navigation
```
- Accueil (/)
- Nos Créations (#creations)
- L'Expérience (#experience)
- Événements
  └─ Particuliers (/evenements/particuliers)
  └─ Entreprises (/evenements/entreprises)
- Nos Formules (#formulas)
- À Propos (/a-propos)
- [CTA] Demander un Devis (#quote)
```

---

## Story 2.3: Composant LanguageSwitcher

### Description
En tant que visiteur international, je veux changer la langue du site.

### Tâches
- [ ] Créer `src/components/layout/LanguageSwitcher.tsx`
- [ ] Afficher FR | EN
- [ ] Changer langue au clic
- [ ] Indicateur visuel langue active

### Critères d'acceptation
- [ ] Clic change la langue immédiatement
- [ ] Langue active mise en évidence (or)
- [ ] Persistance en localStorage
- [ ] Transition sans rechargement

### Design
```
[FR] | EN    (français actif)
FR | [EN]    (anglais actif)
```

---

## Story 2.4: Composant Footer

### Description
En tant que visiteur, je veux voir les informations de contact et liens utiles en bas de page.

### Tâches
- [ ] Créer `src/components/layout/Footer.tsx`
- [ ] Section liens sociaux (WhatsApp, Instagram)
- [ ] Section zone de livraison
- [ ] Copyright et mentions légales
- [ ] Design cohérent avec charte

### Critères d'acceptation
- [ ] Fond leather-dark
- [ ] Icônes sociaux cliquables
- [ ] Liste villes de livraison
- [ ] Année dynamique dans copyright
- [ ] Responsive

### Structure
```
─────────────────────────────────────────
[Logo]

Nous contacter          Zone de livraison
📱 WhatsApp             Nice, Cannes, Antibes...
📸 Instagram

─────────────────────────────────────────
© 2026 Cheesecake Bar - Tous droits réservés
```

---

## Story 2.5: Menu Mobile

### Description
En tant que visiteur mobile, je veux un menu responsive fonctionnel.

### Tâches
- [ ] Créer menu hamburger animé
- [ ] Panel de navigation fullscreen
- [ ] Animation ouverture/fermeture (Framer Motion)
- [ ] Fermeture au clic sur lien
- [ ] Fermeture au clic extérieur

### Critères d'acceptation
- [ ] Burger → X au clic
- [ ] Menu slide depuis la droite
- [ ] Fond semi-transparent
- [ ] Liens centrés, taille lisible
- [ ] LanguageSwitcher inclus dans menu mobile

---

## Checklist Epic 2

- [ ] Story 2.1: Header
- [ ] Story 2.2: Navigation
- [ ] Story 2.3: LanguageSwitcher
- [ ] Story 2.4: Footer
- [ ] Story 2.5: Menu Mobile

**Critère de validation Epic** : Layout complet visible sur toutes les pages, navigation fonctionnelle desktop/mobile.
