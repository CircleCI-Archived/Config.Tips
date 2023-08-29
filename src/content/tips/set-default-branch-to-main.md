---
kind: gitconfig
title: Set Default Branch To Main
description: Use your global `~/.gitconfig` to set the default branch of any new repository to 'main' or anything else you prefer.
contributor: https://github.com/KyleTryon
snippet: |
  [init]
    defaultBranch = main
---

By default, after installing git with no further customization, when you initialize a new repository, it will look like this:

```bash
$ git init
  hint: Using 'master' as the name for the initial branch. This default branch name
  hint: is subject to change. To configure the initial branch name to use in all
  hint: of your new repositories, which will suppress this warning, call:
  hint:
  hint:   git config --global init.defaultBranch <name>
  hint:
  hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
  hint: 'development'. The just-created branch can be renamed via this command:
  hint:
  hint:   git branch -m <name>
```

The default name used for the initial branch is `master` for legacy reasons, but several methods exist to change this behavior. First, if you want to leave the default behavior but rename the branch after initialization, you can use the `git branch -m <name>` command.

If you want to change the default branch name for all new repositories, you can use the `git config --global init.defaultBranch <name>` command. Running this command will update your global `~/.gitconfig` file with the same content as the sample `~/.gitconfig` file.
