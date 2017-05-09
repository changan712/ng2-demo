import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShareModule} from "../share/share.module";
import {PublicComponent} from "./public.component";


@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
      PublicComponent

  ]
})
export class PublicModule { }
