
import {HomeComponent} from "../home/home.component";
import {UserService} from "../core/user.service";
import {} from "../feed/feed-list/feed-list.component";
import {FeedListComponent} from "../feed/feed-list/feed-list.component";
import {IonicPage} from "../../../node_modules/ionic-angular/navigation/ionic-page";
import {Component} from "../../../../module-demo/node_modules/@angular/core/src/metadata/directives";










export const TAB_URL_CONFIG = {
    '/app/home': 0,
    '/app/feed': 1
};
 @IonicPage()

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

    constructor(private userSv: UserService,private nav :Nav) {


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