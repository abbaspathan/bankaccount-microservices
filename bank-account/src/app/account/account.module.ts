import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.routes';
import { AddNewAccountComponent } from './add-account.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { GetDetailComponent } from './get-detail.component';

@NgModule({
    declarations:[
        AddNewAccountComponent,
        GetDetailComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(accountRoutes),
        HttpClientModule,
        FormsModule
        
    ],
    exports:[
        AddNewAccountComponent,
        GetDetailComponent,
        RouterModule
    ],
    providers:[
        AccountService
    ]
})
export class AccountModule{

}