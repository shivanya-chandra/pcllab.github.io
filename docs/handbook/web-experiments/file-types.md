# File Types

This page describes each of the different file types that are used for online experiments.

## HTML

These files define different pages. The main page we need to work with is `experiment.html`, which will link the various plugins as well as the main `experiment.js` file.

Here is a section that you will interact with most. Each `jsPsych` plugin you want to use needs to be linked in `experiment.html` with a script tag like below.

```html
<!-- ...inside experiment.html -->
<body>
  ...rest of body

  <!-- Plugins -->
  <script src="./plugins/pcllab-core/plugin.js"></script>
  <!-- ... more plugin scripts -->
  <!-- ... more plugin scripts -->
  <!-- ... more plugin scripts -->
  <script src="./plugins/pcllab-form/plugin.js"></script>

  <script src="./experiment.js"></script>
  <!-- This starts the experiment -->
  <script>
    var e = new Experiment();
  </script>
</body>
```

<details>
  <summary>Click to expand an example <code>experiment.html</code> file.</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./css/pcllab-plugins.css" />

    <title>EXPERIMENT TITLE</title>
  </head>

  <body>
    <div id="experiment_container" class="container-fluid"></div>

    <!-- Bootstrap, Popper.js, and jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>

    <!-- Then jsPsych -->
    <script src="./jspsych.js"></script>

    <!-- ClientJS (Required by pcllab-browser) -->
    <script src="./plugins/pcllab-browser/client.min.js"></script>

    <!-- Plugins -->
    <script src="./plugins/pcllab-core/plugin.js"></script>
    <script src="./plugins/pcllab-browser/plugin.js"></script>
    <script src="./plugins/pcllab-consent-form/plugin.js"></script>
    <script src="./plugins/pcllab-form/plugin.js"></script>

    <script src="./experiment.js"></script>
    <script>
      var e = new Experiment();
    </script>
  </body>
</html>
```

</details>

## CSS

These files define styling for web pages. Most experiments won't require any additions other than the files included in the base `experiment.html`. Some plugins may require linking a css file, and previous experiments can be used as example.

This is how styles are included to an experiment.
```html
<!-- ...inside experiment.html -->

<head>
  ...rest of head

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./css/pcllab-plugins.css" />
  <!-- more css files can be included here -->

  <title>EXPERIMENT TITLE</title>
</head>
```

## JS

These files are where the programming logic takes place. The `experiment.js` file is where each experiment is defined. There are also many `plugin.js` files which you will use, but do not ever need to edit manually.

Each `jsPsych` plugin you want to use needs to be linked in `experiment.html` with a script tag like below.

```html
<!-- ...inside experiment.html -->
<body>
  ...rest of body

  <!-- Plugins -->
  <script src="./plugins/pcllab-core/plugin.js"></script>
  <!-- ... more plugin scripts -->
  <!-- ... more plugin scripts -->
  <!-- ... more plugin scripts -->
  <script src="./plugins/pcllab-form/plugin.js"></script>

  <script src="./experiment.js"></script>
  <!-- This starts the experiment -->
  <script>
    var e = new Experiment();
  </script>
</body>
```

<details>
<summary>Click to expand an example <code>experiment.js</code></summary>

```js
const EXPERIMENT_FILES = {
  MATCH_PAIRS: "materials/matchPairs.json",
  TEST: "materials/test.json",
  INSTRUCTIONS: "materials/instructions.json",
};

class Experiment {
  constructor() {
    this.timeline = [];
    this.loadMaterials();
  }

  counterbalance() {
    this.urlData = jsPsych.data.urlVariables();

    this.userData = {
      subject: this.urlData.id,
      condition: this.urlData.condition,
      date: new Date().toISOString(),
    };

    jsPsych.data.addProperties(this.userData);
  }

  // Load Instructions
  loadMaterials() {
    const self = this;
    $.when(
      $.getJSON(EXPERIMENT_FILES.INSTRUCTIONS, (data) => {
        self.instructions = data;
      })
    ).then(() => {
      self.counterbalance();
      self.buildTimeline();
      self.run();
    });
  }

  buildTimeline() {
    const instructionsWelcome = {
      type: "pcllab-core",
      stimuli: [this.instructions["welcome"]],
      show_button: true,
      button_text: "Next",
      response_count: 0,
    };

    const instructionsDemographics = {
      type: "pcllab-core",
      stimuli: [this.instructions["demographics"]],
      response_count: 0,
      show_button: true,
      button_text: "Next",
      minimum_time: 5000,
    };

    const demographics = {
      type: "pcllab-form",
      demographics: true,
      data: {
        period: "demographics",
      },
    };

    const instructionsTest = {
      type: "pcllab-core",
      stimuli: [this.instructions["test"]],
      show_button: true,
      button_text: "Begin",
      response_count: 0,
      minimum_time: 7000,
    };

    //Study List
    const studyList = {
      type: "pcllab-core",
      title: "Title",
      stimuli: [
        {
          cue_list: ["X", "B", "C"],
          cue_alignment: "horizontal",
          target: "Apple",
        },
        {
          cue: "B",
          target: "Ball",
        },
      ],
      cue_alignment: "horizontal",
      response_count: 0,
      isi_time: 1000,
      cue_count: 0,
      maximum_time: 12000,
      show_cue: true,
    };

    // Instructions End
    const instructionsEnd = {
      type: "pcllab-core",
      stimuli: [this.instructions["end"]],
      show_button: true,
      button_text: "Continue",
      response_count: 0,
      minimum_time: 5000,
    };

    const debrief = {
      type: "pcllab-core",
      stimuli: [this.instructions["debrief"]],
      response_count: 0,
      show_button: true,
      button_text: "End",
      minimum_time: 10000,
    };

    this.timeline.push(instructionsWelcome);

    this.timeline.push(instructionsDemographics);
    this.timeline.push(demographics);

    this.timeline.push(instructionsTest);
    this.timeline.push(studyList);

    this.timeline.push(instructionsEnd);
    this.timeline.push(debrief);
  }

  run() {
    jsPsych.init({
      display_element: $("div#experiment_container"),
      timeline: this.timeline,
      fullscreen: true,
      on_finish: () => {
        $("#jspsych-content").css("text-align", "center");
        $("#jspsych-content").html(`
        <h2>Thank you for your participation!</h2><br>
        <h4>Please remain seated and quiet until everyone else is finished</h4><br>
        `);

        const myData = jsPsych.data.dataAsJSON(); // Data for the experiment
        $.ajax(
          "https://jarvis.psych.purdue.edu/api/v1/experiments/data/6fakecf1b03bbc736b3f18a3",
          {
            data: myData,
            contentType: "application/json",
            type: "POST",
          }
        );
      },
    });
  }
}
```

</details>

## JSON

JSON files are used to store text based information. This is a good place for instructions and similar content, to avoid filling `experiment.js` with text that is that not relevant to experiment logic.

```json
// materials/instruction.json
{
  "test": {
    "title": "Final Test Instructions",
    "text": "You will have 30 minutes to take a 60-question test on the content you previously learned."
  },
  "pacman": {
    "title": "Pacman Game",
    "text": "<h3>You will now play Pacman for 5min. You can control Pac-Man using the arrow keys on your keyboard. <br><br> Click ‘Continue’ when you are ready to begin the game.</h3>"
  },
  "testAntiCheat": {
    "title": "Please do not use any notes or other aids during this test.",
    "text": "<h3>Your score will not negatively affect you in any way. Just try your best! By taking this test without notes or other aids, we will be able to accurately interpret the data from our experiment. Thanks!</h3>"
  },
  "activityPlayAgainInstructions": {
    "title": "Play Again.",
    "text": "<h3>You still have time left for the experiment, so please play again for full credit. But this time, let's see if you can finish the game in fewer trials! Press 'Continue' when you are ready to start the game again.</h3>"
  },

  "overviewVideo": {
    "title": "Overview",
    "text": "<h3>You will start off the experiment by watching a lecture on the biological concept of taxonomic rank. Please watch the full 5.5min video so that you are ready for the other parts of the experiment. <br> Make sure to turn your volume on.</h3>"
  }
}
```

These files need to loaded in `experiment.js` in to be accessible. In the following code, the instructions are made accessible as `this.instructions`.

```js
...inside experiment.js

const EXPERIMENT_FILES = {
  INSTRUCTIONS: "materials/instructions.json",
};
class Experiment {

  loadMaterials() {
    const self = this;
    $.when(
      $.getJSON(EXPERIMENT_FILES.INSTRUCTIONS, (data) => {
        // the json file is accessible as this.instructions
        self.instructions = data;
      })
    ).then(() => {
      self.counterbalance();
      self.buildTimeline();
      self.run();
    });
  }

  buildTimeline() {
    const instructionsWelcome = {
      type: "pcllab-core",
      // the "welcome" object is used by a plugin to display text
      // the surrounding [], indicate it is passed as an element of a list
      stimuli: [this.instructions["welcome"]],
      show_button: true,
      button_text: "Next",
      response_count: 0,
    };

    ...rest of buildTimeline()
  }

  ...rest of class Experiment
}
```

## MD

Markdown files are used to write formatted text in a human readable way. Rarely used in experiments, but often used for documentation. The content of this website is written using markdown.

```md
## MD

Markdown files are used to write formatted text in a human readable way. Rarely used in experiments, but often used for documentation. The content of this website is written using markdown.
```
