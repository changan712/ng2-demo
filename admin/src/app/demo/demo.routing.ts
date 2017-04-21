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
import {UploadComponent} from "./upload/upload.component";

export const routes: Routes = [
    {
        path: '',

        component: DemoComponent,
        children: [

            {
                path: 'fp',
                component: FpComponent
            },
            {
                path: '',
                pathMatch:'full',
                redirectTo:'fp',
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
                path: 'upload',
                component: UploadComponent,
            },
            {
                path: 'rx',
                loadChildren: 'app/demo/rx/rx.module#RxModule'
            },

            {
                path: 'imooc',
                loadChildren: 'app/demo/imooc/imooc.module#ImoocModule'
            },
        ]
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);