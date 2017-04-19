import {Injectable} from "@angular/core";
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs";
@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadMds: Array<string> = [];

    preload(route: Route, load: ()=>Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            this.preloadMds.push(route.path);
            console.log('Preloaded: ' + route.path);

            return load();
        } else {
            return Observable.of(null);
        }

    }
}
