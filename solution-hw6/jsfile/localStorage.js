//initialize the cart to the empty array
let cartItems = [];

//Becasue of the order of the <script> linked in html file, the class
//Roll is defined in this js file.
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

//This function is called everytime when the user click "ADD TO CART" in the 
//product detial page.
//Inside this function, it will first retrieve the glazing and packSize using 
//querySelector. 
//After that, it uses the glazing and packSize to create a new object using 
//the function addNewRoll(...) and save the updated cart array to the local 
//storage using the function saveToLocalStorage().
function addToCart(){
    let glazeChose = document.querySelector('#glazing');
    let glazeName = glazeChose.options[glazeChose.selectedIndex].text;
    let packSizeChose = document.querySelector('#packSize');
    let packSizeName = packSizeChose.options[packSizeChose.selectedIndex].text;
    addNewRoll(rollType,glazeName,packSizeName,basePrice);
    saveToLocalStorage();
}

//This is a helper function that will be used in the function addToCart().
//This function will help to create a new Roll object and then add it to the 
//end of the cart array.
function addNewRoll(type, glazing, packSize,basePrice) {
    const newRoll = new Roll(type, glazing, packSize,basePrice);
    cartItems.push(newRoll);
}

//This function will be called everytime when the user add an item to the cart or
//remove an item from the cart(basically means when the user is trying to change
//the current cart Array).
//In this function, it will convert the cart Array into JSON and store it in the 
//local storage so that we can still retrieve it even when we reload or change into
//another page.
function saveToLocalStorage(){
    const newRollString = JSON.stringify(cartItems);
    localStorage.setItem('storedCartItems', newRollString);
    //This console.log() is used for checking and grading to see whether things are
    //working properly.
    console.log(cartItems);
}

//This function is called everytime we want to retrieve the data from the local
//storage.
//Inside this function, we are going to use JSON.parse() to convert the JSON to the array
//and use the addNewRoll(...) function to add all the elements inside the array back to
//the cart Array we are using.
function retrieveFromLocalStorage(){
    const newRollString = localStorage.getItem('storedCartItems');
    const newRoll = JSON.parse(newRollString);
    for (const eachRoll of newRoll){
        addNewRoll(eachRoll.type, eachRoll.glazing, eachRoll.size,eachRoll.basePrice);
    }
}

//This if statement is used for retrieving the array from the local Strage.
//Combined with the initializaiton of the array cartItems, these 3 lines of code
//means that if we have existing items in the local Storage, we will retrieve them
//and add them back to the cart Array. If we don't have any of the existing items in
//the local storage, we will create an empty cart Array for the user.
if (localStorage.getItem('storedCartItems')!=null){
    retrieveFromLocalStorage();
}


