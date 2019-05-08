import { Component, OnInit } from '@angular/core';
import { SavingAccount, BankAccount } from './account';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./add-account.component.html"
})
export class AddNewAccountComponent implements OnInit {

    account: BankAccount;

    constructor(private accountService: AccountService, private router: Router) {

    }
    ngOnInit() {
        this.account = new SavingAccount();
    }

    addNewAccount() {
        this.accountService.addNewAccount(this.account).subscribe((data) => {
            if (data != null) {
                alert("Registration is successful.");
                // this.router.navigate(["/login"]);
            }
        })
    }

}