import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {ConfirmOption} from "./confirm-option";
import {MdDialogRef, MdDialogConfig} from "@angular/material";


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {


     options: ConfirmOption ;

    constructor( private dialogRef: MdDialogRef<ConfirmComponent>) {
        this.options = dialogRef.config.data;
        console.log(this.options);
        
    }


}
