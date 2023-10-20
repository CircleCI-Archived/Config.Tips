---
kind: cargo-toml
title: Patching a dependency in your project
description: |
  Sometimes you want to patch a dependency in your project to incorporate a
  patch or feature preview. This tip will show you how!
contributor: https://github.com/ELD
snippet: |
  [dependencies]
  cool_webframework = "0.1"

  [patch.crates-io]
  cool_webframework = { git = "https://github.com/foo/cool_webframework.git", branch = "preview_release" }
---

Sometimes, a crate you're using requires a fix or the feature or change you're
waiting for is in a pull request (and subsequently someone's fork of the repo).
To use that change, use the `[patch]` section of your `Cargo.toml`!
