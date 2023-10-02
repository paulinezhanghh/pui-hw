const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg",
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg",
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg",
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg",
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg",
    }    
};

//initialize the cart to the empty array
let cart = [];

//initialize the way of how to get the roll type using URL scheme
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//display the inital basePrice before user changes any glazing and packSize
//use the querySelector to find the section where price us displying
//add the basePice of each roll to the textContent
let basePrice = rolls[rollType]["basePrice"];
let finalPirce = document.querySelector('.all-addCartText');
finalPirce.textContent = "$ "+basePrice;

//find the imageFile name inside the roll array
//use querySelector to find the section where to put the picture
//add the prefix "../../assets/products/" to find the correct imageFile in the assets folder
let imageFile = rolls[rollType]["imageFile"];
let imageSelected = document.querySelector('#rollPicture');
imageSelected.src="../../assets/products/"+imageFile;

//change the heading of each page so that it matches with the roll user clicked
let headingSelected = document.querySelector('.all-headingTitle');
headingSelected.textContent = rollType +" Cinnamon Roll";

//create a Roll class that will be used to generate added rolls when user click "Add to cart"
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

//printInstance is the function that will be called each time the user click on "Add to cart"
//Inside this function, we will define the variables that will be used as 
//parameters needed to construct an object that belongs to Roll class, 
//including rollType, rollGlazing, packSize and basePrice.
//After we have these variables, we can use them to create objects calling the constructor of Roll
//Then, store the object into the cart using push()
//Finally, use console.log() to print the whole cart
function printInstance(){
    let glazeChose = document.querySelector('#glazing');
    let glazeName = glazeChose.options[glazeChose.selectedIndex].text
    let packSizeChose = document.querySelector('#packSize');
    let packSizeName = packSizeChose.options[packSizeChose.selectedIndex].text;
    let output = new Roll(rollType,glazeName,packSizeName,basePrice);
    cart.push(output);
    console.log(cart);
}







