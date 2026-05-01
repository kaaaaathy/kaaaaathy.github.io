let cont = document.getElementById('container');
cont.style.height = window.innerHeight + "px";

window.addEventListener('resize',function(){
    winWidth = window.innerWidth;
    cont.style.height = window.innerHeight + "px";
});
