# Modern Workflow Tutorial

## With Build Step

### Set up new experiments

Requirements:

- Node.js

### Step 1: Initialize experiment files

Here we are using the [`pcllab/create-exp`](https://github.com/PCLLAB/create-exp) tool to quickly scaffold a new experiment.

Open a terminal where you want to create the experiment. If you are using VSCode, press ++ctrl+j++ to open a terminal in the current directory.

```bash title="Terminal"
# Create a new folder
npm create @pcllab/exp

# Create experiment in current folder
npm create @pcllab/exp .
```

#### Manually assign conditions

```bash title="Terminal"
Include pages to manually assign conditions before the experiment? (y/N)
```

If you would like a page to assign and verify experiment parameters, this option will generate those files. You would start the experiment at `/begin.html`, which leads to `/check.html`, which directs to `/index.html`. `begin.html` can be modified to have the desired form fields.

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

### Step 2: Adding trials and using plugins

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
const jsPsych = initJsPsych();

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
```

### Step 3: Testing experiment

```bash title="> /sample-exp"
npm dev
```

Head to [`http://localhost:5173/`](`http://localhost:5173/`){target="\_blank" rel="noreferrer"} to run through your experiment.

While this is running, any change you make to your experiment will cause the page at `http://localhost:5173/` to reload with your changes!

To stop the development server, press ++ctrl+c++ (on MacOS as well!) in the terminal where you ran the original command. You can also just close the terminal if you prefer the nuclear approach.

### Step 4 Saving data to Jarvis

Add an `on_finish` callback to send the data to a specific endpoint.

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

### Step 5: Uploading experiment to Jarvis

The files need to be built into their final form. This transpiles Typescript into extremely terse Javascript and puts all the dependencies into fewer files.

```bash title="> /sample-exp"
npm build
```

Then place all files in the `dist` folder into the desired destination on Jarvis.

### Final Demo Code

Here is the final code.

```js title="experiment.ts"
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
```

## With `<script>` tags

### Step 1: HTML files

First create an `index.html` file. This is as simple as it gets. Notice the `<script>` for jspsych, the `<link>` for the css for jspsych, and the final `<script>` including the `experiment.js` file we are about to make.

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/lightbulb.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Experiment</title>

    <script src="https://unpkg.com/jspsych@7.3.2"></script>
    <link
      href="https://unpkg.com/jspsych@7.3.2/css/jspsych.css"
      rel="stylesheet"
      type="text/css"
    />

    <script src="./experiment.js"></script>
  </head>
  <body></body>
</html>
```

#### Manually assign conditions

If you would like a page to assign and verify experiment parameters, here are template `begin.html` and `check.html` files which can be modified as desired. You would start the experiment at `/begin.html`, which leads to `/check.html`, which directs to `/index.html`.

??? info "begin.html"

    ```html
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/lightbulb.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Begin</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style type="text/tailwindcss">
            @layer base {
              input,
              textarea,
              select {
                @apply border rounded px-2;
              }
              input,
              select {
                @apply h-10;
              }
            }
          </style>
        </head>
        <body>
          <div class="max-w-screen-sm mx-auto mt-20 rounded overflow-clip shadow-xl">
            <h1 class="bg-blue-600 text-white text-2xl font-semibold p-6">
              Enter Subject Information
            </h1>
            <form class="p-6" action="check.html" method="get">
              <div id="fields" class="space-y-4"></div>
              <button
                type="submit"
                class="bg-blue-500 text-white text-xl px-6 py-2 rounded-sm block mx-auto mt-6"
              >
                Start
              </button>
            </form>
          </div>
          <script>
            const formFields = {
              subNum: {
                type: "input",
                label: "Subject Number",
                placeholder: "e.g. 1234",
              },
              session: {
                type: "select",
                label: "Session",
                options: ["Standard", "Expanding", "Test"],
              },
              set: {
                type: "select",
                label: "Set",
                options: ["A", "B"],
              },
              condition: {
                type: "select",
                label: "Condition",
                options: ["Retrieval", "Study", "Recall"],
              },
            };

            const fields = document.getElementById("fields");
            Object.entries(formFields).forEach(([key, value]) => {
              const group = document.createElement("div");
              if (value.label) {
                const label = document.createElement("label");
                label.htmlFor = key;
                label.textContent = value.label;
                label.className = "inline-block mb-1";

                group.append(label);
              }

              switch (value.type) {
                case "select": {
                  const select = document.createElement("select");
                  select.id = key;
                  select.name = key;
                  select.className = "w-full";

                  value.options.forEach((opt) => {
                    const option = document.createElement("option");
                    option.value = opt;
                    option.textContent = opt;

                    select.append(option);
                  });

                  group.append(select);
                  break;
                }
                case "input": {
                  const input = document.createElement("input");
                  input.type = "text";
                  input.placeholder = value.placeholder;
                  input.id = key;
                  input.name = key;
                  input.className = "w-full";

                  group.append(input);
                }
              }

              fields.append(group);
            });
          </script>

        </body>

      </html>
    ```

??? info "check.html"

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/lightbulb.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Check</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style type="text/tailwindcss">
          @layer base {
            input,
            textarea,
            select {
              @apply border rounded px-2;
            }
            input,
            select {
              @apply h-10;
            }
          }
        </style>
        <style>
          tbody > :nth-child(odd) {
            @apply bg-gray-100;
          }
        </style>
      </head>
      <body>
        <div class="max-w-screen-sm mx-auto mt-20 rounded overflow-clip shadow-xl">
          <h1 class="bg-yellow-600 text-white text-2xl font-semibold p-6">Check</h1>
          <div class="p-6 space-y-4">
            <p>
              Make sure that the subject information is correct. <br />If not, click
              "Back" and re-enter the information.
            </p>
            <table class="w-full text-left text-xl leading-10">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody id="table-body"></tbody>
            </table>

            <div class="mt-6 text-center space-x-4">
              <button
                id="backBtn"
                class="bg-cyan-500 text-white text-xl px-6 py-2 rounded-sm"
              >
                Back
              </button>
              <button
                id="nextBtn"
                class="bg-blue-500 text-white text-xl px-6 py-2 rounded-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <script>
          const urlParams = new URLSearchParams(window.location.search);

          const tbody = document.getElementById("table-body");
          urlParams.forEach((value, key) => {
            const tr = document.createElement("tr");

            const keyTd = document.createElement("td");
            keyTd.textContent = key;
            const valueTd = document.createElement("td");
            valueTd.textContent = value;

            tr.append(keyTd, valueTd);
            tbody.append(tr);
          });

          const backBtn = document.getElementById("backBtn");
          const nextBtn = document.getElementById("nextBtn");
          backBtn.addEventListener("click", () =>
            window.location.assign("./begin.html")
          );
          nextBtn.addEventListener("click", () =>
            window.location.assign(`./${window.location.search}`)
          );
        </script>
      </body>
    </html>
    ```

### Step 2: Adding plugins and dependencies

It's time to add new trials. First we have to install the desired plugins. We will install `@jspsych/plugin-instructions` to show instructions and `@pcllab/plugin-free-recall` to show a free recall trial.

These need to be added after the jspsych script and before the experiment script, because scripts are loaded in order. While `@jspsych/plugin-instructions` can be added like so...

```html
<!-- below jspsych-->

<script src="https://unpkg.com/@jspsych/plugin-instructions"></script>

<!-- above experiment.js -->
```

`@pcllab/plugin-free-recall` has a dependency on `react` and `tailwind` so those must be included as well. Adding the plugins and their dependencies looks like this.

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/lightbulb.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Experiment</title>
    <!-- necessary for plugin-free-recall -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- necessary for plugin-free-recall -->
    <style type="text/tailwindcss">
      @layer base {
        input,
        textarea,
        select {
          @apply border rounded px-2;
        }
        input,
        select {
          @apply h-10;
        }
      }
    </style>
    <script src="https://unpkg.com/jspsych@7.3.2"></script>
    <link
      href="https://unpkg.com/jspsych@7.3.2/css/jspsych.css"
      rel="stylesheet"
      type="text/css"
    />

    <!-- necessary for plugin-free-recall -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!-- necessary for plugin-free-recall -->
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="https://unpkg.com/@jspsych/plugin-instructions"></script>
    <script src="https://unpkg.com/@pcllab/plugin-free-recall"></script>

    <script src="./experiment.js"></script>
  </head>
  <body></body>
</html>
```

Next create an `experiment.js` file. The plugins and functions from jspsych are global variables that we can use immediately.

Documentation for `@pcllab/plugins` are on Github. Take a look at [`@pcllab/plugin-free-recall`](https://github.com/PCLLAB/plugins/tree/main/packages/plugin-free-recall){target="\_blank" rel="noreferrer"}.

Documentation for `@jspsych` plugins are on the jsPsych website. Take a look at [`@jspsych/plugin-instructions`](https://www.jspsych.org/7.3/plugins/instructions/){target="\_blank" rel="noreferrer"}.

```js title="experiment.ts"
const jsPsych = initJsPsych();

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
```

### Step 3: Testing experiment

While you can just open the `index.html` file, loading files from local folders (like images or audio), will not work because the browser does not allow file system access.

You have to serve the files from a local server. If you have Node.js installed, you can run the following command to get the experiment running and available at `http://127.0.0.1:8080`.

```bash title="> /sample-exp"
npx http-server -c-1
```

Other methods of setting up a local server are available.

### Step 4: Saving data to Jarvis

Add an `on_finish` callback to send the data to a specific endpoint.

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

### Step 5: Uploading experiment to Jarvis

Place all files into the desired destination on Jarvis.

### Final Code

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/lightbulb.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Experiment</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
      @layer base {
        input,
        textarea,
        select {
          @apply border rounded px-2;
        }
        input,
        select {
          @apply h-10;
        }
      }
    </style>
    <script src="https://unpkg.com/jspsych@7.3.2"></script>
    <link
      href="https://unpkg.com/jspsych@7.3.2/css/jspsych.css"
      rel="stylesheet"
      type="text/css"
    />
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="https://unpkg.com/@jspsych/plugin-instructions"></script>
    <script src="https://unpkg.com/@pcllab/plugin-free-recall"></script>

    <script src="./experiment.js"></script>
  </head>
  <body></body>
</html>
```

```js title="experiment.js"
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
```
