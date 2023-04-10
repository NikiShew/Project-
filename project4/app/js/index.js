const swiperSlider = document.querySelector(".swiper-slide");
const tovar_info = document.querySelector(".tovar_info");
let oform_tovar = document.querySelector(".oform_tovar");
let totalPrice = document.querySelector(".total_price");
let monitorPrice = document.querySelector(".header_cost");
let productInCart = [];
const pricesArrays = [];

function clearer() {
    if(tovar_info.childNodes.length == 4) {
        localStorage.clear();
        let cardWrapper = document.querySelector(".tovar_info");
        const cardEmptyBadge = document.querySelector(".koshik_pust");
        const vipol = document.querySelector(".koshik_buttons");

        cardEmptyBadge.style.display = "flex";
        vipol.classList.add("none");
        vipol.style.display = "none";
    } 
}

function addToCart() {
    pricesArrays.push(localStorage.getItem("price"))

    const cartConteiner = document.createElement('div');
    cartConteiner.classList.add("oform_tovares");
    tovar_info.appendChild(cartConteiner);

    let imgCartConteiner = document.createElement("div")
    imgCartConteiner.classList.add("tovar_oform_img");
    cartConteiner.appendChild(imgCartConteiner);

    let cartImg = document.createElement('IMG')
    cartImg.src = localStorage.getItem("img");
    imgCartConteiner.appendChild(cartImg);

    const tovar_oform_info = document.createElement("div")
    tovar_oform_info.classList.add("tovar_oform_info");
    cartConteiner.appendChild(tovar_oform_info);

    const productCartName = document.createElement('h3');
    productCartName.innerText = localStorage.getItem("name");
    productCartName.classList.add('tovar_oform_name');
    tovar_oform_info.appendChild(productCartName);

    const priceConteiner = document.createElement("div");
    priceConteiner.classList.add('tovars_zinaAndKol_vo');
    tovar_oform_info.appendChild(priceConteiner);

    const productCartPrice = document.createElement("h3");
    productCartPrice.classList.add('tovar_oform_zina');
    productCartPrice.innerText = `цена - ${localStorage.getItem("price")}`;
    priceConteiner.appendChild(productCartPrice);
    
    const deleteCartBtn = document.createElement("button");
    deleteCartBtn.classList.add("deleteCartBtn");
    deleteCartBtn.innerText = "Убрать";
    deleteCartBtn.addEventListener("click", function() {
        clearer();
        cartConteiner.remove();
        pricesArrays.pop(localStorage.getItem("price"));
        console.log(pricesArrays)
        arraySum(pricesArrays);
    })
    priceConteiner.appendChild(deleteCartBtn);
    arraySum(pricesArrays);
    return cartConteiner;
}

function arraySum(array) {
    let sumka = 0;
    for(let i = 0; i < array.length; i++) {
        sumka += +array[i];
    }

    monitorPrice.innerText = sumka;
    totalPrice.innerText = sumka;
    return sumka;
}

products.forEach(function(products){
    createProductContainer(products);
}) 

function createProductContainer(products) {
    const conteiner = document.createElement("div");
    conteiner.classList.add("slide_block");

    swiperSlider.appendChild(conteiner);

    const prosuctImg = document.createElement('IMG')
    prosuctImg.src = products.srcImg;
    prosuctImg.classList.add("slide_block_img");
    conteiner.appendChild(prosuctImg);

    const productTitle = document.createElement("h2");
    productTitle.innerText = products.name;
    productTitle.classList.add("slide_title");
    conteiner.appendChild(productTitle);

    const slideConteiner = document.createElement("div");
    slideConteiner.classList.add("basckets_slide");
    conteiner.appendChild(slideConteiner);

    const productPrice = document.createElement("h2");
    productPrice.innerText = `Цiна - ${products.price} грн`;
    productPrice.classList.add("stoimost");
    slideConteiner.appendChild(productPrice);

    const btnConteiner = document.createElement("div");
    btnConteiner.classList.add("basket_icon");
    slideConteiner.appendChild(btnConteiner);

    const addProductToCartBtn = document.createElement("button")
    addProductToCartBtn.setAttribute("type",'button')
    addProductToCartBtn.innerText = "У кошик";
    addProductToCartBtn.classList.add("plus");
    btnConteiner.appendChild(addProductToCartBtn);

    addProductToCartBtn.addEventListener("click", function() {
        // console.log(`цена: ${products.price}, название: ${products.name}, id: ${products.id}`);
        localStorage.setItem('id', products.id);
        localStorage.setItem('img', products.srcImg);
        localStorage.setItem("name", products.name);
        localStorage.setItem('price', products.price);
        addToCart();
        toggleCartStatus();
        addProductToCartArray();
    })
    return conteiner;
}

function toggleCartStatus() {
    let cardWrapper = document.querySelector(".tovar_info");
    const cardEmptyBadge = document.querySelector(".koshik_pust");
    const vipol = document.querySelector(".koshik_buttons");

    if(cardWrapper.children.length > 0) {
        console.log("full");
        cardEmptyBadge.style.display = "none";
        vipol.classList.remove("none");
        vipol.style.display = "flex"
    } else {
        cardEmptyBadge.style.display = "flex";
        vipol.classList.add("none");
        vipol.style.display = "none";
    }
}

function addProductToCartArray() {
    productInCart.push({
        id: localStorage.getItem("id"),
        name: localStorage.getItem("name"),
        price: localStorage.getItem("price"),
        srcImg: localStorage.getItem("img"),
    })
    console.log(productInCart)
    localStorage.setItem("cards", JSON.stringify(productInCart));
}






