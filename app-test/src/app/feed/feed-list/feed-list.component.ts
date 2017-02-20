import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {NavController, ModalController} from "ionic-angular";
import {FeedDetailComponent} from "../feed-detail/feed-detail.component";
import {CommentComponent} from "../../share/comment/comment.component";
import {ResponseHasMeta} from "../../share/response-has-meta";


@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    feeds: Array<any>;

    commentMod: boolean = false;
    meta = null;

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


    doInfinite(infiniteScroll) {
        this.getFeeds({_page: this.meta.currentPage + 1}, true).then(() => {
                infiniteScroll.complete();
            }
        );
    }

    doComment(feed) {

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


    toggleLike(feed) {
        feed.liked = !feed.liked;
    }

    getFeeds(params?, isAdded = false) {
        //因为要链式调用所以暂时用promise;
        return this.feedSv.index(params).toPromise().then((res: ResponseHasMeta) => {
            this.meta = JSON.parse(res.meta);

            if (!isAdded) {
                return this.feeds = res.data as Array<any>;
            } else {
                return this.feeds = this.feeds.concat(res.data);
            }

        })
    }

}
