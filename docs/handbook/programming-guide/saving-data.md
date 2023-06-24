# End Experiment and Save Data

## End screen (in person)
```js
on_finish: () => {
$("#jspsych-content").css("text-align", "center");
$("#jspsych-content").html(`
<h2>Thank you for your participation!</h2><br>
<h4>Please remain seated and quiet until everyone else is finished</h4><br>
`);
}
```

## Redirect to website (Online)

### SONA

### mTurk
Completion_code is a variable generated earlier in the experiment that directs participants to copy the code to mTurk.
```js
on_finish: () => {
$("#jspsych-content").css("text-align", "left");
$("#jspsych-content").html(`
<h3>Thank you for your participation!</h3><br>
${completion_code}
`);
}
```

## Save to Mogo Database on Jarvis
```js
let myData = jsPsych.data.dataAsJSON(); // Data for the experiment
$.ajax(
    "https://jarvis.psych.purdue.edu/api/v1/experiments/data/63d6993fefcff46cd8bf2d6c",
    {
    data: myData,
    contentType: "application/json",
    type: "POST",
    }
);
```

## Save to CSV
```js
if (DOWNLOAD_CSV) {
    jsPsych.data.localSave(
    `${EXPERIMENT_NAME}-${subNum}-${this.condition}.csv`,
    "csv"
    );
}
```
