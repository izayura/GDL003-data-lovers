window.dataLovers = {
  //obtiene la información del archivo rickanmorty.js
    filterData:(RICKANDMORTY, condition, conditionGender)=>
  {
     //aplicar el filtro a la información
      let impresion = RICKANDMORTY.filter((personaje) =>
      {
      //filtra con la condicion de status o la de gender(pero no al mismo tiempo)
        return personaje.status === condition || personaje.gender === conditionGender;
        //return personaje.status === condition && personaje.gender === conditionGender;
      });
      //transformar el objeto en string en pantalla
        let myJSON = JSON.stringify(impresion);
        return myJSON;
    },

/* PARA FILTRAR CON EL BUSCADOR POR PALABRA?????
obj[key].includes(seachByWord.value) */

/* computeStats:(/*data)=>{
   return "stats";
} */

};
