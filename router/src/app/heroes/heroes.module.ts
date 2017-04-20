import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroListComponent} from './hero-list/hero-list.component';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    providers: [HeroService],
    declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {
}
