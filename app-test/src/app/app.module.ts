import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";

import {TabModule} from "./tab/tab.modlue";
import {RouterModule} from "@angular/router";
import {IonicModule, IonicApp} from "ionic-angular";
import {TabComponent} from "./tab/tab.component";

import {CoreModule} from "./core/core.module";


import './rxjs-extensions';
import {deepLinks} from "./core/deepLinks";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        IonicModule.forRoot(AppComponent, {}, {
            links: deepLinks
        }),
        TabModule
    ],

    providers: [],
    bootstrap: [IonicApp],
    entryComponents: [
        TabComponent
    ]
})
export class AppModule {
}
