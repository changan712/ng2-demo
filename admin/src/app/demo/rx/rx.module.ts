import {NgModule} from '@angular/core';

import {BasicComponent} from './basic/basic.component';
import {routing} from "./rx.routing";
import {RxComponent} from "./rx.component";
import {SharedModule} from "../../shared/shared.module";
import {RxJsComponent} from './rx-js/rx-js.component';
import {ExtendComponent} from './extend/extend.component';
import {CreateComponent} from './create/create.component';
import {TransformComponent} from './transform/transform.component';
import { FilterComponent } from './filter/filter.component';
import { ComposeComponent } from './compose/compose.component';
import { ErrorComponent } from './error/error.component';
import {GithubUsersComponent} from "./github-users/github-users.component";

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    entryComponents: [
        BasicComponent,
        RxJsComponent,
        ExtendComponent,
        CreateComponent,
        TransformComponent,
        FilterComponent,
        ComposeComponent,
        ErrorComponent,
        GithubUsersComponent
    ],
    declarations: [
        BasicComponent,
        RxComponent,
        RxJsComponent,
        ExtendComponent,
        CreateComponent,
        TransformComponent,
        FilterComponent,
        ComposeComponent,
        ErrorComponent,
        GithubUsersComponent,
    ]
})
export class RxModule {
}
