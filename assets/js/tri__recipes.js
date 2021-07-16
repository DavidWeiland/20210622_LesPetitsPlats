  
import { newRecipes, pageConstruction } from "./page__construction";

export let triRecipes = function (value) {
  let newRecipes2 = [];
  newRecipes.forEach((recipe) => {
    const name = recipe.name.toLowerCase()
    const appliance = recipe.appliance.toLowerCase()
    const description = recipe.description.toLowerCase()
    const ustensils = recipe.ustensils
    const ingredients = recipe.ingredients
    if (name.includes(value)||appliance.includes(value)||description.includes(value)) {
      newRecipes2.push(recipe)
    }
    ustensils.forEach((ustensil) => {
      const ustensilLower = ustensil.toLowerCase()
      if (ustensilLower.includes(value)) {
        newRecipes2.push(recipe)
      }
    })
    ingredients.forEach((ingredient) => {
      const ingredientLower = ingredient.ingredient.toLowerCase()
      if (ingredientLower.includes(value)) {
        newRecipes2.push(recipe)
      }
    })
  })
  newRecipes2 = Array.from(new Set(newRecipes2))
  pageConstruction(newRecipes2)
}