import { recipes } from "./recipes";
import { pageConstruction } from "./page__construction";
let recipes2 = recipes;
export let triRecipes = function (keySearch) {
  let tableau = [];
  for (const recipe in recipes) {
    for (const ingredient in recipes[recipe].ingredients) {
      if (recipes[recipe].ingredients[ingredient].ingredient.toLowerCase().includes(keySearch)) {
        tableau.push(recipes[recipe]);
      }
    }
    for (const ustensil in recipes[recipe].ustensils) {
      if (recipes[recipe].ustensils[ustensil].toLowerCase().includes(keySearch)) {
        tableau.push(recipes[recipe]);
      }
    }
  }
  recipes2 = recipes2.filter((recipe) =>
    recipe.name.toLowerCase().includes(keySearch) ||
    recipe.appliance.toLowerCase().includes(keySearch) ||
    recipe.description.toLowerCase().includes(keySearch)
  );
  recipes2.forEach((elmt) => {
    tableau.push(elmt);
  })
  tableau = Array.from(new Set(tableau))
  pageConstruction(tableau)
}
