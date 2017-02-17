import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "ionic-angular";
import {UserComponent} from './user/user.component';


import {FadeTransition} from "./page-transition";
import {PreviewComponent} from "./preview/preview.component";
import {PreviewDirective} from "./preview/preview.directive";
import {CommentComponent} from './comment/comment.component';
import {CommentListComponent} from './comment-list/comment-list.component';



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
        CommentListComponent,



    ],

    exports: [

        CommonModule,
        IonicModule,
        PreviewDirective,
        CommentComponent,
        CommentListComponent


    ],
    entryComponents: [PreviewComponent, CommentComponent],


})
export class ShareModule {
}
