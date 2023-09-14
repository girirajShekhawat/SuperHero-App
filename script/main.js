let searchString="";
let btn=document.getElementById("btn");
//let searchBox=document.getElementById("searchBox");
let searchBar = document.querySelector('#search-bar');
let heroContainer=document.getElementById("heroContainer");
let searchSuggestionsParent = document.querySelector('#search-suggestions>ul');

let arr=[];

const homeUrl=` http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d51901e0cddf18f727fd9890c85bf119&hash=3c0807be06a02606d35aa7c35b9635aa`;





const homescreen= ()=>{
  getData(homeUrl).then((data)=>{
      arr=data;

  var {name,description,thumbnail}=arr[randomeNo()];


let div=document.createElement("div");

div.classList.add("character-info-div");

div.innerHTML=`
<div class="character-img">
<img src="${thumbnail.path}.jpg">
</div>

<div id="info" class="character-info">
<h3>${name}</h3>

</div>
`;

heroContainer.innerHTML="";
heroContainer.appendChild(div);
console.log(arr)
var  {name,description,thumbnail}=arr[randomeNo()];


let div2=document.createElement("div");

div2.classList.add("character-info-div");
div2.classList.add("character-div")
div2.innerHTML=`
<div class="character-img">
<img src="${thumbnail.path}.jpg">
</div>

<div class="character-info">
<h3>${name}</h3>

</div>
`;

// heroContainer.innerHTML="";
heroContainer.appendChild(div2);


})
}






// displaying the search suggestion 

const displaySearchSuggestion = (searchSuggestion) => {
  if (searchSuggestion.description.length > 0) {
    let suggestion = `
      <li class="list-group-item" onclick="redirect(['details','${searchSuggestion.id}'])">
        <div style="display:flex">
          <img src="${searchSuggestion.thumbnail.path}.${searchSuggestion.thumbnail.extension}" width="50">
          <p>${searchSuggestion.name}</p>
        </div>
      </li>`;

    // Append the suggestion to the parent <ul> element
    searchSuggestionsParent.insertAdjacentHTML('afterbegin', suggestion);
  }
}







// fetching the data when search is happening 

searchBar.addEventListener('keyup', () => {
  searchString = searchBar.value;
  if (searchString.length > 0) {
    let url = `${marvelURL}characters?nameStartsWith=${searchString}&${marvelURLHeader}`;
    searchSuggestionsParent.innerHTML = "";

    getData(url).then((data) => {
      data.forEach(displaySearchSuggestion);
    });
  } else {
    searchSuggestionsParent.innerHTML = "";
  }
});





// for randome no generation
function randomeNo(){
  let no=Math.floor(Math.random()*19);
  console.log("outside",no)
  if (no === 3 || no === 5 || no === 9 || no === 12 || no === 15 || no === 18||no==19) {
  if(no==19){
    no=no-3
  }
    no = no - 1;
  } else {
    return no;
  }
  
  return no;
}

window.addEventListener("load",homescreen);