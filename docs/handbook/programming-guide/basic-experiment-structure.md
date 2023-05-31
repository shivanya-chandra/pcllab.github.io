# Basic Experiment Structure

This section outlines the basic structure and components used in most experiments.

## Login Page & Verification (in-person only)

When you run experiments in the lab, you will need to have a "login" page for the experimenter to type in the subject number and assign the participant to a version/counterbalance condition. 

- lab-start.html will present this page and can be modified based on which/how many parameters need to be set by the experimenter before the start of the experiment.
- verify.html will present a verification page to check that the information input during login was correct.


## [Start Screen](starting.md)

Usually, you will want a start/welcome screen that appears before the first page of the experiment's instructions. For in-person studies, this page will welcome participants and ask them to wait for experimenter to give them instructions before beginning. For online studies, this page ask participants to remove distractions and silence their cellphones before starting. 


## [Consent Form (online only)](materials/#consent.md)

For online experiments, you will need to present a consent page that shows the participants the consent form and asks them if they agree to participate.

## No Mobile Devices (online only)

When an experiment is run online you will need to make sure that participants are using a computer to participant and not their phone. 

```js
const noMobile = {
      type: 'pcllab-no-mobile'
};
```
## No Cheating (online only)

At the start of experiments, we often tell participants that we will give them information to learn/study for a later test. When an experiment is online, we can't observe or regulate the participant's behaviors during the experiment, so participants can cheat if they want to. To prevent this, you can ask at the start of the experiment participants to agree not to cheat.

```js
const wontCheat = {
    type: 'pcllab-core',
    title: "",
    data: {type: "wontCheat"},
    stimuli: [{
        response_type: 'radio',
        response_list: ["I agree to not cheat during this experiment."],
        radio_title: "<p align = 'left'> <font size = '5'> This experiment investigates how people learn, remember, and forget. The validity of our results and our ability to further the understanding of human memory depends on how honestly and carefully you complete this experiment.<br><br> For this reason, it is imperative that you do not cheat in any way during the experiment.<br><br>Cheating in this experiment could involve writing down definitions, taking notes, using your phone, looking up information on the internet or in books, or copying/pasting.<br><br> <strong>Do you agree to not cheat during this experiment? </strong>",
	    horizontal: false
	}],
	forced_response: true,
	show_button: true,
	minimum_time: 1000 * 10,
    data: {
        phase: "wont_cheat",
    },
};
```

## [Randomized Conditions](counterbalence.md)

Sometimes (especially for in-person experiments) participants will be assigned to conditions by the experimenter. Other times, we will have the program randomly assign participants to conditions and or version. This is one of the first things that needs to be done because the condition(s) and/or counterbalance version(s) will determine what tasks the participant does, the order of those tasks, and which stimuli they see.   

## [Timeline](timeline.md)

The timeline provides structure to your experiment. Each block of code will create an event (e.g., instructions for a task, presentation of the study list, a free recall test, etc.) for the participant to experience. You will use the timeline to specify when each event should occur during the experiment. 

## [Instructions & Materials](materials.md)

Throughout the experiment you will present participants with various information (e.g., instructions, stimuli, and debriefing forms). It is best to store and organize this information in a single folder that can be accessed when needed.

## Plugins

### Calling Plugins
### Parameters
### Pushing Plugins to Timeline
### Editing Plugin Files

## [Stimuli Presentation](study-list.md)

Presenting stimuli to participants is a key part of any experiment. Sometimes we will simply show participants a series of words to learn and remember for a later test. Other times, we will shown participants an item and ask them to make a response (e.g., type an answer to a question or make a rating). 

## [Distractor Task](distractor.md)

We will often include a distractor task in between encoding/study (presentation of stimuli) and the final test.  

## Tasks, Tests, & Measures
### [Free Recall](free-recall.md)
### [Cued Recall](cued-recall.md)
### Recognition
### Multiple Choice
### Judgement of Learning

## Demographics

```js
const demographics = {
  type: "pcllab-form",
  demographics: true,
  data: {
    phase: "demographics",
  },
};
```

## Attention, Seriousness, & Cheating Checks

## [Debrief](materials/#debrief.md)


## [Save Data](saving-data.md)







