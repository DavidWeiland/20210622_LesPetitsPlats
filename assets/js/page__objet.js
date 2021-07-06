const fichesRecettes = document.querySelector('.fiche');
const main = document.querySelector('main')

export const fiches = function (value) {
    let ingredients = [];
    let fiche = document.createElement('article');
    fiche.setAttribute('class', 'fiche__container');
    fiche.innerHTML =`
        <div class="fiche__image">
        </div>
        <div class="fiche__header">
            <h2 class="fiche__header--title">${value.name}<h2>
            <span class ="fiche__header--time"><i class ="far fa-clock"></i> ${value.time} min</span>
        </div>`
    let rolled = document.createElement('div');
    rolled.setAttribute('class', 'fiche__rolled');
    let rolledIngredients = document.createElement('ul');
    rolledIngredients.setAttribute('class', 'fiche__rolled--ingredients');
    ingredients = value.ingredients
    for (let i = 0; i < ingredients.length; i++) {
        let foodIn = ingredients[i].ingredient
        let quantity;
        let unit;
        if(ingredients[i].quantity===undefined){
            quantity = "";
        }else{
            quantity = " : " +ingredients[i].quantity;
        }
        if(ingredients[i].unit===undefined){
            unit = ""
        }else{
            switch (ingredients[i].unit){
                case "gramme":
                case "grammes":
                    unit = " g";
                    break;
                case "litre":
                case "litres":
                case "Litre":
                case "Litres":
                    unit = " L";
                    break;
                default :
                unit = ingredients[i].unit;
            }
        }
        rolledIngredients.innerHTML +=`
            <li class="fiche__rolled--food">
                <span style="font-weight:700">${foodIn}</span>
                <span style="font-weight:400">${quantity} ${unit}</span>
            </li>`
        }
        rolled.appendChild(rolledIngredients);
        rolled.innerHTML += `<span class='fiche__rolled--description'>${value.description}<span>`;
        fiche.appendChild(rolled);
    fichesRecettes.appendChild(fiche);
}
