import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroList,heroDetailComponent } from './hero-list,hero-detail/hero-list,hero-detail.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [HeroListComponent, HeroList,heroDetailComponent, HeroDetailComponent]
})
export class HeroesModule { }
