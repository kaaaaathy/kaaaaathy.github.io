
let border = 50;

let poemDiv = document.getElementById('poem');
let abd = [document.getElementById('a'),document.getElementById('b'),document.getElementById('d')]
let c =  document.getElementById('c');

setText();
size();
setStars();
secret();
function setText(){
    //add unicode arrows dynamically to the top 3
    for (let i = 0; i< abd.length;i++){
      abd[i].innerHTML += '<span class="symbol">&nbsp; &#9650</span>';
    }
    //the bottom one is different though...
    c.innerHTML += '<span class="symbol">&nbsp; &#9660</span>';

    //for b, and d, rotated ones, reposition
    let b = abd[1];
    let d = abd[2];

    let bOffset = 0 - b.offsetWidth/2;
    let dOffset = 0 - d.offsetWidth/2;

    if (b.offsetWidth > 200){
       bOffset = 0 - b.offsetWidth/2;
    }

    if (d.offsetWidth > 200){
      dOffset = 0 - d.offsetWidth/2;
    }

    b.style.right = bOffset + "px";
    d.style.left = dOffset + "px";

}

function setStars(){
    for (let i = 0; i < 4; i++){
      let star = document.createElement('p');
      star.innerHTML = '&#10038';
      star.classList.add("star");

      // let starW = 20;
      let topbottom = "-" + 20 + "px";
      let leftright =       15 + "px";

      if (i==0){
        star.style.top = topbottom;
        star.style.left = leftright;

      } else if (i==1){
        star.style.top = topbottom;
        star.style.right = leftright;
      } else if (i==2){
        star.style.right = leftright;
        star.style.bottom = topbottom;
      } else if (i==3){
        star.style.bottom = topbottom;
        star.style.left = leftright;

      }
      document.body.appendChild(star);
    }

}

function secret(){
  let secret = document.createElement('a');
  secret.classList.add('secret');
  secret.setAttribute('href',"1.html");
  document.body.appendChild(secret);
}

//set up the border and positioning
function size(){
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let newWidth = winWidth - border*2;
  let newHeight = winHeight - border*2;

  poemDiv.style.width = newWidth + "px";
  poemDiv.style.height = newHeight + "px";
  poemDiv.style.border = border + "px solid green";


}

//re-draw the border on every resize
window.addEventListener('resize', size);
