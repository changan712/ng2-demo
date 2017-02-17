import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FeedService {

    private api: string = '/api/app/feeds';
    private apiComment: string = '/api/app/feed-comments';
    pageSize: number = 10;

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

    comment(id: number, data) {

        let _data = Object.assign({}, data, {feed_id: id});

        return this.http.post(this.apiComment, _data).map(res => res.json());

    }


}
