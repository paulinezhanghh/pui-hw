let screen1Background;
let teaSetText;
let teaClip;
let teaClipText;
let teaMat;
let teaMatText;
let teaTray;
let teaTrayText;
let teaStrainer;
let teaStrainerText;
let teaMeasurement;
let teaMeasurementText;


let progressNum = 0;


function preload() {
    screen1Background = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
    teaSetText = loadImage("https://i.imgur.com/hVU6mjb.png");
    teaClip = loadImage("https://i.imgur.com/ngEY5Bp.png");
    teaClipText = loadImage("https://i.imgur.com/2XS0mOM.png");
    teaMat = loadImage("https://i.imgur.com/3nO1xxE.png");
    teaMatText = loadImage("https://i.imgur.com/5Klqtty.png");
    teaTray = loadImage("https://i.imgur.com/KScxaLf.png");
    teaTrayText = loadImage("https://i.imgur.com/Kdr76ef.png");
    teaStrainer = loadImage("https://i.imgur.com/6aV6dJY.png");
    teaStrainerText = loadImage("https://i.imgur.com/FHDczDc.png");
    teaMeasurement = loadImage("https://i.imgur.com/f88mqw2.png");
    teaMeasurementText = loadImage("https://i.imgur.com/5I4gTB7.png");
}




function setup() {
    canvas = createCanvas(1320, 695);
    canvas.position(0,0);
    canvas.style('z-index','-1');
}

function draw() {
    drawScreen1();
}



function drawScreen1(){
    imageMode(CORNER);
    image(screen1Background,0,0,width,height);
    fill(color(255,255,255,100));
    strokeWeight(0);
    rect(0,0,width,height);
    textSize(45);
    textFont('Cardo');
    fill('black');
    text(document.getElementById("title").innerText, 390, 150);


    //learning part
    stroke(color(0,0,0,50));
    strokeWeight(15);

    let end = 735;
    line(290,610,290+end,610);

    strokeWeight(0);
    fill(color(0,0,0));
    textSize(20);
    textFont('Cardo');
    textStyle(BOLD);
    text('0%',290,660);
    text('100%',990,660);
    image(teaSetText,-20,-20,432,224);
    stroke(color(0,0,0));
    strokeWeight(15);
    if(progressNum==0){
        imageMode(CENTER);
        image(teaClip,width/2-40,height/2-120,358,230);
        image(teaClipText,width/2-250,height/2+60,99,157);
        imageMode(CORNER);
        line(290,610,290+end*0,610);
    }
    else if(progressNum==1){
        imageMode(CENTER);
        image(teaMat,width/2-10,height/2-120,358,230);
        image(teaMatText,width/2-250,height/2+60,99,157);
        imageMode(CORNER);
        line(290,610,290+end*0.2,610);
    }
    else if(progressNum==2){
        imageMode(CENTER);
        image(teaTray,width/2-10,height/2-120,358,230);
        image(teaTrayText,width/2-250,height/2+60,99,157);
        imageMode(CORNER);
        line(290,610,290+end*0.4,610);
    }
    else if(progressNum==3){
        imageMode(CENTER);
        image(teaStrainer,width/2-10,height/2-120,358,230);
        image(teaStrainerText,width/2-250,height/2+60,99,157);
        imageMode(CORNER);
        line(290,610,290+end*0.6,610);
    }
    else if(progressNum==4){
        imageMode(CENTER);
        image(teaMeasurement,width/2-10,height/2-120,358,230);
        image(teaMeasurementText,width/2-250,height/2+60,99,157);
        imageMode(CORNER);
        line(290,610,290+end*0.8,610);
    }
  }

function nextItem(){
    if(progressNum<4){
        progressNum++;
    }
}

function prevItem(){
    if(progressNum>0){
        progressNum--;
    }
}

function returnHome(){
    location.replace("index.html");
}