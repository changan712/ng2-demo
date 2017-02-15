import {Directive, ElementRef, OnInit, HostListener} from '@angular/core';

import {ModalComponent} from "./modal/modal.component";
import {ModalController} from "ionic-angular";

@Directive({
    selector: '[appPreview]'
})
export class PreviewDirective {

    constructor(private ele: ElementRef,private modalCtrl:ModalController) {
    }

    @HostListener('click')
    clickHandler() {
        this.presentModal()
    }


    presentModal() {
        let modal = this.modalCtrl.create(ModalComponent,{},{enterAnimation:'fade-in'});
        modal.present();

    }


}
