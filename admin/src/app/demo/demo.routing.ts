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
import {WsComponent} from "./ws/ws.component";
import {FormComponent} from './form/form.component';
import {RxTodoComponent} from "./rx-todo/rx-todo.component";

export const routes: Routes = [
    {
        path: '',

        component: DemoComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'form',
            },
            {
                path: 'form',
                component: FormComponent
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
                path: 'upload',
                component: UploadComponent,
            }, {
                path: 'ws',
                component: WsComponent,
            },
            {
                path: 'rx',
                loadChildren: 'app/demo/rx/rx.module#RxModule'
            },
            {
                path: 'rx-todo',
                component: RxTodoComponent,
            },
            {
                path: 'rx2',
                loadChildren: 'app/demo/rx2/rx2.module#Rx2Module'
            },

            {
                path: 'imooc',
                loadChildren: 'app/demo/imooc/imooc.module#ImoocModule'
            },
        ]
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);