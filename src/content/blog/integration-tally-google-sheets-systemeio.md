---
title: "Intégration Tally → Google Sheets → Systeme.io : guide complet"
excerpt: "Comment connecter un formulaire Tally à une feuille Google Sheets puis déclencher une séquence dans Systeme.io, sans coder, en moins d'une heure."
date: "10 septembre 2025"
tag: "Automatisation"
tagColor: "#10b981"
readTime: "10 min"
---

## Pourquoi cette stack ?

Tally (formulaires), Google Sheets (base de données légère) et Systeme.io (marketing automation) forment une combinaison puissante et économique pour les solopreneurs et petites équipes. Chaque outil est gratuit ou très abordable, et leur intégration via Make prend moins d'une heure.

## Le cas d'usage

Un prospect remplit un formulaire de contact sur votre site (Tally). Ses coordonnées s'enregistrent automatiquement dans Google Sheets pour suivi. Simultanément, il est ajouté dans une séquence email de bienvenue sur Systeme.io.

Résultat : zéro saisie manuelle, zéro lead qui tombe dans les oubliettes.

## Les outils nécessaires

- **Tally** (formulaires) — gratuit jusqu'à 100 réponses/mois
- **Google Sheets** — gratuit
- **Systeme.io** — freemium (gratuit jusqu'à 2 000 contacts)
- **Make** (anciennement Integromat) — gratuit jusqu'à 1 000 opérations/mois

## Étape 1 — Créer le formulaire Tally

Créez votre formulaire avec les champs essentiels : prénom, email, besoin principal. Dans les paramètres Tally, activez les webhooks — c'est par là que Make va récupérer les données.

Copiez l'URL du webhook fourni par Make (étape suivante) et collez-la dans Tally.

## Étape 2 — Configurer Make

Créez un nouveau scénario dans Make avec comme déclencheur "Webhooks > Custom webhook". Make vous génère une URL unique — c'est celle à coller dans Tally.

Testez en soumettant une réponse de test dans Tally. Make doit recevoir les données.

## Étape 3 — Connecter Google Sheets

Ajoutez un module "Google Sheets > Add a row" dans Make. Mappez les champs du formulaire vers les colonnes de votre feuille : prénom → colonne A, email → colonne B, etc.

Ajoutez une colonne "Date" avec la variable date/heure de Make pour tracer quand le lead est entré.

## Étape 4 — Connecter Systeme.io

Ajoutez un module "HTTP > Make a request" dans Make. Systeme.io expose une API REST simple. Configurez un appel POST vers l'endpoint `/api/contacts` avec l'email et le prénom du prospect.

Dans Systeme.io, créez une règle d'automatisation : "Nouveau contact ajouté → Démarrer séquence email de bienvenue".

## Étape 5 — Tester et activer

Soumettez une vraie réponse dans Tally. Vérifiez que :
- La ligne apparaît dans Google Sheets
- Le contact est créé dans Systeme.io
- La séquence email démarre

Si tout est ok, activez le scénario Make. Il tournera en continu.

## Pour aller plus loin

Cette même logique s'applique à des dizaines d'autres flux : qualification de leads, onboarding client, facturation récurrente. Le principe est toujours le même — un déclencheur, une action, une mesure.

C'est l'automatisation au service du métier, pas l'automatisation pour l'automatisation.
