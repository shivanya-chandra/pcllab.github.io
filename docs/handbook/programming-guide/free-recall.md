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