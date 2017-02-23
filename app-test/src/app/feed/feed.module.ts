import {NgModule} from '@angular/core';

import {FeedListComponent} from './feed-list/feed-list.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component';
import {ShareModule} from "../share/share.module";

import {FeedService} from "./feed.service";


import { ImagesViewComponent } from './images-view/images-view.component';



@NgModule({
    imports: [
        ShareModule
    ],
    exports: [FeedListComponent],
    declarations: [FeedListComponent, FeedDetailComponent,    ImagesViewComponent],
    providers: []
})
export class FeedModule {
}
