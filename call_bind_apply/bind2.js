function msg(name){
    console.log("Hello," + name + "!!!");
}

var greet = msg.bind(null, "ram");
greet();