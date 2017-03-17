import {
    Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewChildren,
    QueryList
} from '@angular/core';
import {Router} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";
import {VHostDirective} from "../../shared/v-host/v-host.directive";
import {RxJsComponent} from "./rx-js/rx-js.component";
import {ExtendComponent} from "./extend/extend.component";


@Component({
    selector: 'app-rx',

    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss']
})
export class RxComponent implements AfterViewInit {

    tabs = [
        {label: 'basic', content: BasicComponent},
        {label: 'rxJs', content: RxJsComponent},
        {label: 'extend', content: ExtendComponent},
    ];

    activeIndex: number = 2;

    @ViewChildren(VHostDirective) vHosts: QueryList<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }


    addComponents() {
        this.tabs.forEach((item, index) => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>item.content);
            let viewContainerRef = this.vHosts.toArray()[index].viewContainerRef;
            viewContainerRef.clear();
            viewContainerRef.createComponent(componentFactory);
        })
    }


    ngAfterViewInit() {
        this.addComponents();

    }


}
