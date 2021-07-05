import { customisation } from "./custom__selects";

const divSelects = document.querySelector('.selects');

let ingredientsArray=["Ingredients"];
let applianceArray=["Appareils"];
let ustensilArray=["Ustensiles"];

export const optionsDefault = function (value) {
    for (var i = 0; i < value.ingredients.length; i++) {
        ingredientsArray.push(value.ingredients[i].ingredient);
    }
    ingredientsArray = Array.from(new Set(ingredientsArray));
    applianceArray.push(value.appliance);
    applianceArray = Array.from(new Set(applianceArray));
    for (var i = 0; i < value.ustensils.length; i++) {
        ustensilArray.push(value.ustensils[i]);
    }
    ustensilArray = Array.from(new Set(ustensilArray));
}
    
export let selects = function () {
    let selectOption
    let divSelectIngredient = document.createElement('div');
    divSelectIngredient.setAttribute('class', 'custom-select ingredient');
    let selectIngredient = document.createElement('select');
    selectIngredient.setAttribute('id','select__ingredient');
    ingredientsArray.forEach((option)=>{
        constSelectOption(option)
        selectIngredient.appendChild(selectOption);
    });
    let divSelectAppliance = document.createElement('div');
    divSelectAppliance.setAttribute('class','custom-select appliance');
    let selectAppliance = document.createElement('select');
    selectAppliance.setAttribute('id','select__appliance')
    applianceArray.forEach((option)=>{
        constSelectOption(option)
        selectAppliance.appendChild(selectOption);
    });
    let divSelectUstensil = document.createElement('div');
    divSelectUstensil.setAttribute('class','custom-select ustensil');
    let selectUstensil = document.createElement('select');
    selectUstensil.setAttribute('id', 'select__ustensil');
    ustensilArray.forEach((option)=>{ 
        constSelectOption(option)
        selectUstensil.appendChild(selectOption);
    });
    function constSelectOption(option){
        selectOption = document.createElement('option');
        selectOption.setAttribute("class","option__select");
        selectOption.setAttribute('value',option)
        selectOption.textContent=option;
    }
    ingredientsArray=["Ingredients"];
    applianceArray=["Appareils"];
    ustensilArray = ["Ustensiles"];
    divSelectIngredient.appendChild(selectIngredient);
    divSelectUstensil.appendChild(selectUstensil);
    divSelectAppliance.appendChild(selectAppliance);
    divSelects.appendChild(divSelectIngredient);
    divSelects.appendChild(divSelectAppliance);
    divSelects.appendChild(divSelectUstensil);
    customisation();
};