---
hide:
  - toc
---

# Jarvis

<mark>TODO: Create more detailed instructions for folder structures on Jarvis and include instructions for how to use Jarvis for experiments including how to use it to counterbalance conditions</mark>

This section contains information about how to connect to and use to Jarvis, our server for hosting experiments and collecting data.

## Connect to Jarvis

Jarvis (<https://jarvis.psych.purdue.edu>{target="_blank" rel="noreferrer"}) is the lab's server for hosting experiments and collecting data. If you are off campus, you will first need to connect to the Purdue VPN to access the Jarvis server.

There are two ways to connect to Jarvis. To upload code for an experiment, you will need to connect via SFTP. To create an experiment on the database and to download your data, you will need to log on to the Jarvis user interface.

### SFTP to Jarvis

You will need an SFTP client to connect to Jarvis and upload code. Here are two good ones:

* [Cyberduck](https://cyberduck.io/){target="_blank" rel="noreferrer"} (Mac or Windows)
* [WinSCP](https://winscp.net/eng/download.php){target="_blank" rel="noreferrer"} (Windows)

The first time you connect, in your SFTP client, you will need to do the following:

* Open a new connection
* Select SFTP (SSH File Transfer Protocol)
* In the Server address box, enter "jarvis.psych.purdue.edu"
* Enter the username and password for the server. You will need to get this from someone in the lab.
* Click Connect

Once you are connected to Jarvis:

* Navigate to /srv/weblab/
* In this "weblab" directory, create a folder with your last name. Within your folder, you can create folders for your projects and experiments where you will copy/paste your code.
* The URL for a folder you create, like /srv/weblab/YourName/FolderName, will be http://jarvis.psych.purdue.edu/YourName/FolderName

### Jarvis User Interface

The other way to connect to Jarvis is via the Jarvis front-end interface. This will allow you to monitor and manage data files, including downloading your data. To access the Jarvis interface:

* Go to <https://jarvis.psych.purdue.edu>{target="_blank" rel="noreferrer"} and log in. You will need to get a username and password from someone in the lab. 
* On Jarvis, you can create a new experiment on the database, generate a code snippet in order to write data to the experiment on the database, and download data from the database.
