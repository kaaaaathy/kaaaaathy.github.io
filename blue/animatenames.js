
//get blues
let p = document.getElementById('text');

let blues = [];
let hex = [];
let speed = 2800;
let delay = 0;

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
      if(data[i].name.includes("blue") || data[i].name.includes("cyan") || data[i].name.includes("lapis") || data[i].name.includes("ultra")|| data[i].name.includes("azure") ){


        if (data[i].name.includes("blue")){
             blues.push(data[i].name.replace("blue",""));
        } else {
             blues.push(data[i].name);
        }
        hex.push(data[i].color);
    }
  }
  play();
});


async function play(){
  await wait(delay);
  await animateColor();
}

async function animateColor() {
  for (let i = 0; i < hex.length;i++){
    await wait(speed);
    document.body.style.backgroundColor = hex[i];
    p.innerHTML = blues[i];

    if (blues[i].length > 3){
       winWidth = window.innerWidth;
       p.style.fontSize = winWidth/blues[i].length + "px";
     }
  }
  await animateColor();
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

// function animateColor() {
//   let time;
//   let winWidth;
//   for (let i = 0; i < hex.length;i++){
//     time = speed*i + delay;
//     console.log(time);
//     setTimeout(()=>{
//           document.body.style.backgroundColor = hex[i];
//           p.innerHTML = blues[i];
//           if (blues[i].length > 3){
//              winWidth = window.innerWidth;
//              p.style.fontSize = winWidth/blues[i].length + "px";
//           }
//       }
//     , time);
//   }
// }
