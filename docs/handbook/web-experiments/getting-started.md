# Getting Started with Web Programming

<mark>TODO: Double check MAMP settings</mark>
<mark>TODO: Double check GitHub desktop app settings. Same for Clone GitHub Repo.</mark>

This page describes the steps you need to take to get started with web programming.

**If you just want to run programs locally on your computer**, you need to:

* [Get MAMP](getting-started.md#get-mamp){target="_blank" rel="noreferrer"} <br>
* [Get a GitHub Account](getting-started.md#get-a-github-account){target="_blank" rel="noreferrer"} <br>
* [Clone a GitHub Repository](getting-started.md#clone-a-github-repository){target="_blank" rel="noreferrer"} <br>
* [Run a Program Locally on Your Computer](getting-started.md#run-a-program-locally-on-your-computer){target="_blank" rel="noreferrer"} <br>

**If you also want to edit and host programs**, you also need to:

* [Get a Text Editor](getting-started.md#get-a-text-editor){target="_blank" rel="noreferrer"} <br>
* [Set Up a VPN](../connections-servers/VPN.md){target="_blank" rel="noreferrer"} <br>
* [Connect to Jarvis](../connections-servers/jarvis.md){target="_blank" rel="noreferrer"} <br>

## Get MAMP

MAMP is a tool that lets you run a local server on your computer. You will need to use MAMP to run programs locally on a computer.

* Download and install MAMP: <https://www.mamp.info>{target="_blank" rel="noreferrer"}
* After installing, open MAMP and click Preferences. Select the Ports tab and put "8888" in the box next to Apache and "3306" in the port next to MySQL.
* To run the local server, simply click Start Servers.

## Get a GitHub Account

GitHub is a repository hosting service. It allows you to create repositories, where code is stored, and share code with multiple users. Think of it as Dropbox for code.

* Go to <http://github.com>{target="_blank" rel="noreferrer"} and create an account
* Have someone in the lab add you to the lab's account (<http://github.com/PCLLAB>{target="_blank" rel="noreferrer"}) or to a particular repository (which will be something like http://github.com/PCLLAB/RepositoryName)
* Download the GitHub app from <https://desktop.github.com>{target="_blank" rel="noreferrer"}
* During installation, you will be asked to set a default folder
    * On a Mac, set the default folder to Applications/MAMP/htdocs
    * On a Windows PC, set the default folder to C:\MAMP\htdocs
* Setting the default folder to "htdocs" will ensure that your GitHub repositories are cloned in the default folder in MAMP

## Clone a GitHub Repository

Cloning makes a copy of a GitHub repository locally on your computer. These instructions are for cloning an existing repository. If you are starting a new project, you will need to Create a New Repository.

* On GitHub, go to the repository you want to clone (e.g., github.com/PCLLAB/RepositoryName).
* Click the "Clone or download" button on the right side of the screen. Then click "Open in Desktop". This will launch the GitHub app.
* Click "Clone" to save the repository in your "htdocs" folder.
* In the GitHub app, there is a "Sync" button in the top right. Clicking Sync pulls the most recent code from GitHub and pushes any changes you have made locally.

## Run a Program Locally on Your Computer

To run a program locally:

* Open MAMP and click Start Servers
* Make sure you have the most recent version of your program by syncing with GitHub
* Go to the local URL to run the program
* The URL for a given repository will be http://localhost:8888/RepositoryName/ 
* The URL for your particular experiment may be something like the following: http://localhost:8888/RepositoryName/experiment.html 
* If you have multiple experiment folders within a repository, your URL may be something like: http://localhost:8888/RepositoryName/E1/experiment.html 

## Get a Text Editor

You will need a text editor to write and edit code. Popular ones are:

* Visual Studio Code: <https://code.visualstudio.com>{target="_blank" rel="noreferrer"} 
* Atom: <https://atom.io/>{target="_blank" rel="noreferrer"}
* Sublime Text: <http://www.sublimetext.com/>{target="_blank" rel="noreferrer"}

## Extremely Technical Stuffs

For more info check out <https://pcllab.github.io/docs/>{target="_blank" rel="noreferrer"}