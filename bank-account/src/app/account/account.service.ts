import { Injectable } from '@angular/core';
import { SavingAccount, BankAccount } from './account';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
    baseUrl = "http://localhost:8080/account";

    constructor(private http: HttpClient) {

    }

    addNewAccount(account: BankAccount): Observable<BankAccount> {
        return this.http.post<BankAccount>(this.baseUrl, account);
    }

    findAccountAll():Observable<BankAccount[]>{
        return this.http.get<BankAccount[]>(this.baseUrl);
    }
}