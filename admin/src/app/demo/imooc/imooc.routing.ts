import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {ImoocComponent} from "./imooc.component";
import {ViewChildrenComponent} from "./view-children/view-children.component";


export const routes: Routes = [
    {
        path: '',
        component: ImoocComponent,
        children: [
            {
                path: '',
                redirectTo: 'view-children',
            },
            {
                path: 'view-children',
                component: ViewChildrenComponent,
            }
        ]

    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);