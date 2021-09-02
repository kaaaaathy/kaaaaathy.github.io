let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

let poemDiv = document.getElementById('poem');

poemDiv.style.top = getRandomNumber(0, winHeight - 200) +"px";
poemDiv.style.left = getRandomNumber(0, winWidth - 400) +"px";


function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;

}
