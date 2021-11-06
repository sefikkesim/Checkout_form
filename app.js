
const tax = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load",()=>{
    localStorage.setItem("tax",tax);
    localStorage.setItem("shippingPrice",shippingPrice)
    calculateCartTotal()
})


let quentityControllerDivs = document.querySelectorAll(".quantity-controller")

quentityControllerDivs.forEach((quentityControllerDiv)=>{
    let quantityP = quentityControllerDiv.querySelector("#product-quantity");
    quentityControllerDiv.children[0].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) -1;
        calculatePrudoctTotal(quantityP);
        if(quantityP.textContent == "0"){
            alert("Do you realy want to remove the prudoct from checkout box");
             quentityControllerDiv.parentElement.parentElement.remove();
             
        }
    });
    quentityControllerDiv.children[2].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) +1;
        calculatePrudoctTotal(quantityP);
    });
    
});

const calculatePrudoctTotal = (quantityP)=>{
    let productInfoDiv = quantityP.parentElement.parentElement;
    const productPrice = parseFloat(productInfoDiv.querySelector("strong").textContent);
    console.log(productPrice)
    console.log(quantityP.textContent)
    let PrudoctTotalPrice = productPrice * parseInt(quantityP.textContent);
    console.log(PrudoctTotalPrice);
    let productTotal = productInfoDiv.querySelector(".product-line-price");
    productTotal.textContent = PrudoctTotalPrice.toFixed(2);
    calculateCartTotal()
}

    
const calculateCartTotal = ()=>{
    let productTotalPrices = document.querySelectorAll(".product-line-price");
    console.log(productTotalPrices)
    let subtotal = 0;
    productTotalPrices.forEach((productTotalPrice) =>{
        subtotal += parseFloat(productTotalPrice.textContent);
        console.log(subtotal)
    })
   let cartTax = subtotal * (localStorage.getItem("tax"))
    let cartshipping = (subtotal > 0 ? shippingPrice : 0);
    let cartTotal = cartTax + cartshipping + subtotal;

    document.querySelector("#cart-subtotal").children[1].textContent = subtotal.toFixed(2);
    document.querySelector("#cart-tax").children[1].textContent = cartTax.toFixed(2);
    document.querySelector("#cart-shipping").children[1].textContent = cartshipping.toFixed(2);
    document.querySelector("#cart-total").children[1].textContent = cartTotal.toFixed(2);
}

 
    
