import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FpComponent} from "./fp/fp.component";
import {DemoComponent} from "./demo.component";
import {PollComponent} from "./poll/poll.component";
import {IndexComponent} from "./index/index.component";
import {DcComponent} from "./dc/dc.component";

export const routes: Routes = [
    {
        path: '',

        component: DemoComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent
            },
            {
                path: 'fp',
                component: FpComponent
            },
            {
                path: 'poll',
                component: PollComponent
            },
            {
                path: 'dc',
                component: DcComponent
            },
        ]
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);