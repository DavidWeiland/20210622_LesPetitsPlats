import { customisation } from "./custom__selects";

const divSelects = document.querySelector('.selects');

let ingredientsArray=[];
let applianceArray=[];
let ustensilArray=[];

let divSelectIngredient = document.createElement('div');
divSelectIngredient.setAttribute('class','custom-select ingredient');
let divSelectAppliance = document.createElement('div');
divSelectAppliance.setAttribute('class','custom-select appliance');
let divSelectUstensil = document.createElement('div');
divSelectUstensil.setAttribute('class','custom-select ustensil');

let selectIngredient = document.createElement('select');
    selectIngredient.setAttribute('id','select__ingredient');
    let selectAppliance = document.createElement('select');
    selectAppliance.setAttribute('id','select__appliance')
    let selectUstensil = document.createElement('select');
    selectUstensil.setAttribute('id','select__ustensil');
    
    export const optionsDefault = function(value){
        ingredientsArray=[];
        applianceArray=[];
        ustensilArray=[];
        value.forEach((recipe)=>{
            for (var i = 0; i < recipe.ingredients.length; i++) {
                ingredientsArray.push(recipe.ingredients[i].ingredient);
            }
            ingredientsArray = Array.from(new Set(ingredientsArray));
            
            applianceArray.push(recipe.appliance);
            applianceArray = Array.from(new Set(applianceArray));
            
            for (var i = 0; i < recipe.ustensils.length; i++) {
                ustensilArray.push(recipe.ustensils[i]);
            }
            ustensilArray = Array.from(new Set(ustensilArray));
        })
        selects();
    }
    
    function selects(){
        let selectOption
        ingredientsArray.forEach((option)=>{
            constSelectOption(option)
            selectIngredient.appendChild(selectOption);
        });
        applianceArray.forEach((option)=>{
            constSelectOption(option)
            selectAppliance.appendChild(selectOption);
        });
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
        divSelectIngredient.appendChild(selectIngredient);
        divSelectUstensil.appendChild(selectUstensil);
        divSelectAppliance.appendChild(selectAppliance);
        divSelects.appendChild(divSelectIngredient);
        divSelects.appendChild(divSelectAppliance);
        divSelects.appendChild(divSelectUstensil);
        customisation();
};