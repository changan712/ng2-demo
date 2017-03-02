import {Injectable} from '@angular/core';
import {QuestionBase} from "./question-base";
import {FormControl, Validators, FormGroup} from "@angular/forms";


@Injectable()
export class QuestionControlService {

    constructor() {
    }

    toFormGroup(questions: Array<QuestionBase<any>>) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ?
                new FormControl(question.value || '', [Validators.required])
                : new FormControl(question.value || '');
        });


        return new FormGroup(group);

    }

    getControl(type) {

    }

}
