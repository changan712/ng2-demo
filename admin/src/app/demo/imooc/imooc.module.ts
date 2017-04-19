import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImoocComponent} from "./imooc.component";
import {DemoRouterComponent} from "./demo-router/demo-router.component";
import {routing} from "./imooc.routing";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [ImoocComponent,DemoRouterComponent]
})
export class ImoocModule { }
