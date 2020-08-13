# surveyd-app

A large feedback-collection app.

## Overview

```
.
├── LICENSE
├── README.md
├── config          # protected API keys and settings
│   └── keys.js
├── index.js
├── package-lock.json
├── package.json
├── routes          # route handlers
│   └── authRoutes.js
└── services        # helper modules and business logic
    └── passport.js
```

## Quick Start

**Backend:**
Localhost development:

```
npm install
npm run dev # NOTE: This will run both `client` & `server`
# open localhost:3000 in web browser
```

**Frontend:**

Localhost development:

```
npm install
npm run start
# open localhost:3000 in web browser
```

To setup Ngrok for webhook development/testing:

```
# open a new terminal tab/window
npx ngrok http 5000
# cp ngrok address into SendGrid configuration dashboard:
# Dashboard>Settings>Mail Settings>Event Webhook
# ex: http://3b015e41cb2a.ngrok.io/api/surveys/webhooks
```

## Deployments

`$ git push heroku master`

## Environments

Dev/QA: `localhost`
Prod: `https://secure-forest-73972.herokuapp.com/`

Each target endpoint has thier own unique sets of keys.

## Technologies & Frameworks

- [Node]()
- [Express]()
- [MongoDB]()
- [Mongoose]()
- [Heroku]()
- [OAuth]()
- [Passport]()
- [Create React App]()
- [React]()
- [Redux]()
- [Materialize]()
- [Babel]()
- [Webpack]()
- [Axios]()
- [Docker]()
- [Kubernetes]()
- [Jenkins]()
- [Travis CI]()
- [Stripe]()
- [React Stripe Component]()
- [ES2015]()
- [SendGrid]()
- [Redux-Form]()
- [Ngrok]()
