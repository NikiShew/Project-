// let koshik = document.querySelector(".tovar_info");
// let allKoshik = document.querySelector(".koshik");
// let plus = document.querySelector('[data-action="plus"]');
// let minus = document.querySelector('[data-action="minus"]');
// let counter = document.querySelector(".counterNum");


// let products = [];

function addProduct(productInfo) {
    localStorage.setItem("id", productInfo.id);
    localStorage.setItem("imgSrc", productInfo.imgSrc);
    localStorage.setItem("title", productInfo.title);
    localStorage.setItem("zina", productInfo.price);
}




function l(event) {
    if (event.target.hasAttribute("data-cart")) {
            
        const card = event.target.closest(".slide_block");
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(".slide_block_img").getAttribute("src"),
            title: card.querySelector(".slide_title").innerText,
            price: card.querySelector(".stoimost").innerText,
        };


        l(productInfo);
        let idItem = productInfo.id;

        let itemInCard = allKoshik.querySelector(`[data-id="${productInfo.id}"]`);


        if (itemInCard) {
            const counterElement = itemInCard.querySelector(".counterNum");
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
        } else {


        const cardItemHtml = `
        <div class="koshik_item" data-id="${productInfo.id}">
        <div class="tovar_name">${productInfo.title}</div>
        <div class="koshik_img_and_info">
        <div class="tovar_information">
            <div class="tovar_image">
                <img src="${productInfo.imgSrc}" alt="">
            </div>
            <div class="product">
                <div class="tsina">${productInfo.price}</div>
                <h3 class="tsina_za">Ціна за 5 л </h3>
                <h3 class="tsina_za">
                <h2 class="virod">Виробник: ФМС Україна</h2>
            </div>
            
        </div>
        
        <div class="tovar_counter">
            <h2 class="kil-st">Кількість</h2>
            <button class="counterMinus cnr" data-action="minus">-</button>
            <h2 class="counterNum">1</h2>
            <button class="counterPlus cnr" data-action="plus">+</button>
        </div>
        
        </div>
        
        </div>
        
    </div>
    

        `
    koshik.insertAdjacentHTML("beforeend", cardItemHtml);

    }
    toggleCartStatus();

    //Общая стоимось товаров в корзине
    calcCartPrice();
    }
}










// class Cart{

//     addProduct(event) {
//     window.addEventListener("click", function(event) {
//         if (event.target.hasAttribute("data-cart")) {
            
//             const card = event.target.closest(".slide_block");
//             const productInfo = {
//                 id: card.dataset.id,
//                 imgSrc: card.querySelector(".slide_block_img").getAttribute("src"),
//                 title: card.querySelector(".slide_title").innerText,
//                 price: card.querySelector(".stoimost").innerText,
//             };
//             localStorage.setItem("id", productInfo.id);
//             localStorage.setItem("imgSrc", productInfo.imgSrc);
//             localStorage.setItem("title", productInfo.title);
//             localStorage.setItem("zina", productInfo.price);

//             l(productInfo);


//             let idItem = productInfo.id;


//             let itemInCard = allKoshik.querySelector(`[data-id="${productInfo.id}"]`);






//             if (itemInCard) {
//                 const counterElement = itemInCard.querySelector(".counterNum");
//                 counterElement.innerText = parseInt(counterElement.innerText) + 1;
//             } else {

            

//             const cardItemHtml = `
//             <div class="koshik_item" data-id="${productInfo.id}">
//             <div class="tovar_name">${productInfo.title}</div>
//             <div class="koshik_img_and_info">
//             <div class="tovar_information">
//                 <div class="tovar_image">
//                     <img src="${productInfo.imgSrc}" alt="">
//                 </div>
//                 <div class="product">
//                     <div class="tsina">${productInfo.price}</div>
//                     <h3 class="tsina_za">Ціна за 5 л </h3>
//                     <h3 class="tsina_za">
//                     <h2 class="virod">Виробник: ФМС Україна</h2>
//                 </div>
                
//             </div>
            
//             <div class="tovar_counter">
//                 <h2 class="kil-st">Кількість</h2>
//                 <button class="counterMinus cnr" data-action="minus">-</button>
//                 <h2 class="counterNum">1</h2>
//                 <button class="counterPlus cnr" data-action="plus">+</button>
//             </div>
            
//             </div>
            
//             </div>
            
//         </div>
        

//             `
//         koshik.insertAdjacentHTML("beforeend", cardItemHtml);

//         }
//         toggleCartStatus();

//         //Общая стоимось товаров в корзине
//         calcCartPrice();
//         }
//     })

// }
// }



