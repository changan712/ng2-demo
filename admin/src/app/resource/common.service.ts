import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CommonService {

    private url = '/api/app/common/';

    constructor(private  http: Http) {
    }


    field(field: string, params?: Object): Observable<any> {
        let opt = Object.assign({}, params);
        let _search = new URLSearchParams();

        for (let k in opt) {
            _search.set(k, opt[k]);
        }

        return this.http.get(this.url + field, {search: _search}).map((res: Response) => res.json())
    }

}
