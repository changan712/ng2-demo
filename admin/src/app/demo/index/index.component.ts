import {Component, OnInit} from '@angular/core';


const DEMO_CHILDREN = ['poll','fp','dc','decorator','object','rx'];


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    list = DEMO_CHILDREN;

    constructor() {
    }

    ngOnInit() {
        console.log(this.list);
        
    }

}
