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

        let opt = Object.assign({_page_size: this.pageSize,corpId:'tds2in1'}, params);

        let _search = new URLSearchParams(opt);

        _search.set('a','1');

        return this.http.get(this.api, {search: _search}).map((res) => {
            return res.json();
        })
    }

    view(id: number) {

    }


}
