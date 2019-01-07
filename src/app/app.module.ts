import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsComponent } from './residents/residents.component';
import { OmertaComponent } from './omerta/omerta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MafiaComponent } from './mafia/mafia.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidentsComponent,
    OmertaComponent,
    PageNotFoundComponent,
    MembersComponent,
    PromotionsComponent,
    MafiaComponent,
    ReviewsComponent,
    EventsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
