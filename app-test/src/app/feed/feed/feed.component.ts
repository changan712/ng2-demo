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
    commentEvent: EventEmitter<any> = new EventEmitter();


    constructor() {
    }

    ngOnInit() {


    }

    doComment() {
        this.commentEvent.emit({id: this.view.id});
    }


    toggleLike() {
        console.log(2);
        console.log(this.view.liked);

        this.view.liked = !this.view.liked;
    }

    starrClick() {
        this.detailClicked.emit(this.view)
    }

}
