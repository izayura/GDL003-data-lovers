window.dataLovers = {
    filterData:(RICKANDMORTY, condition)=>{

    let filteredData="";
    for (let i=0; i < RICKANDMORTY.length; i++){
      let rickmorty= RICKANDMORTY[i].results;
      for (let k=0; k < rickmorty.length; k++)
        if(rickmorty[k].status === condition.value){
          filteredData+=rickmorty[k].name;
        }
    }
    return filteredData;
},
  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
