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


function setup() {
  let canwidth = windowWidth*0.45;
  let canheight = windowHeight*0.80;

  createCanvas(canwidth, canheight);
  video = createCapture(VIDEO);
  video.size(canwidth,canheight);
  video.hide();
  // Models available are 'cocossd', 'yolo'
    detector = ml5.objectDetector('cocossd', modelReady);
    voice = new p5.Speech();
    voice.setVoice(10);
    voice.setRate(0.75);
    
    textSize(24);
    fill(137, 187, 232);

    text("Turn on webcam and sound",width/2,height/2)

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
background(255, 255, 240);
  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    voice.speak(object.label);
    
    //rectangle
    stroke(137, 187, 232);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    
    //text
    noStroke();
    fill(137, 187, 232);
    text(object.label, object.x + 10, object.y + 24);
  }
  if (detections.length ==0){
    voice.speak("no object found");

  }
}
