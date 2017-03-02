import {Component, OnInit, Input} from '@angular/core';
import {QuestionBase} from "./question-base";
import {FormGroup} from "@angular/forms";
import {QuestionControlService} from "./question-control.service";

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: Array<QuestionBase<any>> = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcSv: QuestionControlService) {
    }


    ngOnInit() {
        this.form = this.qcSv.toFormGroup(this.questions);
    }

    onSubmit() {
        console.log(this.form.value);
        

        this.payLoad = JSON.stringify(this.form.value);
    }

}
