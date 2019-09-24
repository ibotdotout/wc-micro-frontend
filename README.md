Micro Frontends: Run-time integration via Web Components
--------
tested on Google Chrome Version 76 (22 Sept 2019)

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
# ex. ./deploy.sh app-react
$ ./deploy.sh <app>
```

kill app

```
# ex. ./kill.sh app-wc
$ ./kill.sh <app>
```

-------

## Micro Frontends

### App Shell: Micro Frontends Integration
- `app-shell`: `app-shell/src/app/index.html`

### Fragments
Web Component (HTML templates) Application
- `app-wc`: `fragments/app-wc/src/app/app-wc.js`

React Application
- `app-react`: `fragments/app-react/src/App.js`

Angular Application
- `app-ng`: `fragments/app-ng/src/app/app.component.html`

Vue Application
- `app-vue`: `fragments/app-vue/src/components/HelloWorld.vue`
