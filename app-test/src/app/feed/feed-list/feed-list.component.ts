import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {NavController} from "ionic-angular";
import {FeedDetailComponent} from "../feed-detail/feed-detail.component";

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    feeds: any[] = [];

    constructor(private feedSv: FeedService,private navCtrl:NavController) {
    }

    ngOnInit() {
        this.getFeeds()
    }

    goToDetail(feed) {
        let id = feed.id;
        this.navCtrl.push(FeedDetailComponent,{id:id});

    }

    getFeeds(params?) {
        this.feedSv.index(params).subscribe(res => {
            this.feeds = res;
        })
    }

}
