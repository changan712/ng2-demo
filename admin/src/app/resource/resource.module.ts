import {NgModule} from '@angular/core';
import {UserService} from "./user.service";
import {FeedService} from "./feed.service";

@NgModule({
    imports: [
    ],
    providers: [
        UserService,
        FeedService
    ],
    declarations: []
})
export class ResourceModule {
}
