function parallax(event) {
    let img = this.querySelectorAll('.img-big');
    img.forEach((item) => {
      item.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px)`;
    })

    // img.style.transform = `translate(${event.clientX/50}px, ${event.clientY/50}px)`;
}


document.addEventListener("mousemove", parallax)


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }




