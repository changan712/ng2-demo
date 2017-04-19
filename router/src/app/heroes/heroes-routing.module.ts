import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
    {path: 'heroes', component: HeroListComponent},
    {path: 'hero',redirectTo:'heroes',pathMatch:'full'},
    {path: 'hero/:id', component: HeroDetailComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {
}
