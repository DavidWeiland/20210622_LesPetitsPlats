import "../sass/main.scss";
import { icon } from "./search__icon";
import { recipes } from "./recipes";
import { searchListenner } from "./search__fonction";
import { pageConstruction } from "./page__reconstruction";

icon();

pageConstruction(recipes);
searchListenner;

//console.log('A FAIRE : --------   Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre "coco" dans la liste d\'ingrédients, seuls vont rester "noix de coco" et "lait de coco"------------   Travail sur scenario alternatif A3')
