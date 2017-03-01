import {NgModule} from '@angular/core';

import {FpComponent} from './fp/fp.component';
import {DemoComponent} from './demo.component';
import {SharedModule} from "../shared/shared.module";
import {routing} from "./demo.routing";
import {PollComponent} from "./poll/poll.component";
import {IndexComponent} from "./index/index.component";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [DemoComponent, FpComponent, PollComponent,IndexComponent]
})
export class DemoModule {


}
