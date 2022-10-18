# Modern Workflow Tutorial

!!! warning

    This page is still under construction

## Set up new experiments

Requirements:

- Node.js

## Step 1: Intialize experiment files

Here we are using the [`jspsych-builder`](https://github.com/bjoluc/jspsych-builder) CLI (command line interface) to automatically create files and a nice development environment.

Create a folder for your experiment and run the `jspsych-builder` command in that directory.

??? tip "Create folder and cd (change directory) within terminal"

    ```bash
    mkdir sample-experiment
    cd sample-experiment
    ```

```bash title="> /sample-experiment"
npx jspsych-builder init
```

After answering the questions and letting `jspsych-builder` do its magic, you should have a file structure that looks like this.

```
📂 sample-experiment
--  📂 assets
--  📂 node_modules
--  📂 src
----  📄 experiment.js
--  📂 styles
--  📄 package-lock.json
--  📄 package.json
```

By default, `jspsych-builder` will add some extra clutter we don't need. Feel free to copy the more minimal `experiment.js` below and remove anything you don't need.

Feel free to remove any comments and plugins you don't need. For instance, if your experiment doesn't use large image, audio, or video files, the `PreloadPlugin` serves no purpose.

=== "Decluttered experiment.js"

    ```js title="experiment.js"
    import "../styles/main.scss";

    import FullscreenPlugin from "@jspsych/plugin-fullscreen";
    import PreloadPlugin from "@jspsych/plugin-preload";
    import { initJsPsych } from "jspsych";

    export async function run({ assetPaths, input = {}, environment, title, version }) {
        const jsPsych = initJsPsych();

        const timeline = [];

        // Preload assets
        timeline.push({
            type: PreloadPlugin,
            images: assetPaths.images,
            audio: assetPaths.audio,
            video: assetPaths.video,
        });

        // Switch to fullscreen
        timeline.push({
            type: FullscreenPlugin,
            fullscreen_mode: true,
        });

        // Add experiment trials here

        await jsPsych.run(timeline);
    }
    ```

=== "Default experiment.js"

    ```js
    /**
     * @title sample-experiment
     * @description simple example using jspsych-builder
     * @version 0.1.0
     *
     * @assets assets/
     */

    import "../styles/main.scss";

    import FullscreenPlugin from "@jspsych/plugin-fullscreen";
    import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";
    import PreloadPlugin from "@jspsych/plugin-preload";
    import { initJsPsych } from "jspsych";

    /**
     * This function will be executed by jsPsych Builder and is expected to run the jsPsych experiment
     *
     * @type {import("jspsych-builder").RunFunction}
     */
    export async function run({ assetPaths, input = {}, environment, title, version }) {
        const jsPsych = initJsPsych();

        const timeline = [];

        // Preload assets
        timeline.push({
            type: PreloadPlugin,
            images: assetPaths.images,
            audio: assetPaths.audio,
            video: assetPaths.video,
        });

        // Welcome screen
        timeline.push({
            type: HtmlKeyboardResponsePlugin,
            stimulus: "<p>Welcome to basic!<p/>",
        });

        // Switch to fullscreen
        timeline.push({
            type: FullscreenPlugin,
            fullscreen_mode: true,
        });

        await jsPsych.run(timeline);

        // Return the jsPsych instance so jsPsych Builder can access the experiment results (remove this
        // if you handle results yourself, be it here or in `on_finish()`)
        return jsPsych;
    }
    ```

## Step 2: Adding trials and using plugins

It's time to add new trials. First we have to install the desired plugins. We will install `@pcllab/consent-form-plugin` to show a consent page before the experiment starts and `@jspsych/plugin-instructions` to show instructions.

With this modern workflow, we can install plugins from the terminal. These plugins are hosted on [npm](https://npmjs.com), a registry for javascript packages.

```bash title="> /sample-experiment"
# we can use official jsPsych plugins
npm i @jspsych/plugin-instructions

# we can also have our own custom developed plugins
npm i @pcllab/consent-form-plugin
```

??? info "Using Local Plugins"

    It is still possible to use plugins located in a local folder. In that case, make sure to import from the relative path. It might look something like this.
    ```js
    import jsPsychInstructions from "../plugins/plugin-instructions";
    ```

    This is not recommeneded, since it makes it harder to maintain plugin versions, but use it if you need to.

Add the plugin imports at the top of the file.

```js title="experiment.js"
// These can have arbitrary names, but try to be consistent.
// Javascript default exports/imports are nameless

import jsPsychInstructions from "@jspsych/plugin-instructions";
// is equivalent to
import InstructionsPlugin from "@jspsych/plugin-instructions";

import ConsentFormPlugin from "@pcllab/consent-form-plugin";
```

Add the trials to the timeline. The `@pcllab/consent-form-plugin` takes a url to an HTML file. This can be a local file (located in the `assets` folder) or even an external url. By default, it uses [an example consent form](https://jarvis.psych.purdue.edu/weblab/consent.html){target="\_blank" rel="noreferrer"} hosted on Jarvis.

Documentation for `@pcllab/plugins` are on Github. Take a look at [`@pcllab/consent-form-plugin`](https://github.com/PCLLAB/plugins/tree/main/packages/consent-form-plugin){target="\_blank" rel="noreferrer"}.

Documentation for `@jspsych` plugins are on the jsPsych website. Take a look at [`@jspsych/plugin-instructions`](https://www.jspsych.org/7.3/plugins/instructions/){target="\_blank" rel="noreferrer"}.

```js title="experiment.js"
// ...

timeline.push({
  type: ConsentFormPlugin,
  // Real experiments should have a custom consent form. This is an example.
  // url: assets/consent.html
});

timeline.push({
  type: InstructionsPlugin,
  pages: [
    "Welcome to the experiment. Click next to begin.",
    "This is the second page of instructions.",
    "This is the final page.",
  ],
  show_clickable_nav: true,
});

//...
```

## Step 3: Testing experiment

```bash title="> /sample-experiment"
npm run start
```

Head to [`http://localhost:3000/`](`http://localhost:3000/`){target="\_blank" rel="noreferrer"} to run through your experiment.

While this is running, any change you make to your experiment will cause the page at `http://localhost:3000/` to reload with your changes!

To stop the development server, press `Ctrl + C` (on MacOS as well!) in the terminal where you ran the original command. You can also just close the terminal if you prefer the nuclear approach.

## Step 3: Saving data to Jarvis

## Step 4: Uploading experiment to Jarvis

Here is the final code.

=== "src/experiment.js"

    ```js
    --8<-- "demo/src/experiment.js"
    ```

=== "styles/main.scss"

    ```scss
    --8<-- "demo/styles/main.scss"
    ```
