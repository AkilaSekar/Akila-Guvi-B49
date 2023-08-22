const apiURL="https://world.openfoodfacts.org/api/v0/product/737628064502.json";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();
    }
})
.then((val)=>{
   
        console.log("code:",val.code);
        // console.log(val.product);
        console.log("id:",val.product._id);
        console.log("keywords:",val.product._keywords);
        console.log("statues:   ",val.status);
        // console.log("Items:",val.product.ingredients[].id)
        console.log(val.status_verbose);
        for(let i=0; i<val.product.ingredients.length;i++){
            console.log("DETAILS")
            console.log("Item ID:",val.product.ingredients[i].id);
            console.log("Percentage:",val.product.ingredients[i].percent_estimate);
            console.log("Max:",val.product.ingredients[i].percent_max);
            console.log("Min:",val.product.ingredients[i].percent_min);
            console.log("Rank:",val.product.ingredients[i].rank);
            console.log("Text:",val.product.ingredients[i].text);
        }
        
    
})


.catch((err)=>{
     console.log("Error:",err);
 });