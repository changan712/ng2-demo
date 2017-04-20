import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Crisis, CrisisService} from "./crisis.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    selectedId: number;


    constructor(private service: CrisisService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    isSelected(crisis: Crisis) {
        return crisis.id === this.selectedId;
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
        this.router.navigate([crisis.id], {relativeTo: this.route});
    }


    ngOnInit() {
        this.crises = this.route.params.switchMap((params: Params) => {
            this.selectedId = +params.id;
            return this.service.getCrises();
        })

    }

}
