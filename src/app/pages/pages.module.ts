import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModalLogoutComponent } from './shared/modals/modal-logout/modal-logout.component';
import { AdministrationComponent } from './administration/administration.component';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { ProductBenefitsComponent } from './landing/product-benefits/product-benefits.component';
import { OurSolutionsComponent } from './landing/our-solutions/our-solutions.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    ModalLogoutComponent,
    LandingComponent,
    AboutUsComponent,
    ProductBenefitsComponent,
    OurSolutionsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    AdministrationComponent,
    ModalLogoutComponent,
  ]
})
export class PagesModule { }
