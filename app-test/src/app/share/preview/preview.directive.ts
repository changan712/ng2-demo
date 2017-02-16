import {Directive, ElementRef, OnInit, HostListener, Input} from '@angular/core';

import {ModalController, Config} from "ionic-angular";
import {PreviewComponent} from "./preview.component";

@Directive({
    selector: '[appPreview]'
})
export class PreviewDirective {

    @Input()
    appPreview: Array<any>;

    constructor(private config: Config, private modalCtrl: ModalController) {

        this.config.set('modalEnter', 'modal-md-slide-in');
        this.config.set('modalLeave', 'modal-md-slide-out')
    }


    @HostListener('click',['$event'])
    clickHandler(event) {
        console.log(event);

        this.presentModal();
    }

    presentModal() {
        
        let modal = this.modalCtrl.create(PreviewComponent, this.appPreview);
        modal.present();
    }


}
