import {Component, OnInit, ViewChild} from '@angular/core';

import {ResponseHasMeta} from "../../../core/response-has-meta";
import {MenuConfigService} from "../../../core/menu-config";
import {MdDialog} from "@angular/material";
import {ConfirmService} from "../../../shared/comfirm/confirm.service";
import {FeedService} from "../../../resource/feed.service";

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    list = [];
    meta = null;

    currentPage: number;

    constructor(private confirmSv: ConfirmService, private  feedSv: FeedService, private dialog: MdDialog) {


    }

    ngOnInit() {
        this.index();

    }

    index(params?) {
        this.feedSv.index(params).subscribe((res: ResponseHasMeta) => {
                this.list = res.data as  Array<any>;
                this.meta = res.meta;
            }
        )
    }

    pageChange(currentPage) {

        this.currentPage = currentPage;
        if (this.meta.currentPage != this.currentPage) {
            this.list = [];
            this.index({_page: this.currentPage});
        }
    }

    remove(id: number) {

        this.confirmSv.show().then((res) => {
            this.feedSv.remove(id).subscribe((res) => {
                this.index();
            })
        }, (error) => {

        });


    }


}
