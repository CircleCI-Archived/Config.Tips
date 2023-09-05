---
kind: nextjs
title: Enabling Serverless Functions
description: Use serverless functions to handle API requests, server-side logic, and other various backend tasks.
contributor: https://github.com/rsylvian
snippet: |
  module.exports = {
    target: "serverless",
  };
---

Enabling serverless functions allows you to create API routes in your Next.js project by creating files in the `pages/api` directory. These files automatically become serverless functions that can be deployed to serverless platforms like `Vercel` or `AWS Lambda`.

For example, you can create an API route in pages/api/hello.js:

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from the serverless function!" });
}
```

With this setup, you can make requests to `/api/hello` on your website, and it will execute the serverless function and return the JSON response. Serverless functions are auto-deployed and can scale automatically, making them a great choice for building APIs and dynamic features.
