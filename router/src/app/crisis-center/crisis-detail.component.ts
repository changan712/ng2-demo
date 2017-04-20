///<reference path="../../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../dialog.service";
import {Crisis} from "./crisis.service";
import {CanComponentDeactivate} from "../can-deactivate.guard";

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit,CanComponentDeactivate {

    crisis: Crisis;
    editName: string;

    constructor(private route: ActivatedRoute, private router: Router, private dialogService: DialogService) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.editName = data.crisis.name;

            //from resolve;
            this.crisis = data.crisis;
        })
    }

    canDeactivate(): Promise<boolean>|boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?')
    }


    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }


    gotoCrises() {
        this.router.navigate(['../', {id: this.crisis.id, foo: 'foo'}], {relativeTo: this.route})
    }

}
