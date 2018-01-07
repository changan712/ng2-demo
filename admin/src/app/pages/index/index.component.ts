import { Component, OnInit } from '@angular/core';
import Test from "./Test";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       let test = new Test();
      console.log(test);
  }

}
