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

    constructor() {
    }

    ngOnInit() {
        console.log(this.view);


    }

    starrClick() {
        this.detailClicked.emit(this.view)
    }

}
