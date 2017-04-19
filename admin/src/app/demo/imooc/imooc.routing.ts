import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {ImoocComponent} from "./imooc.component";
import {DemoRouterComponent} from "./demo-router/demo-router.component";


export const routes: Routes = [
    {
        path: '',
        component: ImoocComponent,
        children: [
            {
                path: '',
                redirectTo: 'router',
            },
            {
                path: 'router',
                component: DemoRouterComponent,
            }
        ]

    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);