import {Routes, RouterModule}  from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {NotFindComponent} from "./not-find.component";


export const routes: Routes = [

    {
        path: '',
        component: NotFindComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
