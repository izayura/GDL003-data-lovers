const RICKANDMORTY= require('../src/data/rickandmorty/rickandmorty.js');


window.dataLovers = {
  filterData:(/*data,condition*/)=>{
    return "filteredData";
},
  sortData:(/*data, sortBy, sortOrder*/)=>{
    return "sortedData";
},
 computeStats:(/*data*/)=>{
   return "stats";
}
};
