import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsComponent } from './residents/residents.component';
import { OmertaComponent } from './omerta/omerta.component';

const routes: Routes = [
  { path: '', redirectTo: '/omerta', pathMatch: 'full' },
  { path: 'residents', component: ResidentsComponent },
  { path: 'omerta', component: OmertaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
