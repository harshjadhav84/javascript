
        function divide(a,b){
            try{
            if(b===0){
            throw new Error("division by zero is not allowed");
             }
             
            return a/b;
        }catch(error){
            console.log("error is occured:", error.message)
        }
    }
        console.log(divide(10,2));
        console.log(divide(10,5));
   