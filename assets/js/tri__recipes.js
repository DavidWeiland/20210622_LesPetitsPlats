
import { recipes } from "./recipes";
import { pageConstruction } from "./page__reconstruction";

let recipes2 = recipes
export let tri = function (value) {
  let tableau = []
  for (const recipe in recipes) {
    for (const ingredient in recipes[recipe].ingredients) {
      if (recipes[recipe].ingredients[ingredient].ingredient.toLowerCase().includes(value)) {
        tableau.push(recipes[recipe])
      }
    }
    for (const ustensil in recipes[recipe].ustensils) {
      if (recipes[recipe].ustensils[ustensil].toLowerCase().includes(value)) {
        tableau.push(recipes[recipe])
      }
    }
  }

  recipes2 = recipes2.filter(recipe => recipe.name.toLowerCase().includes(value) || recipe.appliance.toLowerCase().includes(value) || recipe.description.toLowerCase().includes(value))

  recipes2.forEach((elmt) => {
    if (!tableau.includes(elmt)) {
      tableau.push(elmt)
    }
  })
  pageConstruction(tableau)
  console.log(tableau)
}
