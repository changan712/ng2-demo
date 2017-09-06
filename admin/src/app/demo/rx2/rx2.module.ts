import {NgModule} from '@angular/core';
import {Rx2RoutingModule} from './rx2-routing.module';
import {IndexComponent} from './index/index.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        Rx2RoutingModule
    ],
    declarations: [IndexComponent]
})
export class Rx2Module {
}
