import {Component, ViewEncapsulation} from '@angular/core';
import {TabComponent} from "./tab/tab.component";


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.scss'],
    encapsulation:ViewEncapsulation.None

})
export class AppComponent {

    root:Component = TabComponent;


    constructor(){

        
    }

}
