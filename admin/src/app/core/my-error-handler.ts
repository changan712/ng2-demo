import {ErrorHandler} from "@angular/core";
export class MyErrorHandler extends ErrorHandler {

    handleError(error) {
        console.error(error);
    }
}
