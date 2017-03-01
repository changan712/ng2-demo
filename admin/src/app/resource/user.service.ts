import {Injectable, Optional} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {StateService} from "../core/state.service";



@Injectable()
export class UserService {

    constructor(private http: Http, private state: StateService) {


    }

    login(id?: number) {

        return this.http.get('/api/app/user/test?corp_id=tds2in1&id=' + (id || '')).toPromise().then(res => {
            return this.http.get('/api/app/user/info').toPromise();
        }).then(res => {
            this.state.currentUser = res.json();
        })
    }

}
