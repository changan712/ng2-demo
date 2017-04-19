import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";

const loginRoutes: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations: [],
    exports:[RouterModule],
    providers: [AuthService, AuthGuard]
})
export class LoginRoutingModule {
}
