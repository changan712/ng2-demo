import {Component, OnInit} from '@angular/core';
import {WsService} from "../../core/ws.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-ws',
    templateUrl: './ws.component.html',
    styleUrls: ['./ws.component.scss']
})
export class WsComponent implements OnInit {

    isWatched: boolean = false;
    price: number;


    constructor(private wsService: WsService) {
    }


    ngOnInit() {

    }

    toggleSubscribe() {
        this.wsService.createSocket('ws://localhost:4300', new Date().getTime())
            .map(data => {
                return data;
                //  return  Number(data).toFixed(2);
            })
            .subscribe(
                (data) => {
                    this.price = data;

                }
            )
    }

}
