---
kind: circleci
title: Persisting Data Between Jobs in CircleCI Workflows
description: Learn how to persist data across jobs in a CircleCI workflow using workspace and caching techniques, enhancing the efficiency of your CI/CD pipelines.
contributor: https://github.com/YourUsername
snippet: |
  version: 2.1
  jobs:
    build:
      docker:
        - image: cimg/node:20.5.1
      steps:
        - checkout
        - run: npm install
        - persist_to_workspace:
            root: .
            paths:
              - node_modules

    test:
      docker:
        - image: cimg/node:20.5.1
      steps:
        - attach_workspace:
            at: /workspace
        - run:
            command: npm test
            working_directory: /workspace

  workflows:
    build_and_test:
      jobs:
        - build
        - test:
            requires:
              - build
---

In CircleCI, jobs in a workflow are independent of each other and run in separate environments. This means that if you've done some work in one job—like installing dependencies—you'll lose that work when moving to the next job. To make your pipelines more efficient, you can persist data across jobs using the `persist_to_workspace` and `attach_workspace` steps.

In the example configuration, we have a `build` job where dependencies are installed, and we want to use those installed dependencies in a subsequent `test` job. Here's how it works:

1. **Persisting Data**: In the `build` job, we use `persist_to_workspace` to persist the `node_modules` directory. This will make `node_modules` available to subsequent jobs.

   ```yaml
   - persist_to_workspace:
       root: .
       paths:
         - node_modules
   ```

2. **Attaching Workspace**: In the `test` job, we use `attach_workspace` to retrieve the data persisted from the `build` job. We specify `/workspace` as the directory where the persisted data should be attached.

   ```yaml
   - attach_workspace:
       at: /workspace
   ```

3. **Using Persisted Data**: Finally, we run `npm test` in the `test` job using the previously installed `node_modules` by setting the `working_directory` to `/workspace`.

This approach is particularly useful for cutting down redundant steps in your workflow, making your CI/CD process more efficient.

For more details, you can refer to the [official CircleCI documentation on Workspaces](https://circleci.com/docs/workspaces/).
