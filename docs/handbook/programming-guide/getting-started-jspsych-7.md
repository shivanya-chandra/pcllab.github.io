# Modern Workflow Tutorial

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

```bash title="Terminal
Include pages to manually assign conditions before the experiment? (y/N)
```

Follow the instructions and finish setup by installing the dependencies.

```bash title="Terminal > /sample-experiment"
# If a folder was created, cd into the directory
cd sample-exp

npm install
```

Finally, you should have a file structure that looks like this.

```
📂 sample-exp
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

It's time to add new trials. First we have to install the desired plugins. We will install `@jspsych/plugin-instructions` to show instructions and `@pcllab/plugin-free-recall` to show a free recall trial.

With this modern workflow, we can install plugins from the terminal. These plugins are hosted on [npm](https://npmjs.com), a registry for javascript packages.

```bash title="> /sample-experiment"
# we can use official jsPsych plugins
npm i @jspsych/plugin-instructions

# we can also have our own custom developed plugins
npm i @pcllab/plugin-free-recall
```

??? info "Using Local Plugins"

    It is still possible to use plugins located in a local folder. In that case, make sure to import from the relative path. It might look something like this.
    ```js
    import jsPsychInstructions from "../plugins/plugin-instructions";
    ```

    This makes it harder to maintain plugin versions, but use it if you need to.

Add the plugin imports at the top of the file.

```js title="experiment.js"
import jsPsychInstructions from "@jspsych/plugin-instructions";

import pcllabFreeRecall from "@pcllab/plugin-free-recall";
```

Documentation for `@pcllab/plugins` are on Github. Take a look at [`@pcllab/plugin-free-recall`](https://github.com/PCLLAB/plugins/tree/main/packages/plugin-free-recall){target="\_blank" rel="noreferrer"}.

Documentation for `@jspsych` plugins are on the jsPsych website. Take a look at [`@jspsych/plugin-instructions`](https://www.jspsych.org/7.3/plugins/instructions/){target="\_blank" rel="noreferrer"}.

```js title="experiment.ts"
// ...

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

//...
```

## Step 3: Testing experiment

```bash title="> /sample-exp"
npm dev
```

Head to [`http://localhost:5173/`](`http://localhost:5173/`){target="\_blank" rel="noreferrer"} to run through your experiment.

While this is running, any change you make to your experiment will cause the page at `http://localhost:5173/` to reload with your changes!

To stop the development server, press ++ctrl+c++ (on MacOS as well!) in the terminal where you ran the original command. You can also just close the terminal if you prefer the nuclear approach.

## Step 3: Saving data to Jarvis

```js
//...

const jsPsych = initJsPsych({
  on_finish: () => {
    fetch("DATA_ENDPOINT_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsPsych.data.get().json(),
    });
  },
});

//...
```

## Step 4: Uploading experiment to Jarvis

## Final Demo Code

Here is the final code.

[Try the demo]()

```js title="experiment.ts"
--8<-- "demos/sample-exp/src/experiment.ts"
```
