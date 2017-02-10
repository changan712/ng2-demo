import {NgModule} from '@angular/core';

import {FeedListComponent} from './feed-list/feed-list.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component';
import {ShareModule} from "../share/share.module";
import {FeedComponent} from './feed/feed.component';
import {FeedService} from "./feed.service";


@NgModule({
    imports: [
        ShareModule
    ],
    exports: [FeedListComponent],
    declarations: [FeedListComponent, FeedDetailComponent, FeedComponent],
    providers: [FeedService]
})
export class FeedModule {
}
