---
kind: package-json
title: Set package-level Prettier configuration
description: Keep the project's root folder clean while enforcing organization-wide codestyle.
contributor: https://github.com/filiphsps
snippet: |
  {
    "prettier": "@nordcom/prettier",
    "scripts": {
      "@nordcom/prettier": "0.1.1"
    }
  }
---

By setting the Prettier configuration directly in `package.json`, you avoid both the issue of saturating your workspace's root folder with another config file as well as arguably more importantly also completely eliminating inconsistencies in Prettier rules between projects.
