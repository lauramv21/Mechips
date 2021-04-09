import {NgModule} from '@angular/core';

import {ViewsRoutingModule} from './views-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {EmptyTemplateComponent} from './empty-template.component';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {ProductsComponent} from "./views/products/products.component";
import {AboutUsComponent} from "./views/about-us/about-us.component";
import {ContactUsComponent} from "./views/contact-us/contact-us.component";

@NgModule({
  declarations: [
    EmptyTemplateComponent,
    HomepageComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    ViewsRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [ViewsRoutingModule, EmptyTemplateComponent]
})
export class ViewsModule {
}
