const apiURL="https://restcountries.com/v3.1/all";

fetch(apiURL)
.then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
  
    for(let i=0; i<val.length; i++){
        // if(val[i].name.common=="Albania"){
        // console.log(val[i].cca3);
        // }
        console.log("Country Name:",val[i].name.common);
        console.log("Capital:",val[i].capital);
        console.log("Flag:",val[i].flag);
        console.log("Continent:",val[i].region);
        console.log("Country Code:x",val[i].cca3);
    }
    
})
.catch((err)=>{
    console.log("Error:",err);
})
