let canvas;
let homeScene;
let iconOne;
let iconTwo;
let iconThree;
let iconFour;
let iconFive;
let iconSix;
let heading;
let stampIcon;


let screen1Background;

let growSize = 0;
let isGrowing = true;
let resize;

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
if(viewportWidth<=1320*0.7 || viewportHeight<=659*0.7){
    resize = 0.6;
}
else{
    resize = 1;
}

let screenNum = 0;
function preload() {
  homeScene = loadImage('https://i.imgur.com/3E9bDs6.jpeg');
  iconOne = loadImage('https://i.imgur.com/69Q9Jz0.png');
  iconTwo = loadImage('https://i.imgur.com/JXcLAyM.png');
  iconThree = loadImage('https://i.imgur.com/czd2xip.png');
  iconFour = loadImage('https://i.imgur.com/zb1TsQz.png');
  iconFive = loadImage('https://i.imgur.com/xw6u9sx.png');
  iconSix = loadImage('https://i.imgur.com/aI1fjBe.png');
  heading = loadImage('https://i.imgur.com/stDfg8J.png');
  stampIcon = loadImage('https://i.imgur.com/HmYGAM5.png');

  screen1Background = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
  progressNum = 0;
  TeaSetText = loadImage("https://i.imgur.com/hVU6mjb.png");
  TeaClip = loadImage("https://i.imgur.com/ngEY5Bp.png");
  TeaClipText = loadImage("https://i.imgur.com/2XS0mOM.png");
  TeaMat = loadImage("https://i.imgur.com/5Klqtty.png");
  TeaMatText = loadImage("https://i.imgur.com/5Klqtty.png");
  
  setInterval(growIcon, 250);
}

function setup() {
  canvas = createCanvas(1320*resize, 695*resize);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function draw() {
  drawHomeScreen();
}

function mousePressed(){
  if(518*resize<=mouseX  && mouseX<=648*resize && 355*resize<=mouseY  && mouseY<=515*resize){ //茶具
    location.replace("screenOne.html");
  }
  if(781*resize<=mouseX  && mouseX<=968*resize && 370*resize<=mouseY  && mouseY<=530*resize){ //茶壶
    location.replace("chaHu.html");
  }
  if(65*resize<=mouseX && mouseX<=385*resize && 495*resize<=mouseY && mouseY<=695*resize){// 卷轴
    location.replace("juanZhou.html");
  }
  if(1020*resize<=mouseX && mouseX<=1280*resize && 555*resize<=mouseY && mouseY<=695*resize){
    location.replace("book.html");
  }
  if(width-70*resize<=mouseX && mouseX<=width-10*resize && 10*resize<=mouseY && mouseY<=70*resize){
    location.replace("stampPage.html");
  }
  //image(iconSix,1150*resize,625*resize,260*(1+growSize)*resize,140*(1+growSize)*resize); // 书
}


function drawHomeScreen(){
  background(220);
  imageMode(CORNER);
  image(homeScene,0,0,width, height);
  fill(color(255,255,255,100));
  strokeWeight(0);
  rect(0,0,width,height);
  image(heading,-20*resize,-20*resize,432*resize,224*resize);
  textSize(50);
  textFont('Cardo');
  textStyle(BOLD);
  fill('black');
  text(document.getElementById("words").innerText, 470*resize, 170*resize);
  if(isGrowing){
    growSize+=0.0012;
  }
  else{
    growSize-=0.0012;
  }
  imageMode(CENTER);
  image(iconOne,583*resize,435*resize,130*(1+growSize)*resize,160*(1+growSize)*resize); // 茶具
  image(iconThree,875*resize,450*resize,187*(1+growSize)*resize,160*(1+growSize)*resize); //茶壶
  image(iconFour,225*resize,595*resize,320*(1+growSize)*resize,200*(1+growSize)*resize); // 卷轴
  //image(iconFive,480*resize,440*resize,150*(1+growSize)*resize,165*(1+growSize)*resize); // 花瓶
  image(iconSix,1150*resize,625*resize,260*(1+growSize)*resize,140*(1+growSize)*resize); // 书

  //draw the menu bar
  rect(width-80*resize,0*resize,80*resize,height);
  image(stampIcon,width-40*resize,40*resize,30*resize,30*resize)

}


function growIcon(){
  if(growSize>=0.035){
    isGrowing = false;
  }
  else if(growSize<=0){
    isGrowing = true;
  }
}


function checkViewport(){
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  console.log(viewportWidth+"    "+viewportHeight)
  window.location.reload();

}