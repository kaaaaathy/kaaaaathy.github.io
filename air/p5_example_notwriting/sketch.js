let words, lines, data1, x = 160,
  y = 240;

function preload() {

  data1 = loadStrings('anneboyer.txt');

}

function setup() {

  createCanvas(500, 500);
  textFont('helvetica', 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["click to (re)generate"];
  drawText();
  notWriting();


}


function notWriting() {

  words = RiTa.tokenize(data1.join(""));

  let homonyms = RiTa.soundsLike("writing");

  for (i = 0; i < words.length; i++) {

    if (words[i] == "writing") {
      console.log("this worked");
      words[i] = homonyms[floor(random(0, homonyms.length))];
    }
  }

  console.log(words);
  lines = RiTa.untokenize(words);

}

function drawText() {
  background(0, 0, 0);
  fill(220);
  text(lines, x, y, 420, 420);
}

function mouseClicked() {
  notWriting();
  // lines = RiTa.soundsLike("apple");
  x = y = 40;
  drawText();
}