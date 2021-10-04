import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

import {AdministrationComponent} from './administration/administration.component';

const routes: Routes = [
  { path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'administracion', component: AdministrationComponent },
      { path: '**', pathMatch: 'full', redirectTo:  '/not-found' },
    ]
   },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
