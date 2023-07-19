# Plugins

<!-- ## Calling Plugins

## Parameters

## Pushing Plugins to Timeline -->

## Editing Plugin Files

### How trial parameters work in `core`

The entry point of a trial using the `core` plugin is under `src/core.js`.

The two arguments are `display_element`, the html element for trial and `trial`, the object containing all the trial's parameters.

Next, you'll see something like the following. This takes the fields from `trial` (or a default value) and adds them as fields of the class. This it is accessible whenever needed as `this.whatever`.

```js title="src/core.js"
this.trial = trial;
this.stimuli = setParameter(trial.stimuli, [], null);
this.randomize = setParameter(trial.randomize, false, "boolean");
// ...etc
```

Then in the `showRecall` method, these values are used to do the trial.

For instance, rendering buttons gets the following arguments. Here, `stimulus` is one item from the array of `this.stimulus`.

```js title="src/core.js"
responseView = new ResponseButtonView(
  $responsePanel,
  this,
  this._data,
  stimulus
);
```

Here is the corresponding file.

```js title="src/views/response/inputView.js"
class InputView {
    constructor($displayElement, coreInstance, dataInstance, stimulus) {
// ... etc
```

So, you have access to all the fields as before. For instance `coreInstance.randomize` is the same as `this.randomize` in `core.js` and `stimulus` is the current object in the `this.stimulus` array.

This is passed further down to the container which can access the stimulus parameters the same way.

```js title="src/views/response/containers/button.js"
class ButtonResponseContainer extends ResponseContainer {
    constructor(generatorInstance, buttonLabel, stimulus, dataInstance) {
// ...etc
```

### Adding new parameters

Take the following hypothetical trial, where `foo`, `bar`, and `foobar` are new paremeters we want to add.

```js
const start = {
  type: "pcllab-core",
  stimuli: [
    {
      foo: true,
    },
    {
      bar: 26,
    },
  ],
  foobar: "Look at me!",
  show_button: true,
  button_text: "Continue",
  response_count: 0,
  minimum_time: 7000,
};
```

`foo` and `bar`, will be accessible as `stimulus.foo` or `stimulus.bar` in the `showRecall` method and wherever `stimulus` is passed.

For, `foobar`, you can add a line like `this.foobar = setParameter(trial.foobar, "default string", "string");`. Then `this.foobar`, will be accessible anywhere in `core.js`.
