document.addEventListener('DOMContentLoaded', function() {
    const eventSelect = document.getElementById('eventSelect');
    const ticketQuantityInput = document.getElementById('ticketQuantity');
    const totalPriceElement = document.getElementById('totalPrice');
    const buyNowButton = document.getElementById('buyNowBtn');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const selectedEventElement = document.getElementById('selectedEvent');
    const ticketAmountElement = document.getElementById('ticketAmount');
    const finalPriceElement = document.getElementById('finalPrice');

    const ticketPrice = 100; // Price per ticket

    // Update total price based on quantity
    ticketQuantityInput.addEventListener('input', function() {
        const quantity = ticketQuantityInput.value;
        const totalPrice = quantity * ticketPrice;
        totalPriceElement.textContent = `$${totalPrice}`;
    });

    // Handle "Buy Now" button click
    buyNowButton.addEventListener('click', function() {
        const selectedEvent = eventSelect.value;
        const ticketQuantity = ticketQuantityInput.value;
        const totalCost = ticketQuantity * ticketPrice;

        // Show confirmation message
        confirmationMessage.style.display = 'block';
        selectedEventElement.textContent = selectedEvent;
        ticketAmountElement.textContent = ticketQuantity;
        finalPriceElement.textContent = `$${totalCost}`;
    });
});
