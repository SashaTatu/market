console.log('Script підключено')

let itemsArray = []

async function getObjectsFromFile(file) {
    try {
        const response = await fetch(file)
        if(!response.ok){
            throw new Error(`HTTP помилка! статус ${response.status}`)
        }
        const data = await response.json()
        return data
    }
    catch (error){
        console.error('Помилка fetching JSON:', error)
    } finally {
        console.log('Fetch завершено')
    } 
}

async function builItems() {
    const itemsArray = await getObjectsFromFile('js/items.json')
    console.log(itemsArray)

    itemsArray.forEach((item, index) => {
        console.log(item)
        let itemsDiv = document.createElement('div')
        itemsDiv.classList.add('item')
        itemsDiv.innerHTML += `
                <div class="item-title">${item.title}</div>
                <div class="item-image">
                    <img src="img/${item.img}" alt="${items.title}">
                </div>
                <div class="parts-pay">
                    <div><img src="img/mono-lapka.png" alt="">${item["parts-pay1"]}</div>
                    <div><img src="img/pb.png" alt="">${item["parts-pay2"]}</div>
                </div>
                <div class="price">
                    <div><span>${item["price1"]}</span><span>грн</span></div>
                    <div><span>${item["price2"]}</span><span>грн</span></div>
                </div>
                <div class="price bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item["price-bonus"]}</span><span>грн</span></div>
                </div>
        `
        document.getElementById('items').appendChild(itemsDiv)
    }) 
}

builItems()

    

