# Free Recall




## jsPsych 5

```js
const freeRecall = {
  type: "pcllab-core",
  stimuli: [
    {
      response_type: "study_items",
      cue: "What is the answer to life the universe and everything?",
      target: "42",
    },
    { response_type: "free_recall" },
  ],
  response_count: 0,
  show_button: true,
};
```

## Free-Recall-List
pcllab-free-recall-list is a more updated plugin for free recall tasks in terms of visuals and function. It contains an automatic scoring function, where the parameter word_file can be set to a file that contains all correct answers, and the parameter exact_response determines if the answer needs to be an exact match to be given credit.

```js
let freeRecall = {
  type: "pcllab-free-recall-list",
  instructions: "",
  minimum_time: 300000,
  maximum_time: 300000,
  show_progress: true,
  show_instructions: true,
  word_file: wordfile,
  scroll_list: true,
  allow_delete: false,
  exact_response: true,
  show_timer: false,
  data: {
    Phase: "Free Recall",
  },
  title: "",
};
```