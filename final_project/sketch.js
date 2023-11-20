let homeScene;
let iconOne;
let iconTwo;
let iconThree;
let iconFour;
let iconFive;
let iconSix;
let heading;

let growSize = 0;
let isGrowing = true;

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

  setInterval(growIcon, 250);
}

function setup() {
  createCanvas(1320, 695);
}

function draw() {
  if(screenNum==0){
    drawHomeScreen();
  }
  if(screenNum==1){
    drawScreen1();
  }
}

function mousePressed(){
  if(518<=mouseX  && mouseX<=648 && 355<=mouseY  && mouseY<=515){
    console.log(mouseX+"  "+mouseY);
    screenNum = 1;
  }
}


function drawHomeScreen(){
  background(220);
  imageMode(CORNER);
  image(homeScene,0,0,width,height);
  
  fill(color(255,255,255,100));
  strokeWeight(0);
  rect(0,0,width,height);
  image(heading,-20,-20,432,224);
  textSize(50);
  textFont('Cardo');
  textStyle(BOLD);
  fill('black');
  text(document.getElementById("words").innerText, 470, 170);
  if(isGrowing){
    growSize+=0.0012;
  }
  else{
    growSize-=0.0012;
  }
  imageMode(CENTER);
  image(iconOne,583,435,130*(1+growSize),160*(1+growSize)); // 茶具
  image(iconTwo,750,465,70*(1+growSize),70*(1+growSize)); //茶杯
  image(iconThree,875,450,187*(1+growSize),160*(1+growSize)); //茶壶
  image(iconFour,225,595,320*(1+growSize),200*(1+growSize)); // 卷轴
  image(iconFive,480,440,150*(1+growSize),165*(1+growSize)); // 花瓶
  image(iconSix,1150,625,260*(1+growSize),140*(1+growSize)); // 书
}

function drawScreen1(){
  background(0,0,0);
}

function growIcon(){
  if(growSize>=0.035){
    isGrowing = false;
  }
  else if(growSize<=0){
    isGrowing = true;
  }
}