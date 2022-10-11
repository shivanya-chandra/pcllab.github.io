## Showing Instructions

### jsPsych 7

<https://www.jspsych.org/7.3/plugins/instructions/>

```js
const trial = {
    type: jsPsychInstructions,
    pages: [
    'Welcome to the experiment. Click next to begin.',
    'This is the second page of instructions.',
    'This is the final page.'
    ],
    show_clickable_nav: true,
    // allow_backward: true,
}
```

## jsPsych 5

```js
const instructionsStart = {
    type: "pcllab-core",
    stimuli: [this.instructions["start"]],
    show_button: true,
    button_text: "Continue",
    response_count: 0,
    minimum_time: 7000,
};
```
