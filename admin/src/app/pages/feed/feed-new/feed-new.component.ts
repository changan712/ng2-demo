import {Component, OnInit} from '@angular/core';
import {StateService} from "../../../core/state.service";

@Component({
    selector: 'app-feed-new',
    templateUrl: './feed-new.component.html',
    styleUrls: ['./feed-new.component.scss']
})
export class FeedNewComponent implements OnInit {

    data = {};

    constructor(private  state: StateService) {
    }

    ngOnInit() {

    }


    submit(form) {
            console.dir(form);

    }

    private getGoals() {

    }

}
