
const tax = 0.18;
const shippingPrice = 15.0;

window.addEventListener("DOMContentLoaded",()=>{
    localStorage.setItem("tax",tax);
    localStorage.setItem("shippingPrice",shippingPrice)
    calculateCartTotal()
})

let quentityControllerDivs = document.querySelectorAll(".quantity-controller")
console.log(quentityControllerDivs)

quentityControllerDivs.forEach((quentityControllerDiv)=>{
    let quantityP = quentityControllerDiv.querySelector("#product-quantity");
    quentityControllerDiv.children[0].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) -1;
        calculatePrudoctTotal(quantityP);
        if(quantityP.textContent <= "0"){
            quantityP.textContent = "0";
            quentityControllerDiv.parentElement.parentElement.style.opacity ="0.3"
            calculatePrudoctTotal(quantityP)
        }else{
            
        }
    });
    quentityControllerDiv.children[2].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) +1;
        quentityControllerDiv.parentElement.parentElement.style.opacity ="1"
        calculatePrudoctTotal(quantityP);
    });
    
});

const calculatePrudoctTotal = (quantityP)=>{
    let productInfoDiv = quantityP.parentElement.parentElement;
    const productPrice = parseFloat(productInfoDiv.querySelector("strong").textContent);
    let PrudoctTotalPrice = productPrice * parseInt(quantityP.textContent);
    console.log(PrudoctTotalPrice);
    let productTotal = productInfoDiv.querySelector(".product-line-price");
    productTotal.textContent = PrudoctTotalPrice.toFixed(2);
    calculateCartTotal()
}

    
const calculateCartTotal = ()=>{
    let productTotalPrices = document.querySelectorAll(".product-line-price");
    let subtotal = 0;
    productTotalPrices.forEach((productTotalPrice) =>{
        subtotal += parseFloat(productTotalPrice.textContent);
    })
   let cartTax = subtotal * (localStorage.getItem("tax"))
    let cartshipping = (subtotal > 150 ? 0 : shippingPrice );
    let cartTotal = cartTax + cartshipping + subtotal;

    document.querySelector("#cart-subtotal").children[1].textContent = subtotal.toFixed(2);
    document.querySelector("#cart-tax").children[1].textContent = cartTax.toFixed(2);
    document.querySelector("#cart-shipping").children[1].textContent = cartshipping.toFixed(2);
    document.querySelector("#cart-total").children[1].textContent = cartTotal.toFixed(2);
}

let removeBtns = document.querySelectorAll(".remove-product")
removeBtns.forEach((removeBtn)=>{
removeBtn.addEventListener("click",()=>{
 removeBtn.parentElement.parentElement.parentElement.remove() })
})
 
    
