import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    @Input() data = null;

    constructor() {
    }

    ngOnInit() {
    }

}
