---
kind: gitconfig
title: Conditional Configuration
description: Use conditional configurations inside .gitconfig to apply settings based on git directory or branch.
contributor: https://github.com/rsylvian
snippet: |
  [user]
    email = john@personal.com

  [includeIf "gitdir:~/work/"]
    path = .gitconfig.work
---

You can conditionally include another Git config file based on your Git directory or branch in Git 2.13 and later.

For example in the `.gitconfig.work` file, you can add or override configuration values you want when using a repository located in `~/work` and its subdirectories:

```
[user]
    email = john@work.com
```
