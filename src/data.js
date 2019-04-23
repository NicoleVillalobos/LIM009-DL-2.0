/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const validateYears=(age)=>{
  if(age==""){
   return 0;
  }
  else{
      return (2019-age);
  }
}

const sortByAge=(data,tipo)=>{

//[{},{}2,3,5,6]
  let newData = data.sort((a,b)=>{
        if(tipo=="desc"){
         if(validateYears(b.yearOfBirth)<validateYears(a.yearOfBirth)){return -1;}
        }
        else {
          if(validateYears(b.yearOfBirth)>validateYears(a.yearOfBirth)){return -1;}

        }
  })
  return newData;
}



const validateRole=(role)=>{
  if(role["hogwartsStudent"]){
    return "Student";
  }
  else {
    return  "Staff";
  }
}

const gender = (data ,tipo) => {
    console.log("Prueba de data",data);
  let filterData =data.filter((mage)=>{
    if(tipo ==mage.gender){
      console.log(mage);
      return mage;
    }
  })

  return filterData;
};

const filterRole=(data,role)=>{ //staff
 let filterData=data.filter((mage)=>{//[{}]
    if(role=="student"){
     if(mage["hogwartsStudent"]== true){
     return mage;
          }
        }
     else { //staff
      if(mage["hogwartsStaff"]== true){
     return mage;
          }
        }
})
   return filterData;
}

const validateHouse=(data,tipo)=>{
    console.log("Prueba de data",data);
  let filterData =data.filter((mage)=>{//[{}]
    if(tipo ==mage.house){
    console.log(house);
    return mage;
}
  })
    return filterData;
}

window.gender = gender;
window.sortByAge = sortByAge;
window.validateYears= validateYears;
window.validateRole=validateRole;
window.validateHouse=validateHouse;
