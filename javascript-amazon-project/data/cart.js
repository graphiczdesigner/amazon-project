export const cart = [];

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

export function updateCartQuantity(){
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