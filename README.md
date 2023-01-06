# ZOO API + Front

# Backend

La partie back de ce projet fut implémentée via Node.JS en TypeScript.
Nous utilisons une API s'appuyant sur ExpressJS.
Le SGBD utilisé est MongoDB

## Lancement du serveur

Pour lancer l'API, il faut se déplacer dans le répertoire /API via la commande dans le terminal `cd .\API\` puis lancer le serveur en entrant `npm run start`. (Notons qu'une version dev avec des watchers est possible via `npm run dev`).
Ensuite, l'API sera active à l'adresse `http://localhost:8080/`

# Frontend

La partie front de ce projet est mise en place en Angular en TypeScript.

## Lancement de l'app

Pour lancer l'app, il faut se déplacer dans le répertoire /FRONT via la commande dans le terminal `cd .\FRONT\` puis lancer l'app en entrant `ng serve`. (Notons que vous pouvez préciser le port via le flag `--port=XXXX`).
Par défaut, l'app sera active à l'adresse `http://localhost:4200/` ou sur le port que vous aurez choisi.
