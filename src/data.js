/* esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const example =()=> {
  return 'example';
};
const filtrado =()=>{
  return 'filtrado';
};
const mostrar =()=>{
  return 'mostrar';
};*/

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
