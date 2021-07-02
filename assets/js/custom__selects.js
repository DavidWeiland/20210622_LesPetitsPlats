const tags = document.querySelector(".tags");

let triValue = ["", "", ""];
export let customisation = function () {
  const customSelect = document.getElementsByClassName("custom-select");
  for (let i = 0; i < customSelect.length; i++) {
    const selectCopy = customSelect[i].getElementsByTagName("select")[0];
    const selectSelected = document.createElement("div");
    const selectItems = document.createElement("div");
    if (customSelect[i].getAttribute("class") === "custom-select ingredient") {
      selectSelected.setAttribute("class", "select-selected ingredient");
      selectSelected.setAttribute("value", "ingredient");
      selectItems.setAttribute("class", "select-items select-hide ingredient select-items-ingredient");
    } else if (customSelect[i].getAttribute("class") === "custom-select appliance") {
      selectSelected.setAttribute("class", "select-selected appliance");
      selectSelected.setAttribute("value", "appliance");
      selectItems.setAttribute("class", "select-items select-hide appliance");
    } else if (customSelect[i].getAttribute("class") === "custom-select ustensil") {
      selectSelected.setAttribute("class", "select-selected ustensil");
      selectSelected.setAttribute("value", "ustensil");
      selectItems.setAttribute("class", "select-items select-hide ustensil");
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
              triValue.splice(0, 1, this.innerHTML);
            } if (selectValue === "appliance") {
              triValue.splice(1, 1, this.innerHTML);
            } if (selectValue === "ustensil") {
              triValue.splice(2, 1, this.innerHTML);
            }
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
    selectItems.addEventListener("click", optionTri);
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



function optionTri(e) {
  console.log(triValue)
  e.stopPropagation();
/*
  if (triValue === "popularité"){ 
    myJsonParse["media"].sort(function(a,b){
      return a.likes-b.likes;
    });
  } else if (triValue === 'titre'){
    myJsonParse["media"].sort(function compare(a,b){
      if(a.title < b.title)
        return-1;
      if(a.title>b.title)
        return 1;
      return 0;
    });
  } else if (triValue === 'date'){
    myJsonParse["media"].sort(function compare(a,b){
      if(a.date < b.date)
        return-1;
      if(a.date>b.date)
        return 1;
      return 0;
    });
  }
  plancheImage(); //renvoi construction
  */

}

function tagsShower(value){
  console.log(value)
  const tag = document.createElement('span');
  tag.setAttribute("class", "tag " + value);
  let tagText;
  if (value === "ingredient") {
    tagText = triValue[0]
  }
  if (value === "appliance") {
    tagText = triValue[1]
  }
  if (value === "ustensil") {
    tagText = triValue[2]
  }
  tag.innerHTML = '<span>' + tagText + '</span><i class ="far fa-times-circle"></i>';
  tags.appendChild(tag)
}