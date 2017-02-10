import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    feeds: any[] = [];

    constructor(private feedSv: FeedService) {
    }

    ngOnInit() {
        this.getFeeds()
    }

    getFeeds(params?) {
        this.feedSv.index(params).subscribe(res => {
            this.feeds = res;
        })
    }

}
