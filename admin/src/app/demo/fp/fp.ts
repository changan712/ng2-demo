//函子

//Class FunctorBase
export class FunctorBase {
    constructor(public  val) {
    }

    map(f) {
        return new FunctorBase(f(this.val));
    }
}


//Class Functor

export class Functor extends FunctorBase {

    static  of(val) {
        return new Functor(val)
    }
}

//Class Maybe

export class Maybe extends FunctorBase {

    static  of(val) {
        return new Maybe(val)
    }

    map(f) {
        return this.val ? Maybe.of(this.val) : Maybe.of(null);
    }
}


//Class Either

export class Either extends FunctorBase {
    left;
    right;

    constructor(left, right) {
        super(right ? right : left);
        this.left = left;
        this.right = right;
    }

    static of(left, right) {
        return new Either(left, right);
    }

    map(f) {
        return this.right ?
            Either.of(this.left, f(this.right)) :
            Either.of(f(this.left), this.right);
    }
}

//Class Ap
export class Ap extends FunctorBase {
    static  of(val) {
        return new Ap(val)
    }

    ap(F) {
        return Ap.of(this.val(F.val));
    }
}

export class Monad extends FunctorBase {

    static  of(val) {
        return new Monad(val)
    }

    join() {
        return this.val;
    }

    map(f) {
        return new Monad(f(this.val));
    }

    flatMap(f){
        return this.map(f).join();
    }


}