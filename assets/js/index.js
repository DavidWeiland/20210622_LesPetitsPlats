import '../sass/main.scss';
import {icon} from './search__icon';
import {recipes} from './recipes';
import {fichesRecipe} from './recette__objet';
import {selects} from './selects__objets';
import {searchListenner} from './search__fonction';

icon();

fichesRecipe(recipes);
selects();
searchListenner