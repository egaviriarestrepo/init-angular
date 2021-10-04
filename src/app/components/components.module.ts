import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
     BackButtonComponent,
     NotFoundComponent,
     LandingHeaderComponent,
     FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    BackButtonComponent,
    LandingHeaderComponent,
    FooterComponent
  ],
})
export class ComponentsModule { }
