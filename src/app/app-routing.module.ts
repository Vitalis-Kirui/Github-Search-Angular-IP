import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

const routes: Routes = [

  {path : 'home', component : LandingPageComponent},
  {path : 'user-profile', component : UserProfilesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
