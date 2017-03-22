import {Component, OnInit, HostListener, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {Observable, Observer, Subscriber, Subscription} from "rxjs";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

    constructor() {
    }

    tick: number = 0;
    observer: Observer<any>;
    sub1: Subscriber<any>;
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


    @ViewChild('btn2') btn2;

    ngOnInit() {


        //create;
        this.sub1 = Observable.create((observer: Observer<any>) => {
            this.observer = observer;
        })
            .subscribe((data) => {
                console.log(data);
            });

        //empty
        this.sub2 = Observable.empty()

            .subscribe(data => {
            }, error => {
            }, () => {
                console.log(2);

            });


        //todo 什么时候返回Subscriber 什么时候返回Subscription;
        //range;

        this.sub3 = Observable.range(50, 10).subscribe(num => {
            console.log(num, 'range');

        });


        //interval timer
        this.sub4 = Observable.interval(2000)
            .subscribe((n) => {
                console.log(n, 'interval');

            });

        //from
        this.sub5 = Observable.from(['a', 'b', 'c'])
            .subscribe((d) => {
                console.log(d, 'from');

            });
        //pairs
        this.sub6 = Observable.pairs({
            a: 1, b: 2, c: 3
        }).subscribe((d) => {
            console.log(d, 'pairs');

        });

        //of

        this.sub7 = Observable.of(1, 2, 3, 4, 5, 6)
            .subscribe(d => {
                console.log(d, 'of');

            });


        //just return repeat 已经废弃？

        //fromEvent/fromEventPattern

        this.sub8 = Observable.fromEvent(this.btn2._elementRef.nativeElement, 'click', (e: MouseEvent) => {
            return e.clientX;

        })
            .subscribe(d => {
                console.log(d, 'fromEvent');

            });

        //toArray
        let source = Observable.of(1, 2, 3, 4);
        let target = source.toArray();

        this.sub9 = target.subscribe(d => {
            console.log(d, 'toArray');
        });

        //toMap




    }

    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
        this.sub7.unsubscribe();
        this.sub8.unsubscribe();
        this.sub9.unsubscribe();
        this.sub9.unsubscribe();
        this.sub9.unsubscribe();
    }


    onClick(e) {

        this.observer.next(this.tick++);

    }


}
