---
kind: circleci
title: Rerun only the failed tests when you hit flaky test failures
description: Save time and money by avoiding rerunning tests that already passed when you hit flaky test failures
contributor: https://github.com/sebastian-lerner
snippet: |
  version: 2.1
  jobs:
    test:
      docker:
        - image: cimg/python:3.11.0
      parallelism: 4
      steps:
        - checkout
        - python/install-packages:
            pkg-manager: pip
        - run:
          command: |
            mkdir test-results
            TEST_FILES=$(circleci tests glob "**/test_*.py")
            echo "$TEST_FILES" | circleci tests run --command="xargs pytest -o junit_family=legacy --junitxml=test-results/junit.xml" --verbose --split-by=timings #--split-by=timings optional
        - store_test_results:
            path: test-results
---

If your test suite is prone to flaky test failures, you are probably wasting time and money re-running the entire test suite just to get to a passing build.  CircleCI lets you cut down on that wasted time/money by only re-running the tessts that failed when you hit flaky test failures.  No need to rerun the tests that passed.

The snippet above shows an example using Python & `pytest`, but you can use this functionality with almost any framaework/test runner.  See the [official CircleCI documentation on rerunning only the failed tests](https://circleci.com/docs/use-the-circleci-cli-to-split-tests/](https://circleci.com/docs/rerun-failed-tests/)https://circleci.com/docs/rerun-failed-tests/) for more details.
