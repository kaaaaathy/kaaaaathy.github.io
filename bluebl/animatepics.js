
//get blues
let swatch = document.getElementById('swatch');
let folders = ["bsod","cerulean","ceylon","china","cobalt","cobaltmine","lapis","led","neon","prussian","ultra","vermeer","virgin"];
let blues = [
  {"name":"sky","hex":"##87CFEB"},
  {"name":"cobalt","hex":"#0046AB"},
  {"name":"blue","hex":"blue"},
  {"name":"lapis","hex":"#26619C"},
  {"name":"ultra","hex":"#3F00FF"},
  {"name":"prussian", "hex":"#003153"}];

let speed = 1400;
let delay = 2800;
// let delay = 35200;
let loop = 100;

let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";

window.addEventListener('resize',function(){
    winWidth = window.innerWidth;
    cont.style.height = window.innerHeight + "px";
    swatch.style.width = 0.2 * winWidth + "px";
    swatch.style.height = swatch.style.width;
});


//animate once, then animate continuously
animate(blues[2].hex,folders.indexOf("cobaltmine"));

let interval = speed*loop + delay;
setInterval(()=>{
  animate(blues[2].hex,folders.indexOf("cobaltmine"));
},interval);

function animate(blue,imgs) {
  let time;
  // let winWidth;
  for (let i = 0; i < loop;i++){
    time = speed*i + delay;
    setTimeout(()=>{

          let int = i%10;
          let int1 = int +1;
          let image = "url('images/"+folders[imgs]+"/blue"+int1+".jpg')";
          document.body.style.backgroundImage = image;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          swatch.style.background = blue;

      }
    , time);
  }
}
