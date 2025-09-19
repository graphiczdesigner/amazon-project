import {cart, removeFromCart, updateCartQuantity,
     updateQtWhileCheckout} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const {productId} = cartItem;

    let matchingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });
    cartSummaryHTML +=`
    <div class="cart-item-container 
    cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label 
                js-quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary
                js-update-quantity-link" 
                data-product-id="${matchingProduct.id}">
                Update
                </span>
                <input class="quantity-input js-quantity-input">
                <span class="save-quantity-link link-primary 
                js-save-quantity-link" 
                data-product-id="${matchingProduct.id}">
                Save
                </span>
                <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;
});

// Cart Summary Details HTML
document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

// Update cart Qt in Checkout Page HTML
function updateQtOnCheckout(){
    if(updateCartQuantity()>1){
    document.querySelector('.js-cart-items-count')
    .innerHTML = `${updateCartQuantity()} items`;
    }
    else{
        document.querySelector('.js-cart-items-count')
    .innerHTML = `${updateCartQuantity()} item`;
    }
}

// Delete from Cart
document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', ()=>{
            const productId = link.dataset.productId;
            removeFromCart(productId);
            const container = document.querySelector(
                `.cart-item-container-${productId}`);
                container.remove();
                updateQtOnCheckout();
        });
    });
    updateQtOnCheckout();

// Update cart functionality when click on update btn
document.querySelectorAll('.js-update-quantity-link')
    .forEach((updateLink)=>{
        updateLink.addEventListener('click', ()=>{
            const productId = updateLink.dataset.productId;
            const container = document.querySelector(
                `.cart-item-container-${productId}`);
                container.classList.add('is-editing-quantity');
        });
    });

// cart items functionality when click on save btn

function handleNewQuantity(newInputQt, productId, container){
    container.classList.remove('is-editing-quantity');
    let cartItemUpdatedQt = Number(newInputQt.value);
            if(cartItemUpdatedQt > 0 && cartItemUpdatedQt <= 1000){
                updateQtWhileCheckout(productId, cartItemUpdatedQt);
                updateQtOnCheckout();
                let orignalItemQt = container.querySelector('.js-quantity-label');
                orignalItemQt.innerText = cartItemUpdatedQt;
            }else{
                alert('Item quantity must be between 1 to 1000');
            }
}

document.querySelectorAll('.js-save-quantity-link')
    .forEach((saveLink)=>{
            const productId = saveLink.dataset.productId;   
            const container = document.querySelector(
                `.cart-item-container-${productId}`);
            let newInputQt = container.querySelector('.js-quantity-input');
        saveLink.addEventListener('click', ()=>{

            handleNewQuantity(newInputQt, productId, container);
        });

        // keydown event
        newInputQt.addEventListener(('keydown'), (event)=>{
            if(event.key === 'Enter'){
                handleNewQuantity(newInputQt, productId, container);
            }
        });
    });

