import {BaseRequestOptions} from "@angular/http";
export class MyRequestOptions extends BaseRequestOptions  {
    constructor() {
        super();
        this.headers.append('corpId', 'tds2in1')

    }

}
