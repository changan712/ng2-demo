import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from "ng2-file-upload";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
    private URL: string = '/upload/upload';
    uploader: FileUploader = new FileUploader({url: this.URL});

    constructor(private http: Http) {
    }

    ngOnInit() {

        this.http.get(this.URL).subscribe((res)=>{
            console.log(res);

        })

    }

    onSubmit() {
        this.uploader.uploadAll();

    }

}
