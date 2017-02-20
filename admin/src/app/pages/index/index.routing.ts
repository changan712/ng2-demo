import { Routes, RouterModule }  from '@angular/router';


import { ModuleWithProviders } from '@angular/core';
import {IndexComponent} from "./index.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
