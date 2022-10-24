/**
 * @title sample-experiment
 * @description simple example using jspsych-builder
 * @version 0.1.0
 *
 * @assets assets/
 */

// You can import stylesheets (.scss or .css).
import "../styles/main.scss";

import FullscreenPlugin from "@jspsych/plugin-fullscreen";
import HtmlKeyboardResponsePlugin from "@jspsych/plugin-html-keyboard-response";
import PreloadPlugin from "@jspsych/plugin-preload";
import { initJsPsych } from "jspsych";
import InstructionsPlugin from "@jspsych/plugin-instructions";

import ConsentFormPlugin from "@pcllab/consent-form-plugin";

/**
 * This function will be executed by jsPsych Builder and is expected to run the jsPsych experiment
 *
 * @type {import("jspsych-builder").RunFunction}
 */
export async function run({
  assetPaths,
  input = {},
  environment,
  title,
  version,
}) {
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

  timeline.push({
    type: ConsentFormPlugin,
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

  await jsPsych.run(timeline);

  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsPsych.data.get()),
  });

  // Uncomment this line to show saved data at end
  // return jsPsych;
}
