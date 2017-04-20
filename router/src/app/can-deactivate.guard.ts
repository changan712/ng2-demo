import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export  interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()

//CanDeactivate<CanComponentDeactivate> 传一个要离开的Component 或者CanComponentDeactivate 接口，然后component去实现这个接口。
//这等于把超传入的component动态化，interface在这里的作用需要更明确的认识....
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}


