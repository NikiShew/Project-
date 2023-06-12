var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 10,
    // slidesPerGroup: 3,
    centerSlide: 'true',
    fade: "true",
    grabCursor: 'true',
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });

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