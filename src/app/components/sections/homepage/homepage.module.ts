import {NgModule} from '@angular/core';

import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from "./homepage-parent/homepage-parent.component";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    HomepageRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [HomepageRoutingModule]
})
export class HomepageModule {
}
