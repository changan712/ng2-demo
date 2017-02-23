import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateService} from "./state.service";
import {MenuConfigService} from "./menu-config";
import {MyRequestOptions} from "./my-request-options";
import {RequestOptions, HttpModule} from "@angular/http";
import {UserService} from "./user.service";
import {UserResolveService} from "./user-resolve.service";
import {FeedService} from "../pages/feed/feed.service";


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [],
    providers: [
        StateService,
        MenuConfigService,
        UserService,
        UserResolveService,
        FeedService,
        {provide: RequestOptions, useClass: MyRequestOptions}
    ],

})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
