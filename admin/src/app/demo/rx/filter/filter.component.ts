import {Component, OnInit} from '@angular/core';
import {Subscription, Observable} from "rxjs";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


    sub1: Subscription;
    sub2: Subscription;
    sub3: Subscription;
    sub4: Subscription;
    sub5: Subscription;
    sub6: Subscription;
    sub7: Subscription;
    sub8: Subscription;
    sub9: Subscription;
    sub10: Subscription;
    sub11: Subscription;

    chips: Array<string> = [];

    constructor() {
    }

    ngOnInit() {

        //filter
        this.chips.push('filter');
        this.sub1 = Observable.of(1, 2, 3, 4, 5, 6)
            .filter(d => d < 5)
            .subscribe(d => {
                console.log(d, 'filter');

            });

        //skip
        this.chips.push('skip');
        this.sub2 = Observable.of(1, 2, 3, 4, 5, 6)
            .skip(2)
            .subscribe(d => {
                console.log(d, 'skip');

            });

        //take
        this.chips.push('take');
        this.sub3 = Observable.of(1, 2, 3, 4, 5, 6)
            .take(3)
            .subscribe(d => {
                console.log(d, 'take');

            });


        this.chips.push('skip');
        this.sub4 = Observable.timer(0,1000)

            .subscribe(d => {
                console.log(d, 'timer');

            });


    }

}
