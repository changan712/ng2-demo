import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';
import {ModalComponent} from './modal/modal.component';
import {PreviewDirective} from './preview.directive';
import {FadeTransition} from "./page-transition";
import {ImagesSliderComponent} from "./images-slider/images-slider.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [

        UserComponent,
        ModalComponent,
        PreviewDirective,
        ImagesSliderComponent
    ],

    exports: [

        CommonModule,
        IonicModule,
        PreviewDirective,

    ],
    entryComponents: [ModalComponent,ImagesSliderComponent],


})
export class ShareModule {
}
