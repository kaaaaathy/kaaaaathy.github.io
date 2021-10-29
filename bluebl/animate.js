// NOTE

// THIS IS THE VERSION I LIKE THE MOST RIGHT NOW



//resize code
let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";
window.addEventListener('resize',function(){
    cont.style.height = window.innerHeight + "px";
});

//animate

let allText;
let p = document.getElementById('text');
let speed = 600;
let delay = 5000;
let winWidth;

fetch("text.txt")
    .then(response => response.text())
    .then(data => {
        allText = data.split(/\W/);
        animate(allText);

});


function animate(array){
  let time;
  for (let i = 0; i < array.length;i++){
  time = speed*i + delay;

    setTimeout(()=>{
      //this used to be a for loop in the window but it was glitchin
        setText(array[i]);
    },
      time);
    
    if (i == array.length - 1){
      document.body.classList.add("black");
    }
  }
  // setTimeout(()=>{
  //   for (let j = 0;j<windows.length;j++){
  //       clearText();
  //     }
  // }
  //    , delay + speed * array.length);
}


function setText(word){
    winWidth = window.innerWidth;
    p.innerHTML = word;
    if (word.length > 3){
       p.style.fontSize = winWidth/word.length + "px";
    }
}

function clearText(){
    p.innerHTML = "";
}

