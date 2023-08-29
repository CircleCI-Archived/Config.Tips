---
kind: yaml
title: Simplify YAML Files with Anchors and Aliases
description: Use anchors and aliases to create reusable configuration blocks and reduce repetition in your YAML files.
contributor: https://github.com/EricRibeiro
snippet: |
  default: &default
    image: node:20
    working_directory: ~/project

  jobs:
    build:
      <<: *default
      steps:
        - checkout
        - run: npm install
    test:
      <<: *default
      steps:
        - checkout
        - run: npm test
---

YAML files often contain repeated configurations, making them hard to manage. Anchors (`&`) and aliases (`*`) are here to help. To create an anchor, place an ampersand (`&`) followed by a label. This sets a reference point for a reusable configuration block. For example, `default: &default` creates an anchor for the subsequent settings.

To reuse these settings elsewhere, use an alias. Insert an asterisk (`*`) followed by the anchor label. The line `<<: *default` imports the settings anchored at `&default`. This technique helps you maintain cleaner, DRY ("Don't Repeat Yourself") YAML files, consolidating shared configurations for efficiency.

For deeper insights, check the [official YAML documentation](https://yaml.org/spec/1.2/spec.html#id2765878).
