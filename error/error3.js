function divide(a,b){
    if (b===0){
        throw new Error("Divisible by 0 is not allowed");
    }
    return a/b;
}
try{ 
    console.log(divide(10,2));
    console.log(divide(10,0));
} catch(error){
    console.log("caught an error", error.message)
} finally{
    console.log("its not mendatory i want to show my attitude");
}
