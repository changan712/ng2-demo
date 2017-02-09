import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],

    exports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [UserComponent]
})
export class ShareModule {
}
