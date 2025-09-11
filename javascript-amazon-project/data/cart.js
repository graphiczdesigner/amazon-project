export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

export function addToCart(productId){
    // Selected Quantity from dropdown
        let selectedQuantity = document.querySelector(
            `.js-quantity-selector-${productId}`).value;
        let quantity = Number(selectedQuantity);
        let matchingItem;
        // cart is variable name of an array from data/cart.js
        cart.forEach((items)=>{
            if(productId === items.productId){
                matchingItem = items;
            }
            });

            if(matchingItem){
                matchingItem.quantity += quantity;
            }
            else{
                cart.push({
                productId,
                quantity
                });
                }
      }

export  function removeFromCart(productId) {
           const newCart = [];
           cart.forEach((cartItem)=>{
                if(cartItem.productId !== productId){
                 newCart.push(cartItem);
            }
        });
        cart = newCart;
      }

export function updateCartQuantity(productId, timeoutID){
            let cartQuantity = 0;
            cart.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            });
            
            document.querySelector('.js-cart-quantity')
            .innerHTML = cartQuantity;

            let addedMsg = document.querySelector
            (`.js-added-to-cart[data-addtocart-id="${productId}"]`);

            clearTimeout(timeoutID);
            addedMsg.classList.add('added-visible');
            timeoutID = setTimeout(()=>{
                addedMsg.classList.remove('added-visible');
            },2000);
        }