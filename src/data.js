// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

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