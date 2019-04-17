/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const genero = (data ,tipo) => {
    console.log("Prueba de data",data);
  let f =data.filter((mage)=>{
    if(tipo ==mage.gender){
      console.log(mage);
      return mage;
    }
  })
   

  return f;
};



window.genero = genero;
const role= (data ,tipo) => {
  console.log("Prueba de data",data);
let f =data.filter((mage)=>{
  if(tipo ==mage.gender){
    console.log(mage);
    return mage;
  }
})
 

return f;
};
window.genero = genero;

const sortBy= (dataFull ,tipo) => {
  let newData;
 if(tipo == "1"){
  
 }
 else {

 }
 

return null;
};
window.sortBy = sortBy;