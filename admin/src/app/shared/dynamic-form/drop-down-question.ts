import {QuestionBase} from "./question-base";
export class DropDownQuestion extends QuestionBase<string> {
    controlType = 'drop-down';
    options: Array<{key: string,value: string}> = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }

}
