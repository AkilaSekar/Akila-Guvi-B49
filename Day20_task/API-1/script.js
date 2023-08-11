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
     myDiv.innerHTML=`${val[0].word}`;
     document.body.append(myDiv);  


     console.log("The Word taken from the dictionary is ",val[0].word);
     console.log(val[0].meanings[0].definitions[0].definition);
     console.log(val[0].meanings[0].definitions[1].definition);
     console.log(val[0].meanings[0].definitions[2].definition);
     console.log(val[0].meanings[0].definitions[3].definition);
     console.log(val[0].meanings[0].definitions[4].definition);
     console.log(val[0].meanings[0].definitions[5].definition);
     console.log(val[0].meanings[0].definitions[6].definition);
     console.log(val[0].meanings[0].definitions[7].definition);
     console.log(val[0].meanings[0].definitions[8].definition);
     console.log(val[0].meanings[0].definitions[9].definition);
     console.log(val[0].meanings[0].definitions[10].definition);
     console.log(val[0].meanings[0].synonyms);
     console.log(val[0].meanings[0].partOfSpeech);
     console.log(val[0].sourceUrls);



  }    
)


.catch((err)=>{
     console.log("Error:",err);
 });