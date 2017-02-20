import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from "./login.routing";
import {LoginComponent} from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
    constructor(){
        console.log('login');
        
    }
    
}
