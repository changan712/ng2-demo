import {Component, OnInit} from '@angular/core';

import {Functor, Maybe, Ap} from  './fp';
import {ComponentWithTitle} from "../component-with-title";


@Component({
    selector: 'app-fp',
    templateUrl: './fp.component.html',
    styleUrls: ['./fp.component.scss']
})
export class FpComponent implements OnInit,ComponentWithTitle {

    title = 'fp';

    Functor: string = `
    export class Functor {

        constructor(public  val) {
    
        }
    
        map(f) {
             return new Functor(f(this.val));
        }
    
        static  of(val) {
             return new Functor(val)
        }
    }`;

    constructor() {
    }

    ngOnInit() {
        console.log(Functor.of('a').map(s => s.toUpperCase()));
        console.log(Maybe.of('b').map(s => s.toUpperCase()));

        let add = x => y => x + y;

        console.log(Ap.of(add).ap(Functor.of(2)).ap(Functor.of(3)));


    }


}
