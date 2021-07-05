
import {fichesRecipe} from './recette__objet';
import {optionsDefault} from './selects__objets';
import {newRecipes} from './new__recipes';
import { recipes } from './recipes';

const fichesRecettes = document.querySelector('.fiche');
const divSelects = document.querySelector('.selects');
const search = document.querySelector('#search');

export const searchListenner = search.addEventListener('change', (e) => {
  console.log(divSelects.firstChild)
  while (fichesRecettes.firstChild){
    fichesRecettes.removeChild(fichesRecettes.firstChild);
  };
  while (divSelects.firstChild) {
    console.log(divSelects);
    divSelects.removeChild(divSelects.firstChild);
  }
  let target = e.target.value
  if (target === "coco") {
    optionsDefault(newRecipes);
    fichesRecipe(newRecipes);
  }else{
    optionsDefault(recipes);
    fichesRecipe(recipes);
  }
})
while (divSelects.firstChild) {
  console.log(divSelects.firstChild)
  divSelects.removeChild(divSelects.firstChild);
};