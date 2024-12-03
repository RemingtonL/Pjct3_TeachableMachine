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
let modelURL = 'https://teachablemachine.withgoogle.com/models/NmsqoV1m6/';
let lastTime = 0;
let interval = 1000;
const audio1 = new Audio('1.mp4');
const audio2 = new Audio('2.mp4');
const audio3 = new Audio('3.mp4');
const audio4 = new Audio('4.mp4');
const audio5 = new Audio('5.mp4');
const audio6 = new Audio('6.mp4');
const audio7 = new Audio('7.mp4');

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
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
  let currentTime = millis(); //
  if (currentTime - lastTime >= interval) {
    lastTime = currentTime;
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 16);
    if(label == "1") {
      audio1.play();
    }
    else if (label == "2"){
      audio2.play();
    }
    else if (label == "3"){
      audio3.play();
    }
    else if (label == "4"){
      audio4.play();
    }
    else if (label == "5"){
      audio5.play();
    }
    else if (label == "6"){
      audio6.play();
    }
    else if (label == "7"){
      audio7.play();
    }
  }
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
