window.dataLovers = {
  //obtiene la información del archivo rickanmorty.js
    filterData:(RICKANDMORTY, condition, conditionGender)=>
  {
     //aplicar el filtro a la información
      let impresion = RICKANDMORTY.filter((personaje) =>
      {
        //sustitución
        return personaje.status === condition && personaje.gender === conditionGender;
      });//transformar el objeto en string en pantalla
        let myJSON = JSON.stringify(impresion);

      return myJSON;



/* PARA FILTRAR CON EL BUSCADOR POR PALABRA?????
obj[key].includes(seachByWord.value)
   
  sortData:(RICKANDMORTY, sortBy, sortOrder)=>{


      RICKANDMORTY.sort(function(a, b){return b-a});
 document.getElementById("idPage").innerHTML = RICKANDMORTY;
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
