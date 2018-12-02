import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsComponent } from './residents/residents.component';
import { OmertaComponent } from './omerta/omerta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/omerta', pathMatch: 'full' },
  { path: 'residents', component: ResidentsComponent },
  { path: 'omerta', component: OmertaComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
