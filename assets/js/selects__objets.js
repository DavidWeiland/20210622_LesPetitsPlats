import { customisation } from "./custom__selects";
import { keySearch } from "./search__fonction"
const divSelects = document.querySelector(".selects");
let ingredientsArray = [];
let applianceArray = [];
let ustensilArray = [];
export let categories = [];
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
};
export let selects = function () {
  let key = keySearch
  let selectOption;
  categories = [];
  let divSelectIngredient = document.createElement("div");
  divSelectIngredient.setAttribute("class", "custom-select ingredients");
  let selectIngredient = document.createElement("select");
  selectIngredient.setAttribute("id", "select__ingredients");
  let divSelectAppliance = document.createElement("div");
  divSelectAppliance.setAttribute("class", "custom-select appliance");
  let selectAppliance = document.createElement("select");
  selectAppliance.setAttribute("id", "select__appliance");
  let divSelectUstensil = document.createElement("div");
  divSelectUstensil.setAttribute("class", "custom-select ustensils");
  let selectUstensil = document.createElement("select");
  selectUstensil.setAttribute("id", "select__ustensils");
  constSelectOption("Ingrédients");
  selectIngredient.appendChild(selectOption);
  constSelectOption("Appareil");
  selectAppliance.appendChild(selectOption);
  constSelectOption("Ustensiles");
  selectUstensil.appendChild(selectOption);
  let compteurI = 0
  let compteurA = 0
  let compteurU = 0
  ingredientsArray.forEach((option) => {
    if (option.toLowerCase().includes(key) || key == undefined) {
      constSelectOption(option);
      selectIngredient.appendChild(selectOption);
      compteurI++
    }
  });
  applianceArray.forEach((option) => {
    if (option.toLowerCase().includes(key) || key == undefined) {
      constSelectOption(option);
      selectAppliance.appendChild(selectOption);
      compteurA++
    }
  });
  ustensilArray.forEach((option) => {
    if (option.toLowerCase().includes(key) || key == undefined) {
      constSelectOption(option);
      selectUstensil.appendChild(selectOption);
      compteurU++
    }
  });
  function constSelectOption(option) {
    selectOption = document.createElement("option");
    selectOption.setAttribute("class", "option__select");
    selectOption.setAttribute("value", option);
    selectOption.textContent = option;
  }
  divSelectIngredient.appendChild(selectIngredient);
  divSelectAppliance.appendChild(selectAppliance);
  divSelectUstensil.appendChild(selectUstensil);
  divSelects.appendChild(divSelectIngredient);
  divSelects.appendChild(divSelectAppliance);
  divSelects.appendChild(divSelectUstensil);
  customisation();
  if (compteurI > 0) {
    categories[0] = "ingredients"
  } else {
    categories[0] = ""
  }
  if (compteurA > 0) {
    categories[1] = "appliance"
  } else {
    categories[1] = ""
  }
  if (compteurU > 0) {
    categories[2] = "ustensils"
  } else {
    categories[2] = ""
  }
  ingredientsArray = [];
  applianceArray = [];
  ustensilArray = [];
};