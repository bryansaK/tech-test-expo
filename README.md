# Test technique – App Expo Événements

```bash
npm install
npx expo start
```

---

## 🎯 Ta mission

Compléter et optimiser cette app d'événements. Le squelette est là, à toi de montrer ta patte.

---

### 📱 1. Page Détail

L'écran `/events/[id]` attend son contenu. [Maquette Figma](https://www.figma.com/design/hpAKpew1toiZK35kJkCGBY/Test-Frontend?node-id=0-1&t=6vlROr0pYtEHz87m-1)

| Zone | À faire |
|------|--------|
| **API** | Remplacer le mock par `GET /events/:id` |
| **UI** | Image, titre, date, lieu, description, organisateur |
| **UX** | Gérer les états de chargement et les erreurs (ID inconnu, réseau) |

---

### ⚡ 2. Optimisation & Robustesse

Des dettes techniques ont été semées volontairement. À toi de les traquer.

- **Performance** — Re-renders inutiles dans la liste
- **TypeScript** — Zéro `any` sur les données API
- **Nettoyage** — Supprimer les restes du système mock

---

### 📅 3. Bonus – Calendrier

Ajouter l’événement au calendrier (Permissions + feedback succès/échec)

---

## 📋 Critères d’évaluation

- **UI** — Fidélité au design system, responsive
- **Code** — Hooks, lisibilité, architecture
- **Asynchrone** — Gestion propre des flux

---

## 📦 Livrable

- Lien vers le fork GitHub
- `NOTES.md` - Liste des choix techniques et optimisations effectuées
