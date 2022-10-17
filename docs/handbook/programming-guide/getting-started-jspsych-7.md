# Modern JsPsych Workflow

!!! warning

    This page is still under construction

https://www.jspsych.org/7.3/tutorials/hello-world/

## Set up new experiments

Requirements:

- Node.js

### Using `jspsych-builder`

https://github.com/bjoluc/jspsych-builder

```bash
npx jspsych-builder init
```

## Using plugins

In your terminal

```bash title=" Terminal"
# use plugins from official jsPsych

npm i @jspsych/plugin-instructions

# or use our own

npm i @pcllab/consent-form-plugin
```

```js title="experiment.js"
// These can have arbitrary names, but try to be consistent.
// Javascript default exports/imports are nameless

import jsPsychInstructions from "@jsPsych/plugin-instructions";
// is equivalent to
import InstructionsPlugin from "@jsPsych/plugin-instructions";

import ConsentFormPlugin from "@pcllab/consent-form-plugin";

// skip

const instructions = {
  type: jsPsychInstructions,
  // skip
};

const consent = {
  type: ConsentFormPlugin,
  // skip
};
```

=== "Test"

    ```js
    const test = {}
    ```

=== "Other"

    ```c
    int main() {

    }
    ```

Using `jspsych-builder`

=== "src/experiment.js"

    ```js
    --8<-- "demo/src/experiment.js"
    ```

=== "styles/main.scss"

    ```scss
    --8<-- "demo/styles/main.scss"
    ```
