# Cued Recall
Displaying stimulus with text responses.

## jsPsych 7

https://www.jspsych.org/7.3/plugins/survey/

https://www.jspsych.org/7.3/plugins/survey-text/

```js
const trial1 = {
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
    // { prompt: "Describe a required reaction to the image above", required: true },
    // { prompt: "Describe your reaction to the image above", columns: 140 },
  ],
};
const trial2 = {
  type: jsPsychSurveyText,
  preamble: `This can be a cool title`,
  questions: [
    {
      prompt: "this is a question with a preamble above.",
    },
  ],
};
const trial3 = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "This is a basic question",
    },
  ],
};
timeline.push(trial1);
timeline.push(trial2);
timeline.push(trial3);
```

## jsPsych 5
```js
const cuedRecallTrial = {
  type: "pcllab-core",
  stimuli: [
    { response_type: "study_items", cue: "A", target: "Apple" },
    {
      response_type: "study_items",
      cue: "What is the answer to life the universe and everything?",
      target: "42",
    },
    { cue: "A", target: "Apple", response_count: 1 },
    {
      cue: "What is the answer to life the universe and everything?",
      target: "42",
      response_count: 1,
    },
  ],
  input_size: "small",
  response_count: 0,
  show_button: true,
};
```