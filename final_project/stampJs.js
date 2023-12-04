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
    canvas = createCanvas(1320, 695);
    canvas.position(0,0);
    canvas.style('z-index','-1');
}
function draw(){
    imageMode(CORNER);
    image(screenBackground,0,0,width,height);
    fill(color(255,255,255,100));
    strokeWeight(0);
    rect(0,0,width,height);
    image(heading,-20,-20,432,224);

    imageMode(CENTER);
    image(fisher,100,height/2+100,660,450);

    imageMode(CORNER);
    const stampOneCheck = JSON.parse(localStorage.getItem('stampOneFinished'));
    if(!stampOneCheck){
        image(stampOneBW,550,30,185,300);
    }else{
        image(stampOne,550,30,185,300);
    }
    const stampTwoCheck = JSON.parse(localStorage.getItem('stampTwoFinished'));
    if(!stampTwoCheck){
        image(stampTwoBW,950,30,185,300);
    }else{
        image(stampTwo,950,30,185,300);
    }
    const stampThreeCheck = JSON.parse(localStorage.getItem('stampThreeFinished'));
    if(!stampThreeCheck){
        image(stampThreeBW,550,370,185,300);
    }else{
        image(stampThree,550,370,185,300);
    }
    const stampFourCheck = JSON.parse(localStorage.getItem('stampFourFinished'));
    if(!stampFourCheck){
        image(stampFourBW,950,400,200,230);
    }else{
        image(stampFour,950,400,200,230);
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