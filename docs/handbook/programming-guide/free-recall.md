# Free Recall

Displaying stimulus with text responses.

## jsPsych 7

https://www.jspsych.org/7.3/plugins/survey-text/

```js
const trial = {
  type: jsPsychSurveyText,
  preamble: `<img src="img/navarro_burst_03.jpg" style="width:400px;"></img>`,
  // randomize_question_order: false,
  // button_label: 'Continue',
  // autocomplete: false,
  questions: [
    {
      prompt: "Describe your reaction to the image above",
      placeholder: "Enter some text",
      rows: 5,
    },
    // { prompt: "Describe your reaction to the image above", required: true },
    // { prompt: "Describe your reaction to the image above", columns: 140 },
  ],
};
timeline.push(trial);
timeline.push(trial);
timeline.push(trial);
```
