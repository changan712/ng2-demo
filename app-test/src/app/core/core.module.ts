import {NgModule} from '@angular/core';

import {UserService} from "./user.service";
import {HttpModule, RequestOptions} from "@angular/http";
import {HomeModule} from "../home/home.module";
import {MyRequestOptions} from "./my-request-options";
import {TabModule} from "../tab/tab.modlue";
import {PublicModule} from "../public/public.module";
import {StatusService} from "./status.service";


@NgModule({
    imports: [
        HttpModule,
        TabModule,
        PublicModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        StatusService,
        UserService,
        {provide: RequestOptions, useClass: MyRequestOptions}
    ],

})
export class CoreModule {
}
