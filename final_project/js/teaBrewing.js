//declare the variables
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
let correctAnswer = 1;
let isWinned = false;
let isFalse = false;
let resize;

//check the viewport while the page reloaded
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//if it's in a smaller viewport, change resize to 0.6
if(viewportWidth<=1320*0.7 || viewportHeight<=659*0.7){
    resize = 0.6;
}
//if it's in the larger viewport, let resize be 1
else{
    resize = 1;
}

//preload all the images
function preload() {
    screen1Background = loadImage("https://i.imgur.com/TCrCUdO.jpeg");
    teaSetText = loadImage("https://i.imgur.com/FZCd8Dp.png");
    teaMeasurement = loadImage("https://i.imgur.com/jRrmw30.png");//wash the tea sets 洗茶杯
    teaMeasurementText = loadImage("https://i.imgur.com/iyf0z45.png");
    teaTray = loadImage("https://i.imgur.com/JUFfq8Q.png");//put tea leaves inside 放茶叶
    teaTrayText = loadImage("https://i.imgur.com/XPk6BPe.png");
    teaClip = loadImage("https://i.imgur.com/j0MuzZr.png");//put water inside 放水
    teaClipText = loadImage("https://i.imgur.com/CxftXSh.png");
    teaMat = loadImage("https://i.imgur.com/5JFmFFW.png");// 循环倒茶
    teaMatText = loadImage("https://i.imgur.com/8fpmGRA.png");
    teaStrainer = loadImage("https://i.imgur.com/DVkINM1.png");// 奉茶
    teaStrainerText = loadImage("https://i.imgur.com/GktcMDE.png");
}

//create the canvas and make visual elements the background of html page.
function setup() {
    canvas = createCanvas(1320*resize, 695*resize);
    canvas.position(0,0);
    canvas.style('z-index','-1');
}

//call the drawScreen function
function draw() {
    drawScreen();
}

//function that draws the whole screen.
function drawScreen(){
    //show the background and the title of the page.
    imageMode(CORNER);
    image(screen1Background,0,0,width,height);
    fill(color(255,255,255,100));
    strokeWeight(0);
    rect(0,0,width,height);
    textSize(45*resize);
    textFont('Cardo');
    fill('black');
    textStyle(BOLD);
    text(document.getElementById("title").innerText, 390*resize, 130*resize);


    //learning part
    stroke(color(0,0,0,50));
    strokeWeight(15);
    //show the learning process bar at the bottom
    let end = 735;
    line(290*resize,610*resize,(290+end)*resize,610*resize);
    strokeWeight(0);
    fill(color(0,0,0));
    textSize(22*resize);
    textFont('Cardo');
    textStyle(BOLD);
    text('0%',290*resize,660*resize);
    text('100%',990*resize,660*resize);
    //show the Chinese page title
    image(teaSetText,-20*resize,-20*resize,432*resize,224*resize);
    stroke(color(0,0,0));
    strokeWeight(0);
    //when it's in the smaller screen size
    //the checking condition will be if resize is not 1.
    if(resize!=1){
        //change the size of box model of description
        let container = document.getElementById("screenOneText");
        container.style.width="200px";
        container.style.marginLeft = "300px";
        //change the font style of description
        let word = document.getElementById("TeaClipDescription");
        word.style.fontSize = "9px";
        word.style.lineHeight = "15px";

        //change the size of blanck space between title and description
        let blankspaceOne = document.getElementById("blankSpace");
        blankspaceOne.style.height="205px";

        //find the button elements we need to change
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        let returnHome = document.getElementById("returnHome");

        //change the CSS style of prev button to fit smaller size screen
        prev.style.fontSize = "7px";
        prev.style.padding = "5px"
        prev.style.height = "25px"
        prev.style.marginLeft = "300px"
        prev.style.borderWidth ="1px";
        prev.style.borderRadius ="7px";

        //change the CSS style of next button to fit smaller size screen
        next.style.fontSize = "7px";
        next.style.padding = "5px"
        next.style.paddingLeft = "10px"
        next.style.paddingRight = "10px"
        next.style.height = "25px"
        next.style.marginLeft = "100px"
        next.style.borderWidth ="1px";
        next.style.borderRadius ="7px";

        //change the CSS style of returnHome button to fit the smaller size screen
        returnHome.style.fontSize="7px";
        returnHome.style.padding = "10px"
        returnHome.style.borderWidth ="1px";
        returnHome.style.borderRadius ="7px";
        
        //change the size of the blank space between description and button
        document.getElementById("blankSpace2").style.height = "84px";
    }
    //first page of learning
    if(progressNum==0){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        //show image and text
        image(teaMeasurement,width/2+10*resize,height/2-115*resize,250*resize,161*resize);
        image(teaMeasurementText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "When it comes to the tea tools that encounter tea the most, like tea infusers, fairness cups, and tea cups, the cleaning process is straightforward: after a quick wash, pour boiling water over them, then let them air-dry naturally.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Washing Tea Set";
        text(document.getElementById("teaSetType").innerText, 500*resize, height/2+5*resize);
        imageMode(CORNER);
        strokeWeight(15);
        //change the line progress
        line(290*resize,610*resize,(290+end*0)*resize,610*resize);
    }
    //second page of learning
    else if(progressNum==1){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        //show image and text
        image(teaTray,width/2+10*resize,height/2-120*resize,250*resize,161*resize);
        image(teaTrayText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "First, we need to separate the tea leaves by size and use a tea spoon to gently place them into the teapot. Put the coarse ones at the bottom and the fine ones on top. Avoid filling the teapot too much; seven or eight-tenths full is sufficient.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Put Leaves In";
        text(document.getElementById("teaSetType").innerText, 500*resize, height/2+5*resize);
        imageMode(CORNER);
        strokeWeight(15);
        //change the line progress
        line(290*resize,610*resize,(290+end*0.2)*resize,610*resize);
    }
    //third page of learning 
    else if(progressNum==2){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        //show image and text
        image(teaClip,width/2,height/2-105*resize,214*resize,144*resize);
        image(teaClipText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "Lift the kettle, allowing water to flow directly into the teapot. Adjust the height of the kettle up and down to ensure thorough immersion of the tea leaves. Also, pay attention to the upright posture of the person pouring the water.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Pouring Water";
        text(document.getElementById("teaSetType").innerText, 500*resize, height/2+5*resize);
        imageMode(CORNER);
        strokeWeight(15);
        //change the line progress
        line(290*resize,610*resize,(290+end*0.4)*resize,610*resize);
    }
    //fourth page of learning
    else if(progressNum==3){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        //show image and text
        image(teaMat,width/2,height/2-105*resize,200*resize,128*resize);
        image(teaMatText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "When pouring tea, avoid filling the cups all at once. This might cause the color of the tea to be different. Instead, pour the tea circularly to ensure that tea is evenly distributed in each tea cup, and the color is consistent.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Pouring Tea";
        text(document.getElementById("teaSetType").innerText, 500*resize, height/2+5*resize);
        imageMode(CORNER);
        strokeWeight(15);
        //change the line progress
        line(290*resize,610*resize,(290+end*0.6)*resize,610*resize);
    }
    //fifth page of learning
    else if(progressNum==4){
        option = 0;
        document.getElementById("blankSpace2").style.height = "0px";
        imageMode(CENTER);
        //show image and text
        image(teaStrainer,width/2-20*resize,height/2-105*resize,250*resize,160*resize);
        image(teaStrainerText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "When serving the tea, make sure you hold the tea cup by both hands to show the respect to other people. The order of tea serving should based on the age, social status or how close you are with this person. The higher the age, the higher the order."
        "When pouring tea, avoid filling the cups all at once. Instead, circulate to ensure that water is evenly distributed in each tea cup, and the color is consistent.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Serving Tea";
        text(document.getElementById("teaSetType").innerText, 500*resize, height/2+5*resize);
        imageMode(CORNER);
        strokeWeight(15);
        //change the line progress
        line(290*resize,610*resize,(290+end*0.8)*resize,610*resize);
    }
    //test page
    else if(progressNum==5){
        document.getElementById("TeaClipDescription").textContent = "";
        //change the CSS style of blankspace2 if it's in the smaller size
        if(resize==1){
            document.getElementById("blankSpace2").style.height = "141px";
        }
        textSize(25*resize);
        textFont('Cardo');
        fill('black');
        strokeWeight(0);
        //show the title
        text(document.getElementById("testing").innerText, width/2-50*resize, 200*resize);
        textSize(18*resize);
        textStyle(NORMAL);
        //show the question content
        text(document.getElementById("question1").innerText, 500*resize, 270*resize);
        noFill();
        strokeWeight(2*resize);
        //draw the selection rectangles
        rect(500*resize,285*resize,18*resize,18*resize);
        rect(500*resize,315*resize,18*resize,18*resize);
        rect(500*resize,345*resize,18*resize,18*resize);
        rect(500*resize,375*resize,18*resize,18*resize);
        //call drawCurrentOption to display the selected rect
        drawCurrentOption();
        strokeWeight(0);
        fill('black');
        //show the content of 4 options
        text(document.getElementById("optionA").innerText, 540*resize, 300*resize);
        text(document.getElementById("optionB").innerText, 540*resize, 330*resize);
        text(document.getElementById("optionC").innerText, 540*resize, 360*resize);
        text(document.getElementById("optionD").innerText, 540*resize, 390*resize);
        textStyle(BOLD);
        text(document.getElementById("instruction").innerText, 540*resize, 420*resize);
        textStyle(NORMAL);
        //if the current option is correct, call function drawCongrat to display congrats pop-up
        if(isWinned){
            drawCongrat();
            //update the stampTwoFinished(second unit) icon as true so this stamp will be colorful
            localStorage.setItem('stampThreeFinished', true);
        }
        //if the current option is wrong, call function drawCongrat to display false pop-up
        if(isFalse){
            drawYouAreFalse()
        }
        strokeWeight(15);
        //update the line progress
        line(290*resize,610*resize,(290+end*0.98)*resize,610*resize);
    }
}

//function that detect which option is being selected and where the filled rect will be.
function drawCurrentOption(){
    if(option==1){
        fill('black');
        strokeWeight(0);
        rect(504*resize,289*resize,10*resize,10*resize);
    }
    else if(option==2){
        fill('black');
        strokeWeight(0);
        rect(504*resize,319*resize,10*resize,10*resize);
    }
    else if(option==3){
        fill('black');
        strokeWeight(0);
        rect(504*resize,349*resize,10*resize,10*resize);
    }
    else if(option==4){
        fill('black');
        strokeWeight(0);
        rect(504*resize,379*resize,10*resize,10*resize);
    }
}

//function that draws the congrats pop-up.
function drawCongrat(){
    fill('white');
    strokeWeight(1.5);
    rect(width/2-150*resize,height/2-80*resize,300*resize,160*resize,20*resize);
    circle(width/2-150*resize,height/2-80*resize,30*resize);
    strokeWeight(3);
    line(width/2-155*resize,height/2-85*resize,width/2-145*resize,height/2-75*resize);
    line(width/2-155*resize,height/2-75*resize,width/2-145*resize,height/2-85*resize);
    textFont(15*resize);
    fill('black');
    strokeWeight(0);
    textFont('Cardo');
    textStyle(BOLD);
    text("You are right! Passed this unit!",width/2-115*resize,height/2);
}

//function that draws the false pop-up
function drawYouAreFalse(){
    fill('white');
    strokeWeight(1.5);
    rect(width/2-150*resize,height/2-80*resize,300*resize,160*resize,20*resize);
    circle(width/2-150*resize,height/2-80*resize,30*resize);
    strokeWeight(3);
    line(width/2-155*resize,height/2-85*resize,width/2-145*resize,height/2-75*resize);
    line(width/2-155*resize,height/2-75*resize,width/2-145*resize,height/2-85*resize);
    textFont(15*resize);
    fill('black');
    strokeWeight(0);
    textFont('Cardo');
    textStyle(BOLD);
    text("Your answer is wrong. Try Again!",width/2-125*resize,height/2);
}

//function that detect mouse clicking event
function mousePressed(){
    //if user is in testing section, check which option they are choosing
    if(progressNum==5){
        if(500*resize<=mouseX && mouseX<=518*resize){
            if(285*resize<=mouseY && mouseY<=303*resize){
                option = 1;
            }
            else if(315*resize<=mouseY && mouseY<=333*resize){
                option = 2;
            }
            else if(345*resize<=mouseY && mouseY<=363*resize){
                option = 3;
            }
            else if(375*resize<=mouseY && mouseY<=393*resize){
                option = 4;
            }
        }
    }

    //if the user click "X" icon of the pop-up, isWinned will be initialized
    if(isWinned){
        if(width/2-165*resize<=mouseX && mouseX<=width/2-135*resize && mouseY<=height/2-65*resize && mouseY>=height/2-95*resize){
            isWinned=false;
        }
    }

    //if the user click "X" icon of the pop-up, isFalse will be initialized
    if(isFalse){
        if(width/2-165*resize<=mouseX && mouseX<=width/2-135*resize && mouseY<=height/2-65*resize && mouseY>=height/2-95*resize){
            isFalse=false;
        }
    }
}

//function that gets to the next page of learning/testing
function nextItem(){
    if(progressNum<5){
        progressNum++;
    }
    //check if user is selecting the correct answer
    //if user is correct, update isWinned
    if(option==correctAnswer){
        isWinned=true;
    }
    //if user is wrong, update isFalse
    else if(option!=correctAnswer && option!=0){
        isFalse=true;
    }
}

//function that gets to previous page of learning
function prevItem(){
    if(progressNum>0){
        progressNum--;
    }
}

//function that returns the home page
function returnHome(){
    location.replace("../index.html");
}

//function that check the viewport when user is resizing the browser
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
