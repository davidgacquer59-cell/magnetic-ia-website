---
title: "Comment rédiger un prompt IA efficace : la méthode en 5 étapes"
excerpt: "Un prompt vague produit une réponse vague. Voici la structure en 5 étapes utilisée en atelier pour obtenir des résultats fiables avec ChatGPT, Claude ou Gemini — applicables dès aujourd'hui en PME."
date: "2026-06-02"
tag: "Méthode"
tagColor: "#60a5fa"
readTime: "8 min"
featured: false
---

La plupart des déceptions avec l'IA viennent du même endroit : un prompt mal construit. **L'IA n'est pas mauvaise. L'instruction était floue.**

Bonne nouvelle : écrire un bon prompt s'apprend en 20 minutes. Voici la méthode que j'enseigne en atelier aux dirigeants de PME — et que vous pouvez appliquer dès aujourd'hui.

## Pourquoi votre prompt actuel ne fonctionne pas

Voici ce que tapent la plupart des gens la première fois :

> "Rédige une offre d'emploi pour un commercial."

L'IA produit quelque chose de générique. Vous êtes déçu. Vous concluez que l'IA "ne comprend pas votre secteur".

Le problème n'est pas l'IA. Le problème, c'est que vous avez donné une instruction de la même précision que "Fais-moi à manger." Un cuisinier brillant qui ne connaît pas vos goûts, votre budget, vos contraintes alimentaires — il fera au mieux une moyenne.

<div style="margin: 2.5rem 0; padding: 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(239,68,68,0.25); background: rgba(239,68,68,0.04);">
  <div style="padding: 1rem 1.5rem; background: rgba(239,68,68,0.1); border-bottom: 1px solid rgba(239,68,68,0.2);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #f87171; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;">Règle fondamentale</p>
  </div>
  <div style="padding: 1.5rem;">
    <p style="margin: 0; font-size: 1rem; color: #e2e8f0; font-weight: 600; line-height: 1.6;">La qualité d'un prompt détermine directement la qualité de la réponse. L'IA amplifie ce que vous lui donnez — dans les deux sens.</p>
  </div>
</div>

## La structure en 5 étapes

Un prompt efficace contient cinq éléments. Tous ne sont pas toujours nécessaires — mais connaître les cinq vous permet de choisir lesquels activer selon la complexité de la tâche.

<div style="margin: 2.5rem 0; display: flex; flex-direction: column; gap: 0; position: relative;">

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(96,165,250,0.15); border: 2px solid #60a5fa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #60a5fa; flex-shrink: 0; z-index: 1;">1</div>
      <div style="width: 2px; flex: 1; background: rgba(96,165,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.4rem; font-weight: 700; color: #60a5fa; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace;">Rôle</p>
      <p style="margin: 0 0 0.75rem; font-weight: 600; color: #e2e8f0;">Qui est l'IA dans ce contexte ?</p>
      <p style="margin: 0 0 0.75rem; font-size: 0.88rem; color: #94a3b8;">Définir un rôle active un "mode" dans le modèle — il mobilise un registre de connaissances spécifique et adapte son ton en conséquence.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <div style="padding: 0.75rem; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); border-radius: 0.6rem;">
          <div style="font-size: 0.7rem; color: #f87171; font-weight: 600; margin-bottom: 0.3rem;">✗ Sans rôle</div>
          <div style="font-size: 0.82rem; color: #94a3b8; font-style: italic;">"Rédige une offre d'emploi"</div>
        </div>
        <div style="padding: 0.75rem; background: rgba(110,231,183,0.08); border: 1px solid rgba(110,231,183,0.2); border-radius: 0.6rem;">
          <div style="font-size: 0.7rem; color: #6ee7b7; font-weight: 600; margin-bottom: 0.3rem;">✓ Avec rôle</div>
          <div style="font-size: 0.82rem; color: #94a3b8; font-style: italic;">"Tu es un DRH expérimenté dans le secteur BTP, spécialisé dans le recrutement de profils terrain."</div>
        </div>
      </div>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(96,165,250,0.15); border: 2px solid #60a5fa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #60a5fa; flex-shrink: 0; z-index: 1;">2</div>
      <div style="width: 2px; flex: 1; background: rgba(96,165,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.4rem; font-weight: 700; color: #60a5fa; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace;">Contexte</p>
      <p style="margin: 0 0 0.75rem; font-weight: 600; color: #e2e8f0;">Quelle est votre situation concrète ?</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">L'IA ne connaît pas votre entreprise, votre secteur, vos clients, votre historique. Tout ce que vous ne dites pas, elle l'invente ou le généralise. Donnez les faits qui comptent : taille de l'entreprise, secteur, destinataire, objectif business derrière la tâche.</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(96,165,250,0.15); border: 2px solid #60a5fa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #60a5fa; flex-shrink: 0; z-index: 1;">3</div>
      <div style="width: 2px; flex: 1; background: rgba(96,165,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.4rem; font-weight: 700; color: #60a5fa; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace;">Objectif</p>
      <p style="margin: 0 0 0.75rem; font-weight: 600; color: #e2e8f0;">Que voulez-vous obtenir exactement ?</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Formulez l'objectif final, pas la tâche intermédiaire. "Écrire un email" est une tâche. "Obtenir un rendez-vous avec un prospect qui n'a pas répondu depuis 3 semaines" est un objectif. La différence oriente radicalement la réponse.</p>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding-bottom: 1.5rem;">
    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(96,165,250,0.15); border: 2px solid #60a5fa; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #60a5fa; flex-shrink: 0; z-index: 1;">4</div>
      <div style="width: 2px; flex: 1; background: rgba(96,165,250,0.2); margin-top: 0.5rem; min-height: 40px;"></div>
    </div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(96,165,250,0.05); border: 1px solid rgba(96,165,250,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.4rem; font-weight: 700; color: #60a5fa; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace;">Contraintes</p>
      <p style="margin: 0 0 0.75rem; font-weight: 600; color: #e2e8f0;">Quelles limites doit respecter la réponse ?</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.6rem; margin-top: 0.5rem;">
        <div style="padding: 0.6rem 0.9rem; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.15); border-radius: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">Ton (formel / décontracté)</div>
        <div style="padding: 0.6rem 0.9rem; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.15); border-radius: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">Longueur (max 150 mots)</div>
        <div style="padding: 0.6rem 0.9rem; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.15); border-radius: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">Ce à éviter absolument</div>
        <div style="padding: 0.6rem 0.9rem; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.15); border-radius: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">Angle / point de vue</div>
        <div style="padding: 0.6rem 0.9rem; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.15); border-radius: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">Destinataire précis</div>
      </div>
    </div>
  </div>

  <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
    <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(110,231,183,0.15); border: 2px solid #6ee7b7; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #6ee7b7; flex-shrink: 0;">5</div>
    <div style="padding: 1.25rem 1.5rem; background: rgba(110,231,183,0.05); border: 1px solid rgba(110,231,183,0.2); border-radius: 1rem; flex: 1;">
      <p style="margin: 0 0 0.4rem; font-weight: 700; color: #6ee7b7; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-family: 'JetBrains Mono', monospace;">Format attendu</p>
      <p style="margin: 0 0 0.75rem; font-weight: 600; color: #e2e8f0;">Sous quelle forme doit arriver le résultat ?</p>
      <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">Liste à puces, tableau comparatif, texte rédigé, structure JSON, plan en 3 parties, email prêt à envoyer... Précisez-le. L'IA peut produire n'importe quel format — mais sans instruction, elle choisit par défaut un texte long, souvent inadapté.</p>
    </div>
  </div>

</div>

## Exemple complet : avant / après

Voici la transformation d'un prompt réel dans un contexte PME.

<div style="margin: 2.5rem 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(96,165,250,0.2);">
  <div style="padding: 1rem 1.5rem; background: rgba(96,165,250,0.08); border-bottom: 1px solid rgba(96,165,250,0.15);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #60a5fa; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;">Cas réel — Responsable RH, PME transport 45 salariés</p>
  </div>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div style="padding: 1.5rem; border-right: 1px solid rgba(96,165,250,0.12); background: rgba(239,68,68,0.03);">
      <div style="font-size: 0.7rem; color: #f87171; font-weight: 600; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">Avant (prompt naïf)</div>
      <div style="padding: 1rem; background: rgba(15,23,42,0.6); border-radius: 0.75rem; font-size: 0.82rem; color: #94a3b8; font-style: italic; line-height: 1.6;">Rédige une offre d'emploi pour un chauffeur.</div>
      <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(239,68,68,0.08); border-radius: 0.5rem; font-size: 0.8rem; color: #f87171;">Résultat : offre générique, sans différenciant, ton RH standard, inutilisable telle quelle.</div>
    </div>
    <div style="padding: 1.5rem; background: rgba(110,231,183,0.03);">
      <div style="font-size: 0.7rem; color: #6ee7b7; font-weight: 600; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">Après (prompt structuré)</div>
      <div style="padding: 1rem; background: rgba(15,23,42,0.6); border-radius: 0.75rem; font-size: 0.82rem; color: #94a3b8; line-height: 1.7;">
        <strong style="color: #60a5fa;">Rôle :</strong> Tu es un responsable RH dans le transport routier.<br><br>
        <strong style="color: #60a5fa;">Contexte :</strong> PME de 45 salariés, spécialisée dans la livraison régionale de matériaux BTP. Nous recrutons en CDI un chauffeur SPL avec FIMO à jour.<br><br>
        <strong style="color: #60a5fa;">Objectif :</strong> Rédiger une offre qui attire des profils expérimentés et sérieux, dans un marché tendu.<br><br>
        <strong style="color: #60a5fa;">Contraintes :</strong> Ton direct, valoriser la stabilité de l'emploi et la proximité du management. Pas de jargon RH. Max 250 mots.<br><br>
        <strong style="color: #60a5fa;">Format :</strong> Titre accrocheur + 3 blocs : poste / profil recherché / ce qu'on offre.
      </div>
      <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(110,231,183,0.08); border-radius: 0.5rem; font-size: 0.8rem; color: #6ee7b7;">Résultat : offre publiable immédiatement, 2 candidatures qualifiées en 48h.</div>
    </div>
  </div>
</div>

## Les 3 erreurs de prompt les plus fréquentes en PME

<div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 0.75rem;">

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 30px; height: 30px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">🎯</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.9rem; margin-bottom: 0.25rem;">Trop vague sur l'objectif</div>
      <div style="font-size: 0.83rem; color: #94a3b8;">"Aide-moi à vendre plus" est un vœu, pas un prompt. Dites ce que vous voulez produire concrètement : un email de relance, une page de présentation, un argumentaire pour un type de client précis.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 30px; height: 30px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">📋</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.9rem; margin-bottom: 0.25rem;">Oublier le format attendu</div>
      <div style="font-size: 0.83rem; color: #94a3b8;">L'IA adore les longs développements. Si vous voulez 5 lignes max, dites-le. Si vous voulez un tableau, dites-le. Sans instruction de format, vous récupérez souvent 3 fois plus de texte que nécessaire.</div>
    </div>
  </div>

  <div style="display: flex; gap: 1rem; align-items: flex-start; padding: 1rem 1.25rem; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); border-radius: 0.9rem;">
    <div style="width: 30px; height: 30px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">🔄</div>
    <div>
      <div style="font-weight: 600; color: #e2e8f0; font-size: 0.9rem; margin-bottom: 0.25rem;">Abandonner après la première réponse</div>
      <div style="font-size: 0.83rem; color: #94a3b8;">Un prompt se raffine. Si la première réponse est à 70%, dites "c'est bien mais trop formel, reformule en gardant les 3 premiers paragraphes et en allégeant le ton." Deux itérations valent souvent mieux qu'un prompt parfait dès le départ.</div>
    </div>
  </div>

</div>

## Le template universel à copier-coller

Ce gabarit fonctionne pour 80% des tâches courantes en PME.

<div style="margin: 2rem 0; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(167,139,250,0.25);">
  <div style="padding: 1rem 1.5rem; background: rgba(167,139,250,0.1); border-bottom: 1px solid rgba(167,139,250,0.2);">
    <p style="margin: 0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #a78bfa; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;">Template — à adapter selon votre besoin</p>
  </div>
  <div style="padding: 1.5rem; background: rgba(15,23,42,0.7);">
    <div style="font-size: 0.88rem; color: #cbd5e1; line-height: 2;">
      <span style="color: #60a5fa; font-weight: 600;">Tu es</span> [rôle / expertise / fonction].<br>
      <span style="color: #60a5fa; font-weight: 600;">Mon contexte :</span> [secteur, taille entreprise, situation, destinataire].<br>
      <span style="color: #60a5fa; font-weight: 600;">Mon objectif :</span> [ce que je veux obtenir comme résultat final].<br>
      <span style="color: #60a5fa; font-weight: 600;">Contraintes :</span> [ton, longueur, ce à éviter, ce à inclure absolument].<br>
      <span style="color: #60a5fa; font-weight: 600;">Format attendu :</span> [liste / email / tableau / texte court / plan structuré / autre].
    </div>
  </div>
</div>

## Quand ajouter des exemples dans votre prompt

Pour les tâches créatives ou stylistiques (écriture, ton de marque, email commercial), il existe une sixième dimension souvent sous-utilisée : **les exemples**.

Fournir 1 à 3 exemples de ce que vous voulez — ou de ce que vous ne voulez pas — réduit drastiquement le nombre d'itérations nécessaires. C'est ce qu'on appelle le *few-shot prompting* : montrer avant de demander.

Exemple pratique : avant de demander "Rédige un post LinkedIn pour moi", copiez 2 posts que vous aimez et ajoutez : "Voici des exemples du style que je vise : [...]". La différence est immédiate.

## La suite logique : la méthode du stagiaire intelligent

Une fois la structure de base maîtrisée, il existe une approche encore plus puissante pour les tâches complexes et répétitives : [la méthode du stagiaire intelligent](/blog/methode-stagiaire-intelligent-ia). Elle vous permet de décrire n'importe quel processus métier à l'IA — même technique — de façon à ce qu'elle puisse le reproduire de manière cohérente, semaine après semaine.

Pour comprendre comment identifier quelles tâches méritent d'être confiées à l'IA, consultez aussi [le filtre des 3 questions pour identifier vos opportunités IA](/blog/diagnostic-ia-5-questions-pme).

## Par où commencer concrètement ?

Choisissez une tâche que vous faites chaque semaine. Quelque chose de simple : rédiger un compte-rendu, répondre à un type d'email récurrent, préparer un devis standard.

Appliquez le template ci-dessus. Testez. Itérez une fois. Vous aurez un prompt fonctionnel en moins de 30 minutes — et un gain de temps mesurable dès la première semaine.

Si vous voulez aller plus vite, [l'Audit Flash](/contact) vous permet d'identifier vos 3 meilleurs cas d'usage IA en une demi-journée, avec les prompts déjà construits pour votre activité.

---

*David Gacquer — Magnetic-IA, cadrage de projets IA pour dirigeants de TPE/PME. Consultant IA indépendant basé à Wambrechies, intervenant dans la métropole lilloise et à distance dans toute la France.*
