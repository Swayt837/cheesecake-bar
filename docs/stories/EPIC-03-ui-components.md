# EPIC-03: Composants UI de Base

## Info
| | |
|---|---|
| **Epic** | Composants UI de Base |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01, EPIC-02 |

---

## Story 3.1: Composant Button

### Description
En tant que développeur, je dois avoir des boutons réutilisables conformes à la charte.

### Tâches
- [ ] Créer `src/components/ui/Button.tsx`
- [ ] Variantes : primary, outline, ghost
- [ ] Tailles : sm, md, lg
- [ ] États : default, hover, active, disabled, loading
- [ ] Support icône (gauche/droite)
- [ ] Composant accessible (focus visible)

### Critères d'acceptation
- [ ] Props TypeScript typées
- [ ] Animations hover smooth
- [ ] Loading state avec spinner
- [ ] Compatible avec `as` prop (lien vs button)

### API
```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}
```

---

## Story 3.2: Composant Card

### Description
En tant que développeur, je dois avoir un composant card réutilisable.

### Tâches
- [ ] Créer `src/components/ui/Card.tsx`
- [ ] Style premium (fond leather-light, bordure gold/20)
- [ ] Hover effect (bordure gold/40, shadow)
- [ ] Support image header
- [ ] Zones : header, body, footer

### Critères d'acceptation
- [ ] Transition smooth au hover
- [ ] Flexible pour différents contenus
- [ ] Responsive

### API
```typescript
interface CardProps {
  image?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
```

---

## Story 3.3: Composant ProductCard3D

### Description
En tant que visiteur, je veux voir les produits avec un effet 3D premium au hover.

### Tâches
- [ ] Créer `src/components/ui/ProductCard3D.tsx`
- [ ] Effet rotation 3D au hover (rotateY ±15deg)
- [ ] Scale up quand actif (1.05)
- [ ] Afficher : image, nom, format, prix
- [ ] Animation Framer Motion
- [ ] Bouton CTA WhatsApp

### Critères d'acceptation
- [ ] Rotation 3D smooth au hover
- [ ] Perspective correcte
- [ ] Image optimisée (WebP via Sanity)
- [ ] Prix affiché en or
- [ ] Responsive (taille adaptée)

### Effet 3D
```css
transform-style: preserve-3d;
perspective: 1000px;
/* Hover: rotateY(15deg) scale(1.05) */
```

---

## Story 3.4: Composant VideoPlayer

### Description
En tant que visiteur, je veux voir les vidéos du show flair avec un player élégant.

### Tâches
- [ ] Créer `src/components/ui/VideoPlayer.tsx`
- [ ] Lazy loading (charger quand visible)
- [ ] Poster image avant lecture
- [ ] Contrôles custom ou natifs stylisés
- [ ] Autoplay muet optionnel (hero)
- [ ] Plein écran supporté

### Critères d'acceptation
- [ ] Vidéo ne charge pas avant scroll
- [ ] Poster affiché avant play
- [ ] Bouton play visible
- [ ] Performance optimisée

### API
```typescript
interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}
```

---

## Story 3.5: Composant WhatsAppButton

### Description
En tant que visiteur, je veux contacter le bar via WhatsApp en un clic.

### Tâches
- [ ] Créer `src/components/ui/WhatsAppButton.tsx`
- [ ] Lien WhatsApp avec message pré-rempli
- [ ] Icône WhatsApp
- [ ] Variantes : floating (coin écran), inline
- [ ] Animation pulse pour attirer l'attention

### Critères d'acceptation
- [ ] Ouvre WhatsApp avec numéro correct
- [ ] Message pré-rempli selon contexte
- [ ] Bouton floating visible sur toutes les pages
- [ ] Accessible (aria-label)

### Lien WhatsApp
```
https://wa.me/33XXXXXXXXX?text=Bonjour,%20je%20souhaite...
```

---

## Story 3.6: Composant Modal

### Description
En tant que développeur, je dois avoir un composant modal réutilisable.

### Tâches
- [ ] Créer `src/components/ui/Modal.tsx`
- [ ] Overlay semi-transparent
- [ ] Animation entrée/sortie (Framer Motion)
- [ ] Fermeture clic extérieur
- [ ] Fermeture touche Escape
- [ ] Focus trap

### Critères d'acceptation
- [ ] Accessible (focus trap, aria)
- [ ] Animation smooth
- [ ] Body scroll lock quand ouvert
- [ ] Bouton close visible

---

## Story 3.7: Composant Loader

### Description
En tant que visiteur, je veux voir un loader élégant pendant les chargements.

### Tâches
- [ ] Créer `src/components/ui/Loader.tsx`
- [ ] Animation spinning ou pulse
- [ ] Couleur or
- [ ] Variantes : fullscreen, inline
- [ ] Texte optionnel

### Critères d'acceptation
- [ ] Animation fluide
- [ ] Centré sur l'écran (fullscreen)
- [ ] Style cohérent avec la marque

---

## Checklist Epic 3

- [ ] Story 3.1: Button
- [ ] Story 3.2: Card
- [ ] Story 3.3: ProductCard3D
- [ ] Story 3.4: VideoPlayer
- [ ] Story 3.5: WhatsAppButton
- [ ] Story 3.6: Modal
- [ ] Story 3.7: Loader

**Critère de validation Epic** : Tous les composants UI fonctionnels et conformes à la charte.
