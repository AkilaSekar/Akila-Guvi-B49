const apiURL="https://api.dictionaryapi.dev/api/v2/entries/en/world";
fetch(apiURL)
.then((response)=>{
    if(response.status===200){
         return response.json();    
    }
})
.then((val)=>{   
     const myDiv = document.createElement("div");
     myDiv.setAttribute("class","container");
     // myDiv.innerHTML=`World`;
     document.body.append(myDiv); 
     
     
     const image = document.createElement("img");
     image.src ="world1.jpg";
     image.style.height="200px";
     image.style.width="200px";
      // image.style.padding="10px";
     myDiv.appendChild(image) 

     const head = document.createElement("h1");
     head.innerHTML=`Various Definitions are:`;
     head.style.color="blue";
     myDiv.appendChild(head)

     const myDiv1 = document.createElement("div");
     myDiv1.innerHTML=`1.${val[0].meanings[0].definitions[0].definition}`;
     myDiv.appendChild(myDiv1) 

     const myDiv2 = document.createElement("div");
     myDiv2.innerHTML=`2.${val[0].meanings[0].definitions[1].definition}`;
     myDiv.appendChild(myDiv2) 

     const myDiv3 = document.createElement("div");
     myDiv3.innerHTML=`3.${val[0].meanings[0].definitions[2].definition}`;
     myDiv.appendChild(myDiv3) 

     const myDiv4 = document.createElement("div");
     myDiv4.innerHTML=`4.${val[0].meanings[0].definitions[3].definition}`;
     myDiv.appendChild(myDiv4) 

     const myDiv5 = document.createElement("div");
     myDiv5.innerHTML=`5.${val[0].meanings[0].definitions[4].definition}`;
     myDiv.appendChild(myDiv5) 

     const myDiv6 = document.createElement("div");
     myDiv6.innerHTML=`6.${val[0].meanings[0].definitions[5].definition}`;
     myDiv.appendChild(myDiv6) 

     const myDiv7 = document.createElement("div");
     myDiv7.innerHTML=`7.${val[0].meanings[0].definitions[6].definition}`;
     myDiv.appendChild(myDiv7) 

     const myDiv8 = document.createElement("div");
     myDiv6.innerHTML=`8.${val[0].meanings[0].definitions[7].definition}`;
     myDiv.appendChild(myDiv8) 

     const myDiv9 = document.createElement("div");
     myDiv9.innerHTML=`9.${val[0].meanings[0].definitions[8].definition}`;
     myDiv.appendChild(myDiv9) 

     const myDiv10 = document.createElement("div");
     myDiv10.innerHTML=`10.${val[0].meanings[0].definitions[9].definition}`;
     myDiv.appendChild(myDiv10) 

     const myDiv11 = document.createElement("div");
     myDiv11.innerHTML=`11.${val[0].meanings[0].definitions[10].definition}`;
     myDiv.appendChild(myDiv11)

     const synonymsHead = document.createElement("h1");
     synonymsHead.innerHTML=`Synonym of WORLD`;
     synonymsHead.style.color="blue";
     myDiv.appendChild(synonymsHead)
     
     const synonyms = document.createElement("div");
     synonyms.innerHTML=`${val[0].meanings[0].synonyms}`;
     myDiv.appendChild(synonyms)

     const partHead = document.createElement("h1");
     partHead.innerHTML=`Part of the Speeach`;
     partHead.style.color="blue";
     myDiv.appendChild(partHead)

     const part = document.createElement("div");
     part.innerHTML=`${val[0].meanings[0].definitions[10].definition}`;
     myDiv.appendChild(part)

     const urlHead = document.createElement("h1");
     urlHead.innerHTML=`Source URL`;
     urlHead.style.color="blue";
     myDiv.appendChild(urlHead)

     var url=val[0].sourceUrls;
     const link=document.createElement('a');
     link.innerHTML="Click for Source URl ";
     link.style.color="white";
     link.setAttribute("target","_blank");
     link.setAttribute("href",url);
     myDiv.appendChild(link);
 }    
)


.catch((err)=>{
     console.log("Error:",err);
 });