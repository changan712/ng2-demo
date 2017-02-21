import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateService} from "./state.service";
import {MenuConfigService} from "./menu-config";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [StateService, MenuConfigService],

})
export class CoreModule {
}
