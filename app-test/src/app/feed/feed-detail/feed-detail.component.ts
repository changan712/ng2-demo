import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
    selector: 'app-feed-detail',
    templateUrl: './feed-detail.component.html',
    styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

    constructor(public  navParams: NavParams) {
    }

    ngOnInit() {

        console.log(this.navParams);

    }

}
