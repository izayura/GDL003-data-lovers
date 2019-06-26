document.getElementById("login").style.display="block";
//const RICKANDMORTY=require("./data/rickandmorty/rickandmorty.js");
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
  let filtered=window.dataLovers.filterData(RICKANDMORTY, condition);
  document.getElementById("idPage").innerHTML=filtered;
  console.log(filtered);
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
