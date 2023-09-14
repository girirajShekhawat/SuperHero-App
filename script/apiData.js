
 var marvelAPI={
       
        apiKey:"f68112e2fc084ea04a888a1e270d5a41",
        hash:"cafdb5adfdbd4dcab2d25393b380aa53"
    }

var marvelURL = 'https://gateway.marvel.com/v1/public/'
var marvelURLHeader=`ts=1&apikey=${marvelAPI.apiKey}&hash=${marvelAPI.hash}`;


 const getData = async (url)=>{

     let response= await fetch(url);
     response= await response.json();
    let data = response.data.results;
    return data;
  
    }
