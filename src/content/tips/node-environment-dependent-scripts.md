---
kind: package-json
title: Conditional NPM scripts based on environment
description: Run the same command (ex. `npm run start`) and automatically determine which script to run based on the environment variable `NODE_ENV`.
contributor: https://github.com/KyleTryon
snippet: |
  {
    "scripts": {
      "start": "npm run start:${NODE_ENV:-development}",
      "start:development": "nodemon app.js",
      "start:production": "node app.js",
      "start:staging": "node app_staging.js"
    }
  }
---

Using this method, we can run a different set of commands for the same script based on the environment variable `NODE_ENV`. `NODE_ENV` is often set automatically by the hosting environment, such as Vercel, Netlify, or AWS. If you are running locally, you can set the environment variable manually in your terminal.

```bash
NODE_ENV=development npm run start
```
