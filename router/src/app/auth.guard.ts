import {Injectable} from '@angular/core';
import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router,
    NavigationExtras, CanLoad, Route
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild,CanLoad {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return true;
    }

    canActivateChild(route, state): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }


    checkLogin(url: string) {

        
        if (this.authService.isLoggedIn) return true;

        this.authService.redirectUrl = url;

        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: {'session_id': sessionId},
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;

    }
}
