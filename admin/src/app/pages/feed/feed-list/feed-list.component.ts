import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {ResponseHasMeta} from "../../../core/response-has-meta";
import {MenuConfigService} from "../../../core/menu-config";
import {MdDialog} from "@angular/material";
import {ConfirmService} from "../../../shared/comfirm/confirm.service";

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    list = [];
    meta = null;

    constructor(private confirmSv:ConfirmService,private  feedSv: FeedService, private dialog: MdDialog) {


    }

    ngOnInit() {
        this.feedSv.index().subscribe((res: ResponseHasMeta) => {
                console.log(res);

                this.list = this.list.concat(res.data);
                this.meta = res.meta;
            }
        )

    }

    remove(id: number) {

        this.confirmSv.show().then(function () {
            console.log(1);
            
        });

      /*  this.feedSv.remove(id).subscribe((res: ResponseHasMeta) => {

        })*/
    }


}
