let desires = ["lick your flower bud","taste your mouth","enter, again", "suck a tenderness", "and graze you","caressing an edge"];

let alongYou = window.innerHeight;
let acrossYou = window.innerWidth;

for (let i = 0; i<desires.length;i++){

  let newDesire = document.createElement("p");
  newDesire.innerText = desires[i];

// PUT IN A RANDOM LOCATION, adding 50px padding on all sides, 200px preventing it from getting too close to right side
  newDesire.style.top = getRandomNumber(50, innerHeight-50);
  newDesire.style.left = getRandomNumber(50, innerWidth-200);

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
