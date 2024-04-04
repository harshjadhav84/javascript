class BankAccount{
    constructor(accountNumber,balance){
    this.accountNumber=accountNumber;
    this.balance=balance;
}
//method to deposit money
deposit(amount){
    this.balance=this.balance+amount;
    console.log(`deposited ${amount} Rupees. currrent balance :${this.balance}Rupees`);
}

//method of withdraw money
withdraw(amount){
    if(amount <= this.balance){
        this.balance=this.balance-amount;
        console.log(`withdraw ${amount} Rupees.current balance :${this.balance}Rupees`);

    }
    else{
        console.log("insufficient bank balance");
    }
}

//check my balance
checkBalance(){
    console.log(`Account balance is: ${this.balance}Rupees`);
}

}
const account1 = new BankAccount(876567898765678, 1000);
account1.deposit(5000);
account1.withdraw(8000);
account1.checkBalance();
