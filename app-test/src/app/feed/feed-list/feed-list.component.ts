import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {NavController, ModalController} from "ionic-angular";
import {FeedDetailComponent} from "../feed-detail/feed-detail.component";
import {CommentComponent} from "../../share/comment/comment.component";


@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    feeds: any[] = [];

    commentMod: boolean = false;

    constructor(private feedSv: FeedService, private modalCtrl: ModalController, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.getFeeds()
    }

    goToDetail(feed) {
        let id = feed.id;
        this.navCtrl.push(FeedDetailComponent, {id: id});

    }

    goToUserHome(user) {
        //todo user home;
        console.log(user);

    }

    comment(feed) {

        let modal = this.modalCtrl.create(CommentComponent, {target: feed});
        modal.present();
        modal.onDidDismiss(data => {
            if (data) {
                this.feedSv.comment(feed.id, data).subscribe((res) => {
                    feed.comments.data.unshift(res);
                    feed.comments.count++;
                });
            }
        })
    }


    getFeeds(params ?) {
        this.feedSv.index(params).subscribe(res => {
            this.feeds = res;
        })
    }

}
