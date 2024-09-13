// scripts.js
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart.`);
}

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchinput');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                product.style.display = 'block'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });
    });
});
