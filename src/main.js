document.getElementById("login").style.display="block";
document.getElementById("idPage").style.display="none";
document.getElementById("showStats").style.display="none";
document.getElementById("applyFilters").style.display="none";
document.getElementById("error").style.display="none";

let condition=document.getElementById("status");
let conditionGender=document.getElementById("gender");
const impress=document.getElementById("card1");

let enterButton=document.getElementById("send");
enterButton.addEventListener("click", ()=>{
  console.log("enter");
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="block";
  //document.getElementById("idPage").style.display="block";
  //document.getElementById("showStats").style.display="block";
  condition.value="0";
  conditionGender.value="0";
});

let goStats=document.getElementById("goStats");
goStats.addEventListener("click", ()=>{
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="none";
  document.getElementById("idPage").style.display="none";
  document.getElementById("showStats").style.display="block";
});

let showId=document.getElementById("goIds");
showId.addEventListener("click", ()=>{
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="none";
  document.getElementById("idPage").style.display="block";
  document.getElementById("error").style.display="none";
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




//sort by name
let buttonSort= document.getElementById("sortName");
buttonSort.addEventListener("click", ()=>{
  let card =document.getElementById("card1")
  let filtered=window.dataLovers.filterData(RICKANDMORTY.results, condition.value, conditionGender.value);
  //convierte la variable filter de string a objeto JSON
  filtered=JSON.parse(filtered);

  let order=new Array()

  array = filtered.forEach(cards=>{

        let data={
          name: cards.name,
          image: cards.image,
          gender: cards.gender,
          status: cards.status,
          location: cards.location.name
        }
        order.push(data)

  });
  order.sort((a, b) => (a.name > b.name) ? 1 : -1)
  console.log(order);
  impress.innerHTML = "";
  order.forEach(cards=>{
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

//funcion para acomodo Z-A
let buttonSortZA= document.getElementById("sortNameZA");
buttonSortZA.addEventListener("click", ()=>{
  let card =document.getElementById("card1")
  let filtered=window.dataLovers.filterData(RICKANDMORTY.results, condition.value, conditionGender.value);
  //convierte la variable filter de string a objeto JSON
  filtered=JSON.parse(filtered);

  let order=new Array()

  array = filtered.forEach(cards=>{

        let data={
          name: cards.name,
          image: cards.image,
          gender: cards.gender,
          status: cards.status,
          location: cards.location.name
        }
        order.push(data)

  });
  order.sort((a, b) => (b.name > a.name) ? 1 : -1)
  console.log(order);
  impress.innerHTML = "";
  order.forEach(cards=>{
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


let error=document.getElementById("error");
error.addEventListener("click", ()=>{
  document.getElementById("login").style.display="none";
  document.getElementById("applyFilters").style.display="none";
  document.getElementById("idPage").style.display="none";
  document.getElementById("idSelected").style.display="none";
  document.getElementById("error").style.display="block";
});


const returnButton =()=>{
  document.getElementById("login").style.display="none";
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
