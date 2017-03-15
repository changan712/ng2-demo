import {NgModule} from '@angular/core';
import {UserService} from "./user.service";
import {FeedService} from "./feed.service";
import {CommonService} from "./common.service";

@NgModule({
    imports: [
    ],
    providers: [
        UserService,
        FeedService,
        CommonService,
    ],
    declarations: []
})
export class ResourceModule {
}
