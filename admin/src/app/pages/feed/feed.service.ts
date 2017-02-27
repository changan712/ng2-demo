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

        let opt = Object.assign({_page_size: this.pageSize, _page: 1}, params);

        let _search = new URLSearchParams();

        for (let k in opt) {
            _search.set(k, opt[k]);
        }


        return this.http.get(this.api, {search: _search}).map((res: Response) => {
            let meta = JSON.parse(res.headers.get('X-Meta-List'));
            meta['totalCount'] = parseInt(meta['totalCount']);
            return {data: res.json(), meta};
        })
    }

    view(id: number): Observable<ResponseHasMeta> {
        return this.http.get(this.api + '/' + id).map((res: Response) => {
            return {data: res.json()}
        })
    }

    remove(id: number): Observable<any> {
        return this.http.delete(this.api + '/' + id).map((res: Response) => {
            return res.json();
        })

    }

}
