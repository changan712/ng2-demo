import {Component, OnInit, HostBinding} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HeroService} from "../hero.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    hero: Hero;

    constructor(private  route: ActivatedRoute, private router: Router, private service: HeroService) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.service.getHero(params['id']))
            .subscribe((hero: Hero) => {
                this.hero = hero;
                console.log(this.hero);
            })
    }

    gotoHeroes() {

        this.router.navigate(['/heroes', {id: this.hero.id, foo: 'foo'}],{queryParams:{a:1}});
    }

}
