import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
    selector: 'app-login',
    template: `
      <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn" >Logout</button>
    </p>`
    ,
    styles: []
})
export class LoginComponent implements OnInit {

    message: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    setMessage() {
        this.message = 'logged' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);

            }
        })
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }

    ngOnInit() {
        this.setMessage();
    }

}
