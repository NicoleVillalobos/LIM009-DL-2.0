/* Manejo del DOM */
let magesFull;
let magesFilter;
const paintMages= document.getElementById("mage-container");
const paintMage =(json)=>{
     console.log(json);
  
    paintMages.innerHTML="";
    json.forEach(element => {
        // console.log(element);
        append(paintMages,element);
    });
    
}
let append=(element,x)=>{
   
element.insertAdjacentHTML("beforeend",`
<div class="mages">
                 <img class="img-mages" src="${x.image}"  alt="">
                 <br>
                 <h2>${x.name}</h2>
                 <span>${x.house}</span>
                  <div class="info-mage">
                    <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" width="40" height="40" alt="">
                    <span>Especie: <br>${x.species}</span>
                  </div>
                  <div class="info-mage">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" width="40" height="40" alt="">
                      <span>Rol: <br>actor</span>
                    </div>
                    <div class="info-mage">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" width="40" height="40" alt="">
                        <span>Edad: <br>${(2019-x.yearOfBirth)}</span>
                      </div>
                      <div class="info-mage">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" width="40" height="40" alt="">
                          <span>Actor: <br>${x.actor}</span>
                        </div>
            </div>`);
}
 

const genere=document.getElementById("gender");

genere.addEventListener("change",()=>{
 

   if(genere.value!=""){
     
       let genData=genero(magesFull,genere.value);
         magesFilter=genData;
       console.log("data filter",genData);
       paintMage(genData);
   }
})


const asc=document.getElementById("asc");

asc.addEventListener("click",()=>{
  sortBy(magesFilter,"1");
})

fetch("https://raw.githubusercontent.com/NicoleVillalobos/LIM009-DL-2.0/master/src/data/potter.json")
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
    magesFull=myJson;
  paintMage(myJson);
});
