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











