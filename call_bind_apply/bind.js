function greet(greeting,punctuation){
    console.log(greeting + " " + punctuation);
}

let person = {
    name: "Arohi",
};

let greetAru = greet.bind(person);
greetAru("hii", "aarruuu");