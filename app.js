let positionX = 333;
let positionY = 0;
let positionXFruit = 600;
let positionYFruit = 2;
let positionXRot = 43;
let positionYRot = 0;

let health = 50;
let score = 0;

const basketElement = document.getElementById("movingBasket");
const fruitElement = document.getElementById("fallingFruit");
const rotElement = document.getElementById("fallingRot");

let direction = "left";

startGame();
function startGame(){
const intervalId = setInterval(moveElements, 10);
alert("Arrow keys to move. Catch fruit to earn points, but beware of rot!")
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { 
        direction = "left"
    } else if (event.keyCode === 39){
        direction = "right"
    }
});

function moveElements() {
    moveBasket();
    moveFruit();
    moveRot();

    if (elementOverlap(basketElement, fruitElement)) {
        fruitBasket();
    }
    if (elementOverlap(basketElement, rotElement)) {
        rotBasket();
    }
}

textDiv.innerHTML = "Points : " + score + " health : " + health;

function moveBasket() {
    const element = document.getElementById("movingBasket");
     
    if (direction == "left"){
    positionX -= 3
 } else if (direction == "right"){
    positionX += 3    
    }
    positionY = 850;
    element.style.left = positionX + "px";
    element.style.top = positionY + "px";

    if (positionX <= 0){
        direction = "right"
    } else if (positionX >= window.innerWidth - 200) {
        direction = "left"  
    }
}

function moveFruit() {
    const element = document.getElementById("fallingFruit");

    positionXFruit -= 1; 
    positionYFruit += 10;
    element.style.left = positionXFruit + "px";
    element.style.top = positionYFruit + "px";
    
    if ((positionXFruit <= 0) || (positionXFruit >= 400)) {
        positionXFruit = 345;
        positionYFruit = 0;
    }
}

function moveRot() {
    const element = document.getElementById("fallingRot");

    positionXRot -= 2; 
    positionYRot += 6;
    element.style.left = positionXRot + "px";
    element.style.top = positionYRot + "px";

    if ((positionXRot <= 0) || (positionXRot >= 450)) {
        positionXRot = 445;
        positionYRot = 0;
    }
}

function elementOverlap(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function fruitBasket() {
    console.log("Fruit landed in the basket!");
    score ++;
    health ++;
    if (score >= 68){   
    textDiv2.innerHTML = "You win!";
}
    textDiv.innerHTML = "P:" + score + " HP:" + health + " Fruit landed in the basket! "
}

function rotBasket() {
    console.log("Rot landed in the basket! Yikes!");
    health --;
    textDiv.innerHTML = "P:" + score + " HP:" + health + " Rot landed in the basket. Yikes!"
    if (health <= 0){   
        textDiv2.innerHTML = "You lose!";
    }
}

