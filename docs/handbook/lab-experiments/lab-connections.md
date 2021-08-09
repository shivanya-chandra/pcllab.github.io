---
hide:
  - toc
---

# Lab Connections

<mark>TODO: Create more detailed instructions for folder structures on Jarvis</mark>

This section contains information about how to connect to LearningLab, our server for long-term storage of documents and data, and to Jarvis, our server for hosting experiments and collecting data.

## Set Up a VPN

A Virtual Private Network (VPN) allows you to connect to Purdue servers (like LearningLab and Jarvis) when you are off campus.

* To download the Purdue VPN client, go to <http://webvpn.purdue.edu>{target="_blank" rel="noreferrer"} and enter your Purdue Career Account. This will start the process of downloading the Cisco AnyConnect client app.
* Open the client app, type in "webvpn.purdue.edu" and click Connect.
* You will be prompted to enter your Purdue Career Account. Once you do you will be connected to campus with a VPN.  

## Connect to LearningLab

The LearningLab server is the lab's secure system for storing documents and data files. If you are off campus, you will need to connect to the Purdue VPN to access the LearningLab server. If you are on campus, you do not need a VPN.

**On a Mac:**

* From the Finder, select the "Go" menu (at the top of your screen), then "Connect to Server."
* Enter smb://ironman.psych.purdue.edu/learninglab
* Log in with your Purdue Career Account

**On a PC:**

* Go to "My computer" and at the top click "Add a network location"
* Enter \ironman.psych.purdue.edu\learninglab
* Log in with your Purdue Career Account

## Connect to Jarvis

Jarvis (<https://jarvis.psych.purdue.edu>{target="_blank" rel="noreferrer"}) is the lab's server for hosting experiments and collecting data. If you are off campus, you will need to connect to the Purdue VPN to access the Jarvis server.

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

### Log on to the Jarvis User Interface

The other way to connect to Jarvis is via the Jarvis front end interface. This will allow you to monitor and manage data files, including downloading your data. To access the Jarvis interface:

* Go to <https://jarvis.psych.purdue.edu>{target="_blank" rel="noreferrer"} and log in. You will need to get a username and password from someone in the lab. 
* On Jarvis, you can create a new experiment on the database, generate a code snippet in order to write data to the experiment on the database, and download data from the database.
