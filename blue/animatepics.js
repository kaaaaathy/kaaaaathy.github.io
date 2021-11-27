
//get blues
let swatch = document.getElementById('swatch');

//this is so i can switch it out for other images optionally
// let folders = ["bsod","cerulean","ceylon","china","cobalt","cobaltmine","lapis","led","neon","prussian","ultra","vermeer","virgin"];
let folders = [
  {"name":"vermeer","no":8},
  {"name":"virgin","no":9},
  {"name":"ceylon","no":7},
  {"name":"china","no":5},
  {"name":"cobaltmine","no":10},
  {"name":"led","no":10}];

let blues = [
  {"name":"sky","hex":"##87CFEB"},
  {"name":"cobalt","hex":"#0046AB"},
  {"name":"blue","hex":"blue"},
  {"name":"lapis","hex":"#26619C"},
  {"name":"ultra","hex":"#3F00FF"},
  {"name":"prussian", "hex":"#003153"}];

let speed = 1400;
let delay = 2800;

let f = 0;

//resize code, this is a bit custom...
window.addEventListener('resize',function(){
    winWidth = window.innerWidth;
    swatch.style.width = 0.2 * winWidth + "px";
    swatch.style.height = swatch.style.width;
});

document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
//animate once, then animate continuously
animate();

let interval = speed*folders[f].no + delay;
setInterval(()=>{
  if (f > folders.length - 1){
    f = 0;
    animate();
  } else {
    f++;
    animate();
  }
  interval = speed*folders[f].no + delay;
},interval);

function animate() {
  let time;
  for (let i = 0; i < folders[f].no - 1;i++){
    time = speed*i + delay;

    setTimeout(()=>{
          let i1 = i+1;
          let image = "url('images/"+folders[f].name+"/blue"+i1+".jpg')";
          document.body.style.backgroundImage = image;
          swatch.style.background = blues[2].hex;
      }
    , time);
    }
  }

// for (let i = 0; i < loop;i++){
//   time = speed*i + delay;
//   setTimeout(()=>{
//
//         let int = i%10;
//         let int1 = int +1;
//         let image = "url('images/"+folders[imgs]+"/blue"+int1+".jpg')";
//         document.body.style.backgroundImage = image;
//         swatch.style.background = blue;
//
//     }
//   , time);
// }
