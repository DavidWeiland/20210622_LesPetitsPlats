import { recipes } from './recipes';
import { triRecipes } from './tri__recipes';
import { pageConstruction } from './page__reconstruction';

const search = document.querySelector('#search');
const divTags = document.querySelector('.tags');

export const searchListenner = search.addEventListener('input', (e) => {
  while (divTags.firstChild) {
    divTags.removeChild(divTags.firstChild);
  };
  tri(e.target.value)
})

export let tri = function (input) {
    //vérifie nombre de lettres min (3) + Alpha != number
    function testInput(regex, chaine) {
      if (regex.test(chaine)) {
        triRecipes(input)
      } else {
        pageConstruction(recipes)
      }
    }
    testInput(/^[A-Za-z -]\D{2,}$/, input);
}