import {Injectable, Optional} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class UserService {

    constructor(private http: Http) {


    }

    login(id?: number): Promise<boolean> {
        return this.http.get('/api/app/user/test?corp_id=tds2in1').toPromise().then(res => {
            return true
        }, err => {
            return false;
        })
    }

}
