import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroListComponent} from './hero-list/hero-list.component';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule
    ],
    providers: [HeroService],
    declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {
}
