import {Routes} from "@angular/router";
import { AddNewAccountComponent } from "./add-account.component";
import { GetDetailComponent } from './get-detail.component';

export const accountRoutes:Routes=[
    {path:"account",component:AddNewAccountComponent},
    {path:"home/account",component:AddNewAccountComponent},
    {path:"getall",component:GetDetailComponent}
]