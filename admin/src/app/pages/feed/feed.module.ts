import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedListComponent} from './feed-list/feed-list.component';

import {FeedDetailComponent} from './feed-detail/feed-detail.component';
import {routing} from "./feed.routing";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [FeedListComponent, FeedDetailComponent]
})
export class FeedModule {
}
