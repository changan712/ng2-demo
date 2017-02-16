import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';


import {FadeTransition} from "./page-transition";
import {PreviewComponent} from "./preview/preview.component";
import {PreviewDirective} from "./preview/preview.directive";
import {CommentComponent} from './comment/comment.component';

import {CommentShowDirective} from './comment/comment-show.directive';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [

        UserComponent,

        PreviewDirective,
        PreviewComponent,
        CommentComponent,
        CommentShowDirective,


    ],

    exports: [

        CommonModule,
        IonicModule,
        PreviewDirective,
        CommentComponent,
        CommentShowDirective,

    ],
    entryComponents: [PreviewComponent],


})
export class ShareModule {
}
