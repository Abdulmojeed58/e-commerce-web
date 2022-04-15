const ul = document.querySelector("ul");
const menu = document.querySelector(".menu")


menu.addEventListener("click", () => {
    ul.classList.toggle("active");
    const lists = document.querySelectorAll("li");
    lists.forEach( list => {
        list.addEventListener("click", () => {
            ul.classList.add("active");
        })
    });
})

const cartImage = document.querySelector(".cart-img");

cartImage.addEventListener("click", () => {
    const cartPurchase = document.querySelector(".cart-purchase");
    cartPurchase.classList.toggle("active");
})

const positive = document.querySelector("#positive");
const negative = document.querySelector("#negative");
let number = document.querySelector(".number");

let count = 0;

positive.addEventListener("click", (e) => {
    e.preventDefault
    if (number.value <= 10) {

        count++;
        number.value = count;
    }
})

negative.addEventListener("click", (e) => {
    e.preventDefault
    
    if(number.value >= 0) {
        count--;
    number.value = count;
    }
    
})