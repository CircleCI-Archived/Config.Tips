---
kind: gitconfig
title: Using External Diff and Merge Tools
description: Integrate external diff and merge tools like Beyond Compare or KDiff3 by configuring them in your .gitconfig.
contributor: https://github.com/rsylvian
snippet: |
  [diff]
    tool = bc3
  [difftool "bc3"]
      cmd = "bcomp \"$LOCAL\" \"$REMOTE\""
---

Integrate external diff and merge tools like `Beyond Compare` or `KDiff3` by configuring them in your gitconfig.
