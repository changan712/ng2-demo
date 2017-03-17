import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";


@Component({
    selector: 'app-rx',

    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

    tabs = [
        {basic:BasicComponent}
    ]

    constructor(){

    }


    ngOnInit(){

    }


}
