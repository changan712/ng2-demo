import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FpComponent} from "./fp/fp.component";
import {DemoComponent} from "./demo.component";
import {PollComponent} from "./poll/poll.component";
import {IndexComponent} from "./index/index.component";
import {DcComponent} from "./dc/dc.component";
import {DecoratorComponent} from "./decorator/decorator.component";
import {ObjectComponent} from "./object/object.component";
import {RxComponent} from "./rx/rx.component";

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
            {
                path: 'decorator',
                component: DecoratorComponent,
            },
            {
                path: 'object',
                component: ObjectComponent,
            },
            {
                path: 'rx',
                loadChildren: 'app/demo/rx/rx.module#RxModule'
            },
        ]
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);