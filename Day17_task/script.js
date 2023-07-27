

// const apiURL="https://restcountries.com/v3.1/all";

// fetch(apiURL)
// .then((response)=>{
//     if(response.status===200){
//         return response.json();
//     }
// })
// .then((val)=>{

//     const parentDiv =document.createElement('div');
//     document.body.append(parentDiv);

//     const parentDiv6 =document.createElement('div');
//     parentDiv6.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv6.setAttribute("id","IN");  
//     parentDiv6.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv6);


//     const parentDiv1 =document.createElement('div');
//     parentDiv1.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv1.setAttribute("id","IN");  
//     parentDiv1.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv1);

//     const parentDiv2 =document.createElement('div');
//     parentDiv2.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv2.setAttribute("id","IN");  
//     parentDiv2.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv2);


//     const parentDiv3 =document.createElement('div');
//     parentDiv3.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv3.setAttribute("id","IN");  
//     parentDiv3.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv3);

//     const parentDiv4 =document.createElement('div');
//     parentDiv4.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv4.setAttribute("id","IN");  
//     parentDiv4.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv4);

//     const parentDiv5 =document.createElement('div');
//     parentDiv5.setAttribute("class","custom-container row col-md-3 card card-header card-body");
//     parentDiv5.setAttribute("id","IN");  
//     parentDiv5.innerText="Helo World!!"
//     parentDiv.appendChild(parentDiv5);

  
//     for(let i=0; i<val.length; i++){
//     //     console.log("Country Name:",val[i].name.common);
//     //     console.log("Capital:",val[i].capital);
//     //     console.log("Flag:",val[i].flag);
//     //     console.log("Continent:",val[i].region);
//     //     console.log("Country Code:x",val[i].cca3);
//     if(val[i].name.common=="India"){
//         const ele=document.createElement("div");
//         ele.innerText=val[i].capital;
//         ele.innerHTML=val[i].flag;
//         document.body.append(ele);
    
//     }
//   }    
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })



var body = document.getElementsByTagName("body")[0];
for (var y=0; y<2; y++){ // creates rows    
    var createRow = document.createElement("div");
      for (var x=0; x<4; x++){ // creates columns
      var createColumn = document.createElement("div");
        var createCard = document.createElement("div");
          var createText = document.createElement("p");
            var cellText = document.createTextNode("test");

            createText.appendChild(cellText);
            createCard.appendChild(createText);
            createColumn.appendChild(createCard);
            createRow.appendChild(createColumn);
            body.appendChild(createRow);

        createCard.setAttribute("class", "card");
      createColumn.setAttribute("class", "column");
      }
    createRow.setAttribute("class", "row");
  }