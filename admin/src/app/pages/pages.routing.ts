import {Routes, RouterModule}  from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {PagesComponent} from "./pages.component";


export const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'pages/index'
            },
            {
                path: 'index',
                loadChildren: 'app/pages/index/index.module#IndexModule'
            },
            {
                path:'feed',
                loadChildren: 'app/pages/feed/feed.module#FeedModule'
            }
        ]


    },
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },

    {
        path: '404',
        loadChildren: 'app/pages/not-find/not-find.module#NotFindModule'
    },


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
