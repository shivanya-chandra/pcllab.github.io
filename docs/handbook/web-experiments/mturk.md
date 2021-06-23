# MTurk

<mark>**NOTE: This page is too long. Probably should be multiple pages.**</mark> 

## Links

* TurkPrime: <https://www.turkprime.com>
* Amazon Mechanical Turk: <https://www.mturk.com>

(Other possible links)

* TurkOpticon (is this still in use?)
* TurkerView 
* Guidelines for Academic Requesters: <http://guidelines.wearedynamo.org/>
* Note that the TurkPrime documentation is good
* Note that our lab is A2Z7DRFCANJ7P
* mturkcrowd.com
* mturkforum.com

## Overview 

[Amazon Mechanical Turk (MTurk)](https://www.mturk.com) is an online marketplace that can be used to collect data online quickly and cheaply. To manage and run MTurk experiments, we use [TurkPrime](https://www.turkprime.com), a third-party website that provides a user-friendly interface. 

## Before Using MTurk (OLD) (or, Preparing an MTurk Experiment)

<mark>**TODO: We need to include specific instructions about what needs to go in a program so it works with MTurk. Like getting Amazon IDs and generating the code at the end.**</mark>

You will need a link for a web-based experiment created using a code language (such as jsPsych) or Qualtrics. MTurk workers (called Turkers) will use the link to complete your experiment.

Your experiment should also include a randomly generated code that each participant (turker) will enter on MTurk to prove they actually completed the experiment. This code should be displayed at the end of the experiment, typically at the bottom of the debriefing form.

Finally, you will need to estimate the cost of the experiment and submit a request to run a paid experiment. Your cost estimates should be based on a 10c/minute rate and must include Amazon fees (you can obtain a precise cost estimate after creating the new project on MTurk and before posting your HITs). Be sure to update your consent form to reflect how much each participant will be paid.

## Create a New Project in TurkPrime (OLD) (Project, or Experiment?)

<mark>**NOTE: This section might be its own page**</mark><br>
<mark>**TODO: There seem to be two methods: copying an old HIT, and creating a new one from scratch. Need to distinguish.**</mark>

This section describes general procedures for setting up a new experiment on M-Turk with [TurkPrime](https://www.turkprime.com). Log in to TurkPrime with the lab's email account. On the menu bar, click "Create a Study", then "MTurk Toolkit", <mark>IS THIS OUTDATED? then "Run a study on your own MTurk account"</mark>. This will take you to the MTurk Toolkit, a form with 9 pages for entering the details of your HIT. 

### Creating a New Experiment from Scratch

<mark>**TODO: The next part needs some fleshing out.**</mark>

1.	**Panel Options.** Skip this. There are several detailed options on this page (which cost an additional fee) that we do not use. 
2.	**Basic Info.** label the project and enter an email to notify you when the experiment has ran the selected number of participants. These are visible to Turkers.
3.	**Describe HIT.** Describe the HIT to workers, typically generic: Title example: memory for key-term definitions …. Description example: In this experiment you will study a list of key-term definitions. Your memory for the definitions will be tested.
4.	**Setup HIT and Payment.** [Description] Specifics…
    - Pay subjects $0.10 per minute (e.g., $1 for 10 minutes, $2 for 20 minutes, etc.)
    - Enter the number of subjects you want to participate 
    - Enter how long they have to finish the experiment. I usually limit this to 20 minutes or so longer than the experiment takes. You do not want people to start your experiment and then take a break and come back to it later. Worse case scenario is they email you saying they did it but did not have enough time to turn it in. You may pay them after checking for them in your data.
    - Choose how long you want to experiment to be posted for. I usually choose 1 week, but it never takes that long.
    - Enter the link to your experiment on this tab!
    - Check the box for displaying the HIT (experiment) to only workers that qualify. The final two boxes are a matter of preference.
5.	**How Workers are Approved.** [Description]
    - Add your completion code here
    - Make sure the box to manually approve hits is checked. It is good practice to manually approve workers as one person could send the completion code to their friends, who would enter the code but not complete the experiment (their ID would not be in your data).
6.	**Worker Requirements.** [Description]
    - Choose to exclude workers from previous studies by checking them off [I DON'T UNDERSTAND WHAT THIS MEANS]. You can also only let people who completed a previous study participate (this would be useful for two part experiments as you do not want people who never completed the first experiment to do the second part)
    - Make the country the United States
    - HIT Approval Rating = 95-100% 
    - Number of HITs = 1,000 - 1 million
7.	**MicroBatch (Pro Feature).** [Description] [WHAT IS DIFF BETWEEN MICROBATCH AND HYPERBATCH?] Number of Participants per Batch = 9 (cuts price by 50%) [NOT CORRECT]
8.	**Pro Features.** Skip this [I THINK? DOUBLE CHECK]. more features that cost money, but we do not really use this tab
9.	**Save.** Saves the changes you made to these tabs, but does not post the experiment to MTurk

<mark>**TODO: IS THE FOLLOWING STATEMENT CORRECT?**</mark> 

To launch an experiment go to dashboard and click the green launch button.

<mark>**TODO: Create a new section: Setting up multi-session studies**</mark>

## How to create a new project in Turk Prime (FROM GARRETT)

Go to https://www.turkprime.com/
To log in, use Username: ***; Password: ***
Click Dashboard to view the lab’s mTurk studies
By default, live/pending studies will be displayed
But previously completed studies can be viewed by changing the drop-down menu
Find an old study and select Copy HIT (Human Intelligence Task) and confirm the copy by clicking Copy Study
Now you will need to change the information to match your new study
When you have finished updating the study information (be sure to read the notes below) click save.
Now is a good time to double check that the correct link has been added the study on Turk Prime. You can click on the study and then click External Survey Link.
When you are ready to start collecting data, you can click the green Launch button

Saving mTurk IDs

Turk Prime automatically inserts query data into the URL. The following code gets that data and adds it to the to-be-saved data.

```javascript
// get workerId from URL
Var subNum = jsPsych.data.getURLVariable(“workerId”)

// add subject to data
jsPsych.data.addProperties({
	subject: subNum
})
```

## Approving Results (OLD)

<mark>**Garrett's info further down on this page is good.**</mark><br>

You will be notified when all of the participants have completed the experiment. Navigate to dashboard => completed => manage pending in order to approve the workers. This will give you a list of people who said they completed the experiment. If not, do not approve the HIT. Your experiment should record the MTurk ID for each participant. It is good practice to manually check each ID on Turkprime against the IDs that are saved in your data. This way you are sure to only pay people who participated in your experiment.

(This paragraph needs review.) An assignment should always be approved, unless it is clear the Worker did not follow the instructions in the HIT. The codes input by the workers should be checked against the codes generated by your testing program. When a code does not match try to figure out if it is just a typo or if the worker emailed you.

Every HIT has an AutoApprovalDelayInSeconds, an amount of time after an assignment is submitted at which point Amazon Mechanical Turk will automatically approve the assignment and pay the Worker if it has not already been explicitly approved or rejected. If not specified this is set to the maximum, equivalent to 30 days. The maximum value assures that the Worker will get paid even if the Requester is unavailable. You may wish to specify a shorter auto-approval delay if the Workers are trusted (such as by having been vetted with Qualification requirements) and to assure Workers that they will be paid in a timely manner. When you approve a HIT Amazon Mechanical Turk automatically processes payment of the reward to the Worker, and payment of the HIT listing fee, using the money in your Amazon.com account. You will not be charged for the reward, nor for the listing fee, if the results are rejected.

## Approving Workers (FROM GARRETT)

After workers finish your experiment they will submit the HIT. Typically, we have some string of random characters that is presented at the end of an experiment. Subjects are informed that they should type this string into a textbox in order to receive payment. Most people type the string in correctly, some people type in their worker id, and others just make stuff up. 
 
I believe there are fancy ways to generate random strings for each subject and have that random string show up on Turk Prime so you can check to see if they actually completed the experiment. In my experiments, subjects enter a fixed string. That is, every subject sees the same string of characters. So, one person could post that string online and people could submit the HIT to my experiment and enter this string correctly. For that reason, I approve all workers manually.
 
I open up my data file on one side of my screen and the HIT approval menu on the other. I copy the worker id from the approval menu and use the search function in excel to see if this id appears in my data set. If it does, I do a quick skim of the data to make sure they tried. Did they answer some questions? Are there responses coherent? Does it seem like a person rather than a computer program generated these responses? If yes, I accept their HIT and they are paid. If they completed a 60 minute experiment in 5 minutes and everything is blank, then I reject their HIT.
 
Since we restrict the participants to have a really high approval rating (95% or higher) people don’t like being rejected. It hurts their high status that they have worked very hard for. If you reject someone, expect emails. Make sure every rejection is justified. As stated before, some people type in random completion codes. They are doing this in hopes of getting accepted for HITs they didn’t complete. These should be rejected and probably won’t email. For example, this worker id would submit the HIT, an incorrect completion code, and would not show up in the data. This person did not do the experiment and should not be paid.

## Handling Emails from MTurk Subjects (OLD)

While you are running an experiment on MTurk pay attention to the learnlabmturk@gmail.com and reply in a timely fashion to the workers emails. Workers usually email concerning technical difficulties. Some of the problems described are common and you can find the common lab responses under “canned responses” on the lower left corner of the email composition window. Remember to always be polite in your response and try to solve the workers issues.

## Responding to Emails (FROM GARRETT)

While you are running an experiment on MTurk pay attention to the @gmail.com (password is ) and reply in a timely fashion to the workers emails. Workers usually email concerning technical difficulties. Some of the problems described are common and you can find the common lab responses under “canned responses” on the lower left corner of the email composition window. Remember to always be polite in your response and try to solve the workers issues.
 
The most common problem is people forgot to submit the HIT before it expired. Best case scenario is that you see they accepted the HIT and you can still pay them. Worst case scenario is that you have to create a new HIT, that only they can complete (you can specify this using their worker id which they will send you when they email). You create this HIT and a send them an email notification. They submit this “make-up” HIT where they don’t have to do anything and you pay them for that HIT.
 
Another common problem is people have trouble with the experiment. This happens because people close the tab, click refresh, lose internet access, etc. I tend to make them redo the experiment in order to guarantee they did the experiment and to ensure their id is in the list of people who accepted the HIT. I then exclude their data as they could have potentially completed the experiment twice (double the study time and exposures).



## Best Practices (formerly "Notes about creating HITs")

- I would keep the subject number low at first. It can be increased later but never decreased.
- Be sure to pilot your experiment yourself first, then with 390s, and then with some mTurkers. It is far better to find out your experiment works before you pay 200 people.
- Panel options cost more and we typically don’t need any of them to be turned on
- Use a personal email address for the email. This emails you when the study is finished. Creating less clutter in the email used for the mTurk account
- As of right now, we pay people $0.10/min
- Make your expected time to complete longer than it takes. If people finish early they are happy. If they finish late they are mad. It is definitely worth it to spend another $0.50-$1.00 to not deal with whiny mTurkers. Plus, we are reviewed online and want to cultivate a positive and fair reputation.
- I usually give double the expected time for the allotted time per assignment (the amount of time they have to turn in the HIT after they accept the HIT)
- I usually set the HIT expiration to be 1-3 days. 
- Turk Prime will automatically add a query string for the variable “workerId”, so you will need to store that in the experiment.html file and add it to the to-be-saved data
- Double check that you pasted the correct experiment link
- I set auto pay workers to be 3 days. You will wait to pay workers as quickly as possible to avoid complaints.
- Under worker requirements, you can exclude people who completed other experiments. This is important if you are using the same material across experiments. Be sure to check the lab materials google sheet to see what materials other people in the lab are using.
- Under worker requirements, you can require people to have completed previous experiments to participate. In other words, you could make a HIT for the second session of an experiment and only people who completed part 1 can complete part 2.
- To improve the quality of the collected data we restrict the approval rating to be 95% or higher and that participants must have completed more than 1000 HITs
- You will also want to choose to Block Suspicious Geocode Locations
- Turk Prime posts studies in micro batches of 9 people to save money. Do not make this number greater than 9 because you will be charged more money.
- Currently, there is no way to get an equal amount of people in each condition from random assignment. I usually run 80% of the sample picking a random condition from an array. I round out the sample by running small patches of only people in one condition. I pick the condition order for this rounding phase at random. Note, you have to set the condition variable in your experiment (subCond = “A”) and update the file on jarvis.





## Definitions

Definitions[edit]
AA
Auto Approval Time. A requester sets an auto-approval time of anywhere between 0 Seconds and 30 days for every HIT they create. After a HIT is submitted, it will automatically approve after this amount of time has gone past. (sometimes AA used to refer to AndAccept links instead of “PandA”.)
AMT
Amazon Mechanical Turk (mturk) A website for completing tasks for pay. A cloud-based labor platform designed to connect people who need data (Requesters) with people who are willing to provide it (workers). (Source = /r/mturk FAQ)
Batch
A type of HIT designed to allow a worker to complete multiple submission. You can complete as many HITs in the batch as it allows, unless otherwise advised by the requester’s instructions.
Blocks (Hard/Soft)
A way for a requester to prevent a worker from accepting any of their HITs. A turker who receives blocks can be at risk of having their MTurk account suspended (banned). We usually do not block workers. When we want to prevent a worker or group of workers from doing our HITs we create a qualification and exclude those who have that qualification.
Bonus HITs
HITs specifically created for a worker that completed a HIT (or part of it) but, for some reason, was not able to submit the final code or appear in the list of workers who completed the HIT but contacted us via email.
HIT
Human Intelligence Task. A job posted to Amazon’s mTurk platform. Referred to as “human intelligence tasks” due to the fact that bots/programs are less capable of performing the work than human beings.
Masters: Master Qualification, Categorization Masters, Photo Moderation Masters
“Masters are an elite group of Workers, who have demonstrated superior performance while completing thousands of HITs for a variety of Requesters across the Mechanical Turk Marketplace. Masters must maintain this high level of performance or risk losing this distinction. Mechanical Turk has built technology which analyzes Worker performance, identifies high performing Workers and monitors their performance over time.” (Source: Amazon Mechanical Turk FAQ) Using Masters usually imply higher Amazon fees. We do not usually use Masters.
Turker
Someone who works to complete tasks for pay on Amazon’s Mechanical Turk.
