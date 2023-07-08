class Circle{
    constructor(radius,color){
        this.radius=1;
        this.color="Red";        
        if(typeof(radius)!=="undefined"){
            this.radius=radius;
        }
        if(typeof(color)!=="undefined"){
            this.color=color;
        }
        
    }
    get _radius(){
        return this.radius;
    }
    set _radius(newRadius){
        this.radius=newRadius;
    }
    get _color(){
        return this.color;
    }
    set _color(newColor){
        this.color=newColor;
    }
    get _area(){
        this.area=Math.PI*this.radius*this.radius;
        return this.area;
    }
    get _circumference(){
        this.circumference=2*Math.PI*this.radius
        return this.circumference;
    }
    toString(){
        return `Circle[Radius: ${this.radius}, Color: ${this.color}]`;
    }
}
var area, circumference;
var obj=new Circle();
console.log("Before",obj._radius);
console.log(obj._color);
console.log(obj._area);
console.log(obj._circumference);
console.log(obj.toString());
var obj2=new Circle(2);
//obj._radius=3;
//obj2._color="Pink";
console.log("After",obj2._radius);
console.log(obj2._color);
console.log(obj2._area);
console.log(obj2._circumference);
console.log(obj2.toString());
var obj3=new Circle(3,"Black");
console.log(obj3._area,"\n",obj3._circumference,"\n",obj3.toString());
