# NOTES – Résumé rapide

## Ce que j’ai fait

- **Liste d’événements** : écran de liste branché sur l’API "GET /events", avec états de chargement / erreur / liste vide et cartes d’événements calées sur la maquette (image 96x96, largeur max ~390, typo ajustée, titre tronqué sur 2 lignes).

- **Détail d’un événement** : écran de détail branché sur "GET /events/:id" avec validation des données (Zod), affichant titre, date, lieu, image large, description et un bouton "Ajouter au calendrier".

- **Auth (bonus)** : contexte d’authentification avec "login", "register", "logout" et "isAuthenticated", connecté aux routes "/login" et "/register" du back. La page d’accueil affiche un petit formulaire email/mot de passe avec switch login/signup, et les écrans d’événements sont accessibles uniquement si l’utilisateur est connecté.

- **Calendrier (bonus)** : affichage du calendrier utilisateur via "GET /users/{userId}/calendar" (liste d’événements réutilisant les mêmes cartes) et bouton "Ajouter au calendrier" sur la page détail qui ajoute un événement via "POST /users/{userId}/calendar" et rafraîchit automatiquement la liste sur la page d’accueil.

## Choix techniques principaux

- Validation des réponses API avec Zod pour éviter les "any".
- Découpage simple : pages (liste, détail, home) d’un côté, composants UI réutilisables de l’autre.
- Styles gérés avec StyleSheet.create, en respectant au mieux les specs Figma tout en restant responsive.
- Suppression du mock d’événements dans l’API front et utilisation systématique des vraies routes du back.
