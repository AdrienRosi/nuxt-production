# Déploiement d'une application Nuxt - universal mode
1. Lancer la commande `npm run build` depuis l'environnement de développement
2. Copier les dossiers/fichiers suivants :
  - .nuxt/
  - static/
  - server/index.js
  - nuxt.config.js
  - package.json
3. Renommer le fichier index.js (facultatif)
4. Supprimer les dépendances de développement ainsi que les scripts du fichier package.json
5. Supprimer les modules de développement du fichier nuxt.config.js
6. Installer les dépendances `npm i`

Pour tester : `node index.js`