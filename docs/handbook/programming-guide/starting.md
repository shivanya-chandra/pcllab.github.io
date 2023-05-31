# Study Start

## Start Screen
Usually, you will want a start/welcome screen that appears before the first page of the experiment's instructions. For in-person studies, this page will welcome participants and ask them to wait for experimenter to give them instructions before beginning. For online studies, this page ask participants to remove distractions and silence their cellphones. It might give participants information about the length of the experiment and request that they not begin unless they have the time to finish the experiment in one sitting. Note: This text can be added directly to the stimuli line or pulled from a JSON file (like other instructions/materials).

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