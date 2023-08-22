const apiURL="https://world.openfoodfacts.org/api/v0/product/737628064502.json";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();
    }
})
.then((val)=>{
    
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","container");
    myDiv.style.backgroundColor="aqua";
    myDiv.style.color="black";
    myDiv.style.margin="10px";
    myDiv.style.padding="20px";
    document.body.append(myDiv);  

    const h1=document.createElement('h1')
    h1.textContent = `Code:${val.code}`;
    myDiv.appendChild(h1);

    const h2=document.createElement('h1')
    h2.textContent = `Product Id:${val.product._id}`;
    myDiv.appendChild(h2);

    const h4=document.createElement('h4')
    h4.textContent = `Product Keywords are listed below:`;
    myDiv.appendChild(h4);

    for(let i=0; i<val.product._keywords.length; i++){
    const list=document.createElement('li');
    list.textContent = `${val.product._keywords[i]}`;
    myDiv.appendChild(list);
    }

    const myDiv1= document.createElement('div');
    myDiv1.setAttribute("class","row");
    myDiv1.style.color="black";
    myDiv.appendChild(myDiv1);

    for(let i=0; i<val.product.ingredients.length;i++){
            
        const myDiv2= document.createElement('div');
        myDiv2.setAttribute("class","col-lg-4 col-sm-12");
        myDiv2.style.padding="10px";
        myDiv1.appendChild(myDiv2);

        const myDiv3 = document.createElement("div");
        myDiv3.setAttribute("class","card card-header card-body");
        myDiv3.style.backgroundColor="red";
        myDiv3.style.color="white";
        myDiv2.appendChild(myDiv3);

        const p1 = document.createElement("p");
        p1.textContent = `Item ID:${val.product.ingredients[i].id}`;

        const p2 = document.createElement("p");
        p2.textContent = `Percentage:${val.product.ingredients[i].percent_estimate}`;

        const p3 = document.createElement("p");
        p3.textContent = `Max:${val.product.ingredients[i].percent_max}`;

        const p4 = document.createElement("p");
        p4.textContent = `Min:${val.product.ingredients[i].percent_min}`;

        const p5 = document.createElement("p");
        p5.textContent = `Text:${val.product.ingredients[i].text}`;

        myDiv3.appendChild(p1);
        myDiv3.appendChild(p2);
        myDiv3.appendChild(p3);
        myDiv3.appendChild(p4);
        myDiv3.appendChild(p5);            
    }
})

.catch((err)=>{
     console.log("Error:",err);
 });