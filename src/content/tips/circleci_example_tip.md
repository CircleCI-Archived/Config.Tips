---
kind: circleci
title: CircleCI Example Tip
description: Example of a tip for CircleCI. This description needs to be at least 100 characters to appease the SEO gods.
snippet: |
    version: 2.1
    # Define the jobs we want to run for this project
    jobs:
      build:
        docker:
          # Ensure to update the images to a current tag
          - image: cimg/base:2023.03
        steps:
          - checkout
          - run: echo "this is the build job"
      test:
        docker:
          - image: cimg/base:2023.03
        steps:
          - checkout
          - run: echo "this is the test job"

    # Orchestrate our job run sequence
    workflows:
      build_and_test:
        jobs:
          - build
          - test
---