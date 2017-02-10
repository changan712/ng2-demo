import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FeedService {

    private api: string = '/api/app/feeds';
    pageSize: number = 5;

    constructor(private  http: Http) {
    }


    index(params?): Observable<any> {

        let opt = Object.assign({_page_size: this.pageSize}, params);

        let _search = new URLSearchParams();

        for (let k in opt) {
            _search.set(k, opt[k]);
        }

        return this.http.get(this.api, {search: _search}).map((res) => {
            return res.json();
        })
    }

    view(id: number) {

    }


}
