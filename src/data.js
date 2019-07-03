window.dataLovers = {
  //obtiene la información del archivo rickanmorty.js
    filterData:(RICKANDMORTY, condition, conditionGender)=>
  {
     //aplicar el filtro a la información
      let impresion = RICKANDMORTY.filter((personaje) =>
      {
        //sustitución
        return personaje.status === condition || personaje.gender === conditionGender;
        //return personaje.status === condition && personaje.gender === conditionGender;
      });//transformar el objeto en string en pantalla
        let myJSON = JSON.stringify(impresion);

      return myJSON;
    },
     // ordenar alfabeticamente

<<<<<<< HEAD
    sortData: (RICKANDMORTY)=>{
      RICKANDMORTY.name.sort(impresion)
      return myJSONSorted;
      },
=======
>>>>>>> 720e5f396504afb12a79c241523213d16cc3effb
/* INTENTO DE PONER UN IF PARA QUE FILTRE CON 1 O 2 PARAMETROS
if (condition.value==true || conditionGender.value==true){
  return personaje.status === condition || personaje.gender === conditionGender;
} else if (condition.value==true && conditionGender.value==true){
return personaje.status === condition && personaje.gender === conditionGender;
} */
/* SEGUNDO INTENTO CON IF Y 2 FILTROS
if (condition.value){
let conditionStatus = personaje.status === condition;
console.log("HOLA GLO");
return conditionStatus;

} else if (conditionGender.value) {
let conditionGen = personaje.gender === conditionGender;
return conditionGen;
} */
/* PARA FILTRAR CON EL BUSCADOR POR PALABRA?????
obj[key].includes(seachByWord.value) */

/* EXPERIMENTOS PARA QUE ARROJE LOS DATOS SEPARADOS
      let filtering= RICKANDMORTY.filter((idStatus)=>{
        return idStatus.status === condition
      })
        let objectText= JSON.stringify(filtering);
      return objectText*/
<<<<<<< HEAD


=======
},
>>>>>>> 720e5f396504afb12a79c241523213d16cc3effb

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
