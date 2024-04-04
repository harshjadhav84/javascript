class Car{
    setName(name){
        this.name=name;
    }
    startEngin(){
        console.log("engin started fro " + this.name);
    }
    stopEngin(){
        console.log("Engin stopped for" + this.name);
    }
}

class BMW extends Car{
    topSpeed(speed){
        console.log("tpo speed for" +this.name + "is" +speed);
    }
}

let myCar = new BMW();
myCar.setName("ffff");
myCar.startEngin();
myCar.stopEngin();
myCar.topSpeed(300);