# 🌩️ Serverless example: Node.js app with Express

This repo contains a very basic Express app to be deployed on AWS Lambda automatically by Serverless Framework.

It only exposes two endpoints that respond "Hello World!". 

It also has "serverless-offline" plugin for offline local development:

```bash
$ npm start

> serverless-example-node-express-app@1.0.0 start
> sls offline start

Starting Offline at stage production (eu-central-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * app: serverless-example-production-app

   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   ANY | http://localhost:3000/production                              │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations   │
   │   ANY | http://localhost:3000/production/{proxy*}                     │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

## ⏬ Steps to install

### Install Serverless Framework

```bash
npm install -g serverless
```

### Configure the framework

Prefix the command with `sudo` if you’re running this command on Linux:

```bash
sls config credentials \
--provider aws \
--key PUBLIC_KEY \
--secret SECRET_KEY
```

Make sure to add your IAM User's public and secret key instead of the placeholders I specified above. The user needs programmatic access and admin permissions. Here’s the official guide in the AWS docs.

You'll see this message after executing:

```bash
✔ Profile "default" has been configured
```

### Install this example app

Clone this Git repo and inside its folder, run:

```bash
npm install
```

You are ready to start development 🎉.

## 🧑‍💻 Local development

```bash
npm start
```

Local app will be served on: http://localhost:3000/production/emre

## 📦 Deployment

For deployment to production, run:

```bash
npm run deploy
```

🤖 Serverless Framework will handle everything for you.
