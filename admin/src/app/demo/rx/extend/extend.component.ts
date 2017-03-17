import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-extend',
    templateUrl: './extend.component.html',
    styleUrls: ['./extend.component.scss']
})
export class ExtendComponent implements OnInit {

    @ViewChild('btn') btn;
    @ViewChild('input') input;

    constructor() {
    }

    ngOnInit() {

        Observable.fromEvent(this.input.nativeElement, 'keyup')
            .subscribe((data) => {
                console.log(this.input.nativeElement.value);
            });

        Observable.fromEvent(this.btn._elementRef.nativeElement, 'click')

            .subscribe(data => {
                console.log(data);

            })


        console.dir(Observable);

    }

}
