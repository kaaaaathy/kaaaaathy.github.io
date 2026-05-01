
//get blues
let swatch = document.getElementById('swatch');

//this is so i can switch it out for other images optionally
// let folders = ["bsod","cerulean","ceylon","china","cobalt","cobaltmine","lapis","led","neon","prussian","ultra","vermeer","virgin"];
let folders = [
  {"name":"vermeer","no":8},
  {"name":"virgin","no":8},
  {"name":"ceylon","no":5},
  {"name":"china","no":4},
  {"name":"cobaltmine","no":10},
  {"name":"led","no":5}];

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
let interval = speed*folders[f].no;

play();

async function play(){
  await wait(delay);
  await animateFolders();
}

async function animateFolders(){
  await animate(f);
  console.log(f);
  if (f >= folders.length - 1){
    f = 0;
  } else {
    f++;
  }
  await animateFolders();
}


async function animate(folder) {

  for (let i = 1; i < folders[folder].no ;i++){

    let image = "url('images/"+folders[folder].name+"/blue"+i+".jpg')";
    console.log("f is " + f + " "+ folders[folder].name + " " + folders[folder].no + " " + image);

    document.body.style.backgroundImage = image;
    swatch.style.background = blues[2].hex;

    await wait(speed);
    }
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

  // Add delay

  // let interval = speed*loop + delay;
  //
  // setInterval(()=>{
  //     animate();
  // },interval);

// for (let i = 0; i < loop;i++){
//   time = speed*i + delay;
//   setTimeout(()=>{
//
//         let int = i%10;
//         let int1 = int +1;
//         let image = "url('images/cobaltmine/blue"+int1+".jpg')";
//         document.body.style.backgroundImage = image;
//         swatch.style.background = blue;
//
//     }
//   , time);
// }
