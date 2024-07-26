class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    get balance() {
        return this.#balance;
    }
}

// Create an instance and test the deposit and withdraw methods
const account1 = new Account(1000);
account1.deposit(500); // Output: Deposited: $500. New balance: $1500.
account1.withdraw(300); // Output: Withdrew: $300. New balance: $1200.
console.log(`Final balance: $${account1.balance}`); // Output: Final balance: $1200
