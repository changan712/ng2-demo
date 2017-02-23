import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response,} from "@angular/http";
import {Observable} from "rxjs";
import {ResponseHasMeta} from "../../core/response-has-meta";

@Injectable()
export class FeedService {

    private api = '/api/app/feed';
    pageSize: 20;

    constructor(private http: Http) {
    }


    index(params?): Observable<ResponseHasMeta> {

        let opt = Object.assign({_page_size: this.pageSize}, params);

        let _search = new URLSearchParams();

        for (let k in opt) {
            _search.set(k, opt[k]);
        }


        return this.http.get(this.api, {search: _search}).map((res: Response) => {
            return {data: res.json(), meta: res.headers.get('X-Meta-List')};
        })
    }

}
