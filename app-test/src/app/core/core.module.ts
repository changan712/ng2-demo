import {NgModule} from '@angular/core';

import {UserService} from "./user.service";
import {HttpModule, RequestOptions} from "@angular/http";
import {HomeModule} from "../home/home.module";
import {MyRequestOptions} from "./my-request-options";


@NgModule({
    imports: [
        HttpModule,
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
