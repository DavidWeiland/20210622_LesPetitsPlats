import { pageConstruction } from "./page__reconstruction";
import { recipes } from "./recipes";
import { tri } from "./search__fonction";

const tags = document.querySelector(".tags");

let triValue
let triValueTabl= ["", "", ""];
export let customisation = function () {
  const customSelect = document.getElementsByClassName("custom-select");
  for (let i = 0; i < customSelect.length; i++) {
    const selectCopy = customSelect[i].getElementsByTagName("select")[0];
    const selectSelected = document.createElement("div");
    const selectItems = document.createElement("div");
    const tag = document.createElement('span');
    if (customSelect[i].getAttribute("class") === "custom-select ingredient") {
      selectSelected.setAttribute("class", "select-selected ingredient");
      selectSelected.setAttribute("value", "ingredient");
      selectItems.setAttribute("class", "select-items select-hide ingredient select-items-ingredient");
      tag.setAttribute("class", "tag ingredient hidden");
      tag.setAttribute("id", 'tagingredient');
      tags.appendChild(tag)
    } else if (customSelect[i].getAttribute("class") === "custom-select appliance") {
      selectSelected.setAttribute("class", "select-selected appliance");
      selectSelected.setAttribute("value", "appliance");
      selectItems.setAttribute("class", "select-items select-hide appliance");
      tag.setAttribute("class", "tag appliance hidden");
      tag.setAttribute("id", 'tagappliance');
      tags.appendChild(tag)
    } else if (customSelect[i].getAttribute("class") === "custom-select ustensil") {
      selectSelected.setAttribute("class", "select-selected ustensil");
      selectSelected.setAttribute("value", "ustensil");
      selectItems.setAttribute("class", "select-items select-hide ustensil");
      tag.setAttribute("class", "tag ustensil hidden");
      tag.setAttribute("id", 'tagustensil');
      tags.appendChild(tag)
    }
    selectSelected.innerHTML = selectCopy.options[selectCopy.selectedIndex].innerHTML;
    customSelect[i].appendChild(selectSelected);

    for (let j = 1; j < selectCopy.length; j++) {
      const optionElement = document.createElement("div");
      optionElement.innerHTML = selectCopy.options[j].innerHTML;
      optionElement.addEventListener("click", trier);
      function trier() {
        const selectOrigine = this.parentNode.parentNode.getElementsByTagName("select")[0];
        const selectOrigineCiblePrev = this.parentNode.previousSibling;
        for (let k = 0; k < selectOrigine.length; k++) {
          if (selectOrigine.options[k].innerHTML == this.innerHTML) {
            selectOrigine.selectedIndex = k;
            selectOrigineCiblePrev.innerHTML = this.innerHTML;
            const selectValue = selectOrigineCiblePrev.getAttribute("value");
            if (selectValue === "ingredient") {
              triValueTabl.splice(0, 1, this.innerHTML);
              tri(triValueTabl[0]);
            } if (selectValue === "appliance") {
              triValueTabl.splice(1, 1, this.innerHTML);
              tri(triValueTabl[1]);
            } if (selectValue === "ustensil") {
              triValueTabl.splice(2, 1, this.innerHTML);
              tri(triValueTabl[2]);
            }
            triValue = this.innerHTML;
            tagsShower(selectValue);
            const sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
            for (var l = 0; l < sameSelected.length; l++) {
              sameSelected[l].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        selectOrigineCiblePrev.click();
      };
      selectItems.appendChild(optionElement);
    }
    customSelect[i].appendChild(selectItems);
    selectSelected.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  document.addEventListener("click", closeAllSelect);
}

function closeAllSelect(elmnt) {
  let i, arrNo = [];
  const selectItems = document.getElementsByClassName("select-items");
  const selectSelected = document.getElementsByClassName("select-selected");
  for (i = 0; i < selectSelected.length; i++) {
    if (elmnt == selectSelected[i]) {
      arrNo.push(i)
    } else {
      selectSelected[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < selectItems.length; i++) {
    if (arrNo.indexOf(i)) {
      selectItems[i].classList.add("select-hide");
    }
  }
}

var closeBtn
function tagsShower(value){
  const tag=document.querySelector('#tag'+value)
  if (value === "ingredient") {
    tag.classList.remove("hidden");
  }
  if (value === "appliance") {
    tag.classList.remove("hidden");
  }
  if (value === "ustensil") {
    tag.classList.remove("hidden");
  }
  tag.innerHTML = `<span>${triValue}</span><i class ="far fa-times-circle closeBtn" id="btn${value}"></i>`;
  closeBtn = document.querySelectorAll(".closeBtn")
  closeBtn.forEach((btn) => btn.addEventListener('click', (e) => {
    let cible = e.target.id.split('btn')[1];
    let closeTag = document.querySelector('#tag' + cible);
    closeTag.classList.add("hidden");
    if (cible === "ingredient") {
      triValueTabl[0] = "";
    }
    if (cible === "appliance") {
      triValueTabl[1] = "";
    }
    if (cible === "ustensil") {
      triValueTabl[2] = "";
    }
    pageConstruction(recipes)
    if (triValueTabl[0] != "") {
      tri(triValueTabl[0]);
      if (triValueTabl[1] != "") {
        tri(triValueTabl[1]);
      }
      if (triValueTabl[2] != "") {
        tri(triValueTabl[2]);
      }
    } else if (triValueTabl[1] != "") {
      tri(triValueTabl[1]);
      if (triValueTabl[2] != "") {
        tri(triValueTabl[2]);
      }
    } else if (triValueTabl[2] != "") {
        tri(triValueTabl[2]);
    }
  }))
}



