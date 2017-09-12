import {NgModule} from '@angular/core';

import {RxTodoRoutingModule} from './rx-todo-routing.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {RxTodoComponent} from "./rx-todo.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        RxTodoRoutingModule
    ],
    declarations: [FooterComponent, HeaderComponent, MainComponent, RxTodoComponent]
})
export class RxTodoModule {
}
