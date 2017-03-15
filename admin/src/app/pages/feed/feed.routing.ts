import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FeedListComponent} from "./feed-list/feed-list.component";
import {FeedDetailComponent} from "./feed-detail/feed-detail.component";
import {FeedNewComponent} from "./feed-new/feed-new.component";
export const routes: Routes = [
    {path: '', component:FeedListComponent, pathMatch: 'full'},
    {path: 'new', component:FeedNewComponent},
    {path: 'edit/:id', component:FeedNewComponent},
    {path: ':id', component:FeedDetailComponent},


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);