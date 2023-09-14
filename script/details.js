
// accecing the html elements
let img=document.getElementById('superHeroImg');
let name=document.getElementById("superHeroName");
let details=document.getElementById('superHeroDetails');
let main=document.getElementsByTagName('main')[0];

// taking the id from the url 
const getparams= new URLSearchParams(window.location.search);
const id=getparams.get('id');

// marvel api urls
const url=`${marvelURL}characters/${id}?${marvelURLHeader}`;

// redirecting to different pages 
function redirect(type){
    window.location.href=`./${type[0]}.html?id=${type[1]}`;
}

function toggleFav(charId) {
  // Retrieve the current list of favorite characters from localStorage
  let favCharItem = localStorage.getItem("favChar");
  
  let charArr = [];
console.log(favCharItem);
  if (favCharItem) {
    charArr = JSON.parse(favCharItem);
  }
console.log(typeof charArr);
console.log(charId);
  const indexOfChar = charArr.indexOf(charId.toString());

  // Check if the character is not in the favorites list
  if (indexOfChar === -1) {
    // Add the character to the favorites list
    charArr.push(charId.toString());
    localStorage.setItem("favChar", JSON.stringify(charArr));

    // Update the button text
    document.getElementById('favBtn').innerHTML = "Remove from favorite";
  } else {
    // Remove the character from the favorites list
    charArr.splice(indexOfChar, 1);
    localStorage.setItem('favChar', JSON.stringify(charArr));

    // Update the button text
    document.getElementById('favBtn').innerHTML = "Add to favorite";
  }
}

  
  // checking the char to render accurate btn according to the availaibility of char 
  function checkFav(id){
    let charArr=JSON.parse(localStorage.getItem('favChar'));

    let indexOfchar=charArr.indexOf(id.toString());
    if(indexOfchar==-1){
      // if char is not present then render this btn
      document.getElementById('favBtn').innerHTML="Add to favorite";
    }else{
      // if char is present then render this btn
      document.getElementById('favBtn').innerHTML="Remove from favorite";
    }
  }
  

// displaying the character

function displayCharacter(character){

let description=`
<div class="card" >
<img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top" alt="..." id="superHeroImg">
<div class="card-body" >
  <h5 class="card-title" id="superHeroName">${character.name}</h5>
  <p class="card-text" id="superHeroDetails">${character.description}</p>
  <a href="#" class="btn btn-primary" id="favBtn" onclick="toggleFav(${character.id})">Add to favorite</a>
</div>
</div>
`

main.innerHTML=description;
checkFav(character.id);
}

getData(url).then((data)=>displayCharacter(data[0]));