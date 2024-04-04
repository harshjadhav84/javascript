class Animal{
    constructor (name){
        this.name=name
    }
    eats(){
        console.log(this.name + "eats food");
    }
}

class Dog extends Animal{
    eats(){
        //super.eats();    //parent also exicuted
        console.log(this.name + "eats cookies");
    }
}

let puppy = new Dog("puppy");
puppy.eats();