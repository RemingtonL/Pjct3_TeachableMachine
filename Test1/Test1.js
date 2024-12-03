// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/1KEWbn5Ua/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  // Create a canvas and attach it to the HTML div with id 'display-area'
  let canvas = createCanvas(800, 600);
  canvas.parent('display-area'); 

  // Create the video
  video = createCapture(VIDEO);
  video.size(800, 600); 
  video.hide(); 

  // Start classifying the video
  classifyVideo();
}


// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
//   let emoji = "🌈";
//   if (label == "Rainbow") {
//     emoji = "🌈";
//   } else if (label == "Unicorn") {
//     emoji = "🦄";
//   } else if (label == "Ukulele") {
//     emoji = "🎸";
//   }

  // Draw the emoji
//   textSize(256);
//   text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
