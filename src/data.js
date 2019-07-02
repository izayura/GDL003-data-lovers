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

/* INTENTO DE PONER UN IF PARA QUE FILTRE CON 1 O 2 PARAMETROS
if (condition.value==true || conditionGender.value==true){
  return personaje.status === condition || personaje.gender === conditionGender;
} else if (condition.value==true && conditionGender.value==true){
return personaje.status === condition && personaje.gender === conditionGender;
} */

/* PARA FILTRAR CON EL BUSCADOR POR PALABRA?????
obj[key].includes(seachByWord.value) */

/* EXPERIMENTOS PARA QUE ARROJE LOS DATOS SEPARADOS
      let filtering= RICKANDMORTY.filter((idStatus)=>{
        return idStatus.status === condition
      })
        let objectText= JSON.stringify(filtering);
      return objectText*/
},

     /* INTENTO DE ORDENAR ALFABETICAMENTE
      sortData:(RICKANDMORTY)=>{

    let impresionSorted= RICKANDMORTY.sort();
    let myJSONSorted = JSON.stringify(impresionSorted);
    return myJSONSorted;

},*/
 computeStats:(/*data*/)=>{
   return "stats";
}
};
