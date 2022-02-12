// phone/product code is here
function pQuantityUpdate(product, isIncreasing, price){
    const pInput = document.getElementById(product + '-quantity');
    const pQuantity = pInput.value;
    if(isIncreasing == true){
        pInput.value = parseInt(pQuantity) + 1;
    }

    else if(pQuantity > 0){
        pInput.value = parseInt(pQuantity) - 1;
    }

    // phone-price update
    const pPrice = document.getElementById(product + '-price');
    pPrice.innerText = pInput.value * price;

}

document.getElementById('phone-plus-btn').addEventListener('click', function(){
    pQuantityUpdate('phone',true,1220);  
})
document.getElementById('phone-minus-btn').addEventListener('click', function(){
    pQuantityUpdate('phone',false,1220);
})

document.getElementById('plus-btn').addEventListener('click', function(){
    pQuantityUpdate('product',true,60);  
})
document.getElementById('minus-btn').addEventListener('click', function(){
    pQuantityUpdate('product',false,60);
})

