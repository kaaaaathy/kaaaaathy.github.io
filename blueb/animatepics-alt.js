
//get blues

let p = document.getElementById('text');
let folders = ["bsod","cerulean","ceylon","china","cobalt","cobaltmine","lapis","led","neon","prussian","ultra","vermeer","virgin"];
let blues = [];
let hex = [];
let speed = 1200;
let delay = 0;
// let whichWin = document.body.className;
// let windows = ["sky","cobalt","ultra","prussian","lapis","blue"];

//resize code
let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";
window.addEventListener('resize',function(){
    cont.style.height = window.innerHeight + "px";
});


fetch("colors.json")
  .then(response => response.json())
  .then(data => {

  for (let i = 0; i<data.length;i++){
      if(data[i].name.includes("blue") || data[i].name.includes("cyan") || data[i].name.includes("lapis") || data[i].name.includes("ultra") ){


        if (data[i].name.includes("blue")){
             blues.push(data[i].name.replace("blue",""));
        } else {
             blues.push(data[i].name);
        }
        hex.push(data[i].color);
    }
  }

  animateColor();
});


//how to make this repeat?

function animateColor() {
  let time;
  let winWidth;
  for (let i = 0; i < hex.length;i++){
    time = speed*i + delay;
    setTimeout(()=>{
          // let f = windows.indexOf(whichWin);
          let image = "url('images/"+folders[5]+"/blue"+i%10+".jpg')";
          document.body.style.backgroundImage = image;
          p.innerHTML = blues[i];
          if (blues[i].length > 3){
             winWidth = window.innerWidth;
             p.style.fontSize = winWidth/blues[i].length + "px";
          }
      }
    , time);
  }
}
