// NOTE

// THIS IS THE VERSION I LIKE THE MOST RIGHT NOW

let windows = []; // global variable

// var w = 420;
// var h = 300;
var w = 240;
var h = 120;
var ww = 360;
var hh = 200;
var hbar = 80;
var woff = 40;

//this is a little broken but whatevs
function start() {

  if(windows.length < 1 || anyClosed()){
        closeAll();
    
        //the big windows on bottom
        windows.push(window.open("1.html","big1", params(ww*2+w+woff*2,hbar*2.5+hh*2,w,hh))); 
        windows.push(window.open("6.html","big6", params(ww+w,hbar*2.5+hh*2,ww+woff,hh)));

        windows.push(window.open("0.html","names",params(w*2+ww+40,hbar+h*1.5,ww+40,hh)));

        //scatter the little ones as sparkles
        windows.push(window.open("1.html","small1", params(0,0,w,h)));              
        windows.push(window.open("2.html","small2", params(w,0,w,h)));
        windows.push(window.open("3.html","small3", params(w*2,h/2+hbar/2,w,h)));
        windows.push(window.open("4.html","small4", params(0,hbar+h,w,h)));
        windows.push(window.open("5.html","small5", params(w,hbar+h*1.5,w,h)));
        windows.push(window.open("6.html","small6", params(w*1.5,600,w,h)));
        
        //the big ones on top again
        windows.push(window.open("2.html","big2", params(w*2,hbar+h*1.5,ww+woff,hh)));
        windows.push(window.open("3.html","big3", params(w*3+ww,0,w,hh)));
        windows.push(window.open("4.html","big4", params(w*3,0,ww,hh)));
        windows.push(window.open("5.html","big5", params(0,hbar*2+h*2.5,ww,hh)));
         

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

