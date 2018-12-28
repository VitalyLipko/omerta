import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsComponent } from './residents/residents.component';
import { OmertaComponent } from './omerta/omerta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MafiaComponent } from './mafia/mafia.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/omerta', pathMatch: 'full' },
  { path: 'residents', component: ResidentsComponent },
  { path: 'omerta', component: OmertaComponent },
  { path: 'members', component: MembersComponent },
  { path: 'promotions', component: PromotionsComponent},
  { path: 'mafia', component: MafiaComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
