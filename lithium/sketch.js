// Copyright (c) 2020 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Object Detection using COCOSSD
This example uses a callback pattern to create the classifier
=== */

let voice;


let video;
let detector;
let detections = [];
let canwidth = 600;
let canheight = 600;

// let myFont;

// function preload(){
//   myFont = loadFont('https://kaaathy.com/lithium/Director-bold.otf');


// }
function setup() {


  createCanvas(canwidth, canheight);
  video = createCapture(VIDEO);
  video.size(canwidth, canheight);
  video.hide();
  // Models available are 'cocossd', 'yolo'
  detector = ml5.objectDetector('cocossd', modelReady);
  voice = new p5.Speech();
  voice.setVoice(10);
  voice.setRate(0.75);
  textSize(14);
  // textFont(myFont);

}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}

function modelReady() {
  detector.detect(video, gotDetections);
}

function draw() {
  // image(video, 0, 0);
  // background(255, 255, 240);
  background(0);
  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    voice.speak(object.label);

    //rectangle
    // stroke(139, 69, 19);

    stroke(255);
    strokeWeight(1);
    noFill();
    rect(object.x, object.y, object.width, object.height);

    noStroke();
    fill(255);
    let obj = object.label.toUpperCase();
    text(obj, object.x + 10, object.y + 24);
  }
  if (detections.length == 0) {
    voice.speak("nothing");

  }
}
