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
let correctAnswer = 4;
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
    textSize(45);
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
        image(teaMeasurement,width/2+10*resize,height/2-120*resize,250*resize,161*resize);
        image(teaMeasurementText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "Picking tea is a crucial step in Chinese tea production, typically carried out during the spring harvest. It involves selecting the youngest and greenest tea buds, emphasizing manual craftsmanship to ensure the high-quality taste and aroma of the tea leaves." ;
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Picking Tea";
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
        image(teaTray,width/2+30*resize,height/2-120*resize,250*resize,161*resize);
        image(teaTrayText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "Sieving is a process of using meticulous screening to remove impurities, which ensurs the pure quality of the tea leaves. This process results in clearer tea infusion. Therefore, the taste and aroma of the tea leaves will be imrpoved." ;
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Sieving Tea";
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
        image(teaClip,width/2+20*resize,height/2-120*resize,214*resize,144*resize);
        image(teaClipText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = "Usually, tea leaves are sun-dried or roasted naturally to adjust their moisture content, enhancing the taste and aroma. This traditional process not only aids in preserving the tea but also imparts unique flavor and quality to the leaves.";
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Drying Tea";
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
        image(teaMat,width/2+20*resize,height/2-120*resize,200*resize,128*resize);
        image(teaMatText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = 
        "Through skillful smoke curing, tea leaves absorb a unique smoky aroma, adding intricate layers to the taste and showcasing a distinctive flavor. This traditional process imparts a deep, aged fragrance and a unique smokiness to the tea leaves." ;
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Fumigation";
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
        image(teaStrainer,width/2+20*resize,height/2-120*resize,268*resize,180*resize);
        image(teaStrainerText,width/2-250*resize,height/2+70*resize,99*resize,157*resize);
        //change the description text
        let introText = 
        "Tea packaging is a delicate art in Chinese tea culture, focusing on vessel selection. Containers like tea canisters preserve the aroma and quality, emphasizing attention to detail and showcasing a profound respect for tea leaves." ;
        document.getElementById("TeaClipDescription").textContent = introText;
        document.getElementById("teaSetType").textContent = "Packaging";
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
        strokeWeight(2);
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
            localStorage.setItem('stampTwoFinished', true);
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
    location.replace("index.html");
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
