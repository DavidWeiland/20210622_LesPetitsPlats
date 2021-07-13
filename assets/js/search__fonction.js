import { triBySearch } from "./triBySearch";

const search = document.querySelector("#search");
const divTags = document.querySelector(".tag__principal");
export let keySearch

export const searchListenner = search.addEventListener("input", (e) => {
  keySearch = e.target.value.toLowerCase()
  divTags.innerHTML = "";
  triBySearch(keySearch);
});
