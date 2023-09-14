// var ts="1689183456527";
// var publickey="f68112e2fc084ea04a888a1e270d5a41";
// var hashValue="91d6fe93c75c72253015eb99088db6d6";

 var marvelAPI={
        apiKey:"f15fc35ccad41a7125ba9eca17a7f792",
        hash:"b7a63e3d31a2cfb32857406aab493945"
    }

var marvelURL = 'https://gateway.marvel.com/v1/public/'
var marvelURLHeader=`ts=1&apikey=${marvelAPI.apiKey}&hash=${marvelAPI.hash}`;


 const getData = async (url)=>{

     let response= await fetch(url);
     response= await response.json();
    let data = response.data.results;
    return data;
  
    }
