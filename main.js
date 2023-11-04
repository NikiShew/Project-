import './style.scss'


let navObj = document.querySelectorAll(".nav-obj");
let burgerMenu = document.querySelector('.burger-menu');

function widthClient (){
    const siteWidth = document.documentElement.clientWidth;

    navObj.forEach((elem) =>{
        if(siteWidth <= 840) {
            elem.classList.add('none');
            burgerMenu.classList.remove('none')
        } else {
            elem.classList.remove("none");
            burgerMenu.classList.add('none')
        }
    })
    
}

window.addEventListener('resize', widthClient)

// navObj.forEach("")


const scrollToTopButton = document.querySelector(".scroll-btn");

// Функция, которая показывает или скрывает кнопку "Вернуться вверх"
function toggleScrollToTopButton() {
    if (window.scrollY > 100) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  scrollToTopButton.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", toggleScrollToTopButton);

