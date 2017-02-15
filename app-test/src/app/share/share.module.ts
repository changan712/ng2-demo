import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';
import {ModalComponent} from './modal/modal.component';
import {PreviewDirective} from './preview.directive';
import {FadeTransition} from "./page-transition";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [

        UserComponent,
        ModalComponent,
        PreviewDirective
    ],

    exports: [

        CommonModule,
        IonicModule,
        PreviewDirective,

    ],
    entryComponents: [ModalComponent],


})
export class ShareModule {
}
