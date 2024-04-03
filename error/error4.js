//custom error is one type of constructor extends from error class

class CustomError extends error{
    constructor(message){
        this.name = 'CustomError';
    }
}

//example
function f1(){
    throw new CustomError("This is custom error");
}
//handle the error
try{
    f1();
   }   catch(error){
        if(error instanceof CustomError){
            console.error("custom errror", error.message);
        }else{
            console.log("other error", error.message);
        }
    
}
