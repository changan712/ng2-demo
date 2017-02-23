import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {ResponseHasMeta} from "../../../core/response-has-meta";
import {MenuConfigService} from "../../../core/menu-config";

@Component({
    selector: 'app-feed-list',
    templateUrl: './feed-list.component.html',
    styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    list = [];
    meta = null;

    constructor(private  feedSv: FeedService,private menuConfig:MenuConfigService) {

        
    }

    ngOnInit() {
        this.feedSv.index().subscribe((res: ResponseHasMeta) => {
            console.log(res);

                this.list = this.list.concat(res.data);
                this.meta = res.meta;
            }
        )

    }


}
