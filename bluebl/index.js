// NOTE

// THIS IS THE VERSION I LIKE THE MOST RIGHT NOW

let windows = []; // global variable

// var w = 420;
// var h = 300;
var w = 400;
var h = w-80;
var y = 250;
var x = 20;
var hbar = 80;

//this is a little broken but whatevs
function start() {

  if(windows.length < 1 || anyClosed()){
        closeAll();

        //the big windows on bottom
        windows.push(window.open("2.html","prose", params(x,y,w,h)));

        windows.push(window.open("6.html","swatch",params(w+x*2,y,w,h)));

        windows.push(window.open("0.html","names", params(w*2+x*3,y,w,h)));


} else {
    for (let i = 0; i<windows.length;i++){
        windows[i].focus();

    }
  }

}


function params(left,top,width,height){
  let string = "left="+left+",top="+top+",width="+width+"px,height="+height+"px,toolbar=1,resizable=0";
  return (string);
}

function closeAll(){
    for (let i = 0; i<windows.length;i++){
      windows[i].close();
      windows.pop(i);
    }
}


function anyClosed(){
for (let i = 0; i<windows.length;i++){
    if(windows[i].closed){
      return true;
    } else {
      return false;
    }
      }
 }
