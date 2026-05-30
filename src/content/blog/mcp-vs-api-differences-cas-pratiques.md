---
title: "MCP vs API : différences et cas pratiques"
excerpt: "Le Model Context Protocol change la façon dont les agents IA accèdent aux données. Quand utiliser MCP plutôt qu'une API classique ? Les réponses avec des exemples concrets."
date: "25 septembre 2025"
tag: "Technique"
tagColor: "#3b82f6"
readTime: "8 min"
---

## Le contexte

Depuis fin 2024, le Model Context Protocol (MCP) fait beaucoup parler. Anthropic l'a ouvert en open source, et les principaux éditeurs d'outils IA commencent à l'adopter. Mais concrètement, qu'est-ce que ça change pour un dirigeant de PME ou un consultant ?

## API classique vs MCP : la différence fondamentale

Une **API classique** est un contrat fixe entre deux systèmes. Vous définissez à l'avance les endpoints, les formats de données, les authentifications. C'est rigide, mais c'est prévisible.

**MCP** (Model Context Protocol) est un protocole qui permet à un agent IA d'accéder dynamiquement à des ressources et des outils — sans que ces connexions soient codées à l'avance. L'agent découvre ce dont il a besoin au moment où il en a besoin.

La différence clé : avec une API, c'est vous qui décidez à l'avance quelles données l'IA peut utiliser. Avec MCP, l'agent peut explorer et utiliser les ressources disponibles de manière autonome.

## Quand utiliser quoi ?

### API classique — le bon choix si :
- Vous avez un flux de données défini et stable
- Vous avez besoin de contrôle total sur ce que l'IA peut faire
- La sécurité et la conformité RGPD sont des priorités
- Votre cas d'usage est simple et répétitif

### MCP — le bon choix si :
- Vous construisez un agent IA complexe avec accès à plusieurs sources
- Le périmètre des données nécessaires peut varier selon le contexte
- Vous travaillez avec des outils qui supportent déjà MCP (Claude Desktop, Cursor...)
- Vous voulez que l'agent puisse s'adapter sans re-développement

## Exemples concrets pour une PME

**Avec API classique :** Un chatbot sur votre site qui répond aux questions sur votre catalogue produits. Les données sont fixes, le périmètre est clair, la sécurité est maîtrisée.

**Avec MCP :** Un assistant interne qui peut consulter votre CRM, votre calendrier, vos emails et vos documents — et synthétiser une situation client avant un rendez-vous. Le périmètre varie selon la demande.

## Ce que ça change pour le cadrage

Le choix entre API et MCP n'est pas une décision technique — c'est une décision stratégique. Elle dépend de votre tolérance au risque, de vos besoins de contrôle, et de la complexité de vos cas d'usage.

C'est exactement le type de question qu'on tranche lors d'un cadrage : avant de choisir l'outil, comprendre le besoin.
