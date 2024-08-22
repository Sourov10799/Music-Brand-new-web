// store.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle Add to Cart button clicks
    const addToCartButtons = document.querySelectorAll('.shop-item-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    // Handle purchase button click
    document.querySelector('.purchase-btn').addEventListener('click', purchaseItems);

    // Function to add item to the cart
    function addToCartClicked(event) {
        const button = event.target;
        const shopItem = button.closest('.shop-item');
        const title = shopItem.querySelector('.shop-item-title').innerText;
        const price = shopItem.querySelector('.shop-item-price').innerText;
        const imageSrc = shopItem.querySelector('.shop-item-image').src;

        addItemToCart(title, price, imageSrc);
        updateCartTotal();
    }

    // Add item to the cart
    function addItemToCart(title, price, imageSrc) {
        const cartItems = document.querySelector('.cart-items');
        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');

        // Prevent adding the same item multiple times
        const cartItemNames = cartItems.querySelectorAll('.cart-item-title');
        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {
                alert('This item is already added to the cart.');
                return;
            }
        }

        // Cart item content
        cartRow.innerHTML = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        `;
        cartItems.append(cartRow);

        // Handle remove item button click
        cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem);

        // Handle quantity change
        cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged);
    }

    // Remove item from cart
    function removeCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.cart-row').remove();
        updateCartTotal();
    }

    // Update cart total when quantity changes
    function quantityChanged(event) {
        const input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    }

    // Update the cart total
    function updateCartTotal() {
        const cartItemContainer = document.querySelector('.cart-items');
        const cartRows = cartItemContainer.querySelectorAll('.cart-row');
        let total = 0;

        cartRows.forEach(cartRow => {
            const priceElement = cartRow.querySelector('.cart-price');
            const quantityElement = cartRow.querySelector('.cart-quantity-input');
            const price = parseFloat(priceElement.innerText.replace('$', ''));
            const quantity = quantityElement.value;
            total += price * quantity;
        });

        // Round the total to 2 decimal places
        total = Math.round(total * 100) / 100;
        document.querySelector('.cart-total span').innerText = '$' + total;
    }

    // Handle the purchase button click
    function purchaseItems() {
        alert('Thank you for your purchase!');
        const cartItems = document.querySelector('.cart-items');
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
        updateCartTotal();
    }
});
