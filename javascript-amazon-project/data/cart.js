export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }
];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let selectedQuantity = document.querySelector(
    `.js-quantity-selector-${productId}`).value;
  let quantity = Number(selectedQuantity);
  let matchingItem;
  
  cart.forEach((items) => {
    if (productId === items.productId) {
      matchingItem = items;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

//Function handle the "Added to cart" message
export function showAddedMessage(productId, timeoutID) {
  const addedMsg = document.querySelector(
    `.js-added-to-cart[data-addtocart-id="${productId}"]`
  );

  if (addedMsg) {
    clearTimeout(timeoutID);
    addedMsg.classList.add('added-visible');
    
    return setTimeout(() => {
      addedMsg.classList.remove('added-visible');
    }, 2000);
  }
  
  return timeoutID;
}