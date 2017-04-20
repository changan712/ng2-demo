import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

    constructor() { }

    confirm(message?:string){
        return new Promise(resolve=>{
            return resolve(window.confirm(message||'is it ok?'))
        })
    }

}
