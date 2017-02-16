import {Directive, ElementRef, OnInit, HostListener, Input} from '@angular/core';

import {ModalComponent} from "./modal/modal.component";
import {ModalController, Config} from "ionic-angular";
import {ImagesSliderComponent} from "./images-slider/images-slider.component";

@Directive({
    selector: '[appPreview]'
})
export class PreviewDirective {




    constructor(private config: Config, private modalCtrl: ModalController) {

        this.config.set('modalEnter', 'modal-md-slide-in');
        this.config.set('modalLeave', 'modal-md-slide-out')
    }


    @HostListener('click')
    clickHandler() {
        this.presentModal();
    }

    presentModal() {
        let modal = this.modalCtrl.create(ModalComponent, {title: '预览', childComponent:ImagesSliderComponent});
        modal.present();
    }


}
