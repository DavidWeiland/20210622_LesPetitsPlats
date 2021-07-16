import { triBySearch } from "./triBySearch";
const search = document.querySelector("#search");
const divTags = document.querySelector("#tagBySearch");
export let keySearch
export const searchListenner = search.addEventListener("input", (e) => {
  keySearch = e.target.value.toLowerCase()
  divTags.innerHTML = "";
  triBySearch(keySearch);
  keySearch =""
});
