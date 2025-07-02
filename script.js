document.addEventListener('DOMContentLoaded', () => {
    // --- Sample Menu Data (to be replaced with actual data or API call) ---
    const menuItems = [
        {
            id: 1,
            name: "Pulihora (పులిహోర)",
            category: "Rice Dishes",
            price: 120.00,
            image: "pulihora.jpg", // Placeholder image
            description: "Tangy tamarind rice, a festive favorite."
        },
        {
            id: 2,
            name: "Gutti Vankaya Kura (గుత్తి వంకాయ కూర)",
            category: "Curries",
            price: 180.00,
            image: "gutti-vankaya.jpg", // Placeholder image
            description: "Stuffed eggplant curry with a rich, spicy gravy."
        },
        {
            id: 3,
            name: "Royyala Iguru (రొయ్యల ఇగురు)",
            category: "Seafood",
            price: 250.00,
            image: "royyala-iguru.jpg", // Placeholder image
            description: "Spicy prawn fry, a coastal Andhra delicacy."
        },
        {
            id: 4,
            name: "Poornam Boorelu (పూర్ణం బూరెలు)",
            category: "Sweets",
            price: 80.00, // Price per piece or plate
            image: "poornam-boorelu.jpg", // Placeholder image
            description: "Sweet lentil-filled dumplings, a traditional dessert."
        },
        {
            id: 5,
            name: "Chicken Dum Biryani (చికెన్ దమ్ బిర్యానీ)",
            category: "Rice Dishes",
            price: 280.00,
            image: "chicken-biryani.jpg",
            description: "Aromatic and flavorful slow-cooked chicken and rice."
        }
    ];

    const shoppingCart = [];

    // --- DOM Elements ---
    const menuPreviewSection = document.getElementById('menu-preview');
    // We'll need a cart display area later. For now, we'll focus on displaying the menu.

    // --- Functions ---

    /**
     * Renders menu items on the page.
     */
    function renderMenuItems() {
        if (!menuPreviewSection) {
            console.error("Menu preview section not found!");
            return;
        }

        // Clear existing items (if any)
        menuPreviewSection.innerHTML = '<h3>Popular Dishes</h3>'; // Keep the heading

        menuItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('menu-item-card'); // Defined in style.css

            itemCard.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}" style="width:100%; max-width:200px; height:auto; border-radius:4px; margin-bottom:10px;">
                <h4>${item.name}</h4>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Price:</strong> ₹${item.price.toFixed(2)}</p>
                <p>${item.description}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
            `;
            menuPreviewSection.appendChild(itemCard);
        });

        // Add event listeners to the new "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });
    }

    /**
     * Handles adding an item to the shopping cart.
     * For now, it will just log to console.
     */
    function handleAddToCart(event) {
        const itemId = parseInt(event.target.dataset.id);
        const selectedItem = menuItems.find(item => item.id === itemId);

        if (selectedItem) {
            // Check if item already in cart
            const existingCartItem = shoppingCart.find(cartItem => cartItem.id === itemId);
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                shoppingCart.push({ ...selectedItem, quantity: 1 });
            }
            console.log(`${selectedItem.name} added to cart. Cart:`, shoppingCart);
            alert(`${selectedItem.name} added to cart!`); // Simple user feedback
            // Future: Update a visual cart display
        }
    }

    /**
     * Initializes the application.
     */
    function init() {
        renderMenuItems();
        // Other initializations can go here (e.g., loading cart from localStorage)
    }

    // --- Initialize ---
    init();

    // --- Placeholder for future functionalities ---
    // function updateCartDisplay() { ... }
    // function submitOrder() { ... }
});
