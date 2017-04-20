import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisService} from "./crisis.service";
import {CrisisDetailResolveService} from "./crisis-detail-resolve.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ],
    declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailComponent],
    providers:[CrisisService,CrisisDetailResolveService]
})
export class CrisisCenterModule {
}
