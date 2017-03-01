import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {FeedService} from "../../../resource/feed.service";


@Component({
    selector: 'app-feed-detail',
    templateUrl: './feed-detail.component.html',
    styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

    detail = null;

    constructor(private feedSv: FeedService, private aRouter: ActivatedRoute) {
    }

    ngOnInit() {
        this.aRouter.params.subscribe(params => {
            this.getDetail(params['id'])
        })
    }

    getDetail(id) {
        this.feedSv.view(id).subscribe(res => {
            this.detail = res;
        })

    }

}
