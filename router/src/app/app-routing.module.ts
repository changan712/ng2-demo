import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {ComposeMessageComponent} from "./compose-message.component";
import {NotFoundComponent} from "./not-found.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
        data: {preload: true}
    },
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
