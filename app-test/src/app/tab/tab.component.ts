import {Component} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {UserService} from "../core/user.service";
import {FeedListComponent} from "../feed/feed-list/feed-list.component";
import {Nav, DeepLinker} from "ionic-angular";


export const TAB_URL_CONFIG = {
    '/app/home': 0,
    '/app/feed': 1
};

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

    constructor(private userSv: UserService, private deepLinker: DeepLinker) {


    }

    ngOnInit() {
        let path = this.deepLinker._location.path();
        this.indexActive = this.getTabIndex(path);

    }

    //todo 暂时如此解决了
    private  getTabIndex(path: string = ''): number {
        return TAB_URL_CONFIG[path] > -1 ? TAB_URL_CONFIG[path] : 0;
    }

    ionViewCanEnter() {

        return this.userSv.login();
    }

}