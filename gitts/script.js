let btn = document.querySelector(".btn-up");

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY > 400) {
        btn.classList.remove("btn-up_hide");
    } else {
        btn.classList.add("btn-up_hide");
    }
});