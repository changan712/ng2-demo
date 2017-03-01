import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {UserService} from "../resource/user.service";


@Injectable()
export class UserResolveService implements Resolve<any> {

    constructor(private userSv: UserService) {
    }

    resolve() {
        return this.userSv.login().then(
            res => {


                return true
            },
            error => false
        )

    }

}
