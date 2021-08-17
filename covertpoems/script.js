let desires = ["lick a flower bud","taste your mouth","enter, again", "suck a tenderness", "and graze you","caressing an edge"];

let acrossYou = window.innerWidth;
let alongYou = window.innerHeight;

for (let i = 0; i<desires.length;i++){

  let newDesire = document.createElement("p");
  newDesire.innerText = desires[i];

// PUT IN A RANDOM LOCATION
  newDesire.style.top = getRandomNumber(0, acrossYou);
  newDesire.style.left = getRandomNumber(0, alongYou);

// TELL IT TO CHANGE ITS APPEARANCE WHEN TOUCHED (CAN DELETE)
  newDesire.addEventListener("click", function(){
      newDesire.classList.toggle("touched");
  });

  document.body.appendChild(newDesire);
}

// A FUNCTION THAT GIVES A RANDOM NUMBER, FOR SIMPLICITY
function getRandomNumber(min,max){
  return Math.floor(Math.random() * max + min);
}
