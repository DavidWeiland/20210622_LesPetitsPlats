import {fiches} from './page__objet.js';
import { optionsDefault } from './selects__objets';

export let valueRecipe;
let i

export let Recipe = function (name){
    this.name = name;
    this.id = "id";
    this.servings = "servings";
    this.ingredients = "ingredients";
    this.ingredient = "ingredient";
    this.quantity = "quantity";
    this.unit = "unit";
    this.time = "time";
    this.description = "description";
    this.appliance = "appliance";
    this.ustensils = "ustensils";
    this.getInfo = function(){
        valueRecipe = {
            "recipeId" : this.id,
            "name" : this.name,
            "servings" : this.servings,
            "ingredients": this.ingredients,
            "time" : this.time,
            "description" : this.description,
            "appliance" : this.appliance,
            "ustensils" : this.ustensils
        }
        fiches(valueRecipe);
        optionsDefault(valueRecipe);
        return valueRecipe;
    }
}

export const fichesRecipe = function(jsonObj){
    for ( i = 0; i < jsonObj.length; i++){
    construction(jsonObj);
    }
}

export const construction = function(recipe){
    var myRecipe = new Recipe(recipe[i].name);
    myRecipe.id = recipe[i].id;
    myRecipe.servings = recipe[i].servings;
    myRecipe.ingredients = recipe[i].ingredients;
    myRecipe.ingredient = recipe[i].ingredients.ingredient; 
    myRecipe.quantity = recipe[i].ingredients.quantity;
    myRecipe.unit = recipe[i].ingredients.unit;
    myRecipe.time = recipe[i].time;
    myRecipe.description = recipe[i].description;
    myRecipe.appliance = recipe[i].appliance;
    myRecipe.ustensils = recipe[i].ustensils;
    myRecipe.getInfo();
}