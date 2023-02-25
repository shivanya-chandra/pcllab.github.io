# Modern Workflow Tutorial

!!! warning

    This page is still under construction

## Set up new experiments

Requirements:

- Node.js

## Step 1: Initialize experiment files

Here we are using the [`pcllab/create-exp`](https://github.com/PCLLAB/create-exp) tool to quickly scaffold a new experiment.

Open a terminal where you want to create the experiment. If you are using VSCode, press ++ctrl+j++ to open a terminal in the current directory.

```bash title="Terminal"
# Create a new folder
npm create @pcllab/exp

# Create experiment in current folder
npm create @pcllab/exp .
```

Follow the instructions and finish setup by installing the dependencies.

```bash title="Terminal > /sample-experiment"
# If a folder was created, cd into the directory
cd sample-experiment

npm install
```

Finally, you should have a file structure that looks like this.

```
📂 sample-experiment
--  📂 node_modules
--  📂 public
--  📂 src
----  📄 experiment.js
----  📄 style.css
--  📄 index.html
--  📄 package.json
--  📄 postcss.config.cjs
--  📄 tailwind.config.cjs
--  📄 tsconfig.json
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
npm dev
```

Head to [`http://localhost:5173/`](`http://localhost:5173/`){target="\_blank" rel="noreferrer"} to run through your experiment.

While this is running, any change you make to your experiment will cause the page at `http://localhost:5173/` to reload with your changes!

To stop the development server, press ++ctrl+c++ (on MacOS as well!) in the terminal where you ran the original command. You can also just close the terminal if you prefer the nuclear approach.

## Step 3: Saving data to Jarvis

```js
//...

await jsPsych.run(timeline);

fetch("JARVIS_ENDPOINT_HERE", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(jsPsych.data.get()),
});

//...
```

## Step 4: Uploading experiment to Jarvis

## Final Demo Code

Here is the final code.

[Try the demo]()

```js title="experiment.js"
--8<-- "demos/demo/src/experiment.js"
```
