import {NgModule} from '@angular/core';

import {UserService} from "./user.service";
import {HttpModule, RequestOptions} from "@angular/http";
import {HomeModule} from "../home/home.module";
import {MyRequestOptions} from "./my-request-options";
import {TabModule} from "../tab/tab.modlue";
import {PublicModule} from "../public/public.module";


@NgModule({
    imports: [
        HttpModule,
        TabModule,
        PublicModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        UserService,
        {provide: RequestOptions, useClass: MyRequestOptions}
    ],

})
export class CoreModule {
}
