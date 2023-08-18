---
kind: package.json
title: Conditional NPM scripts based on environment
description: Run the same command (ex. `npm run start`) and automatically determine which script to run based on the environment variable `NODE_ENV`.
snippet: |
  {
    "scripts": {
      "start": "npm run start:$npm_package_config_env",
      "start:development": "nodemon app.js",
      "start:production": "node app.js",
      "start:staging": "node app_staging.js"
    },
    "config": {
      "env": "development"
    }
  }
---

Let’s say you have different scripts that you want to run based on the environment (development, staging, production, etc.). You can achieve this by leveraging the NODE_ENV environment variable and the npm run command to conditionally execute different scripts. 