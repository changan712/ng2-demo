import {NgModule} from '@angular/core';

import {UserService} from "./user.service";
import {HttpModule} from "@angular/http";
import {HomeModule} from "../home/home.module";


@NgModule({
    imports: [

        HttpModule,


    ],
    declarations: [


    ],
    exports: [

    ],
    providers: [
        UserService
    ],

})
export class CoreModule {
}
