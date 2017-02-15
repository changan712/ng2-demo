import {Component, OnInit, Input} from '@angular/core';
import {ViewController} from "ionic-angular";


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input()
    content: Component;

    constructor(private viewCtrl: ViewController) {
        

        
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

    ngOnInit() {
    }

}
