document.getElementById("login").style.display="block";

let condition=document.getElementById("status");
let conditionGender=document.getElementById("gender");
const impress=document.getElementById("card1");

let enterButton=document.getElementById("send");
enterButton.addEventListener("click", ()=>{
  console.log("enter");
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="block";
  condition.value="0";
  conditionGender.value="0";
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
  let filtered=window.dataLovers.filterData(RICKANDMORTY.results, condition.value, conditionGender.value);
  //convierte la variable filter de string a objeto JSON
  filtered=JSON.parse(filtered);

  filtered.forEach(cards=>{
impress.innerHTML+=
    `<div class="cardsFiltered" id= "">
      <img src="${cards.image}" alt="" border="2.5">
      <h2>Name: ${cards.name}</h2>
      <p>Gender: ${cards.gender}</p>
      <p>Status: ${cards.status}</p>
      <p>Location: ${cards.location.name}</p>
    </div>` ;
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
  condition.value="0";
  conditionGender.value="0";
  impress.innerHTML=" ";
};

let returnStats=document.getElementById("returnFromStats");
returnStats.addEventListener("click", returnButton);

let returnId=document.getElementById("returnFromId");
returnId.addEventListener("click", returnButton);

let returnError=document.getElementById("returnFromError");
returnError.addEventListener("click", returnButton);

     /* INTENTO DE ORDENAR ALFABETICAMENTE
     let buttonSort= document.getElementById("sortName");
buttonSort.addEventListener("click", ()=>{
     let sorted= window.dataLovers.sortData(RICKANDMORTY.results);
    sorted=JSON.parse(sorted);
    let responseSort = sorted.forEach(cards=>{
  impress.innerHTML+=
      `<div class="cardsFiltered" id= "">
        <img src="${cards.image}" alt="" border="2.5">
        <h2>Name: ${cards.name}</h2>
        <p>Gender: ${cards.gender}</p>
        <p>Status: ${cards.status}</p>
        <p>Location: ${cards.location.name}</p>
      </div>`
});
}); */
