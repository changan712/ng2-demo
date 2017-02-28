import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import './rxjs-extensions'

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";

import {PagesModule} from "./pages/pages.module";
import {MaterialModule} from "@angular/material";
import {CoreModule} from "./core/core.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";


@NgModule({
    declarations: [
        AppComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        PagesModule,
        MaterialModule,
        routing
    ],

    bootstrap: [AppComponent]
})


export class AppModule {
}
