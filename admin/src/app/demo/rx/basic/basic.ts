export class Observable {
    constructor(private _generator: Function) {

    }

    subscribe(observer:Observer) {
        this._generator.call(this, observer)
    }   
}



export class Observer {
    constructor(private _consumer) {

    }

    onNotify(data) {
        this._consumer.call(this, data)
    }
}

