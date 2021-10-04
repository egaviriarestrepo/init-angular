import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AuthModule { }
