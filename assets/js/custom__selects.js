
export let customisation = function () {
  const customSelect = document.getElementsByClassName("custom-select");
  for (var i = 0; i < customSelect.length; i++) {
    var selectCopy = customSelect[i].getElementsByTagName("select")[0];
    var selectSelected = document.createElement("div");
    var selectItems = document.createElement("div");
    if (customSelect[i].getAttribute("class") === "custom-select ingredient") {
      selectSelected.setAttribute("class", "select-selected ingredient");
      selectItems.setAttribute("class", "select-items select-hide ingredient select-items-ingredient");
    } else if (customSelect[i].getAttribute("class") === "custom-select appliance") {
      selectSelected.setAttribute("class", "select-selected appliance");
      selectItems.setAttribute("class", "select-items select-hide appliance");
    } else if (customSelect[i].getAttribute("class") === "custom-select ustensil") {
      selectSelected.setAttribute("class", "select-selected ustensil");
      selectItems.setAttribute("class", "select-items select-hide ustensil");
    }
    selectSelected.innerHTML = selectCopy.options[selectCopy.selectedIndex].innerHTML;
    customSelect[i].appendChild(selectSelected);

    for (var j = 1; j < selectCopy.length; j++) {
      var optionElement = document.createElement("div");
      optionElement.innerHTML = selectCopy.options[j].innerHTML;
      optionElement.addEventListener("click", trier);//action sur click sur l'élément
      function trier() {
        var selectOrigine = this.parentNode.parentNode.getElementsByTagName("select")[0];
        var selectOrigineCiblePrev = this.parentNode.previousSibling;
        for (var k = 0; k < selectOrigine.length; k++) {
          if (selectOrigine.options[k].innerHTML == this.innerHTML) {
            selectOrigine.selectedIndex = k;
            selectOrigineCiblePrev.innerHTML = this.innerHTML;
            var sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
            triValue = document.querySelector("#triSelect").value;
            for (l = 0; l < sameSelected.length; l++) {
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
  var i, arrNo = [];
  var selectItems = document.getElementsByClassName("select-items");
  var selectSelected = document.getElementsByClassName("select-selected");
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



function optionTri(e){
  e.stopPropagation();
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
};