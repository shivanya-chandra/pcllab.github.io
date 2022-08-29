# Common Tasks

## Instructions

<details>
  <summary>Click to show related code that makes the snippet work.</summary>

```json
// inside materials/instructions.json
{
  "start": {
    "title": "Study Instructions",
    "text": "Here are some instructions. This can accept html tags for formatting <br><br><b>like this.</b>"
  }
}
```

```js
  // somewhere inside experiment.js
  loadMaterials() {
    const self = this;
    $.when(
      $.getJSON("materials/instructions.json", (data) => {
        self.instructions = data;
      })
    ).then(() => {
      self.buildTimeline();
      self.run();
    });
  }

```

</details>

```js
// inside experiment.js, in a buildTimelines() function or equivalent
const instructionsStart = {
  type: "pcllab-core",
  stimuli: [this.instructions["start"]], // An array of objects describing text to show

  show_button: true, // False will automatically advance once time is up
  minimum_time: 5000, // Time before button appears in ms, Defaults to 0ms
  button_text: "Continue", // Defaults to "Next"

  response_count: 0, // # of input fields, Defaults to 1
};
```

## Study Lists

```js
//Study List
const studyList = {
  type: "pcllab-core",
  title: "Title",
  stimuli: [
    {
      cue_list: ["X", "B", "C"],
      cue_alignment: "vertical",
      target: "Apple",
    },
    {
      cue: "B",
      target: "Ball",
    },
  ],
  cue_alignment: "horizontal", // cue_alignment if not specified in stimuli
  show_cue: true,
  response_count: 0,
  isi_time: 1000, // Time between stimuli in ms
  maximum_time: 12000,
};
```

## Distractor

This requires the `pcllab-distractor-game` plugin to be in the `plugins` folder as well as a `game` folder which contains the `game.html` and `game.js`

```js
const pacman = {
  type: "pcllab-distractor-game",
  time: 5 * 60 * 1000, // game length in ms
  url: "game/game.html",
  sound_disabled: false,
  show_progress: true,
  iframe: true,
  debug: true, // This is helpful when testing the experiment and allows skipping.
};
```

## Free Recall

## Cued Recall

```

```
