import {NgModule} from '@angular/core';

import {FpComponent} from './fp/fp.component';
import {DemoComponent} from './demo.component';
import {SharedModule} from "../shared/shared.module";
import {routing} from "./demo.routing";
import {PollComponent} from "./poll/poll.component";
import {IndexComponent} from "./index/index.component";
import {DynamicFormModule} from "../shared/dynamic-form/dynamic-form.module";
import {AdDirective} from "./dc/ad.directive";
import {DcComponent} from "./dc/dc.component";
import {DecoratorComponent} from "./decorator/decorator.component";
import {ObjectComponent} from './object/object.component';
import {UploadComponent} from './upload/upload.component';
import {FileUploadModule} from "ng2-file-upload";
import {WsComponent} from './ws/ws.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FriendsComponent } from './form/friends/friends.component';

@NgModule({
    imports: [
        SharedModule,
        DynamicFormModule,
        FileUploadModule,
        ReactiveFormsModule,
        routing,

    ],
    entryComponents: [],
    declarations: [DemoComponent, FpComponent, PollComponent, IndexComponent, DcComponent, DecoratorComponent, AdDirective, ObjectComponent, UploadComponent, WsComponent, FormComponent, FriendsComponent]
})
export class DemoModule {


}
