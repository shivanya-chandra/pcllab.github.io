## Overview
[jsPsych] (https://www.jspsych.org/7.0/overview/timeline/) has a nice description of different ways of using the timeline. In our experiments, this.timeline is initialized as an empty array at the beginning of the program. To add event to the timeline, we use this.timeline.push(functionName) within the buildTimeline() function. See an example:
```js
const start = {
    type: "pcllab-core",
    stimuli: [this.instructions["welcome"]],
    show_button: true,
    button_text: "Continue",
    response_count: 0,
    minimum_time: 7000,
};
this.timeline.push(start);
```

## Adding events
We can call this.timeline.push(functionName) after each function, but it can be helpful to have a section where multiple functions were pushed. This is helpful when we test specific parts of the experiment and need to comment out lots of functions. The only exception is that if there are loops in the experiment and the function is embedded in the loop, this.timeline.push() has to stay within the loop.

