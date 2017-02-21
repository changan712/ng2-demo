import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FeedListComponent} from "./feed-list/feed-list.component";
import {FeedDetailComponent} from "./feed-detail/feed-detail.component";
export const routes: Routes = [
    {path: '', component:FeedListComponent, pathMatch: 'full'},
    {path: ':id', component:FeedDetailComponent},


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);