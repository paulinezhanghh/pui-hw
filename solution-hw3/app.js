let keepOriginal={
    name:'Keep original',
    priceAdapt:0
}

let sugarMilk={
    name:'Sugar milk',
    priceAdapt:0
}

let vanillaMilk={
    name:'Vanill milk',
    priceAdapt:0.5
}

let doubleChocolate={
    name:'Double chocolate',
    priceAdapt:1.5
}

let glazingOptionsArr=[keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let glazeSelected = document.querySelector('#glazing')

for (i=0;i<glazingOptionsArr.length;i++){
    let option = document.createElement('option');
    option.text = glazingOptionsArr[i].name;
    option.value = glazingOptionsArr[i].priceAdapt; // Its value should be the index of the last element in allCars
    glazeSelected.add(option);
}

let outputPrize=2.49
let finalPirce = document.querySelector('.all-addCartText')

//naming global variable to access later
let glazePrice = 0;
let packPrice = 1;

function glazingChange(element){
    glazePrice=element.value;
    outputPrize = (2.49+parseFloat(glazePrice))*packPrice;
    outputPrize=outputPrize.toFixed(2);
    finalPirce.textContent="$ "+outputPrize
}

let pack1 = {
    packSize:1,
    priceAdapt:1
}
let pack3 = {
    packSize:3,
    priceAdapt:3
}
let pack6 = {
    packSize:6,
    priceAdapt:5
}
let pack12 ={
    packSize:12,
    priceAdapt:10
}

let packOptionsArr=[pack1,pack3,pack6,pack12];
let packSelected = document.querySelector('#packSize')

for (i=0;i<packOptionsArr.length;i++){
    let option = document.createElement('option');
    option.text = packOptionsArr[i].packSize;
    option.value = packOptionsArr[i].priceAdapt;;
    packSelected.add(option);
}

function packSizeChange(element){
    packPrice = element.value;
    outputPrize = (2.49+parseFloat(glazePrice))*packPrice;
    outputPrize=outputPrize.toFixed(2);
    finalPirce.textContent="$ "+outputPrize
}


