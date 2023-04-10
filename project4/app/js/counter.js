window.addEventListener("click", function() {

    let counter;

    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
        let counterWrapper = event.target.closest(".tovar_counter");
        counter = counterWrapper.querySelector(".counterNum");
    }



    if(event.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
    }

    if(event.target.dataset.action === "minus") {

        if (counter.innerText > 1) {

            counter.innerText = --counter.innerText;

        } else if (event.target.closest(".koshik__conteiner") && parseInt(counter.innerText) === 1) {

            event.target.closest(".koshik_item").remove();

            toggleCartStatus();
            //пересчет общую стоимость товаров в корзине
            calcCartPrice();
        }

    }

    if (event.target.hasAttribute("data-action") && event.target.closest(".tovar_info")) {
        calcCartPrice();
    }
})