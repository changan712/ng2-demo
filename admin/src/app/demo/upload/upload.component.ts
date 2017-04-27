import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from "ng2-file-upload";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
    private URL: string = '/';
    uploader: FileUploader = new FileUploader({url: this.URL});

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.uploader.uploadAll();

    }

}
