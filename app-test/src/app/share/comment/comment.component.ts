import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    content: string = '';

    @Output()
    msg: EventEmitter<string> = new EventEmitter();

    constructor() {
    }


    ngOnInit() {
    }

    send() {
        let _content = this.content.trim();
        if (_content.length) {
            this.msg.emit(_content);
        }
    }

}
