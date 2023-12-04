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
let sizeChange = 1;
let option = 0;
let correctAnswer = 4;
let isWinned = false;
let isFalse = false;


function preload() {
    screen1Background = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
    teaSetText = loadImage("https://i.imgur.com/ECjiO9Q.png");
    teaMeasurement = loadImage("https://i.imgur.com/FUx2JqO.png");//采茶
    teaMeasurementText = loadImage("https://i.imgur.com/FTLoZzf.png");
    teaTray = loadImage("https://i.imgur.com/ky41xsi.png");//筛茶
    teaTrayText = loadImage("https://i.imgur.com/WP0Ybtl.png");
    teaClip = loadImage("https://i.imgur.com/iMDnbk1.png");//晒茶
    teaClipText = loadImage("https://i.imgur.com/8vUV8Yi.png");
    teaMat = loadImage("https://i.imgur.com/X3dBHyy.png");//熏茶
    teaMatText = loadImage("https://i.imgur.com/AUllT6L.png");
    teaStrainer = loadImage("https://i.imgur.com/AAeMsob.png");//包装
    teaStrainerText = loadImage("https://i.imgur.com/AcVBYvC.png");
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
    textStyle(BOLD);
    text(document.getElementById("title").innerText, 390, 130);


    //learning part
    stroke(color(0,0,0,50));
    strokeWeight(15);

    let end = 735;
    line(290,610,290+end,610);

    strokeWeight(0);
    fill(color(0,0,0));
    textSize(22);
    textFont('Cardo');
    textStyle(BOLD);
    text('0%',290,660);
    text('100%',990,660);
    image(teaSetText,-20,-20,432,224);
    stroke(color(0,0,0));
    strokeWeight(0);
    if(progressNum==0){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        image(teaMeasurement,width/2+10,height/2-120,250,161);
        image(teaMeasurementText,width/2-250,height/2+70,99,157);
        let introText = "The tea clip, also known as tea chopsticks, serves the same purpose as a tea spoon, allowing the removal of tea residue from the teapot. It can also be used to hold tea cups for washing, providing both heat protection and hygiene.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Picking Tea";
        text(document.getElementById("teaSetType").innerText, 500, height/2+5);
        imageMode(CORNER);
        strokeWeight(15);
        line(290,610,290+end*0,610);
    }
    else if(progressNum==1){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        image(teaTray,width/2+30,height/2-120,250,161);
        image(teaTrayText,width/2-250,height/2+70,99,157);
        let introText = "The tea clip, also known as tea chopsticks, serves the same purpose as a tea spoon, allowing the removal of tea residue from the teapot. It can also be used to hold tea cups for washing, providing both heat protection and hygiene.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Sieving Tea";
        text(document.getElementById("teaSetType").innerText, 500, height/2+5);
        imageMode(CORNER);
        strokeWeight(15);
        line(290,610,290+end*0.2,610);
    }
    else if(progressNum==2){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        image(teaClip,width/2+20,height/2-120,214,144);
        image(teaClipText,width/2-250,height/2+70,99,157);
        let introText = "The tea clip, also known as tea chopsticks, serves the same purpose as a tea spoon, allowing the removal of tea residue from the teapot. It can also be used to hold tea cups for washing, providing both heat protection and hygiene.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Drying Tea";
        text(document.getElementById("teaSetType").innerText, 500, height/2+5);
        imageMode(CORNER);
        strokeWeight(15);
        line(290,610,290+end*0.4,610);
    }
    else if(progressNum==3){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        image(teaMat,width/2+20,height/2-120,200,128);
        image(teaMatText,width/2-250,height/2+70,99,157);
        let introText = "The tea clip, also known as tea chopsticks, serves the same purpose as a tea spoon, allowing the removal of tea residue from the teapot. It can also be used to hold tea cups for washing, providing both heat protection and hygiene.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Fumigation";
        text(document.getElementById("teaSetType").innerText, 500, height/2+5);
        imageMode(CORNER);
        strokeWeight(15);
        line(290,610,290+end*0.6,610);
    }
    else if(progressNum==4){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        image(teaStrainer,width/2+20,height/2-120,268,180);
        image(teaStrainerText,width/2-250,height/2+70,99,157);
        let introText = "The tea clip, also known as tea chopsticks, serves the same purpose as a tea spoon, allowing the removal of tea residue from the teapot. It can also be used to hold tea cups for washing, providing both heat protection and hygiene.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Packaging";
        text(document.getElementById("teaSetType").innerText, 500, height/2+5);
        imageMode(CORNER);
        strokeWeight(15);
        line(290,610,290+end*0.8,610);
    }
    else if(progressNum==5){
        document.getElementById("TeaClipDescription").textContent = "";
        document.getElementById("blankSpace2").style.height = "141px";
        textSize(25);
        textFont('Cardo');
        fill('black');
        strokeWeight(0);
        text(document.getElementById("testing").innerText, width/2-50, 200);
        textSize(18);
        textStyle(NORMAL);
        text(document.getElementById("question1").innerText, 500, 270);
        noFill();
        strokeWeight(2);
        rect(500,285,18,18);
        rect(500,315,18,18);
        rect(500,345,18,18);
        rect(500,375,18,18);
        drawCurrentOption();
        strokeWeight(0);
        fill('black');
        text(document.getElementById("optionA").innerText, 540, 300);
        text(document.getElementById("optionB").innerText, 540, 330);
        text(document.getElementById("optionC").innerText, 540, 360);
        text(document.getElementById("optionD").innerText, 540, 390);
        if(isWinned){
            drawCongrat();
            localStorage.setItem('stampTwoFinished', true);
        }
        if(isFalse){
            drawYouAreFalse()
        }
        strokeWeight(15);
        line(290,610,290+end*0.98,610);
    }
}
function drawCurrentOption(){
    if(option==1){
        fill('black');
        strokeWeight(0);
        rect(504,289,10,10);
    }
    else if(option==2){
        fill('black');
        strokeWeight(0);
        rect(504,319,10,10);
    }
    else if(option==3){
        fill('black');
        strokeWeight(0);
        rect(504,349,10,10);
    }
    else if(option==4){
        fill('black');
        strokeWeight(0);
        rect(504,379,10,10);
    }
}
function drawCongrat(){
    fill('white');
    strokeWeight(1.5);
    rect(width/2-150,height/2-80,300,160,20);
    circle(width/2-150,height/2-80,30);
    textFont(15);
    fill('black');
    strokeWeight(0);
    textFont('Cardo');
    text("You are right! Passed this unit!",width/2-110,height/2);
}
function drawYouAreFalse(){
    fill('white');
    strokeWeight(1.5);
    rect(width/2-150,height/2-80,300,160,20);
    circle(width/2-150,height/2-80,30);
    textFont(15);
    fill('black');
    strokeWeight(0);
    textFont('Cardo');
    text("Your answer is wrong. Try Again!",width/2-120,height/2);
}

function mousePressed(){
    if(progressNum==5){
        if(500<=mouseX && mouseX<=518){
            if(285<=mouseY && mouseY<=303){
                option = 1;
            }
            else if(315<=mouseY && mouseY<=333){
                option = 2;
            }
            else if(345<=mouseY && mouseY<=363){
                option = 3;
            }
            else if(375<=mouseY && mouseY<=393){
                option = 4;
            }
        }
    }
    if(isWinned){
        if(width/2-165<=mouseX && mouseX<=width/2-135){
            isWinned=false;
        }
    }
    if(isFalse){
        if(width/2-165<=mouseX && mouseX<=width/2-135){
            isFalse=false;
        }
    }
}

function nextItem(){
    if(progressNum<5){
        progressNum++;
    }
    if(option==correctAnswer){
        isWinned=true;
    }
    else if(option!=correctAnswer && option!=0){
        isFalse=true;
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