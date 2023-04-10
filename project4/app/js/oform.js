
let buyBtn = document.querySelector('.pokupka_btn');
let srcI = localStorage.getItem("imgSrc");
let title = localStorage.getItem("title");
let zina = localStorage.getItem("zina");

let aa = localStorage.getItem('card-products');
let vb = JSON.parse(aa);

const getName = [];

let fd = localStorage.getItem("cards");

let ss = JSON.parse(fd);
const bigConteiner = document.querySelector(".allTovars");
buyBtn.onclick = function() {
    if(bigConteiner.childNodes.length == 0) {
        this.setAttribute("href", "#");
        alert("У кошику пусто");
    }
}

window.addEventListener("load", renderOform) 

let header_cost = document.querySelector(".header_cost");
let oformPrice = document.querySelector(".zinas");
function renderOform() {

        const priceArray = [];

        for(let i = 0; i <= ss.length - 1; i++) {
            priceArray.push(ss[i].price);
            
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("oform_tovar");
            bigConteiner.appendChild(imgContainer);
    
            const oformImg = document.createElement("img");
            oformImg.src = ss[i].srcImg;
            imgContainer.appendChild(oformImg);

            const oformInfoContainer = document.createElement("div");
            oformInfoContainer.classList.add("tovar_oform_info");
            imgContainer.appendChild(oformInfoContainer);

            const oformNames = document.createElement("h3");
            oformNames.classList.add("tovar_oform_name");
            oformNames.innerText = ss[i].name;
            oformInfoContainer.appendChild(oformNames);

            const priceContainer = document.createElement("div");
            priceContainer.classList.add("tovars_zinaAndKol_vo");
            imgContainer.appendChild(priceContainer);

            const prices = document.createElement("h3");
            prices.classList.add("tovar_oform_zina");
            prices.innerText = `${ss[i].price} грн`;
            priceContainer.appendChild(prices);


            const delBtn = document.createElement("button");
            delBtn.setAttribute("type",'button');
            delBtn.classList.add("delBtn")
            delBtn.innerHTML = 'Убрать';
            delBtn.addEventListener("click", function () {
                imgContainer.style.display = "none";
                imgContainer.remove();
                priceArray.pop(ss[i].price);
                arraySum(priceArray);
            })
            priceContainer.appendChild(delBtn);
            arraySum(priceArray);

        }
}

function arraySum(array) {
    let sumka = 0;
    for(let i = 0; i < array.length; i++) {
        sumka += +array[i];
    }

    header_cost.innerText = sumka;
    oformPrice.innerText = sumka;
    return sumka;
}

