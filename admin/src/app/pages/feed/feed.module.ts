import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedListComponent} from './feed-list/feed-list.component';

import {FeedDetailComponent} from './feed-detail/feed-detail.component';
import {routing} from "./feed.routing";
import {FeedService} from "./feed.service";
import {SharedModule} from "../../shared/shared.module";
import {MyRequestOptions} from "../../core/my-request-options";
import {RequestOptions} from "@angular/http";

@NgModule({
    imports: [

        SharedModule,
        routing
    ],
    declarations: [FeedListComponent, FeedDetailComponent],
    providers: [  ]
})
export class FeedModule {
}
