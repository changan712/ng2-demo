import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ComposeMessageComponent } from './compose-message.component';
import { NotFoundComponent } from './not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeresComponent } from './manage-heres/manage-heres.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComposeMessageComponent,
    NotFoundComponent,
    HeroDetailComponent,
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeresComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
