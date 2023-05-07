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

let imgChange = document.querySelector(".licen");
let luna = document.querySelector('.luna');
let sun = document.querySelector('.sun');
let arrow = document.querySelector(".footer_imgChange");

function changeImgs() {
  sun.src = "img/whiteSun.png"
  imgChange.src = 'img/whitelicence.png';
  luna.src = "img/whiteLuna.png";
  arrow.src = "img/blackArrow.png";
}

function lschange () {
  imgChange.src = "img/vaadin_copyright.png";
  luna.src = "img/luna.png"
  sun.src ="img/sun.png";
  arrow.src = "img/material-symbols_arrow-forward.png"
}

let switchMod = document.getElementById('switchmod');

switchMod.onclick = function() {
  let theme = document.getElementById('theme');
  if(theme.getAttribute("href") == "css/light-mod.css"){
    theme.href = "css/dark-mod.css";
    changeImgs()
  } else {
    theme.href = 'css/light-mod.css';
    lschange ()
  }

}