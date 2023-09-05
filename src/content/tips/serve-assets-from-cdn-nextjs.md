---
kind: nextjs
title: Serve assets from CDN
description: Use the assetPrefix attribute to customize the location where Next.js should serve assets in your CDN.
contributor: https://github.com/rsylvian
snippet: |
  const isProd = process.env.NODE_ENV === 'production'

  module.exports = {
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
  }
---

Next.js will automatically use your asset prefix for the JavaScript and CSS files it loads from the `/_next/` path (`.next/static/` folder). For example, with the above configuration, the following request for a JS chunk:

```
/_next/static/chunks/4b9b41aaa062cbbfeff4add70f256968c51ece5d.4d708494b3aed70c04f0.js
```

Would instead become:

```
https://cdn.mydomain.com/_next/static/chunks/4b9b41aaa062cbbfeff4add70f256968c51ece5d.4d708494b3aed70c04f0.js
```

The exact configuration for uploading your files to a given CDN will depend on your CDN of choice. The only folder you need to host on your CDN is the contents of `.next/static/`, which should be uploaded as `_next/static/` as the above URL request indicates. Do not upload the rest of your `.next/` folder, as you should not expose your server code and other configuration to the public.
