import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    private formModel: FormGroup;

    constructor(private  fb: FormBuilder) {
    }

    ngOnInit() {
        let fb = this.fb;
        this.formModel = fb.group({
            name: '',
            state: [true],
            products: fb.array(['a', 'b']),
            friends: fb.array([23, 44]),
            address: fb.group({
                a: '',
                b: '',
            })
        })


    }


}
