import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "../auth.guard";
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";

const routes: Routes = [
    {
        path:'',
        component:AdminComponent,
        canActivate:[AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
