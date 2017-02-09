import {NgModule} from '@angular/core';

import {FeedListComponent} from './feed-list/feed-list.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component';
import {ShareModule} from "../share/share.module";


@NgModule({
    imports: [
       ShareModule
    ],
    exports: [FeedListComponent],
    declarations: [FeedListComponent, FeedDetailComponent]
})
export class FeedModule {
}
