import {Injectable} from "@angular/core";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {ConfirmComponent} from "./confirm.component";
import {ConfirmOption} from "./confirm-option";


const DEFAULT_OPTION: ConfirmOption = {
    title: '确认',
    content: '请确认次操作',
    cancelTxt: '取消',
    okTxt: '确定'
};


@Injectable()
export class ConfirmService {

    constructor(private dialog: MdDialog) {

    }
    show(options: ConfirmOption = DEFAULT_OPTION, config?: MdDialogConfig): Promise<any> {

        let _config: MdDialogConfig = Object.assign({}, config, {data: options});

        
        let dialogRef = this.dialog.open(ConfirmComponent, _config);

        return new Promise((resolve, reject) => {
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject('error');
                }
            })
        })
    }

}