const redSphere = document.getElementById("js--sphere--red");
const greenSphere = document.getElementById("js--sphere--green");
const blueSphere = document.getElementById("js--sphere--blue");
const cursor = document.getElementById("js--cursor");

/* Kleuren voor spheres */

redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red");
}

greenSphere.onmouseleave = function(){
    cursor.setAttribute("color", "green");
}

blueSphere.onmouseleave = function(){
    cursor.setAttribute("color", "blue");
}
/* dit gaat de slechte code zijn die u gaat zien, sorry :)
*/

const box = document.getElementById("js--box");

box.onmouseenter = function(){
    box.setAttribute("color",cursor.getAttribute("color"));
}


const box2 = document.getElementById("js--box2");

box2.onmouseenter = function(){
    box2.setAttribute("color",cursor.getAttribute("color"));
}

const box3 = document.getElementById("js--box3");

box3.onmouseenter = function(){
    box3.setAttribute("color",cursor.getAttribute("color"));
}


const box4 = document.getElementById("js--box4");

box4.onmouseenter = function(){
    box4.setAttribute("color",cursor.getAttribute("color"));
}


const box5 = document.getElementById("js--box5");

box5.onmouseenter = function(){
    box5.setAttribute("color",cursor.getAttribute("color"));
}

const box6 = document.getElementById("js--box6");

box6.onmouseenter = function(){
    box6.setAttribute("color",cursor.getAttribute("color"));
}

const box7 = document.getElementById("js--box7");

box7.onmouseenter = function(){
    box7.setAttribute("color",cursor.getAttribute("color"));
}

const box8 = document.getElementById("js--box8");

box8.onmouseenter = function(){
    box8.setAttribute("color",cursor.getAttribute("color"));
}

const box9 = document.getElementById("js--box9");

box9.onmouseenter = function(){
    box9.setAttribute("color",cursor.getAttribute("color"));
}