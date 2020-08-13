# surveyd-app

A large feedback-collection app.

## Overview

This application lets you send surveys via email to thousands of recipients at one time. You to customise the content of the email, and track each response to the surveys via the dashboard. This pay-as-you-go service where one credit can send out one batch of surveys.

## Quick Start

To get started locally, you will need to perform the following steps in both the `backend` as well as the `frontend` of the application:

**Backend:**

```
npm install
npm run dev # NOTE: This will run both `client` & `server`
# open localhost:3000 in web browser to access the client
```

**Frontend:**

To specifically run the client server only:

```
npm install
npm run start
# open localhost:3000 in web browser
```

**To setup Ngrok for webhook development/testing:**

```
# open a new terminal tab/window
npx ngrok http 5000
# cp ngrok address into SendGrid configuration dashboard:
# Dashboard>Settings>Mail Settings>Event Webhook
# ex: http://3b015e41cb2a.ngrok.io/api/surveys/webhooks
```

## Deployments

The Production endpoint environment for this application is hosted in Heroku. To deploy, simply use this command:

`$ git push heroku master`

## Environments

Various keys and configuration changes must be made on both Heroku and SendGrid to properly use and test this application. By default, the config is wired up and pointed to Production assets.

**Dev/QA:** `localhost`

**Prod:** `https://secure-forest-73972.herokuapp.com/`

Each target endpoint has thier own unique sets of keys - be sure to update the necessary keys in SendGrid to properly develop and test via `localhost`.

## Technologies & Frameworks

- [Axios](https://github.com/axios/axios)
- [Babel](https://babeljs.io/)
- [Create React App](https://facebook.github.io/create-react-app/)
- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/)
- [Heroku](https://www.heroku.com/)
- [Kubernetes](https://kubernetes.io/)
- [Materialize](https://materializecss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Ngrok](https://ngrok.com/)
- [Node](https://nodejs.org/)
- [OAuth](https://oauth.net/2/)
- [Passport](http://www.passportjs.org/)
- [React Stripe Component](https://github.com/stripe/react-stripe-js)
- [React](https://reactjs.org/)
- [Redux-Form](https://redux-form.com/)
- [Redux](https://redux.js.org/)
- [SendGrid](https://sendgrid.com/)
- [Stripe](https://stripe.com/)
- [Travis CI](https://travis-ci.org/)
- [Webpack](https://webpack.js.org/)
