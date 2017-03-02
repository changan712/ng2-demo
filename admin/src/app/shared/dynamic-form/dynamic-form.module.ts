import {NgModule} from '@angular/core';

import {DynamicFormComponent} from "./dynamic-form.component";
import {SharedModule} from "../shared.module";
import {DynamicFormControlComponent} from "./dynamic-form-control.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [DynamicFormComponent, DynamicFormControlComponent],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule {
}
