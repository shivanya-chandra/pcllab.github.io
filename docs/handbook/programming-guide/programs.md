# Essential Programs for Web Programming

This page describes the programs you will need to get started with web programming.

**If you just want to run programs locally on your computer**, you need to:

- [Get a GitHub Account](#get-a-github-account)
- [Clone a GitHub Repository](#clone-a-github-repository)
- [Get MAMP](#get-mamp)

  - If you're comfortable with the command line, [Use MAMP Alternative](#mamp-alternative)

- [Run a Program Locally on Your Computer](#run-a-program-locally-on-your-computer)

**If you also want to edit and host programs**, you also need to:

- [Get a Text Editor](#get-a-text-editor)
- [Set Up a VPN](../connections-servers/VPN.md){target="\_blank" rel="noreferrer"}
- [Connect to Jarvis](../connections-servers/jarvis.md){target="\_blank" rel="noreferrer"}

Note: You will likely want to both run programs locally and host programs. Running locally is nice for testing/editing an in-progress programs before hosting them for piloting and data collection.

## Get a GitHub Account

GitHub is a repository hosting service. It allows you to create repositories, where code is stored, and share code with multiple users. Think of it as Dropbox for code.

- Go to <http://github.com>{target="\_blank" rel="noreferrer"} and create an account
- Have someone in the lab add you to the lab's account (<http://github.com/PCLLAB>{target="\_blank" rel="noreferrer"}) or to a particular repository (which will be something like http://github.com/PCLLAB/RepositoryName)
- Download the GitHub app from <https://desktop.github.com>{target="\_blank" rel="noreferrer"}
- During installation, you will be asked to set a default folder
  - On a Mac, set the default folder to Applications/MAMP/htdocs
  - On a Windows PC, set the default folder to C:\MAMP\htdocs
- Setting the default folder to "htdocs" will ensure that your GitHub repositories are cloned in the default folder in MAMP

## Clone a GitHub Repository

Cloning makes a copy of a GitHub repository locally on your computer. These instructions are for cloning an existing repository. If you are starting a new project, you will need to Create a New Repository.

### Via Github Desktop

- On GitHub, go to the repository you want to clone (e.g., github.com/PCLLAB/RepositoryName).
- Click the "Clone or download" button on the right side of the screen. Then click "Open in Desktop". This will launch the GitHub app.
- Click "Clone" to save the repository in your "htdocs" folder.
- In the GitHub app, there is a "Sync" button in the top right. Clicking Sync pulls the most recent code from GitHub and pushes any changes you have made locally.

### Via Command Line

- First you need to have `git` set up.
  https://docs.github.com/en/get-started/quickstart/set-up-git

- Then you can use `git clone`.
  ```bash
  git clone <whatever link from github>
  ```
- For more detailed information, check the Github documentation or your search engine of choice.
  https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Get a Text Editor

You will need a text editor to write and edit code. Popular ones are:

- Visual Studio Code: <https://code.visualstudio.com>{target="\_blank" rel="noreferrer"}
- Sublime Text: <http://www.sublimetext.com/>{target="\_blank" rel="noreferrer"}

## Get MAMP

MAMP is a tool that lets you run a local server on your computer. You will need to use MAMP to run programs locally on a computer.

If you are confortable using the command line or would like to learn, take a look at [MAMP alternative](#mamp-alternative).

- Download and install MAMP: <https://www.mamp.info>{target="\_blank" rel="noreferrer"}
- After installing, open MAMP and click Preferences. Select the Ports tab and put "8888" in the box next to Apache and "3306" in the port next to MySQL.
- To run the local server, simply click Start Servers.

## Run a Program Locally on Your Computer

To run a program locally:

- Open MAMP and click Start Servers
- Make sure you have the most recent version of your program by syncing with GitHub
- Go to the local URL to run the program
- The URL for a given repository will be http://localhost:8888/RepositoryName/
- The URL for your particular experiment may be something like the following: http://localhost:8888/RepositoryName/experiment.html
- If you have multiple experiment folders within a repository, your URL may be something like: http://localhost:8888/RepositoryName/E1/experiment.html

## MAMP Alternative

If you have `node` and `npm` set up already, you may find it easier to use an package like [`http-server`](https://www.npmjs.com/package/http-server) to quickly get an experiment running locally.

If not installed already, [download Node.js](https://nodejs.org/en/download/).

Once it finishes installing make sure it works by running `node -v`.

```bash
node -v

v16.14.0 # your version will vary
```

This also gives us the `npm` and `npx` programs as well, which we will use to download and run javascript libraries published on [npm](https://npmjs.com).

### Run an experiment locally

```bash
# run in the same directory where experiment.html is located
npx http-server

# if changes aren't updating on refresh, use -c-1 to disable caching
npx http-server -c-1
```
