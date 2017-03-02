import {Component, OnInit} from '@angular/core';
import {PollService} from "./poll.service";
import {QuestionBase} from "../../shared/dynamic-form/question-base";

@Component({
    selector: 'app-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.scss'],
    providers: [PollService],
})
export class PollComponent implements OnInit {
    questions: Array<QuestionBase<any>>;

    constructor(private  pollSv: PollService) {
        this.questions = pollSv.getQuestions();
    }

    ngOnInit() {
    }

}
