import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'services', component: ServicesPageComponent, pathMatch: 'full'},
  {path: 'team', component: TeamPageComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
