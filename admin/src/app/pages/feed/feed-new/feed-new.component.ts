import {Component, OnInit} from '@angular/core';
import {StateService} from "../../../core/state.service";
import {CommonService} from "../../../resource/common.service";
import {FeedService} from "../../../resource/feed.service";
import {MdSnackBar} from "@angular/material";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PagesComponent} from "../../pages.component";

@Component({
    selector: 'app-feed-new',
    templateUrl: './feed-new.component.html',
    styleUrls: ['./feed-new.component.scss']
})
export class FeedNewComponent implements OnInit {

    data = {

    };
    private values = [];

    isEdit: boolean = false;
    params: Params;
    view: Object = null;

    constructor(private router: Router,
                private aRoute: ActivatedRoute,
                private state: StateService,
                private feedSv: FeedService,
                private commonSv: CommonService,
                private snackBar: MdSnackBar,) {
    }

    ngOnInit() {
        this.getValues();
        this.aRoute.params.subscribe((params: any) => {
            this.params = params;
            if (params.id) {
                this.isEdit = true;
                this.getView(params.id);
            }
        })
    }

    private parseView(data): Object {
        // data.duration_type = data.duration_type.toString();
        /*  data.goal_ids = data.goals.forEach(item, (item) => {
         let arr = [];
         let {id, completion_rate} = item;
         arr.push({id, completion_rate});

         return arr;
         });*/

        // console.log(data.values);
        data.value_ids = {};
        data.values.forEach(value => {
            data.value_ids[value.type_id] = this.pluck(value.values, 'id');
        });
        console.log(data);

        return data;
    }

    private pluck(arr: Array<any>, key: string): Array<any> {
        let result = [];
        arr.forEach(item => {
            result.push(item[key]);
        });
        return result;
    }

    getView(id) {
        this.feedSv.view(id).subscribe((res) => {
            this.data = this.parseView(res);

        })
    }

    submit(form) {
        if (form.valid) {
            if (!this.isEdit) {
                this.feedSv.create(this.data).subscribe(res => {
                    this.snackBar.open('新建成功', '', {
                        duration: 2000,
                        viewContainerRef: null
                    });

                    this.router.navigate(['pages', 'feed'])
                })
            } else {
                this.feedSv.update(this.params['id'], this.data).subscribe(res => {
                    this.snackBar.open('编辑成功', '', {
                        duration: 2000,
                        viewContainerRef: null
                    })
                    this.router.navigate(['pages', 'feed'])
                })
            }
        }
    }

    private getValues() {
        this.commonSv.field('company').subscribe((res) => {

            this.values = res.filter(item => {

                return item.values.length > 0
            });
        })
    }

    private getGoals() {

    }

}
