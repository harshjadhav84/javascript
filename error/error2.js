try{
    console.log("inside try block code");
    throw new Error("an error block code");
}catch(error){

} finally{
    console.log("inside finally block");
    console.log("I want to execute");

}