let incDecBtns = document.querySelectorAll(".quantity-controller--button");
let products = document.querySelectorAll(".poduct-counter");
console.log(products)

 console.log(incDecBtns)

 let counter1 = 1;

 incDecBtns.forEach(function(btn){
     btn.addEventListener("click",(e)=>{
      let actions = e.currentTarget.classList
      let childP = e.currentTarget.parentElement.children[1];
       console.log(childP)
      
    if(actions.contains("plus")){
        counter1++
        childP.textContent = counter1;
    }
 })
 })
 