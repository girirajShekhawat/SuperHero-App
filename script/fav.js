function refreshPage(){
  location.reload();
}
// deleting the data from localstorage
function removefav(id){
 let charArr=JSON.parse(localStorage.getItem('favChar'));
let index=charArr.indexOf(id.toString());
charArr.splice(index,1);
localStorage.setItem('favChar',JSON.stringify(charArr));
 refreshPage()
}

// this function will paint  the fav charcters
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
      for(let char of charArr){
    let Url=`${marvelURL}characters/${char}?${marvelURLHeader}`;
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
      if(charArr!==null && charArr.length>0){
  renderFunction();
    }else {
       // tell inner html that there is nothing to show please add something to the fav section 
      let temp=`<h1 style="color:white">There is no Fav Superhero added</h1>`
      document.getElementById("outerBox").innerHTML = temp; 
    }
}



 window.addEventListener("load", loading);
