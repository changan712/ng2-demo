import {
    Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewChildren,
    QueryList
} from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";
import {VHostDirective} from "../../shared/v-host/v-host.directive";
import {RxJsComponent} from "./rx-js/rx-js.component";
import {ExtendComponent} from "./extend/extend.component";
import {CreateComponent} from "./create/create.component";
import {TransformComponent} from "./transform/transform.component";
import {FilterComponent} from "./filter/filter.component";
import {ComposeComponent} from "./compose/compose.component";
import {ErrorComponent} from "./error/error.component";


@Component({
    selector: 'app-rx',

    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss']
})
export class RxComponent implements AfterViewInit,OnInit {

    tabs = [
        {label: 'basic', content: BasicComponent},
        {label: 'rxJs', content: RxJsComponent},
        {label: 'extend', content: ExtendComponent},
        {label: 'create', content: CreateComponent},
        {label: 'transform', content: TransformComponent},
        {label: 'filter', content: FilterComponent},
        {label: 'compose', content: ComposeComponent},
        {label: 'error', content: ErrorComponent},
    ];

    activeIndex: string|number = 0;

    @ViewChildren(VHostDirective) vHosts: QueryList<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private aRoute: ActivatedRoute, private router: Router) {


    }

    ngOnInit() {
       // console.log(this.aRoute);
        
        this.aRoute.fragment.subscribe(n => {
            if (n)
                this.activeIndex = parseInt(n);
        })
    }

    selectChange(e) {
        this.router.navigate([], <NavigationExtras>{
            fragment: e
        });
        this.clearComponentsInTab();
        this.addComponents(e);

    }

    clearComponentsInTab() {
        this.vHosts.toArray().forEach(item => {
            item.viewContainerRef.clear();
        })
    }


    addComponents(activeIndex) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>this.tabs[activeIndex].content);
        let viewContainerRef = this.vHosts.toArray()[activeIndex].viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
    }


    ngAfterViewInit() {
        this.router.navigate([], <NavigationExtras>{
            fragment: this.activeIndex
        });
        this.addComponents(this.activeIndex);

    }


}
