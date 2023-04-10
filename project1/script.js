let burger = document.querySelector(".burger-btn");
let nav  = document.querySelector(".nav-list");

let prices_text = document.querySelectorAll(".price_block");
let pr = document.querySelectorAll(".prices_text");




window.addEventListener("resize", function(){
    if (window.innerWidth <= 900) {
        burger.classList.remove("none");
        nav.classList.add("none")
    } else  {
        burger.classList.add("none");
        nav.classList.remove("none")
    }
})