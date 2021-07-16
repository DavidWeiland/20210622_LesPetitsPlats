import "../sass/main.scss";
import { icon } from "./search__icon";
import { recipes } from "./recipes";
import { searchListenner } from "./search__fonction";
import { pageConstruction } from "./page__construction";

icon();

pageConstruction(recipes);
searchListenner;
