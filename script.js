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