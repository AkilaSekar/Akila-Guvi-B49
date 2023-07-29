const apiURL="https://restcountries.com/v3.1/all";

fetch(apiURL)
.then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","container");
    myDiv.style.backgroundColor="darkslategray";
    myDiv.style.margin="10px";
    myDiv.style.padding="20px";
    document.body.append(myDiv);  

    const myDiv1= document.createElement('div');
    myDiv1.setAttribute("class","row");
    myDiv.appendChild(myDiv1);
    
for(let i=0; i<val.length; i++){

  if(val[i].name.common=="India" ||  val[i].name.common=="China" ||val[i].name.common=="Russia"  ){
    //if(i<3){
    var lat = val[i].latlng[0];
    var long = val[i].latlng[1];
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
   
    const myDiv2= document.createElement('div');
    myDiv2.setAttribute("class","col-lg-4 col-sm-12");
    myDiv1.appendChild(myDiv2);

    const myDiv3 = document.createElement("div");
    myDiv3.setAttribute("class","card card-header card-body");
    myDiv3.style.backgroundColor="darkseagreen";
    myDiv3.style.color="white";
    myDiv2.appendChild(myDiv3);


    const p1 = document.createElement("div");
    p1.style.backgroundColor="black";
    p1.style.color="white";
    p1.style.fontSize="30px";
    p1.style.float="inline";
    p1.innerHTML = `${val[i].name.common}`;

    const p2 = document.createElement("p");
    p2.textContent = `Capital:${val[i].capital}`;

    const p3 = document.createElement("p");
    p3.textContent = `Region:${val[i].region}`;

    const p4 = document.createElement("p");
    p4.textContent = `Country Code:${val[i].cca3}`;

    const p5 = document.createElement("img");
    p5.src = `${val[i].flags.png}`;
    p5.style.padding="10px";
    
    let newBtn = document.createElement('button');
    newBtn.setAttribute("class","btn-primary");

    const link=document.createElement('a');
    link.innerHTML="Click for Weather";
    link.style.color="white";
    link.setAttribute("target","_blank");
    link.setAttribute("href",url);
    newBtn.appendChild(link);


    myDiv3.appendChild(p1);
    myDiv3.appendChild(p5);
    myDiv3.appendChild(p2);
    myDiv3.appendChild(p3);
    myDiv3.appendChild(p4);
    myDiv3.append(newBtn);
    }
  }    
})
.catch((err)=>{
     console.log("Error:",err);
    // myDiv.innerHTML="err";
 });