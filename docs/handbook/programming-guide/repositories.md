# Repositories 


This page describes how to create/clone, use, and organize repositories "repos".


## Clone a GitHub Repository

Cloning makes a copy of a GitHub repository locally on your computer. These instructions are for cloning an existing repository. If you are starting a new project, you will need to Create a New Repository.

* You can clone a repository online from GitHub.com 
    ** On GitHub.com, go to the repository you want to clone (e.g., github.com/PCLLAB/RepositoryName).
    ** Click the "Clone or download" button on the right side of the screen. Then click "Open in Desktop". This will launch the GitHub app.
    ** Click "Clone" to save the repository in your "htdocs" folder.
    ** In the GitHub app, there is a "Sync" button in the top right. Clicking Sync pulls the most recent code from GitHub and pushes any changes you have made locally.

* Or you can clone a repository using the GitHub desktop app
    ** Open the app and select "Clone repository" from the "File" dropdown menu.
    ** Select the repository from the list or type the name into the seach box. 
    ** Confirm that the local path is cloning it to MAMP/htdocs.
    ** Click "Clone"
    
## Creating a GitHub Repository

If you are starting a new project (i.e., starting a new line of experiments), you will need to create a new repository. 

* You can create a new repository on GitHub.com from the PCLLAB's organization page
    ** Navigate to the PCLLAB organization page on GitHub.com and Select "Repositories". 
    ** Click on the green "New repository" button.
    ** Give your new repo a meaningful name related to what this set of experiments is investigating. 
        *** "Flipped-Classroom" and "AdaptiveSpacing" are both good names because they describe the research topic clearly.
        *** "RPvsSP" and "MC_FirstYearProject" are not good names because they are not meaningful to anyone besides the person who created them. 
        *** Note: If you are concerned that the name used in the URL will alert participants to the purpose of the study and/or what is being manipulated, you can use less obvious names and simply include a helpful description.
    ** Click "Create repository".
    
* Or you can create a new repository using the GitHub desktop app 
    ** Open the app and select "New repository" from the "File" dropdown menu. 
    ** Give your new repo a meaningful name (see above for more information).
    ** Set local path to your "htdocs" folder and click "Create repository".
    ** Click "Publish repositry" and select "PCLLAB" from the "Organization" dropdown menu.

## Respository Organization 

Within a respository you should have separate folders for each experiment in that line of experiments. Within each experiment you will have a set of files. Common files that you will need to modify are described below.

* experiment.html – the html file for your experiment that will be used to define plugins
* experiment.js - the file that you will use to program most of your experiment
* lab-start.html – this is used if you needed to create a login screen (for in-lab experiments) 
    ** verify.html - this is used to present a verification screen after the login screen
* anything ending in .css edits styling (font size, color, etc.)
* plugins – folder containing all of the plugins
    ** files starting with jspsych are plugins created by jspsych
    ** files starting with pcllab are plugins created specifically for our lab (you will use these the most)
    ** plugin.js – the plugin you will need to define the path to this file in experiment.html
            *** There will be a readMe file or a comment at the top of the plugin.js file that explains the parameters that can be modified for the plugin

