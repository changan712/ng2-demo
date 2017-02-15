import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-images-view',
    templateUrl: './images-view.component.html',
    styleUrls: ['./images-view.component.scss']
})
export class ImagesViewComponent implements OnInit {

    @Input()
    images: Array<Object>;

    @Input()
    noWrap: boolean = false;

    constructor() {
    }


    ngOnInit() {
    }

}
