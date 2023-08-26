---
kind: gitconfig
title: Setting VS Code as Your Default Git Editor
description: Learn how to make Visual Studio Code your default Git editor, either by modifying your `~/.gitconfig` file or by running a single command.
contributor: https://github.com/EricRibeiro
snippet: |
  [core]
    editor = code --wait
---

Git provides the flexibility to customize its default editor through the `editor` field in the configuration. This feature is especially valuable if you prefer the advanced functionalities offered by Visual Studio Code (VS Code). To set VS Code as your default Git editor, you can manually edit the `~/.gitconfig` file to include the snippet in this page or, run the following command in your terminal:

```bash
git config --global core.editor "code --wait"
```
