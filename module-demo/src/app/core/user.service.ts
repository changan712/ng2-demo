import {Injectable, Optional} from '@angular/core';


let nextId = 1;

export class UserServiceConfig {
    name: string = 'nesta';
}


@Injectable()
export class UserService {
    id = nextId++;
    private _name: string = 'viola';

        constructor(@Optional() config: UserServiceConfig) {
        if (config) {
            this._name = config.name;
        }
    }

    get name() {
        const suffix = this.id > 1 ? ` times ${this.id}` : '';
        return this._name + suffix;
    }

}
