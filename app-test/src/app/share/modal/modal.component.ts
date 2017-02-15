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

    @Input()
    okButtonText: string = '确定';

    @Input()
    title: string;

    @Input()
    toolbarColor: string = 'dark';

    constructor(private viewCtrl: ViewController) {


    }

    ok() {

    }

    cancel() {
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

    ngOnInit() {
    }

}
