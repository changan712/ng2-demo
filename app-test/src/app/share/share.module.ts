import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';


import {FadeTransition} from "./page-transition";
import {PreviewComponent} from "./preview/preview.component";
import {PreviewDirective} from "./preview/preview.directive";


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [

        UserComponent,

        PreviewDirective,
        PreviewComponent,

    ],

    exports: [

        CommonModule,
        IonicModule,
        PreviewDirective,

    ],
    entryComponents: [PreviewComponent],


})
export class ShareModule {
}
