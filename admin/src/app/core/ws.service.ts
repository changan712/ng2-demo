import {Injectable} from '@angular/core';
import {Observable, Subscriber, Observer} from "rxjs";

@Injectable()
export class WsService {

    ws: WebSocket;

    constructor() {
    }

    createSocket(url: string, cid: number|string): Observable<any> {
        this.ws = new WebSocket(url);

        return new Observable((observer: Observer<any>) => {

            this.ws.onmessage = (event) => {
                observer.next(event.data);
            };

            this.ws.onerror = (event) => {
                observer.error(event);
            };
            this.ws.onclose = event => {
                observer.complete()
            };
            this.ws.onopen = event => {

                
                this.sendMsg({cid: cid})
            }

        })
    }

    sendMsg(msg: any) {

        this.ws.send(JSON.stringify(msg));
    }
}
