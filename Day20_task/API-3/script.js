const apiURL="https://world.openfoodfacts.org/api/v0/product/737628064502.json";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();
    }
})
.then((val)=>{
   
        console.log(val.code);
        console.log(val.product);
        console.log(val.product._id);
        console.log(val.product._keywords);
        console.log(val.product);

        console.log(val.status);
        console.log(val.status_verbose);
        
    
})


.catch((err)=>{
     console.log("Error:",err);
 });