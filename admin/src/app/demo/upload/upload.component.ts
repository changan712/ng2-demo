import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    onSubmit() {
        let formData:FormData = new FormData();
        

    }

}
