import { pageConstruction } from "./page__reconstruction";
import { newRecipes } from "./page__reconstruction";

export let triRecipes = function (value) {
  value = value.toLowerCase()
  let newRecipes2 = [];
  newRecipes.forEach((recipe) => {
    let name = recipe.name.toLowerCase()
    let appliance = recipe.appliance.toLowerCase()
    let description = recipe.description.toLowerCase()
    let ustensils = recipe.ustensils
    let ingredients = recipe.ingredients
    if (name.includes(value)||appliance.includes(value)||description.includes(value)) {
      newRecipes2.push(recipe)
    }
    ustensils.forEach((ustensil) => {
      let ustensilLower = ustensil.toLowerCase()
      if (ustensilLower.includes(value)) {
        newRecipes2.push(recipe)
      }
    })
    ingredients.forEach((ingredient) => {
      let ingredientLower = ingredient.ingredient.toLowerCase()
      if (ingredientLower.includes(value)) {
        newRecipes2.push(recipe)
      }
    })
  })
  newRecipes2 = Array.from(new Set(newRecipes2))
  pageConstruction(newRecipes2)
}