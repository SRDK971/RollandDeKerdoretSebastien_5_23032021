/* GET API ALL PRODUCTS & MANAGE  */

fetch ("https://op-dw-p5.herokuapp.com/api/furniture")
    .then(data => data.json())    
    .then(jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture) {
            let furniture = new Furniture(jsonFurniture)
                document.querySelector("#root").innerHTML +=    `<div class="card addBasket" data-id="${furniture.id}">
                                                                    <img src="${furniture.imageUrl}" class="card__img" alt="furniture" />
                                                                        <div class="card__body">
                                                                            <p class="card__body__name">${furniture.name}</p>
                                                                            <p class="card__body__price">${furniture.price}€</p>
                                                                            <p class="card__body__description">${furniture.description}</p>
                                                                        </div>
                                                                </div>`
    
        }
        document.querySelectorAll(".addBasket").forEach(card => {
            card.addEventListener("click",() => {
                addBasket(this.dataset.id)
            })
        })

    });