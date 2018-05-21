# GitHub Study Notes

To help us remember everything we're learning and familiarize ourselves with git & GitHub workflows, we're going to create and manage a repository for study notes. This guide will walk-through how we can setup and manage this within a [Codeanywhere](https://codeanywhere.com/) — a cloud-based integrated development environment. You will need to be logged in to both  GitHub  and Codeanywhere to do this.

## Creating our GitHub repository

Go to [GitHub](https://github.com) and create a [new repository](https://github.com/new) for our study notes. You should be able to find this option in a submenu in the the upper-right-hand corner of the main navigation. On the new repository screen do the following:

- Name your repository `study-notes` (or something else if you'd prefer)
- Check the box next to where it says *Initialize this repository with a README*
- Click the button that says *Create repository*

## Cloning our GitHub repository into Codeanywhere 

Now we can clone our new GitHub project into our Codeanywhere editor. To do this, login to Codeanywhere with your GitHub identity by clicking on the GitHub logo. Once you are logged into the editor you should see the *Connection Wizard*. If you do not, go to *File > New Connection > GitHub* to open it. Once it is open:

- You should see a list of your GitHub repositories. From the list select our `study-notes` repository
- Beneath the list of repositories check the box that says *Autodetect stack*
- Once these two things are done, click *Next*

You should see the files (a sine README.md file if you just created the repository) on the lefthand side of the editor. 


## Making changes and pushing from Codeanywhere to GitHub

To test, try changing the title in README.md from `study-notes` to `Study Notes` using the  editor and save your changes. Next we will open the console to stage and commit your changes. Right-click on the name of your connection in the righthand side of the screen (i.e. `study-notes`) and choose the option that says *SSH Terminal* from the contextual menu.

You should see a new tab open up in the editor with a console interface. We can stage and commit our changes in several lines like this:

    git add .
    git commit -m "Updating title"

Or, in this case, we can do it all in one line like so:

    git commit -am "Updating title"

With our first commit made we should be able to push it back to GitHub:

    git push

If git tells you that objects are being written and the final output ends with `master -> master` then everything should be working!


## Using our study notes

As we continue through various Treehouse tracks and discuss things in class we can use this repository to keep, organize and share notes. There are no requirements regarding how or what your notes should consist of, but there should be at least one commit to your study notes every day we have class together.

Here are some ideas for how you could use these notes:

- Write down definitions of terms you want to remember or found useful
- Keep a list of common console commands, HTML tags or CSS snippets to copy-and-paste
- List links to specific Treehouse lessons or outside resources you find yourself referencing
- Embed videos from other sources you may have found while trying to explore a concept further on your own
- Provide specific examples or certain concepts to refer to or "play around" with later
- You can setup a individual files for different languages/areas of focus: HTML, CSS, JavaScript, etc.
- You could keep your notes in [Markdown](https://teamtreehouse.com/library/code), or create HTML pages that link to one another and turn your notes into a fully functional webpage via [GitHub Pages](https://teamtreehouse.com/library/hosting-a-website-with-github-pages)
- Keep a tally of curse words & grievances as you pull your hair out trying to get through a particularly difficult segment
- Embed a picture of a trophy or [LOLCat](http://www.lolcats.com/) on a webpage as reward to yourself every time you finish a task



# Troubleshooting

Codeanywhere is a nice tool, but can be occasionally buggy. Here are some things to try if you're experiencing problems:

- If Codeanywhere can't connect to your GitHub account you can try disconnecting and reconnecting it. To do this go to [your account dashboard](https://codeanywhere.com/dashboard) and navigate to the [account section](https://codeanywhere.com/dashboard#account). On the righthand side you should see a GitHub icon and a button that says **Disconnect**. Click to disconnect your account and then click **Connect** to reconnect again.
- If you're able to connect to your GitHub account and clone the repository  but don't see any file in the lefthand side of the editor, right-click and choose *Refresh* from the contextual menu. If that still doesn't work, right-click on the name of the connect (i.e. `study-notes`), choose *Destroy* from the contextual menu and start the whole process over.
- If you're not finding success when you run `git push` you might want to try `git push origin master -u` the first time you try it. Subsequent pushes should only require `git push` from that point forward. This more verbose version of the command specifies the repository (`origin`) and branch (`master`) and the option (`-u`) lets git know that these should be the defaults anytime we run a `git push` without additional arguments.