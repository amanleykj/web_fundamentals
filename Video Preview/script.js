function over(element){
    element.style.backgroundColor = "gray";
}

function notover(element){
    element.style.backgroundColor = "rebeccapurple";
}

function play(element){
    basketball_video = document.getElementById("myVideo").muted = true;
    vid.play(element);
}

function pause(element){
    basketball_video = document.getElementById("myVideo");
    vid.pause(element);
}