import { recipes } from './recipes';
import { triRecipes } from './tri__recipes';
import { pageConstruction } from './page__reconstruction';

export let triBySearch = function (input) {
  //vérifie nombre de lettres min (3) + Alpha != number
  function testInput(regex, chaine) {
    if (regex.test(chaine)) {
      triRecipes(input)
    }
    /*else {
      pageConstruction(recipes)
    }*/
  }
  testInput(/^[A-Za-z -]\D{2,}$/, input);
}