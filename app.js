function productQuantityUpdate(isIncreasing){
    const productInput = document.getElementById('product-quantity');
    const productQuantity = productInput.value;
    if(isIncreasing == true){
        productInput.value = parseInt(productQuantity) + 1;
    }

    else if(productQuantity > 0){
        productInput.value = parseInt(productQuantity) - 1;
    }

    // product-price update
    const productPrice = document.getElementById('product-price');
    productPrice.innerText = productInput.value * 60;

}

document.getElementById('plus-btn').addEventListener('click', function(){
       productQuantityUpdate(true);  
})
document.getElementById('minus-btn').addEventListener('click', function(){
       productQuantityUpdate(false);
})