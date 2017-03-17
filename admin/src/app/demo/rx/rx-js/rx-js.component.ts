import {Component, OnInit, OnDestroy} from '@angular/core';

import {Subscriber, Observable} from "rxjs";

@Component({
    selector: 'app-rx-js',
    templateUrl: './rx-js.component.html',
    styleUrls: ['./rx-js.component.scss']
})
export class RxJsComponent implements OnInit,OnDestroy {

    unSubscribeStream: Subscriber<any>;
    subscriber: Subscriber<any>;
    tick: number = 0;

    constructor() {
    }

    clickHdl() {
        this.subscriber.next(this.tick ++);
    }

    ngOnInit() {
        let tickStream = Observable.create((subscriber) => {
            this.subscriber = subscriber

        });

        this.unSubscribeStream = tickStream
        //过滤掉奇数;
            .filter(data => !(data % 2))


            .subscribe(data => {
                console.log(data);

            }, error => {
                console.log(error);

            }, () => {
                console.log('done');

            });


    }

    ngOnDestroy() {

        this.unSubscribeStream.unsubscribe();


    }

}
