import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {ComposeMessageComponent} from './compose-message.component';
import {NotFoundComponent} from './not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ComposeMessageComponent,
        NotFoundComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginRoutingModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
