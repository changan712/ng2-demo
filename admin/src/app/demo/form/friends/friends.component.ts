import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

    @Input() model;

    constructor() {
    }

    ngOnInit() {
    }

}
