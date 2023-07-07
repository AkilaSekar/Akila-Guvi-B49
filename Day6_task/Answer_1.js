class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        console.log(this.title,"/",this.studio,"/",this.rating);
    }
    getPG(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].rating=="PG"){
                arrayPG.push(arr[i].title);
            }
        }
        return arrayPG;
    }
}
let arrayPG=[]
let obj=new Movie("Casino Royale","Eon Productions", "PG­13");
let getpg=[ {title:"The Englsih War", studio: "Universal Pictures", rating: "G"},
            {title:"World Peace", studio: "Paramount Pictures", rating: "PG"},
            {title:"Science-The Ruler", studio: "Columbia Pictures", rating: "PG13"},
            {title:"The Queen", studio: "Disney", rating: "PG"}
        ];
console.log(obj.getPG(getpg));
