function getTemplate(i) {
    return `
        <section class="foodCard">
            <img class="foodCardImage" src="${meals[i].image}" alt="${meals[i].name}">
            <div class="displayFlex">
                <div class="foodCardInfo">
                    <h2>${meals[i].name}</h2>
                    <p class="foodCardIngridents">${meals[i].ingridents.join(', ')}</p>
                </div>
                <div class="foodCardFunctions">
                    <p class="foodCardPrice">${meals[i].price.toFixed(2)} €</p>
                    <button class="addToBasket" onclick="addToBasket(${i})">Add to Basket</button>          
                </div>
            </div>
        </section>
    `;
}

function getBasket(item, total, i) {
    return `
        <div class="basket-item">
            <h2="basket-name">${item.name}</h2>

            <div class="basket-controls">
                <button onclick="decreaseAmount(${i})">−</button>
                <span class="basket-amount">${item.amount}</span>
                <button onclick="increaseAmount(${i})">+</button>
            </div>

            <p class="basket-price">${total.toFixed(2)} €</p>

            <button class="basket-remove" onclick="removeItem(${i})">🗑️</button>
        </div>
    `;
}

function getBasketSum(sum) {
    return `
        <br>
        <b>Total:</b> ${sum.toFixed(2)} €<br>
        <button class="order-button" aria-haspopup="dialog" aria-controls="menu" onclick="showMenu()">Order now</button>
    `;
}