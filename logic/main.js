// Globals

const basketSumRef = document.getElementById("basket-sum");
const basketRef = document.getElementById("basket-content");
const menuBtnRef = document.getElementById("menuRef");
const burgerContentRef = document.getElementById("burger-content");
const pizzaContentRef = document.getElementById("pizza-content");
const saladContentRef = document.getElementById("salad-content");
const menuRef = document.getElementById("menu");
const basketOpenRef = document.getElementById("basket-open");

const basket = [];


// EventListener

window.addEventListener("DOMContentLoaded", render);

// Functions

function render() {
    for(let i = 0; i < meals.length; i++) {
        if(meals[i].category === "burger") {
            burgerContentRef.innerHTML += getTemplate(i);
        }
        else if(meals[i].category === "pizza") {
            pizzaContentRef.innerHTML += getTemplate(i);
        }else {
            saladContentRef.innerHTML += getTemplate(i);
        }
    }
}

function showBasket() {
    basketOpenRef.showModal();
    basketOpenRef.innerHTML += renderBasket();
}

function showMenu() {
    menuRef.showModal();
}

function closeMenu() {
    basketRef.innerHTML = "";
    basketSumRef.innerHTML = "";
    basket.length = 0;
    menuRef.close();
    // basketOpenRef.close();
}

function addToBasket(i) {
    const basketItem = basket.find(item => item.name === meals[i].name);
    if (basketItem) {
        basketItem.amount++;
    } else {
        basket.push({ ...meals[i], amount: 1 });
    }
    renderBasket();
}

function renderBasket() {
    basketRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        const item = basket[i];
        const total = item.price * item.amount;
        basketRef.innerHTML += getBasket(item, total, i);
    }
    renderBasketSum();
}

function renderBasketSum() {
    basketSumRef.innerHTML = "";
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i].price * basket[i].amount;
    }
    basketSumRef.innerHTML = getBasketSum(sum);
}

function increaseAmount(i) {
    basket[i].amount++;
    renderBasket();
}

function decreaseAmount(i) {
    basket[i].amount--;
    if (basket[i].amount <= 0) {
        basket.splice(i, 1);
    }
    renderBasket();
}

function removeItem(i) {
    basket.splice(i, 1);
    renderBasket();
}