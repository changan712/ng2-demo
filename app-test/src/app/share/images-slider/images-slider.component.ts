import {Component, OnInit, Input} from '@angular/core';
import {ComponentDynamic} from "../component-dynamic";

@Component({
    selector: 'app-images-slider',
    templateUrl: './images-slider.component.html',
    styleUrls: ['./images-slider.component.scss']
})
export class ImagesSliderComponent implements ComponentDynamic {

   public  params: any;


    constructor() {
    }



}
