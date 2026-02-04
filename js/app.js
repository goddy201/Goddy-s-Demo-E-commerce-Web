// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = count;
    });
}

// Add to cart function
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Sample products data (you'll expand this)
const products = [
    {
        id: 1,
        name: "Demo Product 1",
        price: 29.99,
        image: "https://via.placeholder.com/300",
        description: "Sample product description"
    },
    {
        id: 2,
        name: "Demo Product 2",
        price: 39.99,
        image: "https://via.placeholder.com/300",
        description: "Sample product description"
    },
    // Add more products as needed
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Login form handler
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            // Demo login - replace with actual authentication
            console.log('Login attempt:', { email, password });
            alert('Login successful (demo)');
            window.location.href = 'index.html';
        });
    }
    
    // Checkout form handler
    const checkoutForm = document.querySelector('.checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Purchase completed! This is a demo.');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            window.location.href = 'index.html';
        });
    }
});