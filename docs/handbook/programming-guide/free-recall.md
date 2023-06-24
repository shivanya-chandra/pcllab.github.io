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