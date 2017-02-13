import {HomeComponent} from "./home/home.component";
import {FeedListComponent} from "./feed/feed-list/feed-list.component";
import {PublicComponent} from "./public/public.component";
import {FeedDetailComponent} from "./feed/feed-detail/feed-detail.component";
export const deepLinks = [

    {
        component: HomeComponent, segment: 'home', name: 'home'
    },

    {
        component: FeedListComponent, segment: 'feed', name: 'feed'
    },
    {
        component: FeedDetailComponent, segment: 'feed/:id', name: 'feedDetail'
    },
    {
        component: PublicComponent, segment: 'public', name: 'public'
    }
];
