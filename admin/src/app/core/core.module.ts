import {NgModule, Optional, SkipSelf, ErrorHandler} from '@angular/core';
import {CommonModule, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {StateService} from "./state.service";
import {MenuConfigService} from "./menu-config";
import {MyRequestOptions} from "./my-request-options";
import {RequestOptions, HttpModule} from "@angular/http";

import {UserResolveService} from "./user-resolve.service";
import {FeedService} from "../pages/feed/feed.service";
import {ConfirmService} from "../shared/comfirm/confirm.service";
import {MyErrorHandler} from "./my-error-handler";
import {ResourceModule} from "../resource/resource.module";


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ResourceModule
    ],
    declarations: [],
    providers: [
        StateService,
        MenuConfigService,
        UserResolveService,
        StateService,
        FeedService,
        ConfirmService,

        {provide: LocationStrategy, useClass: HashLocationStrategy},
        /*     {provide: ErrorHandler, useClass: MyErrorHandler},*/
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
