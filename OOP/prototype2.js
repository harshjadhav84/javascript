//parent object constructor function
function Fruit(name){
    this.name  = name;
}

//adding the method prototype of function
Fruit.prototype.callName = function(){
    console.log("name is" + this.name);
}

//child object constuctor function
function watermalon(name, taste){
    Fruit.call(this,name);
    //call the consructor of parent class
    this.taste=taste;
}

//inheriting from parent
watermalon.prototype.color=function(){
    console.log("redgreen");
}

// creating instance of watermalon
var mywatermalon = new watermalon("yellow watermalon", "sweet");
mywatermalon.callName();
mywatermalon.callTaste();
mywatermalon.color();
