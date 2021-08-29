import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { StyleEffectDirective } from './style-effect.directive';
import { LastEditPipe } from './last-edit.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundErrorComponent } from './notfound-error/notfound-error.component';
import { UserprofilesService } from './userprofiles.service';
import { UserRepositoryService } from './user-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfilesComponent,
    StyleEffectDirective,
    LastEditPipe,
    SearchFormComponent,
    NavbarComponent,
    NotfoundErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserprofilesService,
    UserRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
