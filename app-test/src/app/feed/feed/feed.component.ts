import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    @Input() view = null;

    @Output()
    detailClicked = new EventEmitter();

    @Output()
    userClicked = new EventEmitter;

    @Output()
    commentEvent: EventEmitter<any> = new EventEmitter();


    constructor() {
    }

    ngOnInit() {


    }


    toUser(user) {
        this.userClicked.emit(user)
    }

    doComment() {
        this.commentEvent.emit(this.view);
    }


    toggleLike() {

        this.view.liked = !this.view.liked;
    }

    starrClick() {
        this.detailClicked.emit(this.view)
    }

}
