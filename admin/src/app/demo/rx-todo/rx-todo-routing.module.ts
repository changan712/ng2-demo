import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RxTodoComponent} from "./rx-todo.component";

const routes: Routes = [

    {
        path: '',
        //pathMatch: 'full',
        component: RxTodoComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxTodoRoutingModule {
}
