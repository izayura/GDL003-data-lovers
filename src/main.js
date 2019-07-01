document.getElementById("login").style.display="block";

let condition=document.getElementById("status");


let enterButton=document.getElementById("send");
enterButton.addEventListener("click", ()=>{
  console.log("enter");
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="block";
});

let goStats=document.getElementById("goStats");
goStats.addEventListener("click", ()=>{
  document.getElementById("applyFilters").style.display="none";
  document.getElementById("showStats").style.display="block";
});

let showId=document.getElementById("goIds");
showId.addEventListener("click", ()=>{
  document.getElementById("applyFilters").style.display="none";
  document.getElementById("idPage").style.display="block";
  let filtered=window.dataLovers.filterData(RICKANDMORTY.results, condition.value);
  //convierte la variable filter de string a objeto JSON
  filtered=JSON.parse(filtered)

//bucle para obtener los items seleccionados de cada personaje en el filtro
for (let index = 0; index < filtered.length; index++) {
  //almacena los resultados de los objetos JSON en una variable
  let x1 = filtered[index].name;
  let x2 = filtered[index].id;
  let x3 = filtered[index].origin.name;
  let x4 = filtered[index].status;
  let x5 = filtered[index].species;
  let x6 = filtered[index].image;

  //convierte los datos de cada personaje requeridos en strings
  let response =

  "<div class='idcard1' >"+
  "<IMG SRC="+String(x6)+ "><br>" +
  "name: "+String(x1) + "<br>" +
  "id: "+String(x2) + "<br>" +
  "origin: "+String(x3) + "<br>" +
  "status: "+String(x4) + "<br>" +
  "species: "+String(x5)+"</div>";


  //imprime los datos en el HTML, transformándolos de string en HTML
  document.getElementById("card1").innerHTML+= response
  

}
  
 

});


let returnFilters=document.getElementById("returnId");
returnFilters.addEventListener("click", ()=>{
  document.getElementById("idSelected").style.displau="none";
  document.getElementById("applyFilters").style.display="block";
});

const returnButton =()=>{
  document.getElementById("showStats").style.display="none";
  document.getElementById("idPage").style.display="none";
  document.getElementById("error").style.display="none";
  document.getElementById("applyFilters").style.display="block";
};

let returnStats=document.getElementById("returnFromStats");
returnStats.addEventListener("click", returnButton);

let returnId=document.getElementById("returnFromId");
returnId.addEventListener("click", returnButton);

let returnError=document.getElementById("returnFromError");
returnError.addEventListener("click", returnButton);
