
let i = 0;
let words = [];
let pics = [];

let pinText;

let taglist = [];
let fossillist = [];
let terminal;


fetch('captions.txt')
    .then(response => response.text())
    .then(data => textillate(data));

function textillate(input) {
    pinText = input.split(" ");
    for (let i = 0; i < pinText.length; i++) {
        if (pinText[i].length < 6) {
            pinText.splice(i, 1);
        }
    }
    console.log(pinText);

}



function preload() {
    terminal = loadFont('https://cdn.glitch.me/640277e6-6a19-4a13-8251-32b8d9d92672%2Fterminal-grotesque.ttf?v=1633900310040');
    instruct = document.getElementById('instruct');
    for (let i = 0; i < 50; i++) {
        pics[i] = loadImage("img/" + i + ".png");
    }

}

function setup() {
    can = createCanvas(windowWidth, windowHeight);
    can.parent('canvas');
    textFont('Times');

}



function draw() {
    clear();

    textSize(10);
    text('✦', mouseX - 12, mouseY + 6);

    for (let j = 0; j < taglist.length; j++) {

        taglist[j].show();

        if (j > 0) {
            fossillist[j].show();
        }
    }
}




function mouseClicked() {

    if (i < pinText.length) {
        i++;
    } else {
        i = 0;
    }
    let newtag = new Tag(mouseX, mouseY, pinText[i]);
    taglist.push(newtag);

    let randomX = random(0, windowWidth);
    let randomY = random(0, windowHeight);
    let randomF = random(pics);

    let newfossil = new Fossil(randomX, randomY, randomF);
    fossillist.push(newfossil)
}


class Tag {
    constructor(_x, _y, _text) {
        this.x = _x;
        this.y = _y;
        this.info = _text;
        this.opacity = 255;
    }

    show() {
        fill(20, 20, 20, this.opacity);
        noStroke();
        textSize(20);
        text(this.info, this.x, this.y);
        if (this.opacity > 5) {
            this.opacity -= 0.5;
        }

    }

}

class Fossil {
    constructor(_x, _y, _img) {
        this.x = _x;
        this.y = _y;
        this.img = _img;


    }
    show() {
        image(this.img, this.x, this.y, 30, 30);
    }

}






