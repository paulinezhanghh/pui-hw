let screenBackground;
let fisher;
let heading;
let stampOne;
let stampTwo;
let stampThree;
let stampFour;
let stampOneBW;
let stampTwoBW;
let stampThreeBW;
let stampFourBW;
if(localStorage.getItem('stampOneFinished')==null){
    localStorage.setItem('stampOneFinished', false);
}
if(localStorage.getItem('stampTwoFinished')==null){
    localStorage.setItem('stampTwoFinished', false);
}
if(localStorage.getItem('stampThreeFinished')==null){
    localStorage.setItem('stampThreeFinished', false);
}
if(localStorage.getItem('stampFourFinished')==null){
    localStorage.setItem('stampFourFinished', false);
}

let resize;

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
if(viewportWidth<=1320*0.7 || viewportHeight<=659*0.7){
    resize = 0.6;
}
else{
    resize = 1;
}


function preload() {
    screenBackground = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
    fisher = loadImage("https://i.imgur.com/62eTO91.png");
    heading = loadImage('https://i.imgur.com/stDfg8J.png');
    stampOne = loadImage('https://i.imgur.com/NvSTe4b.png');
    stampTwo = loadImage('https://i.imgur.com/Cs007Q9.png');
    stampThree = loadImage('https://i.imgur.com/abr5bgK.png');
    stampFour = loadImage('https://i.imgur.com/7fBKMGc.png');
    stampOneBW = loadImage('https://i.imgur.com/GCh4SbZ.png');
    stampTwoBW = loadImage('https://i.imgur.com/i02RqGM.png');
    stampThreeBW = loadImage('https://i.imgur.com/mMwSpKU.png');
    stampFourBW = loadImage('https://i.imgur.com/eFMGZ72.png');
}



function setup() {
    canvas = createCanvas(1320*resize, 695*resize);
    canvas.position(0,0);
    canvas.style('z-index','-1');
}
function draw(){
    if(resize!=1){
        let returnHome = document.getElementById("returnHome");
        returnHome.style.fontSize="8px";
        returnHome.style.padding = "7px"
        returnHome.style.height = "28px"
        returnHome.style.borderWidth ="1px";
        returnHome.style.borderRadius ="7px";

        let reset = document.getElementById("reset");
        reset.style.fontSize="8px";
        reset.style.padding = "7px"
        reset.style.height = "28px"
        reset.style.borderWidth ="1px";
        reset.style.borderRadius ="7px";

        let returnBlank = document.getElementById("blankSpace3");
        returnBlank.style.height="370px";
    }
  
    imageMode(CORNER);
    image(screenBackground,0,0,width,height);
    fill(color(255,255,255,100));
    strokeWeight(0);
    rect(0,0,width,height);
    image(heading,-20*resize,-20*resize,432*resize,224*resize);

    imageMode(CENTER);
    image(fisher,100*resize,height/2+100*resize,660*resize,450*resize);

    imageMode(CORNER);
    const stampOneCheck = JSON.parse(localStorage.getItem('stampOneFinished'));
    if(!stampOneCheck){
        image(stampOneBW,550*resize,30*resize,185*resize,300*resize);
    }else{
        image(stampOne,550*resize,30*resize,185*resize,300*resize);
    }
    const stampTwoCheck = JSON.parse(localStorage.getItem('stampTwoFinished'));
    if(!stampTwoCheck){
        image(stampTwoBW,950*resize,30*resize,185*resize,300*resize);
    }else{
        image(stampTwo,950*resize,30*resize,185*resize,300*resize);
    }
    const stampThreeCheck = JSON.parse(localStorage.getItem('stampThreeFinished'));
    if(!stampThreeCheck){
        image(stampThreeBW,550*resize,370*resize,185*resize,300*resize);
    }else{
        image(stampThree,550*resize,370*resize,185*resize,300*resize);
    }
    const stampFourCheck = JSON.parse(localStorage.getItem('stampFourFinished'));
    if(!stampFourCheck){
        image(stampFourBW,950*resize,400*resize,200*resize,230*resize);
    }else{
        image(stampFour,950*resize,400*resize,200*resize,230*resize);
    }

}

function returnHome(){
    location.replace("index.html");
}

function resetStamp(){
    localStorage.setItem('stampOneFinished', false);
    localStorage.setItem('stampTwoFinished', false);
    localStorage.setItem('stampThreeFinished', false);
    localStorage.setItem('stampFourFinished', false);
}

function checkViewport(){
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    console.log(viewportWidth+"    "+viewportHeight)
    
    if(viewportWidth<=1320*0.8 || viewportHeight<=695*0.8){
        window.location.reload();
    }
    else{
        window.location.reload();
    }
}
