import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class BannerService {

    url: string = '/api/app/carousel';

    constructor(private  http: Http) {
    }

    get(): Observable<Array<any>> {
        return this.http.get(this.url + '?corp_id=tds2in1').map(res => {
            return res.json();
        });
    }

}
