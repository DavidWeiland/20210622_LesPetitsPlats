const customSelect = document.getElementsByClassName("custom-select");

for (var customCompteur = 0; customCompteur < customSelect.length; customCompteur++) {
  var selectCopy = customSelect[customCompteur].getElementsByTagName("select")[0];
  selectSelected = document.createElement("div");
  selectSelected.setAttribute("class", "select-selected");
  selectSelected.setAttribute('role','button');
  selectSelected.setAttribute('tabindex','0');
  selectSelected.setAttribute('aria-label','tri');
  selectSelected.setAttribute('aria-haspopup','true');
  selectSelected.setAttribute('aria-expanded','false');
  selectSelected.innerHTML = selectCopy.options[selectCopy.selectedIndex].innerHTML;
  customSelect[customCompteur].appendChild(selectSelected);
  selectItems = document.createElement("div");
  selectItems.setAttribute("class", "select-items select-hide");
  for (var selectCopyI = 1; selectCopyI < selectCopy.length; selectCopyI++) {
    var optionElement = document.createElement("div");
    optionElement.setAttribute("role", "button");
    optionElement.setAttribute("tabindex", "0");
    optionElement.setAttribute("aria-label", "option");
    optionElement.innerHTML = selectCopy.options[selectCopyI].innerHTML;
    optionElement.addEventListener("click", trier);
    function trier() {
      selectOrigine = this.parentNode.parentNode.getElementsByTagName("select")[0];
      var selectOrigineCiblePrev = this.parentNode.previousSibling;
      for (var conpteurSelectOrigine = 0; conpteurSelectOrigine < selectOrigine.length; conpteurSelectOrigine++) {
        if (selectOrigine.options[conpteurSelectOrigine].innerHTML == this.innerHTML) {
          selectOrigine.selectedIndex = conpteurSelectOrigine;
          selectOrigineCiblePrev.innerHTML = this.innerHTML;
          var sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
          triValue = document.querySelector("#triSelect").value;
          for (compteurSelectOrigine = 0; compteurSelectOrigine < sameSelected.length; compteurSelectOrigine++) {
            sameSelected[compteurSelectOrigine].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      selectOrigineCiblePrev.click();
    };
    optionElement.addEventListener("keyup", function (e) {
      if(e.code=="Enter"){
        selectOrigine = this.parentNode.parentNode.getElementsByTagName("select")[0];
        var selectOrigineCiblePrev = this.parentNode.previousSibling;
        for (var conpteurSelectOrigine = 0; conpteurSelectOrigine < selectOrigine.length; conpteurSelectOrigine++) {
          if (selectOrigine.options[conpteurSelectOrigine].innerHTML == this.innerHTML) {
            selectOrigine.selectedIndex = conpteurSelectOrigine;
            selectOrigineCiblePrev.innerHTML = this.innerHTML;
            var sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
            triValue = document.querySelector("#triSelect").value;
            for (compteurSelectOrigine = 0; compteurSelectOrigine < sameSelected.length; compteurSelectOrigine++) {
              sameSelected[compteurSelectOrigine].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        selectOrigineCiblePrev.click();
      };
    })
    selectItems.appendChild(optionElement);
  }
  customSelect[customCompteur].appendChild(selectItems);
  selectSelected.addEventListener("click", actionTri);
  selectSelected.addEventListener("keyup", actionTri);
  function actionTri(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  };
  selectItems.addEventListener("click",optionTri);
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
document.addEventListener("click", closeAllSelect);



function optionTri(event){
  event.stopPropagation();
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
    plancheImage();
};