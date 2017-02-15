import {Animation} from 'ionic-angular/animations/animation';
import {isPresent} from 'ionic-angular/util/util';
import {PageTransition} from 'ionic-angular/transitions/page-transition';

const DURATION = 500;
const OPACITY = 'opacity';
const TRANSPARENT = 0;
const OPAQUE = 1;


export class FadeTransition extends PageTransition {


    init() {
        super.init();

        const enteringView = this.enteringView;
        const leavingView = this.leavingView;
        const opts = this.opts;

        this.duration(isPresent(opts.duration) ? opts.duration : DURATION);

        const backDirection = (opts.direction === 'back');

        if (enteringView) {
            const enteringPageEle: Element = enteringView.pageRef().nativeElement;

            const enteringContent = new Animation(this.plt, enteringView.pageRef());
            this.add(enteringContent);

            if (backDirection) {
                enteringContent
                    .fromTo(OPACITY, OPAQUE, OPAQUE, true);
            } else {
                enteringContent
                    .fromTo(OPACITY, TRANSPARENT, OPAQUE, true);
            }

        }
        if (leavingView && leavingView.pageRef()) {
            const leavingPageEle: Element = leavingView.pageRef().nativeElement;

            const leavingContent = new Animation(this.plt, enteringView.pageRef());
            this.add(leavingContent);

            if (backDirection) {
                leavingContent
                    .fromTo(OPACITY, OPAQUE, TRANSPARENT, false);
            } else {
                leavingContent
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false);
            }


        }
    }

}