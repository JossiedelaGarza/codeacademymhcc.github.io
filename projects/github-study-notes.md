# GitHub Study Notes

To help us remember everything we're learning and familiarize ourselves with git & GitHub workflows, we're going to create and manage a "study notes" repository. This guide will walk-through how we can setup and manage this within a Treehouse workspace. You will need to be logged in to both Treehouse and GitHub to do this.


## Setting up our Study Notes

The following steps are required to create our study notes repository and setup a Treehouse workspace to push and pull from it. We should only have to run through these steps once.

**Please note:** Copying and pasting some of these console commands is perfectly fine and encouraged. This behavior doesn't function correctly in Treehouse workspaces with ordinary keyboard commands! You will need to use the right-click button on your mouse to copy and paste.

###  Create a new workspace in Treehouse

You can go to [Workspaces](https://teamtreehouse.com/workspaces) in Treehouse's main navigation to see all of your current workspaces. Create a new workspace and choose *Any environment* as your environment and *Blank Workspace* as your template.


### Configuring git and generating keys

When the workspace is finished loading you should see a sidebar containing all the files in your project, a file editor to the right and a console towards the bottom. In the console we're going to run some initial configuration commands in preparation for git to talk to GitHub.

First we need to configure our git identity in this workspace so it knows who we are. Type the following into the console:

    git config --global user.name "Your name"  
    git config --global user.email "you@youremail.com"


Next we'll want to create a new key so that we'll be able to push our git commits to GitHub without requiring our username and password every single time. You can find more information about [key-based authentication here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/), but for our purposes you'll need to type the following commands into your workspace console:

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

It will prompt you three times asking where you'd like to save it and what you'd like your password to be. **For all three prompts simply press enter!** The default location is fine and we *don't* want a password for our key.

With our key created we need to view and copy its contents. To view the contents of our key run the following in the console:

    cat ~/.ssh/id_rsa.pub

Select all of the text you see in the console after running this command, right-click the selection and copy it. Our key should begin with `ssh-rsa` and end with your email address.

We will use this copied text in the upcoming steps. 


## Creating our GitHub repository

Go to [GitHub](https://github.com) and create a [new repository](https://github.com/new) for our study notes. You should be able to find this option in a submenu in the the upper-right-hand corner of the main navigation. On the new repositroy screen do the following:

- Name your repositroy `study-notes` (or something else if you'd prefer)
- Check the box next to where it says *Initialize this repository with a README*
- Click the button that says *Create repository*

When your repository is created you'll want to go to go to **Settings** in the sub-navigation and then to **Deploy keys** from the left-hand sidebar. From the **Deploy keys** screen do the following:

- Click the *Add deploy key* button
- Provide a title of `Treehouse Workspace` (or something else if you'd prefer)
- Paste the key we copied at the end of our previous step into the key field
- Check the box next to where it says *Allow write access*
- Click the *Add key* button at the bottom

What we've now done is created a unique identifier (our key) in our Treehouse workspace and told GitHub that, for this particular repository, anyone with that key can push and pull commits to the repository.



## Cloning our GitHub repository into our Treehouse workspace

Now we can clone our new GitHub project into our Treehouse workspace. From the primary **Code** tab for our GitHub project, click the *Clone or download* button to reveal a URL and copy it. It should look something like `git@github.com:<yourusername>/study-notes.git`

Open our Treehouse workspace window and type the following into the console:

    git clone <copied-url> .

This will copy the repository we created on GitHub into your workspace. If you right-click on the left-hand sidebar and "Refresh" the view you should see the README.md file that the repository was initialized with.

## Making changes and pushing from Treehouse to GitHub

To test, try changing the title in README.md from `study-notes` to `Study Notes` using the workspace editor and save your changes. Back in the console stage and commit your changes in one line like this:

    git commit -am "Updating title"

With our first commit made we should be able to push it back to GitHub:

    git push

If git tells you that objects are being written and the final output ends with `master -> master` everything should be working!


## Using our study notes

As we continue through various Treehouse tracks and discuss things in class we can use this repository to keep, organize and share notes. There are no requirements regarding how or what your notes should consist of, but there should be at least one commit to your study notes every day we have class together.

Here are some ideas for how you could use these notes:

- Write down defintions of terms you want to remember or found useful
- Keep a list of common console commands, HTML tags or CSS snippets to copy-and-paste
- List links to specific Treehouse lessons or outside resources you find yourself referencing
- Embed videos from other sources you may have found while trying to explore a concept further on your own
- Provide specific examples or certain concepts to refer to or "play around" with later
- You can setup a individual files for different languages/areas of focus: HTML, CSS, JavaScript, etc.
- You could keep your notes in [Markdown](https://teamtreehouse.com/library/code), or create HTML pages that link to one another and turn your notes into a fully functional webpage via [GitHub Pages](https://teamtreehouse.com/library/hosting-a-website-with-github-pages)
- Keep a tally of cursewords & grievances as you pull your hair out trying to get through a particularly difficult segment
- Embed a picture of a trophy or [LOLCat](http://www.lolcats.com/) on a webpage as reward to yourself every time you finish a task







