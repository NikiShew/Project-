let s = 1;
let btn = document.querySelector('.burger').onclick = function() {
    popup.classList.toggle("open");
    this.classList.toggle("teg");
    document.body.classList.toggle("lock");
}


let popup = document.querySelector('.popup');

let a = document.querySelector(".a");

a.addEventListener('click', function() {
    window.scrollTo(0, 0);
});


window.addEventListener("scroll", function() {
    let scrolTop = window.pageYOffset;

    if (scrolTop >= 500 ) {
        a.classList.add("active");
    }
    else if (scrolTop <= 500 ) {
        a.classList.remove("active");
    }

})
