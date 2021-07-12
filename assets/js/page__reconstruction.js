import { fichesRecipe } from "./recette__objet";
import { selects } from "./selects__objets";

const ficheRecettes = document.querySelector(".fiche");
const divSelects = document.querySelector(".selects");
export let newRecipes;

export let pageConstruction = function (source) {
  ficheRecettes.innerHTML = "";
  divSelects.innerHTML = "";
  if (source.length == 0) {
    ficheRecettes.innerHTML = `<h2 class="alerte"> Aucune recette ne correspond à votre critère.</br>Vous pouvez chercher "Tarte aux pommes", "Poisson", etc...</h2>`;
  } else {
    fichesRecipe(source);
    selects();
    newRecipes = source;
  }
};
