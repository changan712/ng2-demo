import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Observable, Subscription, Observer} from "rxjs";
import {MdButton} from "@angular/material";


export  interface  ZipData {
    item: Object,
    index: number
}

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,OnDestroy {


    @ViewChild('input1') private input1: ElementRef;
    // read  https://stackoverflow.com/questions/41978053/in-angular-2-how-do-you-specify-that-the-native-element-should-be-bound-to-the
    @ViewChild('btnAdd', {read: ElementRef}) private btnAdd: ElementRef;

    zipData: ZipData;
    subCombineLatest: Subscription;
    subZip: Subscription;

    clock$: Observable<number>;

    constructor() {
    }

    ngOnDestroy(): void {
        this.subCombineLatest.unsubscribe();
        this.subZip.unsubscribe();
    }


    ngOnInit() {
        //combineLatest
        let input$: Observable<string> = Observable.fromEvent(this.input1.nativeElement, 'keyup')
            .pluck('target', 'value');


        console.log(this.btnAdd);


        let click$: Observable<string> = Observable.fromEvent(this.btnAdd.nativeElement, 'click')
            .mapTo('click');

        this.subCombineLatest = Observable.combineLatest(input$, click$,
            (ev, input) => {
                return {
                    ev,
                    input
                }
            })
            .subscribe(value => {
                console.log(value);

            })

        //zip

        let data$ = Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        let interval$ = Observable.interval(1000);

        this.subZip = Observable.zip(data$, interval$, (item, index) => {
            return {
                item: {data: item},
                index
            }
        }).subscribe((data: ZipData) => {
                this.zipData = data
            }
        );
        //clock


        this.clock$ = Observable.create((observer: Observer<any>) => {
            Observable.interval(1000).subscribe(() => {
                observer.next(Date.now());
            })
        })


    }

}
