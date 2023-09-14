function refreshPage(){
  location.reload();
}

function removefav(id){
 let charArr=JSON.parse(localStorage.getItem('favChar'));
let index=charArr.indexOf(id.toString());
console.log("first",charArr)
charArr.splice(index,1);
console.log(charArr)
localStorage.setItem('favChar',JSON.stringify(charArr));
 refreshPage()
}


 function displayFavCharacter(character){
    let description=`
    <div class="card" style="width:10rem ;height:17rem" >
    <img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top" alt="superHero Image">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
    </div>
    <a href="#" class="btn btn-light " onclick=removefav(${character.id})><i class="fa-solid fa-trash fa-beat"></i></a>
  </div>
    
    
    `
    document.getElementsByTagName('main')[0].innerHTML+=description;

 }


function renderFunction(){
     let charArr=JSON.parse(localStorage.getItem('favChar'));
   console.log()
    for(let char of charArr){
    let Url=`${marvelURL}characters/${char}?${marvelURLHeader}`;
    console.log(Url)
    getData(Url).then((data)=>{
        // console.log(data[0])
        displayFavCharacter(data[0]);
    })
    }

}


// this function will be called at very first
function loading(){
  let charArr=JSON.parse(localStorage.getItem('favChar'));
// checking if something is present on arr or not 
    if(charArr!==null){
  renderFunction();
    }else {
        console.log('hello')
        // tell inner html that there is nothing to show please add something to the fav section 
    }
}



 window.addEventListener("load", loading);