import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value ? 'awesome_' + value : '';
    }

}
