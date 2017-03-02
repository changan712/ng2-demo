import {QuestionBase} from "./question-base";
export class TextBoxQuestion extends QuestionBase<string> {
    controlType = 'text-box';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || ''
    }

}
