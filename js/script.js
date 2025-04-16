console.log('Script підключено')

let itemsArray = ['Газонокосарка 43','Електричний тример 110','Електрична газонокосарка 32','Акумуляторний оприскувач 12N']



let itemsDiv = document.getElementById('items')

if (itemsDiv) {
    itemsArray.forEach((item) => {
        itemsDiv.innerHTML += `<div class="item">${item}</div>`
    })
}else {
    console.log('Блок товарів не знайдено')
}


            //<div class="item">
                //<div class="item-title">Мотокоса 43</div>
                //<div class="item-image">
                    //<img src="img/1.png" alt="Мотокоса 43">
                //</div>
                //<div class="parts-pay">
                    //<div><img src="" alt="">6</div>
                    //<div><img src="" alt="">8</div>
                //</div>
                //<div class="price">
                    //<div><span>5449</span><span>грн</span></div>
                    //<div><span>4497</span><span>грн</span></div>
                //</div>
                //<div class="price bonus">
                    //<div>ціна за купоном</div>
                    //<div><span>4395</span><span>грн</span></div>
                //</div>
            //</div>