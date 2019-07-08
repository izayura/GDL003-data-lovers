# Data Lovers

## Índice

- [Descripción](#resumen-del-proyecto)
- [Consideraciones generales](#consideraciones-generales)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Parte obligatoria](#parte-obligatoria)
- [Parte opcional](#parte-opcional-hacker-edition)
- [Consideraciones técnicas](#consideraciones-técnicas)
- [Contenido de referencia](#contenido-de-referencia)
- [Checklist](#checklist)

---


## Resumen del proyecto

En este proyecto construimos una _página web_ para visualizar un
 conjunto (set) de datos que se adecúe a lo que nuestro usuario definido
necesita.

Durante este ejercicio se pusieron en práctica los conocimientos vistos sobre arrays y objetos, además de lo ya implementado anteriormente. También se crearon los tests y todo el desarrollo está planteado pensando en un usuario en específico.

En la siguiente liga se encuentra la fuente de nuestros datos, que provienen de la serie Rick and Morty y nos fue facilitada por el equipo Laboratoria:

- [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty. Puedes revisar la documentación de su API en este [link](https://rickandmortyapi.com).

Nuestro producto a ofrecer para este segundo sprint se compone de una página web que permite manejar nuestra data de las siguientes formas:
- Visualizar la información.
- Aplicar filtros de búsqueda.
- Ordenar la información filtrada.

## Consideraciones generales

- El proyecto ha sido entregado subiendo el código a GitHub (commit/push) y la
  interfaz se despliega usando [GitHub Pages](https://pages.github.com/). Donde un miembro del equipo funge como origin y otro como master, de manera que las actualizaciones deben unirse en común acuerdo.


- Este proyecto se desarrolló en una dupla formada por Gloria Ramírez Robles y Tegthyn Coral Quiñones Gutiérrez como el segundo proyecto del bootcamp de Laboratoria Guadalajara tercera generación, el cual se titula _Data Lovers_.
- Tiempo para completarlo: 3 semana divididas en 3 sprints (una entrega del producto funcional al término de cada sprint).

## Objetivos de aprendizaje

El objetivo principal de este proyecto es aprender a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

De manera puntual a continuación se presenta cada uno de los temas desarrollados en este ejercicio:

- Aplicar y profundizar todo lo aprendido en el proyecto anterior.
- Pensar en las **necesidades de los usuarios** para crear historias de usuario.
- Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de nuestro
  trabajo.
- Definir qué data y de qué forma mostrarla en el producto, basándose en
  nuestro **entendimiento del usuario**.
- Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
- Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
- Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
- **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
- **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
- Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## Alcances esperados

Los criterios para considerar que el proyecto desarrollado está completo son:

### Definición del producto

Este ejercicio de Web app está diseñado para que el usuario Rick Sánchez tenga acceso a la información básica de todos los seres del multiverso en que se desarrolla la serie.

Nuestra página provee esta información ordenada en base a los filtros seleccionados (gender y status), a partir de ellos se muestran los datos ordenados en tarjetas de identificación, las cuales a su vez pueden ser ordenadas alfabéticamente de manera ascendente y descendente.

En conclusión, este proyecto cubre la función de monitoreo de los personajes, donde elegimos mostrar; nombre, género, status y su ubicación actual.Considerando esta información Rick podrá continuar con sus investigaciones evadiendo la justicia y a quienes lo persiguen.

Al ser nuestro usuario un personaje ficitio, los criterios de diseño están basados en la estética visual propia de la serie, para favorecer el hecho de que pueda verse como si fuera un dispositivo que usa Rick dentro de la serie para agendar sus planes, a manera de metahistoria. De forma general tratamos de apegarnos a los colores saturados, elementos delineados en negro y aportando un poco de volumen a algunos objetos como los botones.

### Historias de usuario

![alt text](https://www.radiodemente.cl/radiodemente/wp-content/uploads/2018/07/AMORTY1.jpg)

![alt text](https://i.ytimg.com/vi/3L3IqctvcCk/maxresdefault.jpg)

#### Historia de usuario 1
Yo, Rick Sánchez de la Tierra C-137 (https://es.wikipedia.org/wiki/Rick_S%C3%A1nchez_(personaje)) quiero una base de datos de los seres con los que he interactuado.

Definition of done:
1. Inicio de sesión, pensado para que sólo nuestro único usuario pueda acceder.
2. Seleccionar un solo filtro para la búsqueda
 * Mostrar la información filtrada por id
3. Tener la opción de regresar para hacer otro filtro

#### Historia de usuario 2

Yo, Rick Sánchez de la Tierra C-137 (https://es.wikipedia.org/wiki/Rick_S%C3%A1nchez_(personaje)) quiero una base de datos de los seres con los que he interactuado y poder filtrar mis busquedas para conocer datos en especifico.

Definition of done:
1. Inicio de sesión, pensado para que sólo nuestro único usuario pueda acceder.
2. Seleccionar mas de un filtro para la búsqueda.
    * Mostrar la información filtrada por id, y poder elegir que se muestre de manera alfabetica en orden ascendente o descendente.
    * Mostrar la información en formato de tarjetas de identificación.
3. Tener la opción de regresar para hacer otra búsqueda.
4. Poder ordenar la información filtrada alfabéticamente de forma ascendente y descendente.
5. Tener una interfaz acode a la estética de la serie y visualmente agradable además de funcional.

#### Historia de usuario 3

Yo, Rick Sánchez de la Tierra C-137 (https://es.wikipedia.org/wiki/Rick_S%C3%A1nchez_(personaje)) quiero una base de datos de los seres con los que he interactuado, poder filtrar mis busquedas y consultar estadísticas de los filtros empleados. Con esto podré conocer datos en especifico, anticiparme a los planes de mis enemigos y conocer su ubicación exacta. 

![alt text](https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/05/10/Recortada/img_psola_20170929-140352_imagenes_lv_terceros_rick-and-morty-season-3-episode-1-review-the-rickshank-redemption-kQJG-U443479379590EYD-992x558@LaVanguardia-Web.jpg)

Definition of done:
1. Inicio de sesión, pensado para que sólo nuestro único usuario pueda acceder.
2. Seleccionar los filtros para la búsqueda de tarjetas identificadoras y estadísticas.
 * Mostrar la información filtrada alfabéticamente, donde se puede elegir entre orden ascendente o descendente.
 * Mostrar las estadísticas para el filtro seleccionado.
 * En caso de no encontrarse resultados para la búsqueda mostrar una leyenda que así lo especifique.
3. Las 3 opciones anteriores tienen la opción de regresar para hacer otra búsqueda.
4. Todo el código estará enmarcado en un diseño responsivo pensando en que pueda ser usado en diferentes dispositivos manteniendo el orden y el diseño inicial.
5. Al finalizar el proyecto podrán ejecutarse satisfactoriamente los tests de usabilidad y funcionalidad.


### Diseño de la Interfaz de Usuario

Siguiendo la temática de la serie y los inventos de Rick Sanchez, el diseño de la web app se pensó para ser mostrado como si fuera un aparato utilizado por Rick. Se busca simular la interfaz con la que funcionaría dentro del universo de la serie un aparato con objetivos similares a nuestra historia de usuario, utilizando los colores saturados y delineados en negro ya caracteristicos.

#### Prototipo de baja fidelidad

En un inicio creamos un boceto del prototipo en un post it, con detalles que considerabamos vitales al estar trabajando con el Definition of done y que debiamos tomar en cuenta al hacer el prototipo en papel
![](https://i.ibb.co/phQqMkw/IMG-20190624-185118.jpg)

Al momento de realizar el prototipo en lapiz y papel con mayor conciencia de las páginas que necesitabamos, nos basamos en lo anteriormente creado en el post it y en el feedback recibido  por nuestras compañeras para incluirlo en el prototipo.
![](https://i.ibb.co/XXJwBKX/IMG-20190624-145442.jpg)
![](https://i.ibb.co/yyX0R0F/IMG-20190624-145500.jpg)

Estos son los dibujos en los que basamos el diseño que teniamos pensado para la interfaz de la web app, simulando desde un principio el aparato donde se manejarán los datos.

#### Prototipo de alta fidelidad

Teniendo ya claro el estilo y las páginas que queriamos utilizar en nuestra web app, buscamos una imagen que se adaptará al aparato que buscamos simular, y con ayuda de editores de gráficos(gimp y photoshop) la limpiamos de detalles externos(fondo, manos, borrar lo que ya aparecía en la pantalla del mismo), y agregamos el diseño que buscabamos tuviera en nuestro proyecto. 

Para elaborar el prototipo de alta fidelidad fueron muy útiles nuestros conocimientos previos sobre editores de imagen, comenzamos por dividirnos los div que conformaban el prototipo y trabajamos a la par cada quien en el editor de su elección. Una vez que tuvimos nuestas imágenes listas para cada pantalla se dio la interacción con botones en Marvel donde creamos un prototipo de alta fidelidad con botones funcionales para recorrer la interfaz de la web app.

## https://marvelapp.com/541bc74

El principal reto con lo esperado en base al diseño de nuestro prototipo de alta fidelidad ha sido poder diseñar la web app dentro de la pantalla del aparato, con todos sus formularios y botones funcionales dentro de un diseño responsivo. 
Por ahora se muestra el aparato sólo en la pantalla de inicio unicamente ya que aún no hemos logrado que se haga scroll dentro de la pantalla flotante. Sin embargo, el resultado visual sigue en sintonía con lo planteado en un inicio. 
Probablemente durante la tercera semana tengamos oportinidad de implementar un diseño responsivo y de hacer aparecer el aparato como si tuviera una pantalla dentro.


#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Hasta ahora nuesta interfaz permite:

1. Mostrar la data en una interfaz en forma de tarjetas de identificación.
2. Filtrar y ordenar la data según las necesidades del usuario.


### Pruebas unitarias

El _boilerplate_ de este proyecto no incluía pruebas unitarias, por lo que se desarrollaron a la par de la funcionalidad. Fueron planteadas para
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Las pruebas se ejecutarán sobre las siguientes funciones de nuestro archivo javascript
`src/data.js`:

- `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

- `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

- `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.


El archivo `src/data.js` debe tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

**Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM**. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## Hacker edition

Features/características extra sugeridas:

- En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json`
  de cada set datos.
- Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).


## Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Hacker Edition_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Existe un archivo `index.html` que es propiamente la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y vincular otro tipo de archivos que aportan diseño y funcionalidad a la página.


### `src/main.js`

El archivo `src/main.js` contiene lo relatico a mostrar los datos en la pantalla, es decir, a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....


### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo se incluyen las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`


Contiene las pruebas unitarias desarrolladas durante el proyecto para las funciones
implementadas en el archivo `data.js`.

---

## Checklist

- [✔] Usa VanillaJS.
- [✔] No hace uso de `this`.
- [✔] Pasa linter (`npm pretest`)
- [ ] Pasa tests (`npm test`)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [✔] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [✔] Incluye historias de usuario en `README.md`.
- [✔] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [✔] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [✔] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [✔] UI: Permite ordenar data por uno o más campos (asc y desc).
- [✔] UI: Permite filtrar data en base a una condición.

## Checklist (Hacker Edition)

- [ ] Consume data de forma dinámica (`fetch()`).
- [ ] Utiliza Librerías de graficas (`chart.js` ó `google chart`).
- [ ] Cobertura de coverage al 100%.
