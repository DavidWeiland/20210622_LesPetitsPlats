const fichesRecettes = document.querySelector('.fiche');
const main = document.querySelector('main')

export const fiches = function (value) {
    let ingredients = [];
    let fiche = document.createElement('article');
    fiche.setAttribute('class','fiche__container')
    let ficheImage = document.createElement('div');
    //let ficheImage = document.createElement('img');
    ficheImage.setAttribute("class","fiche__image");
    //ficheImage.setAttribute("src","");
    //ficheImage.setAttribute("alt", "");
    fiche.appendChild(ficheImage);
    let ficheHeader = document.createElement('div');
    ficheHeader.setAttribute('class', 'fiche__header');
    let title = document.createElement('h2');
    title.setAttribute("class","fiche__header--title");
    title.innerText = value.name;
    ficheHeader.appendChild(title);
    let time = document.createElement('span');
    time.setAttribute("class","fiche__header--time");
    time.innerHTML = '<i class ="far fa-clock"></i> ' + value.time + ' min';
    ficheHeader.appendChild(time);
    fiche.appendChild(ficheHeader);
    let rolled = document.createElement('div');
    rolled.setAttribute('class', 'fiche__rolled');
    let rolledIngredients = document.createElement('ul');
    rolledIngredients.setAttribute('class', 'fiche__rolled--ingredients');
    ingredients = value.ingredients
    for (var i = 0; i < ingredients.length; i++) {
        var food = document.createElement('li');
        food.setAttribute("class","fiche__rolled--food");
        var foodIn = document.createElement('span');
        foodIn.style.fontWeight = '700';
        var foodQtUn = document.createElement('span');
        foodQtUn.style.fontWeight = '400';
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
                unit = " "+ingredients[i].unit;
            }
            foodIn.innerText = ingredients[i].ingredient
            foodQtUn.innerText = quantity + unit;
            rolledIngredients.appendChild(food);
            food.appendChild(foodIn);
            food.appendChild(foodQtUn); 
            }
        }
        rolled.appendChild(rolledIngredients);
        rolled.innerHTML += `<span class='fiche__rolled--description'>${value.description}><span>`;
        fiche.appendChild(rolled);
    fichesRecettes.appendChild(fiche);
}
