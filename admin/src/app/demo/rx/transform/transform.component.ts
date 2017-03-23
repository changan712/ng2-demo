import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Subscriber, Observable} from "rxjs";
import {IScheduler} from "rxjs/Scheduler";

@Component({
    selector: 'app-transform',
    templateUrl: './transform.component.html',
    styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit,OnDestroy {

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

    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
    }

    constructor() {
    }

    ngOnInit() {
        //delay
        this.sub1 = Observable.of(1, 2, 3, 4)
            .delay(1000)

            .subscribe(d => {
                console.log(d, 'delay');
            });

        //timeInterval  生成：
        /*  {
         value: ...   //源序列中对应元素的值
         interval: ... //与前一个元素的时间间隔
         }*/
        this.sub2 = Observable.timer(0, 1000)
            .take(10)
            .timeInterval()
            .subscribe(d => {
                console.log(d, 'timeInterval');

            });


        //map
        this.sub3 = Observable.of(1, 2, 3, 4)
            .map(d => {
                return d * 1000;
            })
            .subscribe(d => {
                console.log(d, 'map');

            });
        //pluck;
        this.sub4 = Observable.of({name: 'viola', age: 22}, {name: 'yuyang', age: 35})

            .pluck('name')
            .subscribe(d => {
                console.log(d, 'pluck_____');
            });

        //flatMap

        this.sub5 = Observable.of(1, 2, 3, 4)

            .flatMap(item => {
                console.log(item);

                return Observable.range(item, 2)
            })
            .subscribe(d => {
                console.log(d, 'flatMap');
            });
        //reduce
        this.sub6 = Observable.of(1, 2, 3, 4)
            .reduce((acc, item) => {
                return acc * item;
            })
            .subscribe(d => {
                console.log(d, 'reduce__________');
            });

        //count
        this.sub7 = Observable.of(1, 2, 3, 4)
            .count()
            .subscribe(d => {
                console.log(d, 'count__________');
            });
        //max
        this.sub7 = Observable.of(1, 2, 3, 4)
            .max()
            .subscribe(d => {
                console.log(d, 'max__________');
            });


    }


}
