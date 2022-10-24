function change(){
    var d = document.getElementById("box");

    var bgc = document.getElementById("bcolor").value;
    d.style.backgroundColor = bcolor;

    var tc = document.getElementById("tcolor").value;
    d.style.color = tcolor;

    var ts = document.getElementById("tsize").value;
    d.style.textSize = tsize + "px";

    var w = document.getElementById("width").value;
    d.style.width = width + "px";

    var h = document.getElementById("height").value;
    d.style.height = height + "px";

    var r = document.getElementById("bdradius").value;
    d.style.borderRadius = bdradius + "%";
}


//2
var car = null;
var timer = null;
function init(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left ="4px";
}

function move(){
    car.style.left= parseInt(car.style.left) + 10 + "px";
    timer = setTimeout(move,200)
    x=parseInt(car.style.left)
    if(x >= 1200){
        document.getElementById("dangermsg").innerHTML="DANGER";
        dangermsg.style.display = "block";
        clearTimeout(timer);
    }
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    init();
}