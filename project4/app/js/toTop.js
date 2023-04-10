let a1 = document.querySelector(".a1");

a1.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", function() {
    let scrolTop = window.pageYOffset;

    if (scrolTop >= 500 ) {
        a1.classList.add("activities");
    }

    else if (scrolTop <= 300 ) {
        a1.classList.remove("activities");
    }

})