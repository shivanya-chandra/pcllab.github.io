# Basic Experiment Structure

This section outlines the basic structure and components used in most experiments.

1. **[Assigment to Condition and/or Version](counterbalence.md)**
   One of the first things that needs to be done is assiging participants to a condition(s) and/or counterbalance version(s). This is done first, because it will determine which tasks the participant does, the order of those tasks, and which stimuli they see.

2. **[Consent Form (online only)](materials.md#consent.md)**
   Participants must give consent prior to starting the experiment. For online experiments, you will need to present a consent page that shows the participants the consent form and asks them if they agree to participate.

3. **[Start Screen](starting.md)**
   You will want a start/welcome screen that appears before the first page of the experiment's instructions. For in-person studies, this page will welcome participants and ask them to wait for experimenter to give them instructions before beginning. For online studies, this page asks participants to remove distractions and silence their cellphones before starting.

4. **[Instructions & Materials](materials.md)**
   Throughout the experiment you will present participants with various information (e.g., instructions, stimuli, and debriefing forms). It is best to store and organize this information in a single folder that can be accessed when needed.

5. **[Timeline](timeline.md)**
   The timeline provides structure to your experiment. Each block of code will create an event (e.g., instructions for a task, presentation of the study list, a free recall test, etc.) for the participant to experience. You will use the timeline to specify when each event should occur during the experiment.

6. **[Plugins](plugins.md)**
   Plugins are used to create experimental events/trials. The let you define what the participant sees, what type of responses can be made, how long a page is presented for, what information about a trial is saved (stored in the data file), and more. They are used to handle:

- **[Stimuli Presentation](study-list.md)**
  Presenting stimuli to participants is a key part of any experiment. Sometimes we will simply show participants a series of words to learn and remember for a later test. Other times, we will shown participants an item and ask them to make a response (e.g., type an answer to a question or make a rating).

- **[Distractor Task](distractor.md)**
  We will often include a distractor task in between encoding/study (presentation of stimuli) and the final test.

- **Tests & Tasks**
  Most experiments include at least one measurement of the participants performance (usually memory) including:

  - [Free Recall](free-recall.md)
  - [Cued Recall](cued-recall.md)
  - Recognition
  - Multiple Choice
  - Judgement of Learning (JoL)

- **Demographics**
  At the end of an experiment you will want to collect demographic information about the participant. Usually age, first language, and gender.

```js
const demographics = {
  type: "pcllab-form",
  demographics: true,
  data: {
    phase: "demographics",
  },
};
```

- **Attention, Seriousness, & Cheating Checks**
  Especially for online experiments, you may wish to ask the participant if they cheated, paid attention, and answered honestly. Be sure to explain why this is important to us and that they will not be penalized if they report that they did cheat, weren't paying attention, and/or didn't answer honestly.

- **[Debrief](materials.md#debrief.md)**
  The final page of the experiment will be the debrief form. For online experiments participants will be redirected to either SONA or mTurk from here.

7. **[Save Data](saving-data.md)**
   When participants reach the end of the experiment (i.e., are shown th debrief form) you will want to save their data to Jarvis. If you are running the experiment in-person you may also want to save a backup CSV file.
