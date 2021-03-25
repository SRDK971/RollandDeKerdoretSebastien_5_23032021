
/*  
*   Bracket manager
*/

function addBasket(furnitureId){
    let listFurniture = getBasket()
    listFurniture.push(furnitureId)
    saveBasket(listFurniture)
}      

function getBasket(){
    let listFurniture = localStorage.getItem("listFurniture")
    if (listFurniture == null) {
        return []
    } else {
        return JSON.parse(listFurniture)
    }
}
  
function saveBasket(listFurniture){
    localStorage.setItem("listFurniture",JSON.stringify(listFurniture))
}

