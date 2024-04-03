let obj1 = {
    name : "harsh",
    greet : function(greet){
        console.log(greet + this.name);
    }
}

let obj2 = {
    name : "amit",
};
obj1.greet.apply(obj2,["Hello"]);
let greetfn = obj1.greet.bind(obj2, "Hii");
greetfn();