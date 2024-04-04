function festival(name){
    if (typeof name === "undefined"){
        console.log("Happy diwali");
    }
    else {
        console.log("Happy diwali dear" + name + "and family");
    }
}
festival();
festival("Harsh");