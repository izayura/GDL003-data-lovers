window.dataLovers = {
  filterData:(data,condition)=>{
    let filteredData="";
    for (let i=0; i < data.length; i++){
      let rickmorty= data[i].results;
      for (let k=0; k < rickmorty.length; k++)
      let resultRickMorty= rickmorty[k].status;
      for (let m=0; m < resultRickMorty.length; m++)
      if(resultRickMorty[m]===condition){
        console.log(rickmorty[k].name);
      }
    }
    return "filteredData";
},
  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
