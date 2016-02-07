---
layout: post
selected: journal
title:  "Getting Started with Git"
date:   2015-06-16 22:01:00
preview-image: "/img/blog-previews/start-git.jpg"

---

Last year I gave a talk at local developer meetup [Belfast Ruby](http://belfastruby.com/2014/01/30/intro-to-ruby.html) on how get started with Git and GitHub. These are the notes that accompany the practical demo I gave, you can also check out my short Keynote on [Speakerdeck](https://speakerdeck.com/melissakeizer/gitn-started-with-version-control). Hopefully this guide will still be useful to version control newbies now.


## 1. Creating Remote Repo

- Create account/Sign in to Github.com
- Create New Repo
- Give the project a name and description

Now you have an online space for your project to live.


## 2. Setting Up Git

Now we're going to open Terminal/iTerm and type some commands.

First, check is Installed

    git --version

You should get a response that looks like this:

    git version 1.8.3.1

If you don't already have Git installed or need to update (use version 1.7.11 or higher) then follow these links to install Git in your machine.

Install [Git for Mac] (https://code.google.com/p/git-osx-installer/) or [Git for Windows] (http://msysgit.github.io/)


Next give Git your credentials

    git config --global user.name "Melissa Keizer"
    git config --global user.email "mkeizer@rumblelabs.com"


## 3. Create Your Local Repo

Now you need to make the repository for your project that will live on your computer.

In terminal navigate to the folder where you keep your projects and make a new directory for your new app/site/project. Then navigate to your new project folder.

    cd sites
    mkdir nice-project
    cd nice-project

Now to start using Git commands (They always begin with the word Git)
First you need to tell your computer to recognise this directory as a local Git Repository

    git init

**Now you have both a remote and local git repo for your project.**

## 4. Make Some Files

Add a ReadMe.md file (Use this markdown file to add notes about your project and instructions about how others can get it running locally)

    touch ReadMe.md

Now I'll edit this ReadMe file by opening it in my text editor of choice, Sublime Text 2. I've installed the Sublime Command Line tool which allows me to open my project from the command line - [Here's how to set it up](http://www.sublimetext.com/docs/2/osx_command_line.html)

    subl .

In the ReadMe.md I added some markdown using Sublime.

    #Nice Project
    This is my new nice project, holla.

Check that Git can see your changes

    git status

The response tells me that Git notices the edit but the file is currently untracked. Next you need to tell Git to add in these changes so you can commit them.

Following this, commit the change. By commiting you are taking a snapshot of your project repo at this point in time. Remember to give your commits a meaningful description about what you just did

    git add .
    git commit -m "Added a readme.md file and wrote some words in it"

**Next it's time to push your changes to your remote repo on Github.**


## 5. Connect local and remote repos

In order to push these changes, I need to tell Git that a remote repo exists somewhere on the web.

Go to Github and grab the link your project's quick set up page. Remember to take the **SSH link** if you have SSH keys set up (You can also use the HTTP link but this causes you to give your username and password everytime you push)

Go back to terminal and type the following:

    git remote add origin git@github.com:melissakeizer/nice-project.git

The word "origin" indicates that this is a new place where files originate and "remote" simply tells git that the origin is with an online host  .

To check that it was set up correctly type the command below

    git remote -v

You should see a list of all remote origins. I see it listed twice since Git will both push changes there and fetch changes from there. **Now Git knows where you want your local changes to your repository to go!**

To push your changes use the command below

    git push -u origin master

Look at your changes by visiting the project page on Github. There I'll see the updated ReadMe.md and I can click on the "Commits" link to view exactly what changes were made with each commit.


## 6. Make a new branch

As mentioned in my talk, branches are useful when working in teams or for simply separating development of different features on your app or project.

To make a new branch type:

    git checkout -b branch-name

The "-b" indicates that this is a new branch. Give your branch a relevant name, for example "contact-form" or "new-design"
You can start making changes to your project without affecting your master branch, the main line of development. I made some edits to my ReadMe.md file in Sublime, then added and committed this change.

    git add .
    git commit -m "updated readme"

Next I'll push this change.

    git push

You'll see a message in Terminal telling you that the branch has no upstream branch, to push the branch simply use the command listed.

    git push --set-upstream origin branch-name

When you want to merge in the changes you made on your branch later you must move to your master branch and give the merge command.

    git checkout master
    git merge branch-name


So, there's a few Git fundamentals nailed down. Hopefully this will help you get started with Git on your own projects, but if you have any questions or run into issues feel free to tweet me [@KeizGoesBoom](http://twitter.com/keizgoesboom).




