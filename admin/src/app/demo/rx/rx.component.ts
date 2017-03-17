import {
    Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewChildren,
    QueryList
} from '@angular/core';
import {Router} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";
import {VHostDirective} from "../../shared/v-host/v-host.directive";


@Component({
    selector: 'app-rx',

    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss']
})
export class RxComponent implements AfterViewInit {

    tabs = [
        {label: 'basic', content: BasicComponent},
        {label: 'basic2', content: BasicComponent},
    ];

    @ViewChildren(VHostDirective,) vHosts: QueryList<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }


    addComponents() {
        this.tabs.forEach((item, index) => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.content);
            console.log(this.vHosts);
            
            let viewContainerRef = this.vHosts.toArray()[index].viewContainerRef;
            viewContainerRef.clear();
            viewContainerRef.createComponent(componentFactory);
        })
    }


    ngAfterViewInit() {
        this.addComponents();
        console.log((<QueryList<any>>this.vHosts).length);

    }


}
