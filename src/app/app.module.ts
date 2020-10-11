import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClientsComponent } from './clients/clients.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { TeamMemberComponent } from './team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatsComponent,
    ServicesComponent,
    ReviewsComponent,
    ClientsComponent,
    ReviewCardComponent,
    FooterComponent,
    ServicesPageComponent,
    TeamPageComponent,
    ContactPageComponent,
    PageHeaderComponent,
    SidebarComponent,
    ContactFormComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
