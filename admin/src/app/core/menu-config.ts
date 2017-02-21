import {Injectable} from "@angular/core";

export  interface MenuItem {
    label: string,
    icon: string,
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
        label: '其它',
        icon: 'a',

        children: [
            {
                label: '其它1',
                icon: 'a',
                name:'others1',
            },
            {
                label: '其它2',
                icon: 'a',
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