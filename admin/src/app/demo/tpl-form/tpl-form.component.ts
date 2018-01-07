import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tpl-form',
  templateUrl: './tpl-form.component.html',
  styleUrls: ['./tpl-form.component.css']
})
export class TplFormComponent implements OnInit {

  constructor() { }

  @ViewChild(NgForm)

  form;

  ngOnInit() {

      console.log(this.form);
  }

}
