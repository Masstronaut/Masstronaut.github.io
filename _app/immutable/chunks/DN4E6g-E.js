const e=`---
title: git-cheatsheet
description: Some common scenarios and how to resolve them using git.
slug: notes/git-cheatsheet
publish: true
lastmod: 2023-06-28
date: 2022-05-24
aliases: null
tags:
- status/seedling
---

## Create a branch with current changes

Sometimes I'm working on a problem and end up side-tracked and solve another problem, but forgot to switch branches first. Doh! This one is an easy fix:

1. Create a new branch and checkout to it (single step)
1. Stage the changes
1. Commit changes to it
1. Push the branch to the remote/tracking

\`\`\`\`bash
git checkout -b feature/my-second-feature
git add .
git commit -m "Moving these changes to their own branch"
git push -u origin feature/my-second-feature
\`\`\`\`

## Amend a previous commit

You've finished your code, submitted the PR, and the CICD server spits out an issue with a 1-line change. You fix it and commit your change, just to get the next one. Then there's another, and another, and another one. Rather than having many simple changes for 1 error at a time, you can amend your previous commit with the change so the commit history is cleaner.

\`\`\`\`bash
git commit --amend
\`\`\`\`

If you've already \`git push\`ed the original commit, *amend*ing it would change history and isn't allowed with \`git push\` by default. However, this can be overcome by forcing the push to overwrite the old commit in history with the amended commit.

\`\`\`\`bash
git push --force
\`\`\`\`

## Go back to an old commit

This command will rewind history locally to the specified git commit.

\`\`\`\`bash
git reset --hard <commit hash>
\`\`\`\`

If you want to erase the changes that followed on the remote copy, you can additionally run:

\`\`\`\`bash
git push -f
\`\`\`\`

Which will force git to push your current history and overwrite whatever currently exists on remote.

## Merge changes from branch A into branch B

This is generally not the best way to go as it replays all the changes in the git history. Instead consider a rebase.

First, make sure you have the latest remote changes locally.

\`\`\`\`bash
git fetch
git pull
\`\`\`\`

Make sure you have the branch you want to merge changes *into* checked out locally:

\`\`\`\`bash
git checkout <BranchB>
\`\`\`\`

And then merge the changes from branch A in:

\`\`\`\`bash
git merge <BranchA>
\`\`\`\`

## Rebase changes in a branch onto a newer commit from the parent branch

This creates a clean, linear history of changes and avoids the need for merge resolutions when completing a PR.

Make sure you have the latest commits from the branch you made changes to (\`delta\` in this example) and the \`main\` branch that has been updated:

\`\`\`\`bash
git checkout main
git fetch
git pull
git checkout delta
git fetch
git pull
\`\`\`\`

The rebase the changes in \`delta\` onto the latest commits from \`main\`. Note that this needs to be done while \`delta\` is checked out:

\`\`\`\`bash
git checkout delta
git rebase main
\`\`\`\`

## Move changes from a protected branch to a feature branch after accidentally committing without switching branches first

Often I will pull latest from the \`main\` branch and start making changes for the ticket I'm working on. After some progress I will then commit my changes, forgetting that I didn't make a feature branch first. Since the \`main\` branch is protected and requires a PR to push to \`origin\` (the remote copy), I can't do anything with those changes. In this scenario I need to move my changes from \`main\` to a feature branch. There are a couple ways I've found to do this.

Option 1 works conceptually by taking the following actions:

1. Undo my last commit to \`main\`
1. create & checkout a new feature branch
1. commit my changes to it

\`\`\`\`bash
git reset --soft HEAD~1
git checkout -b feature/my-new-feature
git commit
\`\`\`\`

Option 2:

1. Create a branch from my commit locally
1. Push my new branch with changes
1. Checkout my local \`main\` branch
1. Reset it to the same commit as on \`origin\`
`;export{e as default};
