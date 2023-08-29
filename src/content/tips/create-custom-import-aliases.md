---
kind: vite
title: Create Custom Import Aliases
description: Use aliases such as `@` to refer to the `src` directory in your Vite project and remove complicated relative paths from your imports.
contributor: https://github.com/KyleTryon
snippet: |
  export default defineConfig({
    // other config
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  });
---

Vite allows you to specify custom import aliases which allow you to refer to a directory in your project by a custom name. For example, you can create an alias called `@` that refers to the `src` directory in your project. This allows you to import files from the `src` directory without using relative paths.

```ts
import { Button } from "@/components/Button";
// or
import { Button } from "@components/Button";
```

You can read about the [resolve.alias](https://vitejs.dev/config/#resolve-alias) and other config options in the Vite documentation.
