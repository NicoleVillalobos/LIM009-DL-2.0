/* Manejo del DOM */
let magesFull = "";
let magesFilter = "";
const paintMages = document.getElementById("mage-container");
const genre = document.getElementById("gender");
const roles = document.getElementById("role");
const house = document.getElementById("house");
const ascendent = document.getElementById("asc");
const descendent = document.getElementById("desc");
const paintMage = (json) => {
    console.log(json);
    paintMages.innerHTML = "";
    json.forEach(eachMages => {
        // console.log(element);
        append(eachMages);
    });
}

let validateFlags = (house) => {
  if (house == "Gryffindor") {
      return "banderas/escudogryffindor.JPG";
  } else if (house == "Slytherin") {
      return "banderas/escudoslytherin.png";
  } else if (house == "Hufflepuff") {
      return "banderas/escudohufflepuff.JPG";
  } else if (house == "Ravenclaw") {
      return "banderas/escudoravenclaw.JPG";
  } else {
      return "banderas/bandera-vacia.JPG";
  }
}

let append = (wizards) => {
paintMages.insertAdjacentHTML("beforeend", `
<div class="mages">
<div class="logo-mage">
<img src="${validateFlags(wizards.house)}">
</div>
  <img class="img-mages" src="${wizards.image}"> 
  <h2>${wizards.name}</h2>
  <span>${wizards.house}</span>
  <div class="info-mage">
   <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png">
  <span>Especie: <br>${wizards.species}</span>
  </div>
  <div class="info-mage">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png">
  <span>Rol: <br> ${validateRole(wizards)} </span>
  </div>
  <div class="info-mage"> 
                      
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png">
  <span>Edad: <br>${validateYears(wizards.yearOfBirth)}</span>
  </div>
  <div class="info-mage">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png">
  <span>Actor: <br>${wizards.actor}</span>
  </div>
  </div>`);
}

ascendent.addEventListener("click", () => {
  let data=sortByAge(magesFull, "asc");
    paintMage(data);
})

descendent.addEventListener("click", () => {
  let data=sortByAge(magesFull, "desc");
    paintMage(data);

})


genre.addEventListener("change", () => {
    if (genre.value) { //"" -> false  , "human" ->true
        let genData = gender(magesFull, genre.value);
        magesFilter = genData;
        console.log("data filter", genData);
        paintMage(genData);
    }
})
roles.addEventListener("change", () => {
    let roleData = filterRole(magesFull, roles.value);
    magesFilter = roleData;
    console.log("data filter", roleData);
    paintMage(roleData);
})
house.addEventListener("change", () => {

        let  houseData = validateHouse(magesFull, house.value);
    
        // houseData = validateHouse(magesFilter, house.value);
    
    magesFilter = houseData;
    console.log("data filter", houseData);
    paintMage(houseData);
})
fetch("https://raw.githubusercontent.com/NicoleVillalobos/LIM009-DL-2.0/master/src/data/potter.json").then((response) => {
    return response.json();
}).then((myJson) => {
    magesFull = myJson;
    paintMage(myJson);
});