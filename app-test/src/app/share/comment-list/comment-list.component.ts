import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    @Input() view: Array<any>;

    @Output() commentEvent: EventEmitter<any> = new EventEmitter();
    @Output() userLinkEvent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    toUser(user) {
        this.userLinkEvent.emit(user)
    }

    doComment() {
        this.commentEvent.emit();
    }


}
