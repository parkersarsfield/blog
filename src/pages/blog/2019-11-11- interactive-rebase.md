---
title: 'An Interactive Guide to Interactive Rebase'
date: '2019-11-11'
type: 'post'
---

Git is packed with features that can make our lives as engineers much easier. But often in software engineering, many people are content with just commiting their changes with meaningless commit messages and getting their code merged without regard for the commit history.

```bash
git checkout my-branch # at least they are on a feature branch!
git commit -am "stuff" # yuck!
git push
```

One feature of git that is extremely flexible while still being simple enough to understand is [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History). Here is how you can rewrite history with interactive rebase to clean up a pull request.

Let's assume the following scenario. You've just spent a few weeks cranking out a complicated feature on your favorite open source package. Now it's time to make a pull request! You're about to open up the PR, but you notice your `git log` looks a little something like this.

```
commit c59e65103a0b7091dffa252d8c579ec1f1bb82e0 (HEAD -> fix/squash-bugs)
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:15:57 2019 -0500

    now it works!

commit 2496ee8e3d069251af314de999230cd96962b8b1
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:15:36 2019 -0500

    nevermind

commit a8d41912770ae9dffe0eeb3be846f633a67630ec
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:15:13 2019 -0500

    fix dumb thing

commit 08469b0ea3ba023f7457bef49032d9c0b465736b
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:14:48 2019 -0500

    update dependencies
```

Gross. Let's squash all the meaningless commits together and rename it something meaningful so we can make a good impression on the package owner. This will leave their commit log in a much better state.

In your terminal run `git rebase -i master`. Replace `master` with the name of the branch that is the target of your pull request. That should bring you to this screen in vim.

```bash
pick 08469b0 update dependencies
pick a8d4191 fix dumb thing
pick 2496ee8 nevermind
pick c59e651 now it works!

# Rebase 9b34c8f..c59e651 onto 9b34c8f (4 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Now, change each instance of `pick` (except the first), to `squash`. You can do this in vim by typing `:%s/pick/squash/g` followed by `ggciwpick` then save your changes and write the commit with `:wq`. This tells git to squash the commits with `squash` next to them into the previous commit. Next you should see this screen, given that there are no conflicts.

```bash
# This is a combination of 3 commits.
# This is the 1st commit message:

update dependencies

# This is the commit message #2:

fix dumb thing

# This is the commit message #3:

nevermind

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# interactive rebase in progress; onto 9b34c8f
# Last commands done (3 commands done):
#    squash a8d4191 fix dumb thing
#    squash 2496ee8 nevermind
# Next command to do (1 remaining command):
#    squash c59e651 now it works!
# You are currently rebasing branch 'fix/squash-bugs' on '9b34c8f'.
#
# Changes to be committed:
#       modified:   file
#
```

The next step is to change this file to the name of the single commit that will replace the first four. Something like:

```bash
feat(package): implement a cool feature
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# interactive rebase in progress; onto 9b34c8f
# Last commands done (3 commands done):
#    squash a8d4191 fix dumb thing
#    squash 2496ee8 nevermind
# Next command to do (1 remaining command):
#    squash c59e651 now it works!
# You are currently rebasing branch 'fix/squash-bugs' on '9b34c8f'.
#
# Changes to be committed:
#       modified:   file
#
```

After committing, you should see a much nicer `git log`.

```
commit c81776ba0444931a8b6a5869ba7c294ad536e2cd (HEAD -> fix/squash-bugs)
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:27:33 2019 -0500

    feat(package): implement a cool feature

commit 9b34c8f459f635f3fc95330cb90cda2bcf5cad29 (master)
Author: Parker  <email@gmail.com>
Date:   Mon Nov 11 11:13:29 2019 -0500

    initial commit
```

This looks much better!

There's so much more that we can do with interactive rebase, including dropping commits, replaying them in real time to insert changes in between commits, and so much more. I would suggest trying it out the next time you run into a wall with git. Let me know if you discover any cool, creative uses for interactive rebase.
