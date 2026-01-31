function getTemplate(i) {
    return `
        <section class="foodCard">
            <img class="foodCardImage" src="${meals[i].image}" alt="${meals[i].name}">
            <div class="foodCardInfo">
                <h2>${meals[i].name}</h2>
                <p class="foodCardIngridents">${meals[i].ingridents}</p>
            </div>
            <div class="foodCardFunctions">
                <p class="foodCardPrice">${meals[i].price}</p>
                <div id="foodCardButtons" class="foodCardButtons">
                    <button class="addToBasket" onclick="addToBasket(${i})">Add to Basket</button>
                </div>
            </div>
        </section>
    `;
}

function getBasket(item, total, i) {
    return `
        <div class="basket-item">
            <span class="basket-name">${item.name}</span>

            <div class="basket-controls">
                <button onclick="decreaseAmount(${i})">−</button>
                <span class="basket-amount">${item.amount}</span>
                <button onclick="increaseAmount(${i})">+</button>
            </div>

            <span class="basket-price">${total.toFixed(2)} €</span>

            <button class="basket-remove" onclick="removeItem(${i})">🗑️</button>
        </div>
    `;
}

function getBasketSum(sum) {
    return `
        <br>
        <b>Total:</b> ${sum.toFixed(2)} €<br>
        <button class="basketBtn">Bestellen</button>
    `;
}