import {Component} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {UserService} from "../core/user.service";
import {FeedListComponent} from "../feed/feed-list/feed-list.component";


@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.scss'],

})

export class TabComponent {


    root = HomeComponent;
    root2 = FeedListComponent;
    root3 = HomeComponent;

    constructor(private userSv: UserService) {


    }


    ionViewCanEnter() {

        return this.userSv.login();
    }

}