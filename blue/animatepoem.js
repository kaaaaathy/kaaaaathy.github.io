
//resize code
let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";
window.addEventListener('resize',function(){
    cont.style.height = window.innerHeight + "px";
});

//animate

let allText;
let p = document.getElementById('text');

let speed = 1400;
let textdelay = 30800;
let delay = 2800;


let winWidth;

fetch("text.txt")
    .then(response => response.text())
    .then(data => {
        allText = data.split(/\W/);
        play(allText);

});

async function play(array){
  await wait(delay);
  document.body.classList.add("blue");
  await wait(textdelay);
  await animate(array);
}

async function animate(array){
  let time;
  for (let i = 0; i < array.length;i++){
    //this used to be a for loop in the window but it was glitchin
    await wait(speed);
    setText(array[i]);
  }
  await animate(array);
}

function setText(word){
    winWidth = window.innerWidth;
    p.innerHTML = word;
    if (word.length > 3){
       p.style.fontSize = winWidth/word.length + "px";
    }
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}
