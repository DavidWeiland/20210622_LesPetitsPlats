
import { triByTag } from "./triByTag";
import { tagsShowerFromTag } from "./tag__shower"

export let triValue;
export let triValueTabl = ["", "", ""];

export let customisation = function () {
  const customSelect = document.getElementsByClassName("custom-select");
  for (let i = 0; i < customSelect.length; i++) {
    const selectCopy = customSelect[i].getElementsByTagName("select")[0];
    const selectSelected = document.createElement("div");
    const selectItems = document.createElement("div");
    if (customSelect[i].getAttribute("class") === "custom-select ingredients") {
      selectSelected.setAttribute("class", "select-selected ingredients");
      selectSelected.setAttribute("value", "ingredients");
      selectItems.setAttribute(
        "class",
        "select-items select-hide ingredients select-items-ingredients"
      );
    } else if (
      customSelect[i].getAttribute("class") === "custom-select appliance"
    ) {
      selectSelected.setAttribute("class", "select-selected appliance");
      selectSelected.setAttribute("value", "appliance");
      selectItems.setAttribute("class", "select-items select-hide appliance");
    } else if (
      customSelect[i].getAttribute("class") === "custom-select ustensils"
    ) {
      selectSelected.setAttribute("class", "select-selected ustensils");
      selectSelected.setAttribute("value", "ustensils");
      selectItems.setAttribute("class", "select-items select-hide ustensils");
    }
    selectSelected.innerHTML =
      selectCopy.options[selectCopy.selectedIndex].innerHTML;
    customSelect[i].appendChild(selectSelected);

    for (let j = 1; j < selectCopy.length; j++) {
      const optionElement = document.createElement("div");
      optionElement.innerHTML = selectCopy.options[j].innerHTML;
      optionElement.addEventListener("click", trier);
      function trier() {
        const selectOrigine =
          this.parentNode.parentNode.getElementsByTagName("select")[0];
        const selectOrigineCiblePrev = this.parentNode.previousSibling;
        for (let k = 0; k < selectOrigine.length; k++) {
          if (selectOrigine.options[k].innerHTML == this.innerHTML) {
            selectOrigine.selectedIndex = k;
            selectOrigineCiblePrev.innerHTML = this.innerHTML;
            const selectValue = selectOrigineCiblePrev.getAttribute("value");
            if (selectValue === "ingredients") {
              triValueTabl.splice(0, 1, this.innerHTML);
              triByTag(triValueTabl[0]);
            }
            if (selectValue === "appliance") {
              triValueTabl.splice(1, 1, this.innerHTML);
              triByTag(triValueTabl[1]);
            }
            if (selectValue === "ustensils") {
              triValueTabl.splice(2, 1, this.innerHTML);
              triByTag(triValueTabl[2]);
            }
            triValue = this.innerHTML;
            tagsShowerFromTag(selectValue, triValue);
            const sameSelected =
              this.parentNode.getElementsByClassName("same-as-selected");
            for (var l = 0; l < sameSelected.length; l++) {
              sameSelected[l].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        selectOrigineCiblePrev.click();
      }
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
};

function closeAllSelect(elmnt) {
  let i,
    arrNo = [];
  const selectItems = document.getElementsByClassName("select-items");
  const selectSelected = document.getElementsByClassName("select-selected");
  for (i = 0; i < selectSelected.length; i++) {
    if (elmnt == selectSelected[i]) {
      arrNo.push(i);
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


