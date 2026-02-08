# PRD - Cheesecake Bar Site Vitrine

## Document Info
| | |
|---|---|
| **Produit** | Site vitrine Cheesecake Bar |
| **Version** | 1.0 |
| **Date** | 2026-02-08 |
| **Auteur** | John (PM) |
| **Statut** | Draft |

---

## 1. Vision Produit

### 1.1 Problème
Le Cheesecake Bar propose des cheesecakes premium en cups et un service événementiel unique (bar + show flair), mais n'a pas de présence web pour :
- Mettre en avant la marque et les produits
- Présenter l'offre événementielle différenciante
- Générer des demandes de devis qualifiées
- Réduire les questions répétitives (prix, formats, zone de livraison)

### 1.2 Solution
Un site vitrine premium bilingue (FR/EN) qui :
- Reflète le positionnement luxe de la marque
- Présente les produits avec leurs prix
- Met en avant l'expérience bar + show flair via vidéo
- Convertit les visiteurs en leads via formulaire de devis
- Redirige vers WhatsApp/Instagram pour la commande

### 1.3 Proposition de valeur unique
> "Des cheesecake cups premium servis comme un cocktail : dessert-bar + show coulis au flair."

### 1.4 Objectifs business
| Métrique | Objectif |
|----------|----------|
| Demandes de devis/mois | 10+ (Phase 1) |
| Taux de conversion devis → client | 30% |
| Répartition business | 50% livraison / 50% event (à 12 mois) |

---

## 2. Utilisateurs Cibles

### 2.1 Persona Principal : Marie (Particulier)
| Attribut | Détail |
|----------|--------|
| **Âge** | 28-40 ans |
| **Profil** | Active, sensible à l'esthétique, utilise Instagram |
| **Occasions** | Anniversaires, baby shower, EVJF/EVG, petits mariages |
| **Budget** | 25-45€ (box) / 150-400€ (mini-event) |
| **Zone** | Nice, Cannes, Antibes, Cagnes, Sophia Antipolis |
| **Besoin** | "Je veux un dessert premium, beau, facile, qui impressionne mes invités" |
| **Comportement** | Recherche sur Instagram/Google, veut voir des photos, décide vite si le visuel plaît |

### 2.2 Persona Secondaire : Sophie (Entreprise) - Phase 2
| Attribut | Détail |
|----------|--------|
| **Rôle** | Office manager, RH, Event manager, Agence |
| **Occasions** | Séminaires, afterworks, lancements produit, inaugurations |
| **Budget** | 600-2000€ |
| **Besoin** | "Je veux un prestataire fiable qui fait effet wow pour mon event" |
| **Comportement** | Compare plusieurs devis, besoin de réassurance (avis, photos d'events passés) |

---

## 3. Structure du Site

### 3.1 Arborescence
```
Accueil (Hero)
├── Nos Créations
│   ├── Cups (Box 4/6)
│   └── Cheesecakes Entiers (8-10 pers)
├── L'Expérience Bar
│   └── Vidéo show flair
├── Événements
│   ├── Particuliers
│   └── Entreprises
├── Nos Formules
│   ├── Drop-off
│   ├── Cheesecake Bar
│   └── Signature Show
├── Demander un Devis (Formulaire)
├── Contact
│   ├── WhatsApp
│   ├── Instagram
│   └── Zone de livraison
└── À Propos
```

### 3.2 Pages & Sections détaillées

#### Hero (Accueil)
- **Contenu** : Vidéo/image plein écran, tagline, CTA principal
- **CTA** : "Découvrir nos créations" / "Demander un devis"
- **Objectif** : Impact immédiat, communiquer le positionnement premium

#### Nos Créations
- **Contenu** : Galerie interactive des cups et cheesecakes entiers
- **Présentation 3D Motion** :
  - Chaque produit affiché avec effet 3D (rotation légère au hover/scroll)
  - Animation fluide et premium
  - Slider horizontal pour naviguer entre les produits (swipe mobile + flèches desktop)
- **Informations** : Nom, description courte, prix, parfums disponibles
- **Formats affichés** :
  - Box 4 cups : XX€
  - Box 6 cups : XX€
  - Cheesecake 8 pers : XX€
  - Cheesecake 10 pers : XX€
- **CTA** : "Commander via WhatsApp"

#### L'Expérience Bar
- **Contenu** : Vidéo du show flair (coulis minute, dressage)
- **Texte** : Explication de l'expérience unique
- **Objectif** : Différenciation, effet wow, donner envie pour l'événementiel

#### Événements - Particuliers
- **Occasions listées** : Anniversaires, baby shower, EVJF/EVG, mariages
- **Galerie** : Photos d'events passés
- **CTA** : "Demander un devis"

#### Événements - Entreprises
- **Occasions listées** : Séminaires, afterworks, lancements, inaugurations
- **Arguments** : Professionnalisme, effet wow, clé en main
- **CTA** : "Demander un devis"

#### Nos Formules (3 packs)
| Formule | Description | Idéal pour |
|---------|-------------|------------|
| **Drop-off** | Livraison de cups prêtes à servir | Apéros, petits events |
| **Cheesecake Bar** | Service sur place avec bar dédié | Mariages, grandes fêtes |
| **Signature Show** | Bar + show flair coulis + mise en scène | Events premium, entreprises |

#### Formulaire Devis
**Champs :**
- Type : Particulier / Entreprise
- Date de l'événement
- Ville
- Nombre de personnes
- Formule souhaitée : Drop-off / Bar / Signature Show
- Message (optionnel)
- WhatsApp ou Email de contact

#### Contact
- Bouton WhatsApp (lien direct)
- Lien Instagram
- Carte zone de livraison (Nice → Cannes)
- Horaires de réponse

#### À Propos
- Histoire de la marque
- Le fondateur
- La philosophie (premium, artisanal, expérience)

---

## 4. Charte Graphique

### 4.1 Palette de couleurs
| Usage | Couleur | Hex |
|-------|---------|-----|
| Fond principal | Noir cuir | `#1A1414` |
| Titres, accents premium | Or chaud | `#C9A45C` |
| Texte principal | Ivoire | `#E9DEC8` |
| Texte secondaire | Beige discret | `#B8AA93` |

### 4.2 Règles d'application
- **Fond** : Toujours Noir cuir `#1A1414`
- **Titres / Prix** : Or `#C9A45C`
- **Texte lisible** : Ivoire `#E9DEC8`
- **Descriptions** : Beige `#B8AA93`
- **Boutons** : Or `#C9A45C` fond, texte Noir cuir

### 4.3 Typographie
- **Titres** : Police élégante serif (ex: Playfair Display)
- **Corps** : Police lisible sans-serif (ex: Montserrat, Lato)

### 4.4 Ambiance visuelle
- Luxe épuré
- Photos haute qualité, éclairage chaud
- Espaces aérés, pas de surcharge

---

## 5. Exigences Fonctionnelles

### 5.1 Must Have (MVP)
| ID | Fonctionnalité | Priorité |
|----|----------------|----------|
| F1 | Hero avec image/vidéo plein écran | P0 |
| F2 | Galerie produits avec prix + **slider 3D motion** | P0 |
| F3 | Section vidéo expérience bar | P0 |
| F4 | Pages événements (particuliers + entreprises) | P0 |
| F5 | Présentation des 3 formules | P0 |
| F6 | Formulaire de demande de devis | P0 |
| F7 | Lien WhatsApp direct | P0 |
| F8 | Lien Instagram | P0 |
| F9 | Site responsive (mobile-first) | P0 |
| F10 | Bilingue FR/EN | P0 |
| F11 | CMS pour modifier images/vidéos/prix | P0 |

### 5.2 Should Have
| ID | Fonctionnalité | Priorité |
|----|----------------|----------|
| F12 | Carte interactive zone de livraison | P1 |
| F13 | Galerie photos événements passés | P1 |
| F14 | Animations scroll subtiles | P1 |
| F15 | SEO optimisé (meta, sitemap) | P1 |

### 5.3 Could Have
| ID | Fonctionnalité | Priorité |
|----|----------------|----------|
| F16 | Témoignages clients | P2 |
| F17 | Section presse/partenaires | P2 |
| F18 | Blog/actualités | P2 |

---

## 6. Exigences Non-Fonctionnelles

### 6.1 Performance
- Temps de chargement < 3s sur mobile 4G
- Images optimisées (WebP, lazy loading)
- Score Lighthouse > 90

### 6.2 Accessibilité
- Contraste suffisant (validé avec la palette)
- Navigation clavier
- Alt text sur images

### 6.3 SEO
- Balises meta FR/EN
- Sitemap XML
- Schema.org (LocalBusiness, Product)
- URLs propres

### 6.4 Sécurité
- HTTPS obligatoire
- Protection formulaire (honeypot, rate limiting)
- Pas de données sensibles stockées

---

## 7. Exigences Techniques

### 7.1 Stack recommandée
| Composant | Technologie |
|-----------|-------------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Animations 3D | Framer Motion + CSS 3D Transforms |
| Slider | Swiper.js (touch-friendly, 3D effects natifs) |
| CMS | Headless (Strapi, Sanity, ou Contentful) |
| Hébergement | Vercel ou Netlify |
| Formulaire | Formspree ou EmailJS |
| Analytics | Google Analytics 4 / Plausible |

### 7.2 CMS - Contenus éditables
Le client doit pouvoir modifier sans développeur :
- Images et vidéos (hero, galerie, produits)
- Prix des produits
- Textes des descriptions
- Photos de la galerie événements
- Informations de contact

### 7.3 Internationalisation
- Système i18n (react-i18next ou similaire)
- Sélecteur de langue visible
- URLs localisées (/fr/, /en/) ou détection auto

---

## 8. User Stories

### Epic 1 : Découverte de la marque
| ID | Story | Critères d'acceptation |
|----|-------|------------------------|
| US1 | En tant que visiteur, je veux voir une page d'accueil impactante pour comprendre immédiatement le positionnement premium | Hero avec média plein écran, tagline visible, CTA clair |
| US2 | En tant que visiteur, je veux lire l'histoire de la marque pour créer une connexion émotionnelle | Page À propos avec storytelling |

### Epic 2 : Consultation des produits
| ID | Story | Critères d'acceptation |
|----|-------|------------------------|
| US3 | En tant que client potentiel, je veux voir les cheesecakes disponibles avec leurs prix pour décider si ça correspond à mon budget | Galerie avec photos, noms, prix visibles |
| US3b | En tant que visiteur, je veux naviguer entre les produits via un slider fluide avec effet 3D pour une expérience premium | Slider swipe (mobile) + flèches (desktop), animation 3D au changement de slide, rotation légère au hover |
| US4 | En tant que client, je veux voir une vidéo du show flair pour comprendre l'expérience unique | Vidéo intégrée, lecture fluide |

### Epic 3 : Demande de devis événementiel
| ID | Story | Critères d'acceptation |
|----|-------|------------------------|
| US5 | En tant que particulier, je veux accéder à une page dédiée à mon type d'événement | Page Événements Particuliers avec occasions listées |
| US6 | En tant qu'entreprise, je veux voir une offre adaptée à mes besoins | Page Événements Entreprises avec arguments B2B |
| US7 | En tant que prospect, je veux comprendre les différentes formules pour choisir | Page Formules avec 3 packs comparés |
| US8 | En tant que prospect, je veux envoyer une demande de devis facilement | Formulaire simple, confirmation d'envoi |

### Epic 4 : Prise de contact
| ID | Story | Critères d'acceptation |
|----|-------|------------------------|
| US9 | En tant que client, je veux contacter le bar via WhatsApp en un clic | Bouton WhatsApp avec lien direct |
| US10 | En tant que client, je veux voir la zone de livraison pour savoir si je suis éligible | Carte ou liste des villes couvertes |

### Epic 5 : Gestion du contenu (Admin)
| ID | Story | Critères d'acceptation |
|----|-------|------------------------|
| US11 | En tant qu'admin, je veux modifier les prix sans toucher au code | Interface CMS simple |
| US12 | En tant qu'admin, je veux ajouter/supprimer des photos facilement | Upload drag & drop dans le CMS |
| US13 | En tant qu'admin, je veux mettre à jour les vidéos | Remplacement de média simple |

---

## 9. Contraintes & Hypothèses

### 9.1 Contraintes
- Pas de e-commerce (commandes via WhatsApp/Instagram)
- Budget développement à définir
- Contenus photo/vidéo existants limités (évolutif)

### 9.2 Hypothèses
- Le client a accès à un hébergement/domaine
- Les photos actuelles sont de qualité suffisante pour le MVP
- Le volume de demandes de devis sera gérable manuellement

---

## 10. Métriques de Succès

| KPI | Cible | Mesure |
|-----|-------|--------|
| Taux de rebond | < 50% | Google Analytics |
| Temps moyen sur site | > 2 min | Google Analytics |
| Demandes de devis / mois | 10+ | Comptage formulaires |
| Clics WhatsApp / mois | 20+ | Tracking événements |
| Conversion devis → client | 30% | Suivi manuel |

---

## 11. Roadmap Suggérée

### Phase 1 : MVP (Priorité immédiate)
- [ ] Hero + navigation
- [ ] Page Nos Créations (produits + prix)
- [ ] Section Expérience Bar (vidéo)
- [ ] Pages Événements (Particuliers + Entreprises)
- [ ] Page Formules (3 packs)
- [ ] Formulaire devis
- [ ] Contact (WhatsApp, Insta, zone)
- [ ] Page À propos
- [ ] Responsive mobile
- [ ] Bilingue FR/EN
- [ ] CMS intégré

### Phase 2 : Enrichissement
- [ ] Galerie photos événements
- [ ] Carte interactive
- [ ] Animations scroll
- [ ] Témoignages clients
- [ ] Optimisation SEO avancée

### Phase 3 : Évolutions futures
- [ ] Blog / Actualités
- [ ] Système de réservation en ligne
- [ ] Intégration avis Google

---

## 12. Risques & Mitigations

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Contenus visuels insuffisants | Haut | Moyenne | Prévoir shooting pro ou stock photos premium |
| Complexité CMS | Moyen | Faible | Choisir un CMS simple (Sanity/Contentful) |
| Délai de développement | Moyen | Moyenne | Prioriser MVP strict |
| Faible trafic initial | Moyen | Haute | Stratégie social media + SEO local |

---

## Annexes

### A. Zone de livraison
Nice, Villefranche, Cagnes-sur-Mer, Villeneuve-Loubet, Antibes, Juan-les-Pins, Vallauris, Mougins, Cannes, Sophia Antipolis

### B. Références visuelles
À compléter avec moodboard du client

### C. Glossaire
- **Cups** : Cheesecakes individuels servis dans des verrines/cups
- **Flair** : Technique de bartending spectaculaire appliquée aux coulis
- **Drop-off** : Livraison sans service sur place

---

*Document généré par John (PM Agent) - BMAD Workflow*
