---
kind: cargo-config-toml
title: Add sccache to speed up your Rust build times
description: |
  Use the `sccache` utility to cache compiled artifacts to speed up
  successive Rust compile-times in addition to the speed of debug/incremental
  builds.
contributor: https://github.com/ELD
snippet: |
  [build]
  rustc-wrapper = "/path/to/sccache"
---

Using the `sscache` compiler caching utility, you can speed up your successive
compilations by adding the following snippet to your Cargo configuration. This
wraps the `rustc` binary and allows it to search for precompiled artifacts
before resorting to compiling again.
