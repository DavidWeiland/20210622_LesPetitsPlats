import '../sass/main.scss';
import {icon} from './search__icon';
import {recipes} from './recipes';
import {fichesRecipe} from './recette__objet';
import {optionsDefault} from './selects__objets';
import {searchListenner} from './search__fonction';

icon();
optionsDefault(recipes);
fichesRecipe(recipes);
searchListenner