import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class StateService {

    private _currentUser;

    private subject = new Subject();


    constructor() {
        console.log(this.subject);

    }

    set currentUser(user) {
        this._currentUser = user;
    }

    get currentUser() {
        return this._currentUser;
    }

    getState() {

        return this.subject.next({
            user: this._currentUser
        })
    }

}
