import { newRecipes, pageConstruction } from "./page__reconstruction";
const search = document.querySelector("#search");
export let triByTag = function (key) {
  search.value = "";
  let newRecipes2 = [];
  newRecipes.forEach((recipe) => {
    if (recipe.appliance === key) {
      newRecipes2.push(recipe);
    }
    recipe.ustensils.forEach((ustensil) => {
      if (ustensil === key) {
        newRecipes2.push(recipe);
      }
    });
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient === key) {
        newRecipes2.push(recipe);
      }
    });
  });
  newRecipes2 = Array.from(new Set(newRecipes2));
  pageConstruction(newRecipes2);
};
