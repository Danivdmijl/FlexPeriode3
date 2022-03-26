const cursor = document.getElementById("js--cursor");

const boxes = document.getElementsByClassName("js--box");
// laat de variable i bij 0 beginnen 
for (let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function () {
        boxes[i].setAttribute("color", cursor.getAttribute("color"));
    }    
}

const spheres = document.getElementsByClassName("js--sphere");
for (let i = 0; i < spheres.length; i++){
    spheres[i].onmouseleave = function () {
        cursor.setAttribute("color", spheres[i].getAttribute("color"));
    }
}
