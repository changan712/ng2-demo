import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AdminComponent} from "./admin.component";
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent,AdminComponent,ManageHeroesComponent,ManageCrisesComponent]
})
export class AdminModule { }
