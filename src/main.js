document.getElementById("login").style.display="block";

let condition=document.getElementById("status");
const impress=document.getElementById("card1");

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

  let response = filtered.forEach(cards=>{
impress.innerHTML+=
    `<div class="cardsFiltered" id= "">
      <img src="${cards.image}" alt="" border="2.5">
      <h2>Name: ${cards.name}</h2>
      <p>Gender: ${cards.gender}</p>
      <p>Status: ${cards.status}</p>
      <p>Location: ${cards.location.name}</p>
    </div>`
  });
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

let buttonSort= document.getElementById("sortName");
buttonSort.addEventListener("click", ()=>{
    let sorted= window.dataLovers.sortData(RICKANDMORTY.results, sortBy, sortOrder);
    sorted=JSON.parse(sorted);
    document.getElementById("idPage").innerHTML=sorted;
    //convierte la variable filter de string a objeto JSON
})
