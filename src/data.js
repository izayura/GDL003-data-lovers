window.dataLovers = {
    filterData:(RICKANDMORTY, condition)=>{
      //console.log(RICKANDMORTY, condition)
   /* let filteredData="";
    for (let i=0; i < RICKANDMORTY.length; i++){
      let rickmorty= RICKANDMORTY[i];
      
        if(rickmorty.status === condition){
          filteredData+=rickmorty.name;
          //console.log(rickmorty[k])
        }
    }
    }*/
    return RICKANDMORTY.filter((personaje) => {
      //console.log(personaje.name)
    return personaje.status === condition => {

    return condition.results()
    }
    })
    

  //  return filteredData;
},
  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
