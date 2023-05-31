# Study Start

## Before Starting

### No Mobile Devices (online only)

When an experiment is run online you will need to make sure that participants are using a computer to participant and not their phone. This code will prevent them from starting the experiment on a mobile device.

```js
const noMobile = {
      type: 'pcllab-no-mobile'
};
```
### Login Screen (in-person only)

When you run experiments in the lab, you will need to have a "login" page for the experimenter to type in the subject number and assign the participant to a version/counterbalance condition. 

- lab-start.html will present this page and can be modified based on which/how many parameters need to be set by the experimenter before the start of the experiment.
- verify.html will present a verification page to check that the information input during login was correct.


## Start Screen

Usually, you will want a start/welcome screen before the first page of the experiment's instructions. For in-person studies, this page will welcome participants and ask them to wait for experimenter to give them instructions before beginning. For online studies, this page ask participants to remove distractions and silence their cellphones. It might give participants information about the length of the experiment and request that they not begin unless they have the time to finish the experiment in one sitting. Note: This text can be added directly to the stimuli line or pulled from a JSON file (like other instructions/materials).

### In-Person

```js
const instructionsStart = {
    type: 'pcllab-core',
    title: "Welcome",
    stimuli: [{
        cue: "<p align = 'center'> <font size = '5'> Please wait for the experimenter. <br><br> If you have not done so already, please silence your cell phone and put away all personal belongs. <br><br> Please DO NOT press 'Next' until the expiermenter tells you to begin.</p>",
        target: "welcome"
    }],
    show_button: true,
    button_text: "Next",
    minimum_time: 1000 * 10,
    show_i_dont_know: false,
    forced_response: false,
    response_count: 0,
    data: {
        phase: "instructions",
    },
};
```
### Online
```js
const removeDistractionInstrucitons = {
    type: 'pcllab-core',
    title: "Please minimize any distractions",
    stimuli: [{
        cue: "<p align = 'center'> <font size = '5'> <strong> Performance in this experiment depends on your undivided attention. Ringing cell phones or application notifications are disruptive and can alter your performance.<br><br><u>Please silence cell phones and other devices at this time.</u></strong> <br><br>Thank you for your cooperation! </p> <p> <br> Click 'Next' when you are ready to move onto the next part of the experiment.</p>",
        target: "welcome"
    }],
    show_button: true,
    button_text: "Next",
    minimum_time: 1000 * 10,
    show_i_dont_know: false,
    forced_response: false,
    response_count: 0,
    data: {
        phase: "instructions",
    },
};
```
## No Cheating (online only)

We often tell participants that we will give them information to learn/study for a later test. When an experiment is online, we can't observe or regulate the participant's behaviors during the experiment, so participants can cheat if they want to. To prevent this, you can ask at the start of the experiment participants to agree not to cheat.

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