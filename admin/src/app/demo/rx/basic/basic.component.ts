import {Component, OnInit} from '@angular/core';
import {Observer, Observable} from "./basic";

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
    observer: Observer;

    constructor() {
    }

    ngOnInit() {
        let tickStream = new Observable((observer: Observer) => {
            this.observer = observer;
        });

        let ob = new Observer((data) => {
            console.log(data);

        });


        tickStream.subscribe(ob);

    }

    clickHdl() {
        let t = new Date();
        this.observer.onNotify(t);
    }

    setTime() {


    }

}
