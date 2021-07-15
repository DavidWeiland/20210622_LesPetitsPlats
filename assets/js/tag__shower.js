import { pageConstruction } from "./page__reconstruction";
import { recipes } from "./recipes";
import { triValueTabl } from "./custom__selects";
import { triByTag } from "./triByTag";
let closeBtn;
const search = document.querySelector("#search");

let tag

export const tagsShowerFromTag = function (categorie, triValue) {
  const tagSearch = document.querySelector("#tagBySearch")
  tagSearch.innerHTML=""
  tag = document.querySelector("#tagByTag")
  tagsShower(categorie, triValue)
}

export const tagsShowerFromSearch = function (categorie, triValue) {
  tag = document.querySelector("#tagBySearch")
  
  tagsShower(categorie, triValue)
}

function tagsShower(categorie, triValue) {
  let trivalue = triValue.split(" ")
  trivalue=trivalue.join("-")
  trivalue = trivalue.split("(")
  trivalue = trivalue[0] + trivalue[1]
  trivalue = trivalue.split(")")
  trivalue = trivalue[0]
  
  tag.innerHTML += `<span class="tags" id="tags${categorie}${trivalue}"><span class="tag ${categorie}" id="tag${categorie}"><span>${triValue}</span><i class ="far fa-times-circle closeBtn" id="btn${categorie}btn${trivalue}"></i></span></span>`;
  console.log(tag)

  closeBtn = document.querySelectorAll(".closeBtn");
  closeBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      search.innerText = ""
      let cible = e.target.id.split("btn")[1]
      let cible2 = e.target.id.split("btn")[2];
      let closeTags = document.querySelector("#tags" + cible+cible2);
      closeTags.parentNode.removeChild(closeTags);

      if (cible === "ingredients") {
        triValueTabl[0] = "";
      }
      if (cible === "appliance") {
        triValueTabl[1] = "";
      }
      if (cible === "ustensils") {
        triValueTabl[2] = "";
      }
      console.log(closeTags)
      console.log(triValue + " -- " + triValueTabl)
      pageConstruction(recipes);
      if (triValueTabl[0] != "") {
        console.log("x- - .")
        triByTag(triValueTabl[0]);
        if (triValueTabl[1] != "") {
          console.log("x-x- .")
          triByTag(triValueTabl[1]);
        }
        if (triValueTabl[2] != "") {
          console.log("x- -x.")
          triByTag(triValueTabl[2]);
        }
      } else if (triValueTabl[1] != "") {
        console.log(" -x- .")
        triByTag(triValueTabl[1]);
        if (triValueTabl[2] != "") {
          console.log(" -x-x.")
          triByTag(triValueTabl[2]);
        }
      } else if (triValueTabl[2] != "") {
        console.log(" - -x.")
        triByTag(triValueTabl[2]);
      }
    })
  );
}
