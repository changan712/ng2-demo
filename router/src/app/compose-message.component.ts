import {Component, OnInit, HostBinding} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-compose-message',
    templateUrl: './compose-message.component.html',
    styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

    //@HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    sending: boolean = false;
    details: string = '';

    constructor(private  router: Router) {
    }

    send() {
        this.sending = true;
        this.details = 'send message..';
        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000)

    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        this.router.navigate([{outlets: {popup: null}}]);
    }

    ngOnInit() {
    }

}
