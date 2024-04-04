class Employee{
    setDetails(name, id, phno){
        this.name = name;
        this.id = id;
        this.phno = phno;
    }

    getEmpName(){
        return this.name;
        }

        getEmpId(){
            return this.id;
        }

        getEmpPhno(){
            return this.phno;
        }
}

let emp1 =  new Employee();
emp1.setDetails("navya", 1023, 8789303033);
console.log(emp1.name);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1);
