//Copied from hw4. For finding the baseprice and the matching imageFile that
//will be used for loading different pictures
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

//The class that will be used for consturcting new rolls in the shopping cart array.
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};


//Use new to create 4 rolls that will be used in this hw with their individual
//rollType, rollGlazing, packSize and basePrice.
let roll1 = new Roll("Original","Sugar Milk",1,2.49);
let roll2 = new Roll("Walnut","Vanilla Milk",12,3.49);
let roll3 = new Roll("Raisin","Sugar Milk",3,2.99);
let roll4 = new Roll("Apple","Original",3,3.49);

//Create an array to represent the shopping cart and put the 4 created rolls
//into the this array(allCartItems).
//Create another array called sequence and the purpose of it is to track the
//order of the items inside the shopping cart. This will be used each time
//we click on the remove button.
let allCartItems = [roll1,roll2,roll3,roll4];
let sequence = [0,1,2,3];

//Use querySelector to select the container that will be used for appending
//the nodes of template.
//Use the querySelector to select the template that will be used in the for loop
//at the bottom part.
let container = document.querySelector(".shoppingCartContainer");
let itemPosition = document.querySelector(".shoppingCartTemplate");

//Initialize the checkoutPrice that will be used when loading the page to 0.
//Inside the for loop, I will add all the prices to the checkoutPrice.
let checkoutPrice = 0;

//Inside the for loop, we will do several thing, and I also label corresponding
//thing inside the for loop:
//1. We will clone the template for each loop and name it "template" to create 
//different nodes that will be used for each item.
//2. We will use the "template" variable to search all the needed content inside 
//the template 
//3. Use the rolls object at the very top of this file to find the matching imageFile
//and change the image.src to corresponding picture
//4. Use the information in the roll object(created using class Roll) to change
//the textContent of type, glaze and pack.
//5. Call the helper function "calculateFinalPrice(curGlaze,basePrize,packSize)" to
//calculate the finalPrice for each roll. Then, add the finalPrice for each roll to
//the checkoutPrice that will be displayed at the very bottom of the page.
//6. Each time we create a node, we set the same id to the item(that contains all the 
//information of a roll in html) and the remove(which is the remove button) so that 
//we can always keep track of the order of rolls and what rolls are still remained.
for (let i =0;i<allCartItems.length;i++){
    //1.
    let template = itemPosition.content.cloneNode(true);
    //2.
    let item = template.querySelector(".shoppingCartStructure");
    let image = template.querySelector("img");
    let type = template.querySelector("#cartType");
    let glaze = template.querySelector("#cartGlaze");
    let pack = template.querySelector("#cartPack");
    let price = template.querySelector(".cartPrice");
    let remove = template.querySelector(".toRemove");
    //3.
    let imageFile = rolls[allCartItems[i].type]["imageFile"];
    image.src = "../assets/products/"+imageFile;
    //4.
    type.textContent = allCartItems[i].type+" Cinnamon Roll";
    glaze.textContent = "Glazing: "+allCartItems[i].glazing;
    pack.textContent = "Pack Size: "+allCartItems[i].size;
    //5.
    let finalPrice = calculateFinalPrice(allCartItems[i].glazing,allCartItems[i].basePrice,allCartItems[i].size);
    checkoutPrice+=parseFloat(finalPrice);
    price.textContent = "$" + finalPrice.toFixed(2);
    //6.
    item.setAttribute("id",""+i);
    remove.setAttribute("id",""+i);
    container.appendChild(item);
}

//Use querySelector to find the id checkoutPirce in hmtl and change the textContent
//to the overall checkoutPrice we calculated inside the for loop. This is just for
//the intial display(when nothing is removed).
let priceSelected = document.querySelector("#checkoutPrice");
priceSelected.textContent = "$"+checkoutPrice.toFixed(2);

//This function is linked to the onclick event and this function will do several
//things:
//1. Find the id of the current removing roll and use the sequence we create at the
//very top to find the corresponding index of the current removing roll.
//2. After we find the index of the current removing roll, we want to remove this
//roll from both the sequence and allCartItems array so that they are consistent.
//3. Use the id we found to remove that specific template.
//4. Calculate the renewed price using the helper function. Loop through all the 
//rolls that still remained inside the allCartItems. Then, change textContent of
//the checkoutPirce to the changedPrice.
function removeItem(element){
    //1.
    let value = parseInt(element.id);
    let index = sequence.indexOf(value);
    //2.
    sequence.splice(index,1);
    allCartItems.splice(index,1);
    //3.
    const removeSelected = document.getElementById(""+value);
    removeSelected.remove();
    //4.
    let changedPrice = 0;
    for (let i =0;i<allCartItems.length;i++){
        let finalPrice = calculateFinalPrice(allCartItems[i].glazing,allCartItems[i].basePrice,allCartItems[i].size);
        changedPrice+=finalPrice;
    }
    priceSelected.textContent = "$"+changedPrice.toFixed(2);
}

//Helper function that calculate the price for each roll.
//This function used several if statements to set the glaze price and the packPrice.
//Then use the calculating equation finalPrice = (basePrice+glazePrice)*packPrice to
//calculate price of each roll.
function calculateFinalPrice(curGlaze,basePrize,packSize){
    let glazePrice = 0;
    let packPrice = packSize;
    if (curGlaze==="Vanilla Milk"){
        glazePrice = 0.5;
    }else if(curGlaze==="Double Chocolate"){
        glazePrice=1.5;
    }
    if(packSize===6){
        packPrice=5;
    }else if(packSize===12){
        packPrice=10;
    }
    return (basePrize+glazePrice)*packPrice;
}



