// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/Pfgfz-MBi/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  // Create a canvas and attach it to the HTML div with id 'display-area'
  let canvas = createCanvas(640, 520);
  canvas.parent('display-area'); 

  // Set text alignment and styles for drawing on the canvas
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);

  // Start classifying (will listen to the microphone by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height - 16);

  // Background noise is headphones
  // let emoji = "🎧";
  // Pick an emoji based on label
  // if (label == "Train") {
  //   emoji = "🚂";
  // } else if (label == "Bell") {
  //   emoji = "🛎";
  // } else if (label == "Ukulele") {
  //   emoji = "🎸";
  // }

  // Draw the emoji
  // textSize(256);
  // text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Got results:", results); 

  // Store the label
  label = results[0].label;

classifyAudio(); // Continue to classify the next input
}
