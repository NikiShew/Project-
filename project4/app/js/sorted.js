let a22 = document.querySelector(".sortBtn1");
let b = document.querySelector(".sortBtn2");



a22.addEventListener("click", mySort);
b.addEventListener("click", mySortDesk);

function mySort() {
    let nav = document.querySelector(".cotalog-tovars");
    for (let i = 0; i < nav.children.length; i++) {
        for(let j = i; j < nav.children.length; j++) {
            if(+nav.children[i].getAttribute("data-price") > +nav.children[j].getAttribute("data-price")) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}

function mySortDesk() {
    let nav = document.querySelector(".cotalog-tovars");
    for (let i = 0; i < nav.children.length; i++) {
        for(let j = i; j < nav.children.length; j++) {
            if(+nav.children[i].getAttribute("data-price") < +nav.children[j].getAttribute("data-price")) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




