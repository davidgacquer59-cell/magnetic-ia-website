---
title: "Méthode des 5 Pourquoi (5 Whys) : guide complet, schémas, exemples et application IA"
excerpt: "La méthode des 5 Pourquoi est l'outil de diagnostic le plus puissant et le plus sous-utilisé en entreprise. Guide complet avec schémas, exemples concrets, erreurs classiques — et comment l'appliquer avant tout projet IA."
date: "2026-06-02"
tag: "Stratégie"
tagColor: "#a78bfa"
readTime: "12 min"
---

La méthode des 5 Pourquoi tient en une phrase : **poser cinq fois la question "pourquoi ?" pour remonter d'un symptôme à sa cause racine.** Simple en apparence. Redoutable en pratique.

Problème : la plupart des articles sur le sujet restent en surface. Ce guide va plus loin — avec des schémas, des exemples dans plusieurs secteurs, les erreurs classiques, et une application aux projets IA que personne d'autre ne documente vraiment.

## Qu'est-ce que la méthode des 5 Pourquoi ?

La méthode des **5 Pourquoi** (ou *5 Whys* en anglais, *cinq pourquoi* en français) est une technique d'**analyse de la cause racine** (*root cause analysis*). Elle a été formalisée dans le cadre du Toyota Production System et reste aujourd'hui l'outil de diagnostic le plus utilisé dans le lean management, Six Sigma, et la gestion de projets.

Le principe repose sur un constat simple : **un problème visible est rarement sa propre cause**. Ce que vous observez est un symptôme. La vraie cause est cachée plus bas — souvent dans un processus, une décision passée, ou une absence de gouvernance.

<div style="margin: 2.5rem 0; padding: 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.25); background: rgba(167,139,250,0.04);">
  <div style="padding: 1rem 1.5rem; background: rgba(167,139,250,0.12); border-bottom: 1px solid rgba(167,139,250,0.2);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;">Principe fondamental</p>
  </div>
  <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start;">
    <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
      <div style="min-width: 120px; padding: 0.6rem 1rem; background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.3); border-radius: 0.75rem; text-align: center; font-size: 0.82rem; font-weight: 600; color: #f87171;">Symptôme visible</div>
      <div style="color: #a78bfa; font-size: 1.2rem;">→</div>
      <div style="flex: 1; font-size: 0.82rem; color: #94a3b8; font-style: italic;">Ce que vous observez, ce que vous ressentez</div>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; width: 100%; padding-left: 2rem;">
      <div style="min-width: 120px; padding: 0.6rem 1rem; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.25); border-radius: 0.75rem; text-align: center; font-size: 0.82rem; font-weight: 600; color: #fbbf24;">Causes intermédiaires</div>
      <div style="color: #a78bfa; font-size: 1.2rem;">→</div>
      <div style="flex: 1; font-size: 0.82rem; color: #94a3b8; font-style: italic;">Les "parce que" immédiats — souvent plusieurs niveaux</div>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; width: 100%; padding-left: 4rem;">
      <div style="min-width: 120px; padding: 0.6rem 1rem; background: rgba(110,231,183,0.1); border: 1px solid rgba(110,231,183,0.25); border-radius: 0.75rem; text-align: center; font-size: 0.82rem; font-weight: 600; color: #6ee7b7;">Cause racine</div>
      <div style="color: #a78bfa; font-size: 1.2rem;">→</div>
      <div style="flex: 1; font-size: 0.82rem; color: #94a3b8; font-style: italic;">La vraie origine — là où l'action corrective a de l'effet</div>
    </div>
  </div>
  <div style="padding: 1rem 1.5rem; border-top: 1px solid rgba(167,139,250,0.2); font-size: 0.82rem; color: #94a3b8;">
    💡 Traiter le symptôme → le problème revient. Traiter la cause racine → il disparaît.
  </div>
</div>

## Origine : Toyota, Taiichi Ohno et le lean manufacturing

La méthode a été développée par **Sakichi Toyoda** dans les années 1930, puis popularisée par **Taiichi Ohno** dans le **Toyota Production System (TPS)** après-guerre.

Ohno écrit dans son livre *Toyota Production System: Beyond Large-Scale Production* (1978) :

> "En répétant cinq fois le mot 'pourquoi', la nature du problème ainsi que sa solution deviennent claires."
>
> Taiichi Ohno, ingénieur Toyota

<div style="margin: 2.5rem 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.2); background: rgba(15,23,42,0.5);">
  <div style="padding: 1rem 1.5rem; background: rgba(167,139,250,0.08); border-bottom: 1px solid rgba(167,139,250,0.15);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; letter-spacing: 0.15em; text-transform: uppercase;">Diffusion de la méthode</p>
  </div>
  <div style="padding: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
    <div style="padding: 1rem; background: rgba(167,139,250,0.07); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem;">
      <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; margin-bottom: 0.4rem;">ANNÉES 1930</div>
      <div style="font-weight: 600; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 0.3rem;">Toyota</div>
      <div style="font-size: 0.78rem; color: #94a3b8;">Création par Sakichi Toyoda pour l'amélioration continue en production</div>
    </div>
    <div style="padding: 1rem; background: rgba(167,139,250,0.07); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem;">
      <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; margin-bottom: 0.4rem;">ANNÉES 1970–80</div>
      <div style="font-weight: 600; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 0.3rem;">Lean & Six Sigma</div>
      <div style="font-size: 0.78rem; color: #94a3b8;">Intégration dans DMAIC, Kaizen et les systèmes qualité ISO</div>
    </div>
    <div style="padding: 1rem; background: rgba(167,139,250,0.07); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem;">
      <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; margin-bottom: 0.4rem;">ANNÉES 2000–10</div>
      <div style="font-weight: 600; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 0.3rem;">Tech & Startups</div>
      <div style="font-size: 0.78rem; color: #94a3b8;">Adoption par les équipes produit, SRE, gestion d'incidents</div>
    </div>
    <div style="padding: 1rem; background: rgba(167,139,250,0.07); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem;">
      <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; margin-bottom: 0.4rem;">AUJOURD'HUI</div>
      <div style="font-weight: 600; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 0.3rem;">Projets IA</div>
      <div style="font-size: 0.78rem; color: #94a3b8;">Outil clé de cadrage avant tout investissement IA en PME</div>
    </div>
  </div>
</div>

## La méthode pas à pas : comment conduire une session 5 Pourquoi

<div style="margin: 2.5rem 0; display: flex; flex-direction: column; gap: 0; position: relative;">

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; position: relative; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(167,139,250,0.15); border: 2px solid #a78bfa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #a78bfa; flex-shrink: 0; z-index: 1;">1</div>
      <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.5rem; font-weight: 700; color: #e2e8f0;">Définir le problème avec précision</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Un problème mal défini génère une analyse inutile. Donnez un ancrage factuel : quoi, combien, depuis quand.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1rem;">
        <div style="padding: 0.75rem; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.6rem;">
          <div style="font-size: 0.7rem; color: #f87171; font-weight: 600; margin-bottom: 0.3rem;">✗ TROP VAGUE</div>
          <div style="font-size: 0.82rem; color: #94a3b8;">"On a des problèmes de qualité"</div>
        </div>
        <div style="padding: 0.75rem; background: rgba(110,231,183,0.08); border: 1px solid rgba(110,231,183,0.2); border-radius: 0.6rem;">
          <div style="font-size: 0.7rem; color: #6ee7b7; font-weight: 600; margin-bottom: 0.3rem;">✓ PRÉCIS</div>
          <div style="font-size: 0.82rem; color: #94a3b8;">"20% des commandes ont une erreur de picking, 3h de retraitement/semaine"</div>
        </div>
      </div>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; position: relative; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(167,139,250,0.15); border: 2px solid #a78bfa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #a78bfa; flex-shrink: 0; z-index: 1;">2</div>
      <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.5rem; font-weight: 700; color: #e2e8f0;">Réunir les bonnes personnes</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Les 5 Pourquoi se font avec les personnes qui <strong style="color: #e2e8f0;">vivent le problème au quotidien</strong> — pas avec les managers qui l'observent de loin. Au minimum une personne qui touche le processus directement.</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; position: relative; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(167,139,250,0.15); border: 2px solid #a78bfa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #a78bfa; flex-shrink: 0; z-index: 1;">3</div>
      <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.5rem; font-weight: 700; color: #e2e8f0;">Enchaîner les "pourquoi" en remontant</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">À chaque niveau, posez la question sur la réponse précédente — pas sur le problème de départ. Vérifiez chaque réponse avec des faits observables, pas des suppositions.</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; position: relative; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(167,139,250,0.15); border: 2px solid #a78bfa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #a78bfa; flex-shrink: 0; z-index: 1;">4</div>
      <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.5rem; font-weight: 700; color: #e2e8f0;">Identifier la cause racine actionnable</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Arrêtez-vous quand la réponse mène à quelque chose sur lequel vous <strong style="color: #e2e8f0;">pouvez agir</strong>. Ce n'est pas nécessairement au 5e niveau.</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
    <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(110,231,183,0.15); border: 2px solid #6ee7b7; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #6ee7b7; flex-shrink: 0;">5</div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(110,231,183,0.05); border: 1px solid rgba(110,231,183,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.5rem; font-weight: 700; color: #e2e8f0;">Définir une action corrective concrète</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Une action, une personne responsable, une date. Puis mesurez dans 30 à 60 jours si le problème a disparu. Pas de liste de recommandations génériques.</p>
    </div>
  </div>

</div>

## Exemple complet : la chaîne causale visualisée

Prenons un exemple classique en logistique pour illustrer la chaîne complète.

<div style="margin: 2.5rem 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.2);">
  <div style="padding: 1rem 1.5rem; background: rgba(167,139,250,0.1); border-bottom: 1px solid rgba(167,139,250,0.2);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;">Cas réel — Entrepôt logistique</p>
  </div>

  <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 2px solid rgba(239,68,68,0.5); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: #f87171;">⚠</div>
        <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 4px;"></div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.75rem; margin-bottom: 0.5rem;">
        <div style="font-size: 0.7rem; color: #f87171; font-weight: 600; margin-bottom: 0.2rem;">PROBLÈME CONSTATÉ</div>
        <div style="font-size: 0.88rem; color: #e2e8f0; font-weight: 500;">20% des commandes présentent une erreur de picking à l'expédition → 3,5h de retraitement par semaine</div>
      </div>
    </div>

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #a78bfa; flex-shrink: 0;">1</div>
        <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 4px;"></div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem; margin-bottom: 0.5rem;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline;">
          <span style="font-size: 0.72rem; color: #a78bfa; font-family: 'JetBrains Mono', monospace; font-weight: 600;">POURQUOI ?</span>
          <span style="font-size: 0.88rem; color: #cbd5e1;">Les références produits se ressemblent visuellement sur les rayonnages</span>
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #a78bfa; flex-shrink: 0;">2</div>
        <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 4px;"></div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem; margin-bottom: 0.5rem;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline;">
          <span style="font-size: 0.72rem; color: #a78bfa; font-family: 'JetBrains Mono', monospace; font-weight: 600;">POURQUOI ?</span>
          <span style="font-size: 0.88rem; color: #cbd5e1;">Le rangement entrepôt n'est pas organisé par famille de produits</span>
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #a78bfa; flex-shrink: 0;">3</div>
        <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 4px;"></div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem; margin-bottom: 0.5rem;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline;">
          <span style="font-size: 0.72rem; color: #a78bfa; font-family: 'JetBrains Mono', monospace; font-weight: 600;">POURQUOI ?</span>
          <span style="font-size: 0.88rem; color: #cbd5e1;">Le rangement n'a pas été revu depuis le doublement du catalogue produit</span>
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #a78bfa; flex-shrink: 0;">4</div>
        <div style="width: 2px; flex: 1; background: rgba(167,139,250,0.2); margin-top: 4px;"></div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.15); border-radius: 0.75rem; margin-bottom: 0.5rem;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline;">
          <span style="font-size: 0.72rem; color: #a78bfa; font-family: 'JetBrains Mono', monospace; font-weight: 600;">POURQUOI ?</span>
          <span style="font-size: 0.88rem; color: #cbd5e1;">Il n'existe pas de processus de révision périodique de l'organisation entrepôt</span>
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: stretch; gap: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 32px; flex-shrink: 0;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(110,231,183,0.15); border: 2px solid #6ee7b7; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: #6ee7b7; flex-shrink: 0;">5</div>
      </div>
      <div style="flex: 1; padding: 0.9rem 1rem; background: rgba(110,231,183,0.07); border: 2px solid rgba(110,231,183,0.3); border-radius: 0.75rem;">
        <div style="font-size: 0.7rem; color: #6ee7b7; font-weight: 600; margin-bottom: 0.3rem;">CAUSE RACINE IDENTIFIÉE</div>
        <div style="font-size: 0.88rem; color: #e2e8f0; font-weight: 500;">La gestion de l'entrepôt n'a pas de responsable désigné — aucune gouvernance pour maintenir l'organisation à jour</div>
        <div style="margin-top: 0.75rem; padding: 0.6rem 0.9rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; font-size: 0.8rem; color: #94a3b8;">
          <strong style="color: #6ee7b7;">Action corrective :</strong> Nommer un responsable entrepôt + créer un process de révision semestrielle + labellisation claire des rayonnages
        </div>
      </div>
    </div>

  </div>
</div>

## 3 exemples dans des secteurs différents

### Exemple 1 — Commerce et e-commerce

<div style="margin: 1.5rem 0; padding: 1.25rem 1.5rem; background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.2); border-radius: 1rem;">
  <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #60a5fa; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem;">Problème : taux d'avis négatifs doublé en 3 mois</div>
  <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
    <div><span style="color: #60a5fa; font-weight: 600;">P1 →</span> <span style="color: #cbd5e1;">Les clients se plaignent de délais de livraison non respectés</span></div>
    <div><span style="color: #60a5fa; font-weight: 600;">P2 →</span> <span style="color: #cbd5e1;">Les délais affichés sur le site sont souvent dépassés</span></div>
    <div><span style="color: #60a5fa; font-weight: 600;">P3 →</span> <span style="color: #cbd5e1;">Les délais affichés sont ceux du fournisseur, pas les délais réels incluant la préparation</span></div>
    <div><span style="color: #60a5fa; font-weight: 600;">P4 →</span> <span style="color: #cbd5e1;">Personne n'a mis à jour le paramétrage lors du changement de prestataire logistique</span></div>
    <div style="padding: 0.6rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; margin-top: 0.4rem;"><span style="color: #6ee7b7; font-weight: 600;">P5 (racine) →</span> <span style="color: #e2e8f0;">Il n'existe pas de checklist de vérification lors d'un changement prestataire</span></div>
  </div>
</div>

### Exemple 2 — RH et management

<div style="margin: 1.5rem 0; padding: 1.25rem 1.5rem; background: rgba(251,191,36,0.05); border: 1px solid rgba(251,191,36,0.2); border-radius: 1rem;">
  <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #fbbf24; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem;">Problème : turn-over junior > 40% par an</div>
  <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
    <div><span style="color: #fbbf24; font-weight: 600;">P1 →</span> <span style="color: #cbd5e1;">Les juniors quittent dans les 12 premiers mois</span></div>
    <div><span style="color: #fbbf24; font-weight: 600;">P2 →</span> <span style="color: #cbd5e1;">Ils se sentent insuffisamment accompagnés dans leur montée en compétences</span></div>
    <div><span style="color: #fbbf24; font-weight: 600;">P3 →</span> <span style="color: #cbd5e1;">Il n'y a pas de parcours d'onboarding structuré</span></div>
    <div><span style="color: #fbbf24; font-weight: 600;">P4 →</span> <span style="color: #cbd5e1;">La construction de l'onboarding avait été planifiée mais jamais livrée</span></div>
    <div style="padding: 0.6rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; margin-top: 0.4rem;"><span style="color: #6ee7b7; font-weight: 600;">P5 (racine) →</span> <span style="color: #e2e8f0;">Le projet a été confié à un manager sans temps alloué — aucun porteur dédié</span></div>
  </div>
</div>

### Exemple 3 — Production / qualité

<div style="margin: 1.5rem 0; padding: 1.25rem 1.5rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); border-radius: 1rem;">
  <div style="font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #f87171; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem;">Problème : arrêts machine récurrents en cours de poste</div>
  <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
    <div><span style="color: #f87171; font-weight: 600;">P1 →</span> <span style="color: #cbd5e1;">Le moteur surchauffe</span></div>
    <div><span style="color: #f87171; font-weight: 600;">P2 →</span> <span style="color: #cbd5e1;">Le système de refroidissement est insuffisant</span></div>
    <div><span style="color: #f87171; font-weight: 600;">P3 →</span> <span style="color: #cbd5e1;">Le filtre n'a pas été changé depuis 8 mois</span></div>
    <div><span style="color: #f87171; font-weight: 600;">P4 →</span> <span style="color: #cbd5e1;">Il n'y a aucun rappel de maintenance dans le planning</span></div>
    <div style="padding: 0.6rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; margin-top: 0.4rem;"><span style="color: #6ee7b7; font-weight: 600;">P5 (racine) →</span> <span style="color: #e2e8f0;">L'équipement ajouté l'an dernier n'a jamais été intégré à la GMAO</span></div>
  </div>
</div>

## Les 5 Pourquoi et l'IA : l'angle que personne ne documente

C'est là que presque tous les articles s'arrêtent. Voici ce qui est différent ici.

La grande majorité des **projets IA en PME échouent non pas à cause de la technologie, mais à cause d'un problème mal défini au départ.** L'entreprise observe un symptôme, choisit un outil IA pour y répondre, et six mois plus tard constate que le problème n'a pas bougé.

Les 5 Pourquoi appliqués **avant** un projet IA changent radicalement les résultats. Illustration :

<div style="margin: 2rem 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.25);">
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div style="padding: 1.25rem 1.5rem; background: rgba(239,68,68,0.06); border-right: 1px solid rgba(167,139,250,0.15);">
      <div style="font-size: 0.72rem; color: #f87171; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem;">Sans les 5 Pourquoi</div>
      <div style="font-size: 0.88rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.5rem;">Problème : "Les clients appellent trop"</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 0.75rem;">Solution choisie : déployer un chatbot IA</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 0.75rem;">Budget : 15 000€ + 3 mois de projet</div>
      <div style="padding: 0.6rem 0.9rem; background: rgba(239,68,68,0.1); border-radius: 0.5rem; font-size: 0.8rem; color: #f87171;">Résultat : le nombre d'appels ne baisse pas. La FAQ sur laquelle tourne le chatbot est incomplète et obsolète.</div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(110,231,183,0.04);">
      <div style="font-size: 0.72rem; color: #6ee7b7; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem;">Avec les 5 Pourquoi</div>
      <div style="font-size: 0.88rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.5rem;">P1 → Les clients ne trouvent pas l'info sur le site</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 0.3rem;">P2 → La FAQ est incomplète et mal organisée</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 0.3rem;">P3 → Elle n'a pas été mise à jour depuis 2 ans</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 0.3rem;">P4 → Personne n'en est responsable</div>
      <div style="padding: 0.6rem 0.9rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; font-size: 0.8rem; color: #6ee7b7; margin-top: 0.5rem;">Cause racine : problème de gouvernance de contenu, pas de technologie. Solution : nommer un responsable FAQ, la restructurer — puis éventuellement un outil IA pour la maintenir.</div>
    </div>
  </div>
</div>

**La règle d'or en cadrage IA : un chatbot sur une mauvaise FAQ donne un mauvais chatbot — plus vite.**

Les 5 Pourquoi permettent d'éviter de dépenser 15 000€ pour résoudre le mauvais problème. C'est pour cette raison qu'ils font partie systématiquement de mes [diagnostics IA pour PME](/blog/diagnostic-ia-5-questions-pme).

Pour aller plus loin sur les erreurs fréquentes en projet IA, je vous recommande de lire aussi [les 3 erreurs classiques dans les projets IA en PME](/blog/3-erreurs-projet-ia-pme) et [pourquoi l'automatisation sans cadrage mène à l'échec](/blog/automatisation-sans-cadrage-echec).

## Les 7 erreurs classiques qui font échouer une session 5 Pourquoi

<div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 0.75rem;">

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">1</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Commencer avec un problème flou</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">"On a des problèmes de communication" ne fonctionne pas. Sans ancrage factuel, chaque réponse sera une supposition.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">2</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">S'arrêter trop tôt</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">Les deux premiers "pourquoi" atteignent rarement la cause racine. Ce sont souvent des causes intermédiaires.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">3</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Sauter des niveaux</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">Passer du problème directement à une cause présumée sans enchaîner les questions intermédiaires mène à de fausses conclusions.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">4</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Chercher un coupable</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">Les 5 Pourquoi cherchent une cause systémique, pas une faute individuelle. Dès que la session tourne à "c'est la faute de Untel", elle est compromise.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">5</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Faire l'exercice seul</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">Sans les personnes qui vivent le problème, vous travaillez sur des suppositions. Les meilleures sessions 5 Pourquoi se font avec des gens du terrain.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">6</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Ne pas vérifier les réponses avec des faits</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">"Je pense que c'est parce que..." n'a pas sa place. Chaque réponse doit être étayée par quelque chose d'observable.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; color: #f87171; flex-shrink: 0;">7</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.88rem; margin-bottom: 0.2rem;">Ne pas définir d'action corrective concrète</div>
      <div style="font-size: 0.82rem; color: #94a3b8;">Une session sans action attribuée à une personne avec une date n'a aucune valeur opérationnelle. Ce n'est qu'une conversation.</div>
    </div>
  </div>

</div>

## 5 Pourquoi vs autres méthodes : quand utiliser laquelle ?

<div style="margin: 2rem 0; border-radius: 1rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.2);">
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(167,139,250,0.2); background: rgba(167,139,250,0.08);">
    <div style="padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 600; color: #a78bfa; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em;">Méthode</div>
    <div style="padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 600; color: #a78bfa; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; border-left: 1px solid rgba(167,139,250,0.15);">Idéale pour</div>
    <div style="padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 600; color: #a78bfa; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; border-left: 1px solid rgba(167,139,250,0.15);">Limite principale</div>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(167,139,250,0.1); background: rgba(110,231,183,0.04);">
    <div style="padding: 0.8rem 1rem; font-size: 0.85rem; font-weight: 600; color: #6ee7b7;">5 Pourquoi ★</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Problème unique, bien délimité. Rapide à mettre en œuvre.</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Moins adapté aux problèmes très multicausaux</div>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(167,139,250,0.1);">
    <div style="padding: 0.8rem 1rem; font-size: 0.85rem; font-weight: 600; color: #e2e8f0;">Ishikawa</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Explorer toutes les causes possibles d'un problème complexe</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Ne hiérarchise pas les causes par importance</div>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(167,139,250,0.1);">
    <div style="padding: 0.8rem 1rem; font-size: 0.85rem; font-weight: 600; color: #e2e8f0;">FMEA</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Anticiper les risques avant qu'ils surviennent</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Lourde à mettre en œuvre, nécessite une expertise</div>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(167,139,250,0.1);">
    <div style="padding: 0.8rem 1rem; font-size: 0.85rem; font-weight: 600; color: #e2e8f0;">Arbre des causes</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Accidents, incidents complexes avec plusieurs scénarios</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Nécessite une formation spécifique, plus long</div>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
    <div style="padding: 0.8rem 1rem; font-size: 0.85rem; font-weight: 600; color: #e2e8f0;">A3 Toyota</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Plan d'action complet, documentation structurée</div>
    <div style="padding: 0.8rem 1rem; font-size: 0.82rem; color: #94a3b8; border-left: 1px solid rgba(167,139,250,0.1);">Trop lourd pour les problèmes simples ou urgents</div>
  </div>
</div>

Les 5 Pourquoi sont le point d'entrée idéal. Pour les problèmes plus complexes ou multicausaux, ils se combinent naturellement avec Ishikawa ou l'arbre des causes. Découvrez comment ces méthodes s'appliquent dans un [cadrage de projet IA complet](/blog/cadrage-ia-vs-automatisation).

## Outils pour conduire une session 5 Pourquoi

Aucun outil sophistiqué n'est nécessaire. Voici ce qui fonctionne selon le contexte :

<div style="margin: 1.5rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
  <div style="padding: 1.1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 0.9rem;">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🖊️</div>
    <div style="font-weight: 600; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 0.3rem;">Présentiel</div>
    <div style="font-size: 0.8rem; color: #94a3b8;">Tableau blanc ou paper board. Idéal pour visualiser la chaîne causale en temps réel avec le groupe.</div>
  </div>
  <div style="padding: 1.1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 0.9rem;">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📊</div>
    <div style="font-weight: 600; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 0.3rem;">Template numérique</div>
    <div style="font-size: 0.8rem; color: #94a3b8;">Google Sheets ou Notion : tableau à 6 lignes avec Niveau / Question / Réponse / Source / Action.</div>
  </div>
  <div style="padding: 1.1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 0.9rem;">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🎨</div>
    <div style="font-weight: 600; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 0.3rem;">Distanciel</div>
    <div style="font-size: 0.8rem; color: #94a3b8;">FigJam ou Miro pour les sessions multi-participants à distance, avec post-its et liens visuels.</div>
  </div>
  <div style="padding: 1.1rem; background: rgba(167,139,250,0.05); border: 1px solid rgba(167,139,250,0.2); border-radius: 0.9rem;">
    <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚙️</div>
    <div style="font-weight: 600; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 0.3rem;">Qualité industrielle</div>
    <div style="font-size: 0.8rem; color: #94a3b8;">GMAO ou logiciels qualité (Qualios, Intelex) — pertinents uniquement pour des équipes qualité avec de nombreuses sessions.</div>
  </div>
</div>

## FAQ : les questions les plus posées

**Faut-il absolument cinq questions ?**
Non. Cinq est un guide heuristique. On peut trouver la cause racine en trois. On peut avoir besoin de sept. L'important est de continuer tant qu'on n'a pas atteint une cause actionnable.

**Peut-on avoir plusieurs branches ?**
Oui. Un problème peut avoir plusieurs causes intermédiaires. On explore chaque branche séparément — ce qui ressemble alors à un Ishikawa simplifié.

**Combien de temps dure une session ?**
Entre 30 minutes et 2 heures selon la complexité et le nombre de participants. Une session avec un problème déjà défini et mesuré va bien plus vite.

**Qui doit animer la session ?**
Idéalement quelqu'un d'externe au problème, pour éviter les biais. Un consultant, un responsable qualité, ou simplement quelqu'un d'une autre équipe qui pose les questions sans jugement et sans défendre un territoire.

**Les 5 Pourquoi fonctionnent-ils pour les problèmes chroniques ?**
Oui, c'est exactement pour cela qu'ils ont été créés. Un problème qui revient régulièrement est le signe que les actions passées ont traité les symptômes, pas la cause racine.

**Peut-on les utiliser en amont d'un projet IA ?**
C'est même recommandé. Consultez [par où commencer avec l'IA en PME](/blog/par-ou-commencer-ia-pme) pour voir comment intégrer cette méthode dans votre diagnostic.

## Conclusion : simple comme méthode, difficile comme discipline

La méthode des 5 Pourquoi est accessible à n'importe quelle organisation, sans budget ni formation spécifique. Mais sa simplicité apparente est trompeuse.

La discipline qu'elle exige — rester factuel, ne pas s'arrêter trop tôt, éviter les biais de confirmation, impliquer les bonnes personnes, définir une action concrète — est bien plus rare qu'on ne le croit.

C'est pour cette raison qu'elle reste sous-utilisée. Et c'est pour cette raison que les organisations qui la pratiquent vraiment ont un avantage réel sur celles qui traitent des symptômes en boucle.

**Avant tout projet IA, avant tout investissement, avant toute décision stratégique : posez-vous cinq fois la question "pourquoi ?"**

Vous serez souvent surpris par ce que vous trouverez. Et vous éviterez de résoudre le mauvais problème.

---

*David Gacquer — Magnetic-IA, cadrage de projets IA pour dirigeants de TPE/PME. Hauts-de-France.*
