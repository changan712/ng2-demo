import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TabModule} from "./tab/tab.modlue";
import {IonicModule, IonicApp, Config} from "ionic-angular";
import {TabComponent} from "./tab/tab.component";
import {CoreModule} from "./core/core.module";

import './rxjs-extensions';
import {deepLinks} from "./deepLinks";
import {PublicComponent} from './public/public.component';
import {FadeTransition} from "./share/page-transition";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        CoreModule,
        IonicModule.forRoot(AppComponent, {
            iconMode: 'ios',
            locationStrategy:'path'

        }, {
            links: deepLinks,

        })

    ],

    providers: [],
    bootstrap: [IonicApp],
    entryComponents: [
        TabComponent,
        PublicComponent,
    ]
})
export class AppModule {

    constructor(private  config: Config) {
        this.config.setTransition('fade-transition', FadeTransition);
    }
}
