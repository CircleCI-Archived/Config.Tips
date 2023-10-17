---
kind: astro
title: Dynamic Astro.Site Value For Local And Production Environments
description: Dynamically set the value of 'Astro.Site' for local and production environments. No more broken links!
contributor: https://github.com/KyleTryon
snippet: |
  import { defineConfig } from "astro/config";

  export default defineConfig({
    site:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4321"
        : "https://config.tips",
  });
---

In many build systems, including [Vite](https://vitejs.dev/), the value of `NODE_ENV` is automatically set to `development` when running in development mode and `production` when building. Some deployment platforms like [Netlify](https://www.netlify.com/) may also set the `production` value automatically.

Because the Astro config file uses JavaScript rather than JSON or another static format, it is possible to set the values of our keys to functions which return a dynamic value. In this case, the value of `Astro.Site` will be set to `http://localhost:4321` when running in development mode and `https://config.tips` when building, depending on the value of the `NODE_ENV` environment variable.

Use this trick to prevent broken links when developing locally if you had previously statically set the value of `Astro.Site` to a production URL.
