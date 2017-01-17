import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from "./title/title.component";
import {UserService, UserServiceConfig} from "./user.service";



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TitleComponent,],
    exports: [TitleComponent],
    providers: [UserService,]
})
export class CoreModule {

    static forRoot(config: UserServiceConfig): ModuleWithProviders {

        return {
            ngModule: CoreModule,
            providers: [
                {provide: UserServiceConfig, useValue: config}
            ]
        }

    }
}
