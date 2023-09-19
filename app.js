// Define state variables
let quantity = 0;
let isAddedToWishlist = false;

// Query DOM Elements
const quantityDisplay = document.querySelector(".quantity_display");
const addButton = document.querySelector(".add_button");
const addToCartButton = document.querySelector(".add_to_cart");
const removeButton = document.querySelector(".remove_button");
const wishlistButton = document.querySelector(".wishlist");

const increaseCartQuantity = () => {
  quantity++;
  quantityDisplay.textContent = quantity;
};

const reduceQuantity = () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  } else {
    alert("Item is not in cart");
  }
};

const toggleWishlist = () => {
  isAddedToWishlist = !isAddedToWishlist;
  if (isAddedToWishlist) {
    wishlistButton.classList.remove("bg-white");
    wishlistButton.classList.add("bg-yellow-500");
  } else {
    wishlistButton.classList.add("bg-white");
    wishlistButton.classList.remove("bg-yellow-500");
  }
};

addButton.addEventListener("click", increaseCartQuantity);

addToCartButton.addEventListener("click", increaseCartQuantity);

removeButton.addEventListener("click", reduceQuantity);

wishlistButton.addEventListener("click", toggleWishlist);
