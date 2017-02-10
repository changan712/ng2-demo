import {HomeComponent} from "./home/home.component";
import {FeedListComponent} from "./feed/feed-list/feed-list.component";
export const deepLinks = [

    {
        component: HomeComponent, segment: 'home', name: 'home'
    },

    {
        component: FeedListComponent, segment: 'feed', name: 'feed'
    }
];
