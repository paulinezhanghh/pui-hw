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

//preload the images
function preload() {
  homeScene = loadImage('https://i.imgur.com/3E9bDs6.jpeg');
  teaSet = loadImage('https://i.imgur.com/69Q9Jz0.png');
  teaMaking = loadImage('https://i.imgur.com/czd2xip.png');
  teaBrewing = loadImage('https://i.imgur.com/zb1TsQz.png');
  teaHistory = loadImage('https://i.imgur.com/aI1fjBe.png');
  heading = loadImage('https://i.imgur.com/stDfg8J.png');
  stampIcon = loadImage('https://i.imgur.com/HmYGAM5.png');

  screen1Background = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
  progressNum = 0;
  TeaSetText = loadImage("https://i.imgur.com/hVU6mjb.png");
  TeaClip = loadImage("https://i.imgur.com/ngEY5Bp.png");
  TeaClipText = loadImage("https://i.imgur.com/2XS0mOM.png");
  TeaMat = loadImage("https://i.imgur.com/5Klqtty.png");
  TeaMatText = loadImage("https://i.imgur.com/5Klqtty.png");
  //set the size changing for icons
  setInterval(growIcon, 250);
}

//create the canvas and make visual elements the background of html page.
function setup() {
  canvas = createCanvas(1320*resize, 695*resize);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

//call drawHomeScreen function
function draw() {
  drawHomeScreen();
}

//check which icon is being pressed and get to the corresponding html page
function mousePressed(){
  if(518*resize<=mouseX  && mouseX<=648*resize && 355*resize<=mouseY  && mouseY<=515*resize){ //茶具
    location.replace("./html/teaSet.html");
  }
  if(781*resize<=mouseX  && mouseX<=968*resize && 370*resize<=mouseY  && mouseY<=530*resize){ //茶壶
    location.replace("./html/teaMaking.html");
  }
  if(65*resize<=mouseX && mouseX<=385*resize && 495*resize<=mouseY && mouseY<=695*resize){// 卷轴
    location.replace("./html/teaBrewing.html");
  }
  if(1020*resize<=mouseX && mouseX<=1280*resize && 555*resize<=mouseY && mouseY<=695*resize){
    location.replace("./html/teaHistory.html");
  }
  if(width-70*resize<=mouseX && mouseX<=width-10*resize && 10*resize<=mouseY && mouseY<=70*resize){
    location.replace("./html/stamp.html");
  }
}

//function that draw homescreen
function drawHomeScreen(){
  background(220);
  imageMode(CORNER);
  image(homeScene,0,0,width, height);
  fill(color(255,255,255,100));
  strokeWeight(0);
  rect(0,0,width,height);
  //display the heading image
  image(heading,-20*resize,-20*resize,432*resize,224*resize);
  textSize(50);
  textFont('Cardo');
  textStyle(BOLD);
  fill('black');
  //display the heading text
  text(document.getElementById("words").innerText, 470*resize, 170*resize);
  //set the growing size of icons
  if(isGrowing){
    growSize+=0.0012;
  }
  else{
    growSize-=0.0012;
  }
  imageMode(CENTER);
  textSize(20*resize);
  //display all the icons
  text("Tea Set",550*resize,350*resize); // tea set text pic
  image(teaSet,583*resize,435*resize,130*(1+growSize)*resize,160*(1+growSize)*resize); // tea set pic
  text("Tea Making",820*resize,380*resize); //tea making text pic
  image(teaMaking,875*resize,450*resize,187*(1+growSize)*resize,160*(1+growSize)*resize); // tea making pic
  text("Tea Brewing",150*resize,520*resize);//tea brewing text pic
  image(teaBrewing,225*resize,595*resize,320*(1+growSize)*resize,200*(1+growSize)*resize); // tea brewing pic
  text("Tea History",1070*resize,560*resize);//tea histpry text pic
  image(teaHistory,1150*resize,625*resize,260*(1+growSize)*resize,140*(1+growSize)*resize); // tea history pic 

  //draw the menu bar
  rect(width-80*resize,0*resize,80*resize,height);
  image(stampIcon,width-40*resize,40*resize,30*resize,30*resize)

}

//function that make the size shrink or enlarge.
function growIcon(){
  if(growSize>=0.035){
    isGrowing = false;
  }
  else if(growSize<=0){
    isGrowing = true;
  }
}

//check the viewport size while user is resizing
function checkViewport(){
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  window.location.reload();
}