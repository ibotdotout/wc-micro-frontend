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
$ ./deploy.sh <app>
```

-------

## Micro Frontends

### App Shell: Micro Frontends Integration
- `app-shell`: `app-shell/src/app/index.html`

### Applications
Web Component (HTML templates) Application
- `app-wc`: `micro-frontend-app/wc/src/app/app-wc.js`

React Application
- `app-react`: `micro-frontend-app/react-app/src/App.js`

Angular Application
- `app-ng`: `micro-frontend-app/ng-app/src/app/app.component.html`

Vue Application
- `app-vue`: `micro-frontend-app/vue-app/src/App.vue`
