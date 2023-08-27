---
kind: package-json
title: Overriding Dependencies with PNPM Overrides
description: Learn how to manage dependencies, standardize versions, integrate fixes, and swap stock dependencies with forks using PNPM Overrides.
contributor: https://github.com/EricRibeiro
snippet: |
  {
    "pnpm": {
        "overrides": {
          "@mui/material": "^5.13.7",
          "@tanstack/react-query": "^4.29.19",
          "@forge/bridge": "^2.6.0",
          "nth-check": "^2.1.1"
        }
    }
  }
---

Using PNPM's `overrides` field allows you to modify any dependency within your project's dependency graph. This is particularly helpful for integrating fixes for peer dependencies.

For instance, let's say your project relies on a third-party package called `potato`, which in turn depends on `nth-check` version `2.0.0`—a version known to have a high-severity vulnerability. If you don't have control over the `potato` package, updating `nth-check` to a secure version becomes challenging. In cases like this, you can employ PNPM's `overrides` to specify an updated version for `nth-check`.

```json
{
  "dependencies": {
    "potato": "^1.0.0"
  },
  "pnpm": {
    "overrides": {
      "nth-check": "^2.0.1"
    }
  }
}
```

With this configuration, `potato` will use `nth-check` version `2.0.1` instead of the vulnerable `2.0.0`. While this method is effective for addressing security issues, be cautious: altering dependencies without thorough testing in their original packages may introduce unintended behavior. For example, `potato` might not function as expected if it relies on specific features of its original `nth-check` version.

For more details on the `overrides` field, you can refer to the [official PNPM documentation](https://pnpm.io/package_json#pnpmoverrides).
