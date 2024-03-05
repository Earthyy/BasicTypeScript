class BankAccount {
    private accountNumber: number;
    private balance: number;
    private withdrawFailMessage: string = 'เงินไม่พอ';

    constructor(accountNumber: number, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    getBalance(): number { //getter
        return this.balance;
    }

    deposit(amount: number): void { 
        if (amount > 0) {
            this.balance += amount;
            console.log(`บัญชี : ${this.accountNumber} ฝากเงิน ${amount} บาท เรียบร้อย`);
        } else {
            console.log('จำนวนเงินที่ฝากต้องมากกว่า 0');
        }
    }

    withdraw(amount: number): void {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`บัญชี : ${this.accountNumber} ถอนเงิน ${amount} บาท เรียบร้อย`);
            } else {
                console.log(this.withdrawFailMessage);
            }
        } else {
            console.log('จำนวนเงินที่ถอนต้องมากกว่า 0');
        }
    }
}

// ตัวอย่างการใช้งาน
const account = new BankAccount(1234, 1000);

console.log(`เลขที่บัญชี: ${account.getBalance()}`);
account.deposit(500);
console.log(`เลขที่บัญชี: ${account.getBalance()}`);
account.withdraw(200);
console.log(`เลขที่บัญชี: ${account.getBalance()}`);
account.withdraw(1500); // จะแสดงข้อความ 'เงินไม่พอ'


//absraction
abstract class Shape {
    abstract draw(): void
}

class Circle extends Shape {
    draw(): void {
        console.log('Drawing a circle')
    }
}

const circle = new Circle()
circle.draw()
// const shape = new Shape() //Error can't instance abstact class 
// shape.draw()