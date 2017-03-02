import {Component, OnInit, Input} from '@angular/core';
import {QuestionBase} from "./question-base";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-dynamic-form-control',
    templateUrl: 'dynamic-form-control.component.html',
    styleUrls: ['dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {

    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.question.key].valid;
    }

}
