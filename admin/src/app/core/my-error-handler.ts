import {ErrorHandler} from "@angular/core";
import {MdSnackBar} from "@angular/material";
export class MyErrorHandler extends ErrorHandler {

    constructor(public snackBar:MdSnackBar){
        super();

    }
    handleError(error) {
        console.error(error.toString());
        this.snackBar.open('11')
    }
}
