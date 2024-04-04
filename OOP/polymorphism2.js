//method overloading
function add(a,b){
    if(typeof b === "undefined"){
        return a;
    }
    else {
        return a + b;
    }
}
console.log(add(2,3));
console.log((2));