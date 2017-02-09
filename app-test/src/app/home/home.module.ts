import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {ShareModule} from "../share/share.module";

import {NoticeComponent} from './notice/notice.component';
import {NavComponent} from './nav/nav.component';
import {BannerService} from "./banner.service";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        ShareModule,
        HttpModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        NoticeComponent,
        NavComponent,
    ],
    providers: [
        BannerService
    ]
})
export class HomeModule {
}
