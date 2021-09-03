// funtion return to  funtion
/*
const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount ;
        balance += amount;
        return balance;
    }
}
*/

// funtion return to object

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount ;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance - amount ;
            balance -= amount;
            return balance;
        }
    }
}

const myBank = bank('farhad');

console.log(myBank.deposit(200));
console.log(myBank.deposit(80));
console.log(myBank.balance);
console.log(myBank.deposit(520));

console.log(myBank.withdraw(110));
console.log(myBank.withdraw(220));

