# Examples using `pcllab-core` plugin

The first examples come from `jsPsych-Plugins/pcllab-core/examples`. These should work.

!!! warning

    The snippets under the _Untested_ title come from `jsPsych-Plugins/pcllab-core/test` folders. These were created to test specific functionality and might not do what is expected.

## Free Recall No Delete

```js
const freeRecall = {
  type: "pcllab-core",
  stimuli: [
    {
      response_type: "free_recall",
      show_delete: false, // defaults to true
    },
  ],
  show_button: true,
};
```

## Horizontal Response Button

```js
let studyBlockPicture = {
  type: "pcllab-core",
  stimuli: [
    {
      response_type: "buttons",
      buttons: ["Yes", "No"],
    },
  ],
  response_columns: 2, // defaults to 1
};
```

## Experimenter Paced

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Vim or Emacs", target: "Vim" },
    { cue: "Tabs or Spaces", target: "Tabs" },
    { cue: "Should pineapples be put on pizza?", target: "Absolutely" },
  ],
  input_size: "small", // small, large, medium, xlarge
  show_i_dont_know: true,
  maximum_time: 5000,
  show_progress: true,
  progress_total_time: true,
};

const trial2 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Which are your favorite kinds of bagels?", target: "Garlic, Egg" },
  ],
  input_size: "small", // small, large, medium, xlarge
  cue_count: 2,
  show_i_dont_know: true,
  maximum_time: 5000,
  show_progress: true,
};
```

## Feedback

```js
const trial1 = {
  type: "pcllab-core",
  timing_post_trial: 250,
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      cue: "Should pineapples be on pizza",
      target: "yes",
    },
  ],
  feedback: true,
  show_i_dont_know: true,
  minimum_time: 0,
  show_button: true,
  isi: 250,
  feedback_html: (data) => {
    const lastData = data.slice(-1)[0];
    if (lastData.response.toUpperCase() === lastData.target.toUpperCase()) {
      return `
        <div class="row">
          <div class="col">
            <h4 class="text-center">You answered correctly</h4>
          </div>
        </div>`;
    } else {
      return `
        <div class="row">
          <div class="col">
            <h4 class="text-center">You answered incorrectly</h4>
            <h4 class="text-center">The correct answer is ${lastData.target}</h4>
          </div>
        </div>`;
    }
  },
};
```

## Judgement of Learning

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "radio",
      cue: "How well do you know the material?",
      response_list: () => {
        return [...Array(10).keys()].map((i) => i + 1);
      },
      horizontal: true,
    },
  ],
  show_button: true,
  show_i_dont_know: true,
  forced_response: true,
  // progress_total_time: true
};
```

## Minimum Time

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Vim or Emacs", target: "Vim" },
    { cue: "Tabs or Spaces", target: "Tabs" },
    { cue: "Should pineapples be put on pizza?", target: "Absolutely" },
  ],
  input_size: "small", // small, large, medium, xlarge
  show_i_dont_know: true,
  minimum_time: 3000,
  show_button: true,
  show_progress: true,
  progress_total_time: true,
};

const trial2 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Which are your favorite kinds of bagels?", target: "Garlic, Egg" },
  ],
  input_size: "small", // small, large, medium, xlarge
  cue_count: 2,
  show_i_dont_know: true,
  minimum_time: 3000,
  show_button: true,
  show_progress: true,
};
```

## Self Paced

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Vim or Emacs", target: "Vim" },
    { cue: "Tabs or Spaces", target: "Tabs" },
    { cue: "Should pineapples be put on pizza?", target: "Absolutely" },
  ],
  input_size: "small", // small, large, medium, xlarge
  show_i_dont_know: true,
  show_button: true,
  show_progress: true,
  progress_total_time: true,
};

const trial2 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Which are your favorite kinds of bagels?", target: "Garlic, Egg" },
  ],
  input_size: "small", // small, large, medium, xlarge
  cue_count: 2,
  show_i_dont_know: true,
  show_button: true,
  show_progress: true,
};
```

## Study Items

```js
const trial1 = {
  type: "pcllab-core",
  stimuli: [
    {
      response_type: "study_items",
      cue: "Should pineapples be put on pizza?",
      target: "Yes",
    },
    { response_type: "study_items", cue: "Tabs or spaces?", target: "Tabs" },
  ],
  maximum_time: 5000,
  show_progress: true,
  response_count: 0,
};
```

## Word Bank

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      cue: "What is your favorite text editor?",
      target: "Vim",
      word_list: ["atom", "emacs", "vim", "vscode", "sublime text"],
      cue_count: 3,
      // response_panel_title: "Drag words into inputs"
    },
  ],
  word_bank_alignment: "vertical",
  cue_count: 2,
  input_size: "small", // small, large, medium, xlarge
  show_i_dont_know: true,
  show_button: true,
  show_progress: true,
  progress_total_time: true,
};
```

# Untested Examples MAY NOT WORK

## Example `.json` file

```json
[
  {
    "cue": "text1",
    "text": "<p>Pulvinar dapibus platea urna sociis curae; maecenas praesent torquent. Ad sem Justo a praesent lorem sed ullamcorper pharetra dui netus maecenas. Congue quam. Sed Cubilia dis vivamus arcu per rhoncus litora euismod phasellus imperdiet. Convallis a class, scelerisque nullam venenatis condimentum id tincidunt sodales fusce felis. Non accumsan fermentum adipiscing consectetuer dignissim felis eleifend ut condimentum. Vulputate cubilia ad amet leo netus pellentesque viverra hendrerit porta hac. Lectus Eros turpis litora tellus. Nunc magna. Nisl, habitasse vivamus eget.</p>",
    "target": "text 1",
    "title": "Title from JSON"
  },
  {
    "cue_list": [
      "multiple cue 1",
      "multiple cue 2",
      "multiple cue 3",
      "multiple cue 4",
      "multiple cue 5"
    ],
    "target": "text 2"
  },
  {
    "image": "https://www.webpagefx.com/blog/images/cdn.designinstruct.com/files/582-how-to-image-placeholders/generic-image-placeholder.png",
    "cue": "image caption",
    "target": "text 3"
  }
]
```

## Adaptive Spacing

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "button",
      cue: "Trial 1",
      buttons: ["Success", "Failure"],
    },
    {
      response_type: "button",
      cue: "Trial 2",
      buttons: ["Success", "Failure"],
    },
    {
      response_type: "button",
      cue: "Trial 3",
      buttons: ["Success", "Failure"],
    },
  ],
  forced_response: true,
  on_stimulus_start: (hook) => {
    console.log("start");
  },
  on_stimulus_end: (hook, stimulus) => {
    const db = hook.getLastData();
    let _timeline = hook.getRemainingStimuli();
    if (db.response == "Failure") {
      _timeline.unshift(stimulus);
      hook.setTimeline(_timeline);
    } else if (!stimMap[stimulus._id]) {
      _timeline.push(stimulus);
      hook.setTimeline(_timeline);
    }
    stimMap[stimulus._id] = true;

    console.log("end", stimulus._id, hook.getLastData());
  },
};
```

## Audio

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "button",
      buttons: ["yes", "no"],
      cue: "Placeholder cue",
      audio_file: "spongebob.mp3",
    },
  ],
  input_size: "small", // small, large, medium, xlarge
  show_button: false,
  show_repeat: true,
  show_repeat_minimum_time: 3000,
  show_progress: true,
  response_count: 0,
  progress_total_time: true,
};
```

## Automated Scoring

```js
var trial = {
  type: "pcllab-core",
  //stimuli: 'How are you'
  title: "Cued Recall Panel Test",
  stimuli: [
    {
      cue: "How do you greet a human?",
      //target: 'hello',
      target_list: ["Bork bork", "I'm a dog."],
      response_count: 2,
    },
    {
      cue: "Are tomatoes fruits or vegetables?",
      target: "fruits",
    },
  ],
  input_size: "small",
  response_box_align: "left",
  randomize: true,
  isi_time: 500,
  cue_count: 1,
  minimum_time: 1000,
  scoring_strategy: "ultron",
  scoring_params: {
    models: ["bow", "feature_based"],
    classifier: "bow_fb-sick",
  },
  // maximum_time: 3000,
  show_button: true,
  show_progress: true,
  progress_total_time: true,
  show_i_dont_know: true,
};
```

## Button

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "button",
      cue: "Is CS basically math?",
      buttons: ["Yes", "No", "Maybe", "Some of the above", "All of the above"],
      target: "All of the above",
      // response_panel_title: 'Radio Panel Title',
    },
    {
      response_type: "button",
      cue: "Is CS basically math?",
      buttons: ["Yes", "No", "Maybe", "Some of the above", "All of the above"],
      target: "All of the above",
      // response_panel_title: 'Radio Panel Title',
    },
  ],
  button_color_class: "btn-light-green",
  scoring_strategy: "ultron",
  scoring_params: { models: ["bow"], classifier: "bow_fb-sick	" },
  // show_button: true,
  // show_i_dont_know: true,
  forced_response: true,
  // progress_total_time: true
};
```

## Experimenter Paced

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    { cue: "Vim or Emacs", target: "Vim" },
    { cue: "Tabs or Spaces", target: "Tabs" },
    { cue: "Should pineapples be put on pizza?", target: "Absolutely" },
  ],
  input_size: "xlarge", // small, large, medium, xlarge
  show_i_dont_know: true,
  show_button: true,
  // maximum_time: 5000,
  show_progress: true,
  progress_total_time: true,
  correct_feedback: true,
  correct_feedback_time: 3000,
};
```

## Free Recall

````js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "free_recall",
      targets: ["A", "B", "C"],
      // response_panel_title: 'Radio Panel Title',
    },
  ],
  button_color_class: "btn-cyan",
  // scoring_strategy: 'ultron',
  // scoring_params: { models: ['bow'], classifier: 'bow_fb-sick	' },
  show_button: true,
  // show_i_dont_know: true,
  forced_response: true,
  show_progress: true,
  // progress_total_time: true
};
```
```;
````

## ISI

```js
const _cue = "Vim or Emacs";
const stop_sign = {
  type: "pcllab-form",
  title: "Form",
  questions: [
    [
      {
        question: "How old are you?",
        name: "age",
        type: "number",
      },
    ],
  ],
};
const trial1 = {
  type: "pcllab-core",
  timing_post_trial: 250,
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "study_items",
      cue: () => {
        return _cue;
      },
      target: "Vim",
    },
    {
      response_type: "study_items",
      cue: () => {
        return _cue;
      },
      target: "Vim",
    },
    {
      response_type: "study_items",
      cue: () => {
        return _cue;
      },
      target: "Vim",
    },
  ],
  feedback: false,
  show_i_dont_know: true,
  minimum_time: 0,
  show_button: true,
  isi: 250,
  input_size: "small",
  feedback_html: (data) => {
    return `<p>${data.pop().response}</p>`;
  },
  done_callback: (data) => {
    console.log(data);
  },
};
```

## Panel

```js
var trial = {
  type: "pcllab-core",
  //stimuli: 'How are you'
  title: "Cued Recall Panel Test",
  stimuli: [
    {
      response_panel_title: "Response Panel Header",
      cue: "This is a test cue",
      cue_panel_title: "Panel header",
      image:
        "https://www.webpagefx.com/blog/images/cdn.designinstruct.com/files/582-how-to-image-placeholders/generic-image-placeholder.png",
      image_panel_title: "Image Panel Header",
      cue_list: ["cue 1", "cue 2", "cue 3", "cue 4", "cue 5"],
      cue_list_panel_title: "Cue List Panel Header",
      text: "<p>Pulvinar dapibus platea urna sociis curae; maecenas praesent torquent. Ad sem Justo a praesent lorem sed ullamcorper pharetra dui netus maecenas. Congue quam. Sed Cubilia dis vivamus arcu per rhoncus litora euismod phasellus imperdiet. Convallis a class, scelerisque nullam venenatis condimentum id tincidunt sodales fusce felis. Non accumsan fermentum adipiscing consectetuer dignissim felis eleifend ut condimentum. Vulputate cubilia ad amet leo netus pellentesque viverra hendrerit porta hac. Lectus Eros turpis litora tellus. Nunc magna. Nisl, habitasse vivamus eget. Tempus justo mollis. Aptent a nunc dictumst quis cras.</p>",
      text_panel_title: "Text Panel Header",
    },
  ],
  input_size: "small",
  response_box_align: "left",
  randomize: true,
  isi_time: 0,
  cue_count: 2,
  minimum_time: 1000,
  // maximum_time: 3000,
  show_button: true,
  show_progress: true,
  progress_total_time: true,
  show_i_dont_know: true,
};
```

## Radio

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "radio",
      cue: "Is CS basically math?",
      response_list: () => {
        return ["Yes", "No", "Maybe", "Some of the above", "All of the above"];
      },
      // response_panel_title: 'Radio Panel Title',
      radio_title: "Choose your option",
    },
  ],
  show_button: true,
  show_i_dont_know: true,
  forced_response: true,
  // progress_total_time: true
};
```

## Slider

```js
const trial1 = {
  type: "pcllab-core",
  title: "Cued Recall Experimenter Paced",
  stimuli: [
    {
      response_type: "slider",
      cue: "Is CS basically math?",
      slider_label_left: "Yes",
      slider_label_right: "Absolutely",
      slider_min: 0,
      slider_max: 50,
    },
  ],
  show_button: true,
  show_i_dont_know: true,
  // progress_total_time: true
};
```
