---
kind: circleci
title: Use CircleCI's Matrix Parameter to Reduce Duplication
description: Learn how to use the matrix parameter to reduce code duplication
  in your CircleCI config when running similar jobs with different inputs.
contributor: https://github.com/brivu
snippet: |
    version: 2.1

    executors:
    alpine:
        docker:
        - image: alpine:latest
    macos:
        macos:
        xcode: 14.2.0
    windows:
        machine:
        image: windows-server-2019-vs2019:stable

    jobs:
    build:
        parameters:
        executor:
            type: executor
        executor: <<parameters.executor>>
        steps:
        - run: uname -a

    workflows:
    test-deploy:
        jobs: 
        - build:
            name: test-build-on-<<matrix.executor>>
            matrix:
                parameters:
                executor: ["macos", "alpine", "windows" ]
---

In `CircleCI`, the `matrix` parameter enables you to run the same jobs with different combinations of inputs. This helps reduce redundancy in your `config.yml`. 

For example, lets say you want to run a `build` job on three different `executors`: Windows, MacOS and Alpine Linux.
Your `config.yml` can look like the following:

```yaml
version: 2.1

executors:
  alpine:
    docker:
      - image: alpine:latest
  macos:
    macos:
      xcode: 14.2.0
  windows:
    machine:
      image: windows-server-2019-vs2019:stable

jobs:
  build:
    parameters:
      executor:
        type: executor
    executor: <<parameters.executor>>
    steps:
      - run: uname -a

workflows:
  test-deploy:
    jobs: 
      - build:
          name: test-build-on-alpine
          executor: "alpine"
      - build:
          name: test-build-on-macos
          executor: "macos"
      - build:
          name: test-build-on-windows
          executor: "windows"
```

Notice how the `build` job is repeated three times in our `config` (once per executor).  The `matrix` parameter enables you to reference the `build` command once in your `config.yml`.

```yaml
    - build:
        name: test-build-on-<<matrix.executor>>
        matrix:
            parameters:
            executor: ["macos", "alpine", "windows" ]
```

For more details, you can refer to the [official CircleCI documentation on using matrix jobs](https://circleci.com/docs/using-matrix-jobs/).
