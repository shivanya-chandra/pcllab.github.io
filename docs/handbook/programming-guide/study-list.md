# Present Stimuli/Study List

## Loops

### Study cue-target pair
```json
// materials/stimuli.json
[{"cue":"starch","target":"flour","candidate":"potato","nonword":"vot","unrelated":"","learnTask":"study","LDTCondition":"nonword"},
{"cue":"jewel","target":"ruby","candidate":"diamond","nonword":"scincs","unrelated":"","learnTask":"retrieve","LDTCondition":"weak"},
{"cue":"bolt","target":"nut","candidate":"lightning","nonword":"clett","unrelated":"bird","learnTask":"retrieveStudy","LDTCondition":"unrelated"}]
```

```js
...inside experiment.js
//randomize the stimuli
this.studyList = jsPsych.randomization.shuffleNoRepeats(this.stimuli);

//repeate the following for every item on the study list
for (let i = 0; i < this.studyList.length; i++) {
    let studyTask = {
        type: "pcllab-core",
        stimuli: [
          {//show the current iteration's cue and target
            text: `<div style="text-align: center; font-weight: 400; font-size: 24px">${this.studyList[i].cue} -- ${this.studyList[i].target}</div>`,
          },
        ],
        response_count: 0,
        isi_time: 500,
        cue_count: 0,
        maximum_time: 1000 * 5,
        data: {
          phase: "Study",
          cue: this.studyList[i].cue,
          target: this.studyList[i].target,
          candidate: this.studyList[i].candidate,
        }, 
    };
};
```