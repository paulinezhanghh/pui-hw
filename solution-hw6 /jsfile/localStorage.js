//initialize the cart to the empty array
let cartSet = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

function addToCart(){
    let glazeChose = document.querySelector('#glazing');
    let glazeName = glazeChose.options[glazeChose.selectedIndex].text;
    let packSizeChose = document.querySelector('#packSize');
    let packSizeName = packSizeChose.options[packSizeChose.selectedIndex].text;
    addNewRoll(rollType,glazeName,packSizeName,basePrice);
    saveToLocalStorage();
    console.log(cartSet);
}

function addNewRoll(type, glazing, packSize,basePrice) {
    const newRoll = new Roll(type, glazing, packSize,basePrice);
    console.log(packSize);
    cartSet.push(newRoll);
}

function saveToLocalStorage(){
    const newRollString = JSON.stringify(cartSet);
    localStorage.setItem('storedRolltest3', newRollString);
    console.log(cartSet);
}

function retrieveFromLocalStorage(){
    const newRollString = localStorage.getItem('storedRolltest3');
    const newRoll = JSON.parse(newRollString);
    for (const eachRoll of newRoll){
        addNewRoll(eachRoll.type, eachRoll.glazing, eachRoll.size,eachRoll.basePrice);
    }
}

if (localStorage.getItem('storedRolltest3')!=null){
    retrieveFromLocalStorage();
}

