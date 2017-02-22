import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
export const routes: Routes = [
   /* {path: '', redirectTo: 'pages/index', pathMatch: 'full'},*/
    {path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule'},
  /*  {path: '**', redirectTo: '404'}*/

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);  // { useHash: true }