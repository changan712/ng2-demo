import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Http} from "@angular/http";

@Component({
    selector: 'app-github-users',
    templateUrl: './github-users.component.html',
    styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit, OnDestroy {
    list: Array<any> = [];

    @ViewChild('freshBtn') freshBtn;

    private responseStream: Subscription;

    constructor(private http: Http) {
    }

    ngOnDestroy() {
        this.responseStream.unsubscribe();
    }


    ngOnInit() {

        this.responseStream =
            Observable.fromEvent(this.freshBtn._elementRef.nativeElement, 'click')
                .startWith(Observable.of('https://api.github.com/users'))
                .map(() => {
                    let randomOffset = Math.floor(Math.random() * 500);
                    return 'https://api.github.com/users?since=' + randomOffset;
                })

                .flatMap((url) => {
                    return this.http.get(url);
                })

                .map(d => d.json())

                .subscribe(d => {
                    this.list = d.slice(0,5);
                });

    }

    refresh() {

    }


}
