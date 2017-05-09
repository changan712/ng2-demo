import {Component} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {UserService} from "../core/user.service";
import {FeedListComponent} from "../feed/feed-list/feed-list.component";




export const TAB_URL_CONFIG = {
    '/app/home': 0,
    '/app/feed': 1
};
/*
 @IonicPage()*/
@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.scss'],

})

export class TabComponent {

    indexActive: number = 0;

    root = HomeComponent;
    root2 = FeedListComponent;
    root3 = HomeComponent;

    constructor(private userSv: UserService, private nav: Nav) {


    }

    ngOnInit() {

        this.indexActive = this.getTabIndex();

    }

    //todo 暂时如此解决了
    private  getTabIndex(path: string = ''): number {
        return TAB_URL_CONFIG[path] > -1 ? TAB_URL_CONFIG[path] : 0;
    }

    ionViewCanEnter() {

        return this.userSv.login();
    }

}