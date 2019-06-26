document.getElementById("login").style.display="block";

let data=RICKANDMORTY;
let condition=document.getElementById("status").value;

/*for (let i=<0)


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/

let enterButton=document.getElementById("send");
enterButton.addEventListener("click", ()=>{
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
  /*let condition=document.getElementById("status").value;
  let filtered=window.dataLovers.filterData(data, codition);
  document.getElementById("idPage").innerHTML=filtered;*/
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
