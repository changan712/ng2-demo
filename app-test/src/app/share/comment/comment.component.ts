import {
    Component, OnInit, Output, EventEmitter, ViewChild, Renderer, ElementRef,
    AfterViewChecked
} from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit,AfterViewChecked {

    content: string = '';


    @ViewChild('textarea') textArea: ElementRef;

    @Output()
    msg: EventEmitter<string> = new EventEmitter();


    target: any;

    constructor(private viewCtrl: ViewController, private params: NavParams, private renderer: Renderer,) {
        this.target = params.get('target');
    }


    ngOnInit() {

        this.content = this.target.tmpComment;
        this.textArea.nativeElement.focus();

    }


    ngAfterViewChecked() {
        this.setHeight();
    }


    setHeight() {
        let scrollHeight = this.textArea.nativeElement.scrollHeight;
        this.renderer.setElementStyle(this.textArea.nativeElement, 'height', `${scrollHeight}px`);

    }

    hide() {
        this.dismiss();
        this.target.tmpComment = this.content;
    }

    dismiss(data?: string|Object) {
        this.viewCtrl.dismiss(data);

    }

    send() {
        let _content = this.content && this.content.trim();
        if (_content.length) {
            this.msg.emit(_content);
            this.dismiss({info: _content})
        }

    }

}
