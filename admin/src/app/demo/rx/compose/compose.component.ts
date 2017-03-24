import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";

@Component({
    selector: 'app-compose',
    templateUrl: './compose.component.html',
    styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit,OnDestroy {

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


    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
        this.sub7.unsubscribe();
    }

    ngOnInit() {

        this.chips.push('buffer');
        this.sub1 = Observable.timer(0, 2000)
            .buffer(Observable.timer(0, 6000))
            .subscribe(d => {
                console.log(d, 'buffer');
            });

        this.chips.push('bufferCount');
        this.sub2 = Observable.timer(0, 2000)
            .bufferCount(3)
            .subscribe(d => {
                console.log(d, 'bufferCount');
            });

        this.chips.push('bufferTime');
        this.sub3 = Observable.timer(0, 2000)
            .bufferTime(4000)
            .subscribe(d => {
                console.log(d, 'bufferTime');
            });


        this.chips.push('groupBy');
        this.sub4 = Observable.timer(0, 1000)
            .groupBy((item) => item % 2)
            .subscribe(d => {
                console.log(d, 'groupBy');
                d.subscribe(dd => {
                    console.log(dd, 'groupByInner');
                })
            });


        this.chips.push('concat');
        this.sub5 = Observable.of(1, 2, 3)
            .concat(Observable.of(2, 3, 5),
                Observable.of('a', 'bc', 'c')
            )
            .subscribe(d => {
                console.log(d, 'concat');
            });

        this.chips.push('startWith');
        this.sub6 = Observable.of(1, 2, 3)
            .startWith(222)

            .subscribe(d => {
                console.log(d, 'startWith');
            });

        this.chips.push('zip');
        this.sub7 = Observable.zip(Observable.of(1, 2, 3), Observable.of('a', 'b', 'c'), Observable.of('A', 'B', 'C'), (...d) => {
                let str = '';
                for (let dd of d) {
                    str = str + dd + '_';
                }
                return str;
            }
        )  .subscribe(d => {
            console.log(d, 'zip');
        });


        /*  this.chips.push('window');
         this.sub4 = Observable.timer(0, 1000)
         .window(Observable.timer(1000))
         .subscribe(d => {
         console.log(d, 'window');
         })
         */

    }

}
