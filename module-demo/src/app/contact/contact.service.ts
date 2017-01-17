import {Injectable} from '@angular/core';
import {Contact} from "./concat";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
    private  CONTACTS: Contact[] = [
        {id: 21, name: 'viola'},
        {id: 22, name: 'maldini'},
        {id: 23, name: 'nesta'},
    ];

    constructor() {

            console.log(2);

    }

    getContacts(): Observable<Array<Contact>> {
        return Observable.of(this.CONTACTS)
            .do((data) => {
                console.log(data);
            })
            .delay(500);
    }

    getContact(id: number|string) {

        return Observable.of(this.CONTACTS);

/*     .filter((item) =>
 {
 return 1;
 }
 )*/


    }

}
