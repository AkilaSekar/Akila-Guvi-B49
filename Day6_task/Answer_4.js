class Uber{
    constructor(type,kms,duration){
        this.type=type;
        this.kms=kms;
        this.duration=duration;
    }
    calculateFare(){
        if(this.type=="bike"){
            baseFare = 10;
            ratePerKm = 1;
            ratePerMin = 2;
            console.log("I have chosen bike!!!");
        }
        else if(this.type=="auto"){
            baseFare = 20;
            ratePerKm = 2.50;
            ratePerMin = 4;
            console.log("I have chosen auto!!!");
        }
        else if(this.type=="car"){
            baseFare = 50;
            ratePerKm = 3.50;
            ratePerMin = 6;
            console.log("I have chosen car!!!");
        }
        distanceCost = this.kms * ratePerKm;
        durationCost = this.duration * ratePerMin;
        totalPrice = baseFare + distanceCost + durationCost;
        console.log("The total price for the drive is Rs.",totalPrice);
    }
}
var baseFare, ratePerKm, ratePerMin,distanceCost,durationCost,totalPrice;
var obj= new Uber("bike",1,1);
obj.calculateFare();