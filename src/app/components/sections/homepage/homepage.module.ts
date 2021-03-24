import {NgModule} from '@angular/core';

import {HomepageRoutingModule} from './homepage-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage-parent/homepage.component';

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
