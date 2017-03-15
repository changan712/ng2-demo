import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        Object.defineProperty(Object.prototype, '__proto__', {
            get(){
                let _thisObj = Object(this);
                return Object.getPrototypeOf(_thisObj);

            }


        })


    }


}
