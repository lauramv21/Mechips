import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyTemplateComponent} from './empty-template.component';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {ContactUsComponent} from "./views/contact-us/contact-us.component";
import {AboutUsComponent} from "./views/about-us/about-us.component";
import {ProductsComponent} from "./views/products/products.component";

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {
    path: 'inicio',
    component: HomepageComponent
  },
  {
    path: 'contacto',
    component: ContactUsComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutUsComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
