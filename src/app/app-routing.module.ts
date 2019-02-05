import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsComponent } from './residents/residents.component';
import { OmertaComponent } from './omerta/omerta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MafiaComponent } from './mafia/mafia.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/omerta', pathMatch: 'full' },
  { path: 'residents', component: ResidentsComponent, data: {animation: 'residentsPage'} },
  { path: 'omerta', component: OmertaComponent, data: {animation: 'omertaPage'} },
  { path: 'members', component: MembersComponent, data: {animation: 'membersPage'} },
  { path: 'promotions', component: PromotionsComponent, data: {animation: 'promotionsPage'} },
  { path: 'mafia', component: MafiaComponent, data: {animation: 'mafiaPage'} },
  { path: 'reviews', component: ReviewsComponent, data: {animation: 'reviewsPage'} },
  { path: 'events', component: EventsComponent, data: {animation: 'eventsPage'} },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {animation: 'dashboardPage'} },
  { path: 'login', component: LoginComponent, data: {animation: 'loginPage'} },
  { path: '**', component: PageNotFoundComponent, data: {animation: '404Page'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
