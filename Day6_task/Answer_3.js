class Person{
    constructor(name,age,place,language,address){
        this.name=name;
        this.age=age;
        this.place=place;
        this.language=language;
        this.address=address;
    }
    get all_details(){
        return `${this.name}\n${this.age}\n${this.place}\n${this.language}\n${this.address}`
    }
    get _name(){
        return this.name;
    }
    set _name(newName){
        this.name=newName;
    }
    get _age(){
        return this.age;
    }
    set _age(newAge){
        this.age=newAge;
    }
    get _place(){
        return this.place;
    }
    set _place(newPlace){
        this.place=newPlace;
    }
}

var obj=new Person("Akila",25,"Salem","Tamil","XYZ India");
console.log(obj.all_details);
console.log("Old Name:",obj._name);
obj._name="Aki";
console.log(obj.all_details);
console.log("After setting a new name: ",obj._name);
console.log(obj._age);
console.log(obj._place);
