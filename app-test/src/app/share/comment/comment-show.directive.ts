import {Directive, ElementRef, OnInit, Renderer} from '@angular/core';
import {StatusService} from "../../core/status.service";

@Directive({
    selector: '[appCommentShow]'
})
export class CommentShowDirective implements OnInit {

    constructor(private status: StatusService, private  eleRf: ElementRef, private  renderer: Renderer) {

    }

    ngOnInit() {
        let value = this.status.commentMod ? 100 : 0;
        console.log(value);

        this.renderer.setElementStyle(this.eleRf.nativeElement, 'bottom', `${value}px`)

    }

}
