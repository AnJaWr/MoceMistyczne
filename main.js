
function displayMistycy() {
  fetch('moce.json')
    .then(response => response.json())
    .then(data => {
      var mistycyContainer = document.getElementById("mistycyContainer");
      mistycyContainer.innerHTML = "";

      data.forEach(mistyk => {
        var div = document.createElement("div");
       
        div.classList.add("mistyk");
        div.setAttribute("data", mistyk.Mistyk.join(", "))


        var name = document.createElement("p");
        name.textContent = "Moc: " + mistyk.Name;
      name.classList.add("header");
      name.setAttribute("id", mistyk.Name);
        div.appendChild(name);

        var mistyks = document.createElement("p");
        mistyks.textContent = "Mistycy: " + mistyk.Mistyk.join(", ");
        div.appendChild(mistyks);

        var pm = document.createElement("p");
        pm.textContent = "PM: " + mistyk.PM;
        div.appendChild(pm);

        var szybkosc = document.createElement("p");
        szybkosc.textContent = "Szybkość: " + mistyk.Szybkość;
        div.appendChild(szybkosc);

        var pt = document.createElement("p");
        pt.textContent = "PT: " + mistyk.PT;
        div.appendChild(pt);

        var czas = document.createElement("p");
        czas.textContent = "Czas: " + mistyk.Czas;
        div.appendChild(czas);

        var zasieg = document.createElement("p");
        zasieg.textContent = "Zasięg: " + mistyk.Zasięg;
        div.appendChild(zasieg);

        var gest = document.createElement("p");
        gest.textContent = "Gest : " + mistyk.Gest;
        div.appendChild(gest);

        var opis = document.createElement("p");
        opis.textContent = "Opis : " + mistyk.Opis;
        div.appendChild(opis);


        var sukcesplus = document.createElement("p");
    sukcesplus.textContent = "Każdy kolejny sukces " + mistyk.Sukcesplus;
        div.appendChild(sukcesplus);
        
        var addmoc = document.createElement("p");
    addmoc.textContent = "Każdy kolejny PM/dech " + mistyk.Addmoc;
        div.appendChild(addmoc);
        

        var niepowodzenie = document.createElement("p");
      niepowodzenie.textContent = "Niepowodzenie: " + mistyk.Niepowodzenie;
        div.appendChild(niepowodzenie);


        var ups = document.createElement("p");
      ups.textContent = "Ups: " + mistyk.Ups;
        div.appendChild(ups);

        var ujawnienie = document.createElement("p");
      ujawnienie.textContent = "Ujawnienie: " + mistyk.Ujawnienie;
        div.appendChild(ujawnienie);

        var rozwiniecia = document.createElement("p");
        rozwiniecia.textContent = "Rozwinięcia:  " + mistyk.Rozwiniecia;
        div.appendChild(rozwiniecia);

        mistycyContainer.appendChild(div);
      });
    });
}

displayMistycy();

// function filterDivs() {
//   var selectedAttribute = document.getElementById("mistykSelect").value;
//   var divs = document.querySelectorAll("[data]");

//   Array.from(divs).forEach(div => {
//     var dataAttribute = div.getAttribute("data");
//     if (dataAttribute === selectedAttribute) {
//       div.style.display = "block";
//     } else {
//       div.style.display = "none";
//     }
//   });
// }
// const selectElement = document.getElementById('mistykSelect');
// selectElement.addEventListener('change', filterDivs)

function filterDivs() {
  var selectedAttribute = document.getElementById("mistykSelect").value;
  var divs = document.querySelectorAll("[data]");

  Array.from(divs).forEach(div => {
    var dataAttribute = div.getAttribute("data");
    var dataValues = dataAttribute.split(", ");

    if (dataValues.includes(selectedAttribute)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";}
      
    if (selectedAttribute ==="All" ){
  div.style.display = "block";
 }
    changeBackground();
  })}



function changeBackground(){
  var selectedAttribute =  document.getElementById("mistykSelect").value ;
  var insertclass= selectedAttribute.valueOf()
  var wrapper = document.getElementById("misticBackground")

wrapper.setAttribute("class", "")
wrapper.classList.add(insertclass);

}  

function scrollToElement() {
  var scrollValue = document.getElementById("scrollInput").value.toLowerCase();
  var elements = document.querySelectorAll("[id]");
  
var elementy = document.getElementsByClassName("mistyk");
var elementsArray = Array.from(elementy);
elementsArray.forEach(element => {
element.style.display = "block";
})

  for (var i = 0; i < elements.length; i++) {
    var klasa = elements[i].parentElement.getAttribute('data');
    var elementId = elements[i].id.toLowerCase();
    if (elementId.includes(scrollValue)) {
      elements[i].scrollIntoView();

      var wrapper = document.getElementById("misticBackground")
    wrapper.setAttribute("class", klasa)
      break;
    }
  }

  
}