const apiURL="https://cat-fact.herokuapp.com/facts";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();
    }
})
.then((val)=>{
    for(let i=0; i<val.length; i++){
        console.log(val[i]._id);
        console.log(val[i].user);
        console.log(val[i].text);
        console.log(val[i].createdAt);
        console.log(val[i].updatedAt);
        console.log(val[i].status.verified);
    }


})
.catch((err)=>{
     console.log("Error:",err);
 });