function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    let monthlybonus = 1000;

    let FinalSalary = function(){
        let final = salary + monthlybonus;
        console.log("final salary is :" + final);
    }

    this.getEmpDetails = function(){
        console.log("name: " + "Age:" + this.age);
        FinalSalary();
    }
}

let emp1 = new Employee("lize", 30, 3333);
emp1.monthlybonus = 5000;