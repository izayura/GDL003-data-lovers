window.dataLovers = {
  //obtiene la información del archivo rickanmorty.js
    filterData:(RICKANDMORTY, condition)=>
  {
     //aplicar el filtro a la información
      let impresion = RICKANDMORTY.filter((personaje) =>
      {
        //sustitución
        return personaje.status === condition;
      });//transformar el objeto en string en pantalla
        let myJSON = JSON.stringify(impresion);

      return myJSON;

    /* EXPERIMENTOS PARA QUE ARROJE LOS DATOS SEPARADOS
      let filtering= RICKANDMORTY.filter((idStatus)=>{
        return idStatus.status === condition
      })
        let objectText= JSON.stringify(filtering);
      return objectText*/
},

  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
