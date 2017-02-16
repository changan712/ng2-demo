import {Component, OnInit, Input} from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";


@Component({
    selector: 'app-images-slider',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

    list: Array<string>;

    constructor(private params: NavParams, private viewCtrl: ViewController) {


    }

    ngOnInit() {
        this.list = this.params.get('list')
        console.log(this.list);
        
    }


    ok() {
        this.dismiss()
    }

    cancel() {
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }


}
