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

const cartPurchase = document.querySelector(".cart-purchase");
cartImage.addEventListener("click", () => {
    cartPurchase.classList.toggle("active");
})

const positive = document.querySelector("#positive");
const negative = document.querySelector("#negative");
let number = document.querySelector(".number");

let count = 1;

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

const addToCart = document.querySelector("#add-to-cart");
const empty = document.querySelector(".empty");
const cartCheckout = document.querySelector(".cart-checkout");

addToCart.addEventListener("click", (e) => {
    if(number.value > 0) {

        e.preventDefault;
        empty.classList.add("active");
        cartCheckout.classList.remove("active");
        cartPurchase.classList.remove("active");
        setTimeout(() => {
            cartPurchase.classList.add("active");
            cartPurchase.style.position = sticky;
        }, 5000);
    
        const total =document.querySelector(".total");
        const qty =document.querySelector(".qty");
        qty.textContent = number.value;
    
        let price = 125*number.value;
        total.textContent = price;
        number.value = 1;
        count = 1;
    } 

})

const checkOut = document.querySelector("#checkout");

checkOut.addEventListener("click", (e) => {
    e.preventDefault;
    empty.classList.remove("active");
    cartCheckout.classList.add("active");
})

const sales = document.querySelectorAll(".sales");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

item1.addEventListener("click", () => {
    sales.forEach((sale) => {
        sale.classList.add("active")
    })
    for(let i = 0; i < sales.length; i++) {
        sales[0].classList.remove("active")
    }
    console.log("mjay")
    
})
item2.addEventListener("click", () => {
    sales.forEach((sale) => {
        sale.classList.add("active")
    })
    for(let i = 0; i < sales.length; i++) {
        sales[1].classList.remove("active")
    }
    console.log("mjay")
    
})
item3.addEventListener("click", () => {
    sales.forEach((sale) => {
        sale.classList.add("active")
    })
    for(let i = 0; i < sales.length; i++) {
        sales[2].classList.remove("active")
    }
    console.log("mjay")
    
})
item4.addEventListener("click", () => {
    sales.forEach((sale) => {
        sale.classList.add("active")
    })
    for(let i = 0; i < sales.length; i++) {
        sales[3].classList.remove("active")
    }
    console.log("mjay")
    
})
