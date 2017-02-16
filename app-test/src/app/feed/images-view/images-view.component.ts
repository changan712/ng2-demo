import {Component, OnInit, Input} from '@angular/core';
import {PreviewParams} from "../../share/preview/preview-params";

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

    previewParams: PreviewParams;
    appPreviewIndex:number=0;

    constructor() {
    }


    ngOnInit() {
        console.log(this.images);
        
        this.previewParams = {list: this.images.map(item => {
            return item['full_href']

        })};
    }

}
