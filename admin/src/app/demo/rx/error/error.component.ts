import {Component, OnInit} from '@angular/core';
import {Subscription, Observable, Subscriber} from "rxjs";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

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

    }

    ngOnInit() {
        this.chips.push('catch');

        this.sub1 = Observable.create(function (o: Subscriber<any>) {
            o.next(1);
            o.next(2);
            o.error('observable error');
            o.next(3);
        })
            .catch(e =>
                Observable.from('abc')
            )

            .subscribe(d => {
                console.log(d, 'catch');
            }, e => {
                console.error(e);
            });


        this.chips.push('retry');

        this.sub2 = Observable.create(function (o: Subscriber<any>) {
            o.next(1);
            o.next(2);
            o.error('observable error');
            o.next(3);
        })
            //重试两次然后还是错误后 抛出错误；
            .retry(2)

            .subscribe(d => {
                console.log(d, 'retry');
            }, e => {
                console.error(e);
            })

    }

}
