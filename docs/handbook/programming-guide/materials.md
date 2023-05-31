# Materials

It is best to store the materials for each experiment in one place (i.e., a folder titled "materials"). You will update these materials for each new experiment. This way, you will have to make fewer changes to the basic experiment structure/logic and your `experiment.js` file will be more clean and concise.

These files will often be [JSON files](file-types/#JSON.md) but they can also be HTML files. You will need to load these in `experiment.js` make accessible. 


```js
...inside experiment.js

const EXPERIMENT_FILES = {  
  INSTRUCTIONS: "materials/instructions.json",
  STIMULI: "materials/stimuli.json",
  CONSENT: "materials/consent.html",
  DEBRIEF: "materials/debrief.html",
};

class Experiment {

  loadMaterials() {
    const self = this;
    $.when(
      $.getJSON(EXPERIMENT_FILES.INSTRUCTIONS, (data) => {
        // the json file is accessible as this.instructions
        self.instructions = data;
      })
    ).then(
      $.getJSON(constants.STIMULI, (data) =>{
        self.stimuli = data;
      })
    ).then(
      $.getJSON(constants.CONSENT, (data) =>{
        self.consent = data;
      })      
    ).then(
      $.getJSON(constants.DEBRIEF, (data) =>{
        self.debrief = data;
      })
    ).then(() => {
      self.counterbalance();
      self.buildTimeline();
      self.run();
    });
  }

  buildTimeline() {
    const instructionsWelcome = {
      type: "pcllab-core",
      // the "welcome" object is used by a plugin to display text
      // the surrounding [], indicate it is passed as an element of a list
      stimuli: [this.instructions["welcome"]],
      show_button: true,
      button_text: "Next",
      response_count: 0,
    };

    ...rest of buildTimeline()
  }

  ...rest of class Experiment
}
```
## Consent

For all experiments, participant will need to give their informed consent (or, if they are under 18, assent) before they can participate. For in-lab studies we use signed consent forms (paper copies). 

For online studies, this form is shown at the start of the experiment. If the participant agrees to participate then they can continue, if not the program ends.

```js
...inside experiment.js
const consentForm = {
    type: 'pcllab-consent-form',
    url: 'materials/consent.html',
    data: {
        phase: "consent",
    },
};
```

<details>
<summary>Click to expand an example <code>consent.html</code></summary>

```html
<p>Research Project Number: 1601010762</p>
<h3> <center> ONLINE RESEARCH PARTICIPANT CONSENT FORM <br> </h3>
<h4> <center> Sona #984: Memory Experiment <br>
Jeffrey D. Karpicke, Ph.D. <br>
Purdue University <br>
Department of Psychological Sciences </center> </h4>
<br>
<br>

<h4>Key Information</h4>
<p>Please take time to review this information carefully. This is a research study. Your participation in this study is voluntary which means that you may choose not to participate at any time without penalty or loss of benefits to which you are otherwise entitled. You may ask questions to the researchers about the study whenever you would like. If you decide to take part in the study, you will be asked to sign this form, be sure you understand what you will do and any possible risks or benefits. <br> 
This experiment is part of an ongoing, multi-year project examining the effectiveness of different learning and study strategies. The overall purpose of this research is to investigate the effects of different study techniques on learning. Your participation will take no more than 60 minutes. Additional explanations may be more detailed in the sections below.</p>   
    
<h4>What is the purpose of this study?</h4>
<p>The overall purpose of this research is to investigate the effects of different study techniques on learning. We would like to enroll 700 people in this experiment.</p>

<h4>What will I do if I choose to be in this study?</h4>
<p>Your participation will involve studying a set of material and taking memory tests.</p>

<h4>How long will I be in the study?</h4>
<p>The total duration of participation will be no more than 60 minutes. The first session will last 30 minutes, and there will be a second session 1 day after the first, which will last no more than 30 minutes.  You will receive 1 experiment credit for participating in the first session and 1 credit for participating in the second session. </p>

<h4>What are the possible risks or discomforts?</h4>
<p>Minimal: The risks are not greater than those ordinarily encountered in daily life. However, breach of confidentiality is a possible risk in this type of research. Safeguards to minimize this risk are discussed in the Confidentiality section below.</p>

<h4>Are there any potential benefits?</h4>
<p>There are no direct benefits to participants. You will have the opportunity to learn about experimental psychology tasks and the specific phenomenon under study.</p>

<h4>Will information about me and my participation be kept confidential?</h4>
<p>Data and contact information will be collected via a secure website and stored on a secure server. Any data collected during this experiment will not be directly associated with any of your contact information, and your responses will not be associated with any identifying information at any point. The anonymous data will be retained indefinitely in digital files accessible only to members of the research team. The project's research records may be reviewed by the National Science Foundation, by the Institute of Education Sciences within the U.S. Department of Education, and by departments at Purdue University responsible for regulatory and research oversight.</p>

<h4>What are my rights if I take part in this study?</h4>
<p>You do not have to participate in this research project. If you agree to participate you can withdraw your participation at any time without penalty.</p>

<h4>Who can I contact if I have questions about the study?</h4>
<p>If you have any questions about this research project, you can contact the Cognition and Learning Laboratory (Email: learninglab@purdue.edu). If you have concerns about the treatment of research participants, you can contact the Institutional Review Board at Purdue University, 155 S. Grant St., West Lafayette, IN 47907. The phone number for the Board is (765) 494-5942. The email address is irb@purdue.edu. To report anonymously via Purdue’s Hotline, see www.purdue.edu/hotline.</p>

<h4>Documentation of Informed Consent</h4>
<p>I have had the opportunity to read this consent form. I have been given adequate contact information to ask questions about the research project. I am prepared to participate in the research project described above.</p>
<p>Please print a copy of this consent document for your records.</p>
<p>Please click the box below to indicate if you understand this document and consent to participate in this research study:</p>
```

## Instructions

It is best to have all or most of your instruction pages organized in a single JSON file. 

```json
// materials/instruction.json
{
  "test": {
    "title": "Final Test Instructions",
    "text": "You will have 30 minutes to take a 60-question test on the content you previously learned."
  },
  "pacman": {
    "title": "Pacman Game",
    "text": "<h3>You will now play Pacman for 5min. You can control Pac-Man using the arrow keys on your keyboard. <br><br> Click ‘Continue’ when you are ready to begin the game.</h3>"
  },
  "testAntiCheat": {
    "title": "Please do not use any notes or other aids during this test.",
    "text": "<h3>Your score will not negatively affect you in any way. Just try your best! By taking this test without notes or other aids, we will be able to accurately interpret the data from our experiment. Thanks!</h3>"
  },
  "activityPlayAgainInstructions": {
    "title": "Play Again.",
    "text": "<h3>You still have time left for the experiment, so please play again for full credit. But this time, let's see if you can finish the game in fewer trials! Press 'Continue' when you are ready to start the game again.</h3>"
  },

  "overviewVideo": {
    "title": "Overview",
    "text": "<h3>You will start off the experiment by watching a lecture on the biological concept of taxonomic rank. Please watch the full 5.5min video so that you are ready for the other parts of the experiment. <br> Make sure to turn your volume on.</h3>"
  }
}
```

You can then add the each set of text (i.e., each page of instructions) into the relevant part of your timeline. 

```js
...inside experiment.js
const instructionsTest = {
    type: "pcllab-core",
    // the "test" object is used by a plugin to display text
    // the surrounding [], indicate it is passed as an element of a list
    stimuli: [this.instructions["test"]],
    show_button: true,
    button_text: "Next",
    response_count: 0,
    data: {
          phase: "consent",
    },
};
```

## Stimuli

This is whatever the participant is given to learn/study/respond to etc. Stimuli are often text (e.g., a list of words, cue-target pairs, a text passage), but they can also be pictures (.jpg or .pgn), videos (.mp4) or audio clips (.wav). Regardless of their type, you should organize them in a JSON file(s). [Mr. Data Converter](http://shancarter.github.io/mr-data-converter/){target="_blank" rel="noreferrer"} is an excellent tool for converting CVS files into JSON files (or other file types).

```json
// materials/stimuli.json
[{"Questions":"Is this unicolored?","Picture_Name":"Pepper","Picture_Source":"Materials/Pictures/Practice/pepper.jpg","Correct_Answer":"Yes"},
{"Questions":"Is this inanimate?","Picture_Name":"Crab","Picture_Source":"Materials/Pictures/Practice/crab.jpg","Correct_Answer":"No"},
{"Questions":"Is this multicolored?","Picture_Name":"Cheese","Picture_Source":"Materials/Pictures/Practice/cheese.jpg","Correct_Answer":"No"},
{"Questions":"Is this animate?","Picture_Name":"Bee","Picture_Source":"Materials/Pictures/Practice/bee.jpg","Correct_Answer":"Yes"},
{"Questions":"Is this symmetrical?","Picture_Name":"Teapot","Picture_Source":"Materials/Pictures/Practice/teapot.jpg","Correct_Answer":"No"},
{"Questions":"Is this manmade?","Picture_Name":"Train","Picture_Source":"Materials/Pictures/Practice/train.jpg","Correct_Answer":"Yes"}]
```
Find information about presenting stimuli [here](study-list.md).

## Debrief

<details>
<summary>Click to expand an example <code>debrief.html</code></summary>

```html
<h4><center>
Debriefing: Sona #984: Memory Experiment
</center></h4>

<br><p><strong>1.  What is the purpose of this research?</strong> <br>
    The experiment you participated in today is part of a larger study investigating strategies that enhance memory. One strategy examined in this research is known as retrieval practice, which is the finding that practicing retrieval of knowledge can promote learning often to a greater extent than the opportunity for additional study. We are interested in whether your memory will be better for materials over which you were tested versus material for which you studied.</p>

<p><strong>2.  Is this correlational or experimental research?</strong> <br>
    The study you participated in represents experimental research. The independent variable we manipulated was the study technique you engaged in (e.g., repeated studying vs. repeated retrieval), and the dependent variable we are interested in is your performance on a final test. We predict that practicing repeated retrieval will produce better retention than repeated studying. </p>
     
<p><strong>3.  What topic in introductory psychology does this research illustrate?</strong> <br>
The current research falls within the general area of human learning and memory. For an overview of research on human memory, see Chapter 8 in Nairne’s <i>Psychology: The Adaptive Mind (4th Edition)</i>, Chapter 9 in Meyers’
<i>Psychology (8th Edition)</i>, or Chapter 9 in Gray’s <i>Psychology (5th Edition)</i>. Another excellent book covering current research on human memory is <i>The Seven Sins of Memory</i>, by Dan Schacter. </p>

<p><strong>4.  Where can I learn more about this type of research?</strong> <br>
    If you are interested in learning more about retrieval practice, here are two relevant references: <br>
   <p> Karpicke, J. D., & Roediger, H. L. (2007). Repeated retrieval during learning is the key to long-term retention. <i>Journal of Memory and Language, 57</i>, 151-162.<br></p>
   <p> Karpicke, J. D., & Roediger, H. L. (2008). The critical importance of retrieval for learning. <i>Science, 319</i>, 966-968.</p>
    
<p><strong>5.  Which faculty member is supervising this research and how can I contact her/him?</strong> <br>
Dr. Jeffrey Karpicke, a professor in cognitive psychology, is supervising this research. You may reach him at (765) 494-0273, via email at karpicke@purdue.edu, or in room PRCE 389.

<p><strong>6.  Which faculty member is supervising this research and how can I contact her/him?</strong> <br>
Dr. Karpicke began investigating human learning and memory over 15 years ago. The current experiments are designed to examine other ways that basic research on learning and memory can be applied to enhance educational practice.</p>


<p><strong>A lot of research in psychology depends on the participation of individuals like you. We are very grateful for your help. Thank you very much for participating.</p>
```
</details>