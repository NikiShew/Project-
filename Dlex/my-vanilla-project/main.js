function adjustElementsVisibility() {
  const width = window.innerWidth;

  // Элементы из блока .header-inner
  const headerInnerNavigation = document.querySelector('.header-inner .navigation');
  const headerInnerLoginBtn = document.querySelector('.header-inner .login-btn');
  const headerInnerBurgerMenuBtn = document.querySelector('.header-inner .burger-menu-btn');
  // const groupPhones = document.querySelector(".group-phones");
  
  if (width <= 1000) {
    headerInnerNavigation.classList.add('none');
    headerInnerLoginBtn.classList.add('none');
    headerInnerBurgerMenuBtn.classList.remove('none');
    console.log("dad")
  } else {
    headerInnerNavigation.classList.remove('none');
    headerInnerLoginBtn.classList.remove('none');
    headerInnerBurgerMenuBtn.classList.add('none');
  }


}

window.addEventListener('load', adjustElementsVisibility);
window.addEventListener('resize', adjustElementsVisibility);

function toggleNavBurger() {
  const navBurger = document.querySelector('.nav-burger');
  navBurger.classList.toggle('open');

}

function closeNavBurger() {
  const navBurger = document.querySelector('.nav-burger');
  navBurger.classList.remove('open');

}
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
burgerMenuBtn.addEventListener('click', toggleNavBurger);

// Добавляем обработчик события клика на элемент .exit-burger-menu
const exitBurgerMenuBtn = document.querySelector('.exit-burger-menu');
exitBurgerMenuBtn.addEventListener('click', closeNavBurger);


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

function animatePhones() {
  const firstPhone = document.querySelector('.first-phone');
  const secondPhone = document.querySelector('.second-phone');
  const headerText = document.querySelector(".header-text");
  const headerSubtext = document.querySelector(".header-subtext"); 
  const getStartedHeader = document.querySelector(".getStarted-header");

  setTimeout(() => {
    firstPhone.style.opacity = '1'; // Увеличиваем непрозрачность
    firstPhone.style.transform = 'translateY(0)'; // Перемещаем в положение

    headerText.style.opacity = '1';
    headerText.style.transform = 'translateY(0)';


    setTimeout(() => {
      secondPhone.style.opacity = '1';
      secondPhone.style.transform = 'translateY(0)';

      headerSubtext.style.opacity = "1";
      headerSubtext.style.transform = 'translateY(0)';

      setTimeout(()=> {
        getStartedHeader.style.opacity = "1";
        getStartedHeader.style.transform = 'translateY(0)';
      }, 100)
    }, 200); // Запускаем анимацию второго телефона через 200 миллисекунд
  }, 300); // Запускаем анимацию первого телефона через 500 миллисекунд
}

// Вызываем функцию анимации при загрузке страницы
window.addEventListener('load', animatePhones);


