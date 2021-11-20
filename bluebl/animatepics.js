
//get blues

let p = document.getElementById('text');
let swatch = document.getElementById('swatch');

let folders = ["bsod","cerulean","ceylon","china","cobalt","cobaltmine","lapis","led","neon","prussian","ultra","vermeer","virgin"];

let blues = [
  {"name":"sky","hex":"##87CFEB"},
  {"name":"cobalt","hex":"#0046AB"},
  {"name":"blue","hex":"blue"},
  {"name":"lapis","hex":"#26619C"},
  {"name":"ultra","hex":"#3F00FF"},
  {"name":"prussian", "hex":"#003153"}];

  // let speed = 700;
  // let delay = 63000;

  let speed = 1400;
  let delay = 33600;


// let whichWin = document.body.className;
// let swatchColors = ["sky","cobalt","ultra","prussian","lapis","blue"];

//resize code
let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";

window.addEventListener('resize',function(){
    winWidth = window.innerWidth;
    cont.style.height = window.innerHeight + "px";
    swatch.style.width = 0.2 * winWidth + "px";
    swatch.style.height = swatch.style.width;
});

animate(blues[1].hex,folders.indexOf("cobaltmine"));

// function getHex(blue){
//     for (let i =0; i < blues.length; i++){
//         if (blues[i].name.includes(blue)){
//           return blues[i].hex;
//         }
//     };
// }
//how to make this repeat?

function animate(blue,imgs) {
  let time;
  // let winWidth;
  for (let i = 0; i < 100;i++){
    time = speed*i + delay;
    setTimeout(()=>{

          let int = i%10;
          let int1 = int +1;
          // let f = windows.indexOf(whichWin);
          let image = "url('images/"+folders[imgs]+"/blue"+int1+".jpg')";
          document.body.style.backgroundImage = image;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          swatch.style.background = blue;
          p.style.fontSize = winWidth/6 + "px";

      }
    , time);
  }
}
