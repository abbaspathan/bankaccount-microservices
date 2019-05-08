export class BankAccount {
    accountNumber: number;
    accountHolderName: string;
    accountBalance: number;
    accountType: string;
    constructor(accountHolderName, accountBalance, accountType) {
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
    }
}
export class SavingAccount extends BankAccount {

    salary: boolean;
    constructor(accountHolderName, accountBalance, accountType, salary) {
        super(accountHolderName, accountBalance, accountType);
        this.salary = salary;
    }
}

export class CurrentAccount extends BankAccount {

    odlimit: number;
}