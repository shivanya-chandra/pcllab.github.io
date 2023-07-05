import "jspsych/css/jspsych.css";
import "./style.css";

import { initJsPsych } from "jspsych";
import jsPsychInstructions from "@jspsych/plugin-instructions";
import pcllabFreeRecall from "@pcllab/plugin-free-recall";

const jsPsych = initJsPsych({
  on_finish: async () => {
    console.log(jsPsych.data.get().json());
    await fetch(
      "https://jarvis.psych.purdue.edu/beta/api/v2/experiments/61fa32135db16e3e8a9ae5fb/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsPsych.data.get().json(),
      }
    );
  },
});

const timeline = [];

timeline.push({
  type: jsPsychInstructions,
  pages: [
    "Welcome to the experiment. Click next to begin.",
    "This is the second page of instructions.",
    "This is the final page.",
  ],
  show_clickable_nav: true,
});

timeline.push({
  type: pcllabFreeRecall,
});

jsPsych.run(timeline);
