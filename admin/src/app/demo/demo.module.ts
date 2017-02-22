import { NgModule } from '@angular/core';

import { FpComponent } from './fp/fp.component';
import { DemoComponent } from './demo.component';
import {SharedModule} from "../shared/shared.module";
import {routing} from "./demo.routing";

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [FpComponent, DemoComponent]
})
export class DemoModule { 

    
}
