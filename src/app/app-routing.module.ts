import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages.routing';

import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/app.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdministrationComponent } from './pages/administration/administration.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'administracion', component: AdministrationComponent },
  { path: '**', pathMatch: 'full', redirectTo:  '/administracion' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
