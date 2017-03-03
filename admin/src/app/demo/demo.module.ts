import {NgModule} from '@angular/core';

import {FpComponent} from './fp/fp.component';
import {DemoComponent} from './demo.component';
import {SharedModule} from "../shared/shared.module";
import {routing} from "./demo.routing";
import {PollComponent} from "./poll/poll.component";
import {IndexComponent} from "./index/index.component";
import {RouterModule} from "@angular/router";
import {DynamicFormModule} from "../shared/dynamic-form/dynamic-form.module";
import {AdDirective} from "./dc/ad.directive";
import {DcComponent} from "./dc/dc.component";


@NgModule({
    imports: [
        SharedModule,
        DynamicFormModule,
        routing,

    ],
    declarations: [DemoComponent, FpComponent, PollComponent, IndexComponent,DcComponent,AdDirective]
})
export class DemoModule {


}
