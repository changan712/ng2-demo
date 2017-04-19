import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

    heroes: Observable<Array<Hero>>;
    private selectedId: number =11;

    constructor(private service: HeroService, private route: ActivatedRoute, private router: Router) {
    }

    isSelected(hero: Hero) {
        return hero.id == this.selectedId;
    }

    onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }

    ngOnInit() {
        this.heroes = this.route.params
            .switchMap((params: Params) => {
                //todo selectedId 是和用处
                this.selectedId = +params.id;
                return this.service.getHeroes();
            })
    }

}
