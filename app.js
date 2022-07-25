var clicked = document.getElementById('btn');
var f = document.getElementById('first');
var s = document.getElementById('second');
function changeColor() {
//    f.style.backgroundColor = "transparent";
//    s.style.backgroundColor = "transparent";
    f.style.opacity = "0";
    s.style.opacity = "0";
}
function fun() {
   f.style.transform = "rotateY(90deg)";
   s.style.transform = "rotateY(-90deg)";
   clicked.style.display = "none";
   setTimeout(changeColor,1500);
}

clicked.addEventListener('click',fun);