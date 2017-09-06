import {Component, OnInit} from '@angular/core';
import {RouterLinkActive, Router, RouterState} from "@angular/router";

const DEMO_CHILDREN = ['form','poll', 'fp', 'dc', 'decorator', 'object', 'rx', 'imooc','upload','ws','rx2'];

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


    list = DEMO_CHILDREN;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        let state: RouterState = this.router.routerState;


    }


}
