import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomeModule} from "../home/home.module";
import {ShareModule} from "../share/share.module";
import {TabComponent} from "./tab.component";
import {HomeComponent} from "../home/home.component";
import {FeedModule} from "../feed/feed.module";
import {FeedListComponent} from "../feed/feed-list/feed-list.component";
import {FeedDetailComponent} from "../feed/feed-detail/feed-detail.component";


@NgModule({

    imports: [
        ShareModule,
        HomeModule,
        FeedModule,

    ],
    declarations: [
        TabComponent
    ],

    exports: [
        TabComponent
    ],
    entryComponents: [
        HomeComponent,
        FeedListComponent,
        FeedDetailComponent,
    ]

})

export class TabModule {


}