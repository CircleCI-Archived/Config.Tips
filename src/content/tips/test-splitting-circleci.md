---
kind: circleci
title: Test Splitting in CircleCI
description: Learn how to split a test suite across multiple parallel jobs, speeding up the execution of your test suite.
contributor: https://github.com/zmarkan
snippet: |
  version: 2.1
  jobs:
    test:
      docker:
        - image: cimg/node:20.3.0
      parallelism: 4
      steps:
        - checkout
        - run:
            command: npm install
        - run:
            command: |
              circleci tests glob "test/**/*.test.js" | 
              circleci tests split |
              xargs npm run test
---

CircleCI supports automatic test allocation across parallel compute environments. When the parallelism key in your CircleCI configuration is set to a value greater than 1, CircleCI spins up identical execution environments in which your job is run.

Test splitting requires the CircleCI CLI together with parallelism. The CLI commands circleci tests glob and circleci tests split are used to define your test suite and allocate tests across multiple environments. The CLI is automatically injected into your job at run-time, so there is no further setup required to use the circleci tests commands.

In the example configuration, we have a `test` job the tests are run, and the job is split across 4 parallel jobs, running a subset of all tests. Here's how it works:

1. **Setting parallelism**: In the `test` job, use `parallelism` key spin up multiple jobs at the same time. This will allow you to run a subset of tests in each. In our case, we are setting `parallelism` to 4, to start 4 jobs simultaneously.

   ```yaml
   parallelism: 4
   ```

2. **Modifying the run command to use circleci test split**: In the `test` job's step that run tests, use `circleci tests glob` to select all test files, and pass that to `circleci tests split` to grab a subset of tests for that specific job node. Finally, pass these to the test runner command, in our case that is `npm run test` but this will depend on the test runner and programming language you use.

   ```yaml
   - run:
       command: |
         circleci tests glob "test/**/*.test.js" | 
         circleci tests split |
         xargs npm run test
   ```

This approach is great at speeding long running test suites by running them in several smaller sub-suites at the same time.

For more details, you can refer to the [official CircleCI documentation on Test Splitting](https://circleci.com/docs/use-the-circleci-cli-to-split-tests/).
