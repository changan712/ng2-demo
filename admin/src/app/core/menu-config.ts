import {Injectable} from "@angular/core";

export  interface MenuItem {
    label: string,
    icon?: string,
    name?: string,
    link?: string,
    children?: Array<MenuItem>
}


export const MENU_CONFIG: Array<MenuItem> = [
    {
        label: '首页',
        icon: 'fa-home',
        name:'index'
    },

    {
        label: 'feed',
        icon: 'fa-cube',
        name:'feed',

    },
    {
        label: '其它',
        icon: 'fa-fire',
        name:'others',
        children: [
            {
                label: '其它1',

                name:'others1',
            },
            {
                label: '其它2',

                name:'others2',
            }
        ]
    }

];

@Injectable()
export class MenuConfigService {

    get() {
        return MENU_CONFIG;
    }
}