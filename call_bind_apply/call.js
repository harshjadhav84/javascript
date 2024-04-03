var person1 = {
    fullname:function(){
        return this.firstname + " " + this.lastname;
    }
};

var person2={
    firstname: "ram",
    lastname: "raghuvanshi"
};

var fullname = person1.fullname.call(person2);
console.log("THe person full name is " + fullname);