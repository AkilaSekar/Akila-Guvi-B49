const apiURL="https://world.openfoodfacts.org/api/v0/product/737628064502.json";

fetch(apiURL)
.then((response)=>{
    if(response.status===200){
        console.log(response)
    }
})
.catch((err)=>{
     console.log("Error:",err);
 });