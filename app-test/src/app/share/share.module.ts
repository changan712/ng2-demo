import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';
import {ModalComponent} from './modal/modal.component';
import {PreviewDirective} from './preview.directive';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],

    exports: [
        CommonModule,
        IonicModule,
        PreviewDirective,

    ],
    entryComponents:[ModalComponent],

    declarations: [UserComponent, ModalComponent, PreviewDirective]
})
export class ShareModule {
}
