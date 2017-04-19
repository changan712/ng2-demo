import {Injectable} from '@angular/core';
import {Hero} from "./hero";


let HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {

    constructor() {
    }

    getHeroes(): Promise<Array<Hero>> {
        return heroesPromise;
    }

    getHero(id: number|string): Promise<Hero> {
        return heroesPromise.then(res => res.find(res => res.id === +id))
    }

}
