function calcCartPrice() {
    
    let cartItems = document.querySelectorAll(".koshik_item");
    let totalPriceEl = document.querySelector(".total_price");
    let monitorPrice = document.querySelector(".header_cost");



    let totalPrice = 0;
    cartItems.forEach(function(item) {

        const amountEl = item.querySelector(".counterNum");
        const priceEl = item.querySelector(".tsina");
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += currentPrice;
    })
    //отображаем цену на странице
    localStorage.setItem("data", totalPrice)

   totalPriceEl.innerText = localStorage.getItem("data");
   monitorPrice.innerText = localStorage.getItem("data");

}

