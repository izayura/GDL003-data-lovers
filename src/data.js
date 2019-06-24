const filtrado = () => {
  return 'filtrado';
};

const mostrar = () => {
  return 'mostrar';
};

window.example = {
  example, 
  filtrado, 
  mostrar
};
=======
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
