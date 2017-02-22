import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-not-find',
    templateUrl: './not-find.component.html',
    styleUrls: ['./not-find.component.scss']
})
export class NotFindComponent implements OnInit {

    constructor(private  location: Location, private router: Router) {
    }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    goHome() {
        this.router.navigateByUrl('pages/index')
    }

}
