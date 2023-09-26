////////////////Glaizing Section////////////////
let keepOriginal={
    name:'Keep original',
    priceAdapt:0.0,
};
let sugarMilk={
    name:'Sugar milk',
    priceAdapt:0.0,
};
let vanillaMilk={
    name:'Vanill milk',
    priceAdapt:0.5,
};
let doubleChocolate={
    name:'Double chocolate',
    priceAdapt:1.5,
};
//create glazing array
//find the glazing select tage using id:glazing
let glazingOptionsArr=[keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let glazeSelected = document.querySelector('#glazing');

//use loop to populate glazing options
for (let i=0;i<glazingOptionsArr.length;i++){
    let option = document.createElement('option');
    option.text = glazingOptionsArr[i].name;
    option.value = glazingOptionsArr[i].priceAdapt;
    glazeSelected.add(option);
}

//name the global variable outputPrize to access inside helper function
//find the prize section in product detialed page using querySelector
let outputPrize=2.49;
let finalPirce = document.querySelector('.all-addCartText');

//naming global variable to access later
let glazePrice = 0;
let packPrice = 1;

//onchange function for glazing
function glazingChange(element){
    glazePrice=element.value;
    outputPrize = (2.49+parseFloat(glazePrice))*parseInt(packPrice);
    outputPrize=outputPrize.toFixed(2);  //round the price to 2 decimals
    finalPirce.textContent="$ "+outputPrize 
}

////////////////PackSize Section////////////////

let pack1 = {
    packSize:1,
    priceAdapt:1,
};
let pack3 = {
    packSize:3,
    priceAdapt:3,
};
let pack6 = {
    packSize:6,
    priceAdapt:5,
};
let pack12 ={
    packSize:12,
    priceAdapt:10,
};

//create packSize array
//find the glazing select tage using id:packSize
let packOptionsArr=[pack1,pack3,pack6,pack12];
let packSelected = document.querySelector('#packSize');

//use loop to populate pack size options
for (let i=0;i<packOptionsArr.length;i++){
    let option = document.createElement('option');
    option.text = packOptionsArr[i].packSize;
    option.value = packOptionsArr[i].priceAdapt;;
    packSelected.add(option);
}

//onchange function for packSize
function packSizeChange(element){
    packPrice = element.value;
    outputPrize = (2.49+parseFloat(glazePrice))*parseInt(packPrice);
    outputPrize=outputPrize.toFixed(2);  //round the price to 2 decimals
    finalPirce.textContent="$ "+outputPrize;
}


