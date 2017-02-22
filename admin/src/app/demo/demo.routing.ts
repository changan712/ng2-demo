import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FpComponent} from "./fp/fp.component";
import {DemoComponent} from "./demo.component";
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DemoComponent
    },

    {
        path: 'fp',
        component: FpComponent
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);