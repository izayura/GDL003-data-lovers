window.dataLovers = {
  //obtiene la información del archivo rickanmorty.js
    filterData:(RICKANDMORTY, condition)=>
  {
     //aplicar el filtro a la información
      let impresion = RICKANDMORTY.filter((personaje) => 
      {
        //sustitución
        return personaje.status === condition
      })//transformar el objeto en string en pantalla
        let myJSON = JSON.stringify(impresion);

      return myJSON;
},

  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
