# Randomized Conditions and Counterbalenced Versions

Sometimes (especially with in-person experiments) participants will be assigned to conditions by the experimenter. Other times, we will have the program randomly assign participants to conditions. 

## If-else

Regardless of how participants are assigned to conditions, the program will need to present different stimuli/materials/tasks depending on what condition(s) that participant was assigned to. You can do this by using if-then or if-else logic.

```js
// Asign stimuli by condition
if (this.condition == "CONDITION_V1A") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV1A);
} else if (this.condition == "CONDITION_V2A") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV2A);
} else if (this.condition == "CONDITION_V3A") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV3A);
} else if (this.condition == "CONDITION_V1B") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV1B);
} else if (this.condition == "CONDITION_V2B") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV2B);
} else if (this.condition == "CONDITION_V3B") {
    this.testList = jsPsych.randomization.shuffleNoRepeats(testCuesV3B);
};

```

