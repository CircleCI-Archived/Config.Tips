---
kind: cargo-config-toml
title: Changing Rust linker for faster compile times
description: |
  Changing the linker for your Rust project can significantly speed up
  compile times. Here's how to do it!
contributor: https://github.com/ELD
snippet: |
  [target.aarch64-apple-darwin]
  rustflags = ["-C", "link-arg=-fuse-ld=/Applications/Xcode-beta.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/ld"]

  [target.target.x86_64-unknown-linux-gnu]
  rustflags = ["-C", "link-arg=-fuse-ld=/usr/bin/mold"]
---

In the example snippet, we're setting the linker to use
[`mold`](https://github.com/rui314/mold) for Linux
targets and the new `ld-prime` linker on macOS (leveraging the Xcode 15 beta
command line tools).

Both linkers take advantage of multiple cores on your machine and significantly
speed up compile times.
