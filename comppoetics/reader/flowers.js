let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

makeFlowers();

function makeFlowers(){
  for (let i = 0; i < 3; i++){
    let newflowers = document.createElement('div');
    let newflowersRow = document.createElement('div');

    newflowers.classList.add('flowers');
    newflowersRow.classList.add('flowers-row');

    document.getElementById("flowers-field").appendChild(newflowersRow);
    newflowersRow.appendChild(newflowers);

    newflowers.innerHTML = `&nbsp;✿&nbsp;&nbsp;&nbsp;&nbsp;✻&nbsp;&nbsp;&nbsp;&nbsp;✻&nbsp;&nbsp;&nbsp;✿
    <br>\\|// \\|//  \\\|//\\\|//`

    newflowers.style.left = getRandomNumber(0, winWidth - 400) +"px";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);

}
