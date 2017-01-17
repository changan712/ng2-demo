import {Component, OnInit, Input } from '@angular/core';
import {UserService} from "../user.service";

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    private title: string = 'ng module';
    @Input() subTitle: string = '';

    constructor(private  user: UserService) {


    }

    ngOnInit() {
    }

}
