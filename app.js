let quentityControllerDivs = document.querySelectorAll(".quantity-controller")

console.log(quentityControllerDivs)
quentityControllerDivs.forEach((quentityControllerDiv)=>{
    let quantityP = quentityControllerDiv.querySelector("#product-quantity");
    quentityControllerDiv.children[0].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) -1;
        if(quantityP.textContent == "0"){
            alert("Do you realy want to remove the prudoct from checkout box")
             quentityControllerDiv.parentElement.parentElement.remove();
        }
    });
    quentityControllerDiv.children[2].addEventListener("click",()=>{
        quantityP.textContent = parseInt(quantityP.textContent) +1
    })
});

 
