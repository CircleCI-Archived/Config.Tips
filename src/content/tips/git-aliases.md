---
kind: gitconfig
title: Use Git Aliases
description: Use Git aliases to create shortcuts for your most frequently used Git commands. Try this custom 'git hist' command for a graphical log.
contributor: https://github.com/KyleTryon
snippet: |
  [alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    hist = log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
---

Git aliases allow you to create shortcuts for your most frequently used Git commands. Git aliases work similarly to aliases in Bash, but instead of replacing a command, they replace one or more Git commands. For example, you can create an alias called `co` that executes `git checkout` when you run `git co`.

Aliases become especially useful when running with many arguments or multiple commands in a row. In this example, the `hist` alias uses the `log` command with several arguments to create a custom graphical log output.

```bash
$ git hist

*   f790b78 2023-08-27 | feat: add footer #13 [KyleTryon]
|\
| * 11d2d75 2023-08-27 | feat: implement new footer (origin/add-footer, add-footer) [KyleTryon]
| * 091d895 2023-08-27 | feat: add footer component [KyleTryon]
|/
*   e45725d 2023-08-27 | fix: minor style fixes #12 [KyleTryon]
```
