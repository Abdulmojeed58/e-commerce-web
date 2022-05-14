const ul = document.querySelector("ul");
const menu = document.querySelector(".menu")
const main = document.querySelector(".main")

////////// NAVBAR ////////
menu.addEventListener("click", () => {
        main.classList.toggle("fixed")
        ul.classList.toggle("none");
    const lists = document.querySelectorAll("li");
    lists.forEach( list => {
        list.addEventListener("click", () => {
            ul.classList.remove("none");
            main.classList.remove("fixed")
        })
    });
})


//////ADD ITEM TO CART/////////
const cartImage = document.querySelector(".cartt");

const cartPurchase = document.querySelector(".cart-purchase");
cartImage.addEventListener("click", () => {
    cartPurchase.classList.toggle("active");
})

const positive = document.querySelector("#positive");
const negative = document.querySelector("#negative");
let number = document.querySelector(".number");

let count = 0;

positive.addEventListener("click", (e) => {
    e.preventDefault
    if (number.value <= 9) {
        count++;
        number.value = count;
    }
})

negative.addEventListener("click", (e) => {
    e.preventDefault
    if(number.value >= 1) {
        count--;
    number.value = count;
    }
    
})

const addToCart = document.querySelector("#add-to-cart");
const empty = document.querySelector(".empty");
const cartCheckout = document.querySelector(".cart-checkout");
const notification = document.querySelector(".notification");
const cont = document.querySelector(".cont");

addToCart.addEventListener("click", (e) => {
    if(number.value > 0) {

        e.preventDefault;
        empty.classList.add("active");
        cartCheckout.classList.remove("active");
        cartPurchase.classList.remove("active");
        notification.classList.remove("active");
        setTimeout(() => {
            cartPurchase.classList.add("active");
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
    notification.classList.add("active");
})


/////////PRODUCTS IMAGES////////////
const sales = document.querySelectorAll(".sales");
const ids = document.querySelectorAll('[data-id]')

ids.forEach(item=>{
    item.addEventListener("click", (e)=>{
        let id = e.target.dataset.id
        const element = document.getElementById(id)
        sales.forEach(sale=>{
            sale.classList.add("active")
        })
        element.classList.remove("active")
    })
})

//////////MODAL/////////////
const collection = document.querySelector("#collection");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close")

collection.addEventListener("click", () => {
    modal.classList.remove("modal-active")
});
modalClose.addEventListener("click", () => {
    modal.classList.add("modal-active")
})

window.addEventListener("click", (e) => {
    if(e.target == modal) {
        modal.classList.add("modal-active")
    }
})


///////////SLIDER///////////
const sliders = document.querySelectorAll(".slider")
const next = document.querySelector(".next-btn")
const prev = document.querySelector(".prev-btn")

sliders.forEach((slider, index)=>{
    slider.style.left = `${100 * index}%`
})
    

let counter = 0

next.addEventListener("click", ()=>{
    counter ++
    carousel(sliders, next, prev)
})
prev.addEventListener("click", ()=>{
    counter --
    carousel(sliders, next, prev)
})

function carousel(sliders, next, prev){
    if(counter === sliders.length-1){
        next.style.display = `none`
    } else {
        next.style.display = `flex`
        
    }
    if(counter === 0){
            prev.style.display = `none`
        } else {
            prev.style.display = `flex`

        }

        sliders.forEach((slider, index)=>{
            slider.style.transform = `translateX(-${counter * 100}%)`
        })
    }
////////MODAL SLIDER////////
    const sliders1 = document.querySelectorAll(".slider1")
    const next1 = document.querySelector(".next-btn1")
    const prev1 = document.querySelector(".prev-btn1")

    sliders1.forEach((slider, index)=>{
        slider.style.left = `${100 * index}%`
    })

    next1.addEventListener("click", ()=>{
        counter ++
        carousel(sliders1, next1, prev1)
    })
    prev1.addEventListener("click", ()=>{
        counter --
        carousel(sliders1, next1, prev1)
    })

    