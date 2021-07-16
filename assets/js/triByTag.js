import { newRecipes, pageConstruction } from "./page__construction";
const search = document.querySelector("#search");
export let triByTag = function (KeyTag) {
  search.value = "";
  let newRecipes2 = [];
  newRecipes2 = newRecipes.filter((recipeElmt)=>recipeElmt.appliance === KeyTag)
  newRecipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      if (ustensil === KeyTag) {
        newRecipes2.push(recipe);
      }
    });
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient === KeyTag) {
        newRecipes2.push(recipe);
      }
    });
  });
  newRecipes2 = Array.from(new Set(newRecipes2));
  pageConstruction(newRecipes2);
};
