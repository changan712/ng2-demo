import {Component, OnInit} from '@angular/core';
import {MenuItem, MenuConfigService} from "../core/menu-config";

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    menuItems: Array<MenuItem>;

    constructor(private menuSv: MenuConfigService) {

    }

    ngOnInit() {
        this.menuItems = this.menuSv.get();
    }

}
