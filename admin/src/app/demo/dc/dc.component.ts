import {Component, OnInit, Input, ViewChild, AfterViewInit, ComponentFactoryResolver} from '@angular/core';
import {AdItem} from "./ad-item";
import {AdDirective} from "./ad.directive";

@Component({
    selector: 'app-dc',
    templateUrl: './dc.component.html',
    styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit,AfterViewInit {

    @Input() ads: Array<AdItem>;

    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    subscription: any;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

    loadComponent() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAddIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000)
    }

}
