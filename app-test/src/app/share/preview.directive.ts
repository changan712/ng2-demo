import {Directive, ElementRef, OnInit, HostListener, Input} from '@angular/core';

import {ModalComponent} from "./modal/modal.component";
import {ModalController, Config} from "ionic-angular";

@Directive({
    selector: '[appPreview]'
})
export class PreviewDirective {

    @Input()
    appPreview: any;

    constructor(private config: Config, private modalCtrl: ModalController) {

        this.config.set('modalEnter', 'modal-md-slide-in');
        this.config.set('modalLeave', 'modal-md-slide-out')
    }


    @HostListener('click')
    clickHandler() {
        this.presentModal();
    }

    presentModal() {
        let modal = this.modalCtrl.create(ModalComponent);
        modal.present();
    }


}
