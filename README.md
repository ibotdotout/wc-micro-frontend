Hello, Micro Frontend
--------

how to run

```sh
$ ./run.sh
```

how to start manually

```sh
$ docker-compose build
$ docker-compose up -d

$ open http://localhost:3000

$ docker-compose down
```

deploy change

```
# ex. ./deploy app-react
$ ./deploy.sh <app>
```

-------

## Micro Frontends

### App Shell: Micro Frontends Integration
- `app-shell`: `app-shell/src/app/index.html`

### Applications
Web Component (HTML templates) Application
- `app-a`: `micro-frontend-app/a/src/app/app-a.js`
- `app-b`: `micro-frontend-app/b/src/app/app-b.js`

React Application
- `app-react`: `micro-frontend-app/react-app/src/App.js`

Angular Application
- `app-ng`: `micro-frontend-app/ng-app/src/app/app.component.html`

Vue Application
- `app-vue`: `micro-frontend-app/vue-app/src/App.vue`
