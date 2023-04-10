let popup = document.querySelector('.popup');
let koshikdada = document.querySelector(".koshik")
let active = document.querySelector(".active");
let block = document.querySelector(".hover-block");
let close = document.querySelector(".close");
let basket = document.querySelector(".header_bsket");
let filterbtn = document.querySelector(".filter_block");
let virob = document.querySelector(".virobnikf");
let virob2 = document.querySelector(".virobniks");
let kil = document.querySelector(".kil-st");

let bb1 = document.querySelector('.oform_btn');


close.addEventListener("click", function() {
    koshikdada.classList.add("none");
    document.body.classList.remove("lock");
})


basket.addEventListener("click", function() {
    koshikdada.classList.remove("none");
    document.body.classList.add("lock");
})

let btn = document.querySelector('.burger').onclick = function() {
    popup.classList.toggle("open");
    this.classList.toggle("teg");
    document.body.classList.toggle("lock");
}

active.addEventListener("click", function() {
    // block.classList.toggle("activate");
    // active.classList.toggle("borRad");


if( window.innerWidth >= 1107 ){
    
} else {
    block.classList.toggle("activate");
    active.classList.toggle("borRad");
}

})

active.onclick = function() {
    this.setAttribute("href", "#")
}


function toggleCartStatus() {
    let cardWrapper = document.querySelector(".tovar_info");
    const cardEmptyBadge = document.querySelector(".koshik_pust");
    const vipol = document.querySelector(".koshik_buttons");

    if(cardWrapper.children.length > 0) {
        console.log("full");
        cardEmptyBadge.style.display = "none";
        vipol.classList.remove("none");
        vipol.style.display = "flex"
    } else {
        cardEmptyBadge.style.display = "flex";
        vipol.classList.add("none");
        vipol.style.display = "none";
    }

}


let a = document.querySelector(".a");

a.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", function() {
    let scrolTop = window.pageYOffset;

    if (scrolTop >= 500 ) {
        a.classList.add("activities");
    }
    else if (scrolTop <= 500 ) {
        a.classList.remove("activities");
    }

})
