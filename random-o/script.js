
let border = 40;
let poemDiv = document.getElementById('poem');


//set up the border and positioning
function size(){
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let newWidth = winWidth - border*2;
  let newHeight = winHeight - border*2;

  poemDiv.style.width = newWidth + "px";
  poemDiv.style.height = newHeight + "px";
}

size();

//re-draw the border on every resize
window.addEventListener('resize', size);
