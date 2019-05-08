import { Component, OnInit } from '@angular/core';
import { BankAccount } from './account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';

@Component({
    templateUrl:"./get-detail.component.html"
})
export class GetDetailComponent implements OnInit{

    account:BankAccount[];
    constructor(private detailService: AccountService, private route: ActivatedRoute) { }
    ngOnInit():void{
        
        this.route.paramMap.subscribe((map) => {
            let accountId=Number(map.get("accountId"));
            this.detailService.findAccountAll().subscribe((data) => {
                this.account=data;
            });
        });
    }
}