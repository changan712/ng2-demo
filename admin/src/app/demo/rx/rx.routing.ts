
import {RxComponent} from "./rx.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: RxComponent,
    },



];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);