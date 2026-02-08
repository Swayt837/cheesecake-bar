# EPIC-05: Formulaire de Devis

## Info
| | |
|---|---|
| **Epic** | Formulaire de Devis |
| **Priorité** | P0 - Critique |
| **Dépendances** | EPIC-01, EPIC-03 |

---

## Story 5.1: Formulaire de Devis - Structure

### Description
En tant que prospect, je veux remplir un formulaire simple pour demander un devis.

### Tâches
- [ ] Créer `src/components/sections/QuoteForm.tsx`
- [ ] Installer et configurer React Hook Form + Zod
- [ ] Créer le schéma de validation Zod
- [ ] Implémenter les champs :
  - Type (Particulier / Entreprise) - radio/select
  - Date de l'événement - date picker
  - Ville - input text
  - Nombre de personnes - number input
  - Formule souhaitée - select (Drop-off / Bar / Signature)
  - Message - textarea optionnel
  - Contact (WhatsApp ou Email) - input text
- [ ] Labels et placeholders traduits (i18n)
- [ ] Affichage erreurs de validation

### Critères d'acceptation
- [ ] Tous champs présents
- [ ] Validation en temps réel
- [ ] Messages d'erreur traduits
- [ ] Design cohérent (inputs stylisés charte)
- [ ] Responsive

### Schéma Zod
```typescript
const quoteSchema = z.object({
  type: z.enum(['particulier', 'entreprise']),
  date: z.string().min(1),
  city: z.string().min(2),
  guests: z.number().min(1).max(500),
  formula: z.enum(['dropoff', 'bar', 'signature']),
  message: z.string().optional(),
  contact: z.string().min(5),
});
```

---

## Story 5.2: Envoi Email via EmailJS

### Description
En tant que propriétaire, je veux recevoir les demandes de devis par email.

### Tâches
- [ ] Configurer EmailJS (compte + template)
- [ ] Implémenter l'envoi dans QuoteForm
- [ ] État loading pendant l'envoi
- [ ] Gestion erreur réseau

### Critères d'acceptation
- [ ] Email envoyé avec toutes les infos du formulaire
- [ ] Bouton disabled pendant l'envoi
- [ ] Loading spinner visible
- [ ] Gestion gracieuse des erreurs

### Template EmailJS
```
Nouvelle demande de devis

Type: {{type}}
Date: {{date}}
Ville: {{city}}
Nombre de personnes: {{guests}}
Formule: {{formula}}
Message: {{message}}
Contact: {{contact}}
```

---

## Story 5.3: Feedback Utilisateur (Toast)

### Description
En tant que visiteur, je veux savoir si ma demande a bien été envoyée.

### Tâches
- [ ] Créer composant Toast ou utiliser lib légère
- [ ] Toast succès : "Demande envoyée ! Nous vous répondons sous 24h."
- [ ] Toast erreur : "Erreur lors de l'envoi. Veuillez réessayer."
- [ ] Reset du formulaire après succès
- [ ] Animation entrée/sortie

### Critères d'acceptation
- [ ] Toast visible 5 secondes
- [ ] Succès : fond vert/or, icône check
- [ ] Erreur : fond rouge, icône warning
- [ ] Formulaire reset après succès
- [ ] Messages traduits

---

## Story 5.4: Protection Anti-Spam

### Description
En tant que propriétaire, je veux éviter les soumissions spam.

### Tâches
- [ ] Implémenter honeypot field (champ caché)
- [ ] Rate limiting côté client (1 soumission / 30s)
- [ ] Validation date future obligatoire

### Critères d'acceptation
- [ ] Champ honeypot invisible (CSS)
- [ ] Soumission bloquée si honeypot rempli
- [ ] Message si soumission trop rapide
- [ ] Date dans le passé rejetée

---

## Checklist Epic 5

- [ ] Story 5.1: Structure formulaire
- [ ] Story 5.2: Envoi EmailJS
- [ ] Story 5.3: Feedback Toast
- [ ] Story 5.4: Protection Anti-Spam

**Critère de validation Epic** : Formulaire fonctionnel, emails reçus, feedback utilisateur clair.
