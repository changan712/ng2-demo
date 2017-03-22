import {Component, OnInit} from '@angular/core';


//decorator to class
function mixin(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

@mixin({c: 1})
class A {
    b = 2
}
let a = new A();



function log(target, name, descriptor) {
    let oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(Array.prototype.slice.call(arguments));
        oldValue.apply(null, arguments)
    };

    return descriptor;

}



function dec(id){
    console.log('evaluated',id);
    return (target,name,descriptor)=>
        console.log('execute',id);

}

function  publish(msg){

}


@Component({
    selector: 'app-decorator',
    templateUrl: './decorator.component.html',
    styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {



    constructor() {
    }

  /*  @dec(1)
    @dec(2)*/
    m(){

    }

   // @log
    add(a, b) {
        return a + b;
    }

    ngOnInit() {


    }

}
