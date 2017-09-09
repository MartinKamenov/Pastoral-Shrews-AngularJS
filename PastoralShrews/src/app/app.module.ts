import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { ToasterModule } from 'angular2-toaster';

import { AuthService } from './core/auth.service';

// Firebase modules
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Routes components
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarsModule } from './cars/cars.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { HomeSearchComponent } from './home/search/home-search.component';

import { FilterService } from './home/search/home-search.service';
import { FooterComponent } from './footer/footer.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HighlightDirective } from './hightlight.directive';
// import { LoadingSpinnerComponent } from './share/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SearchFilterComponent,
    HomeSearchComponent,
    FooterComponent,
    AdvancedSearchComponent,
    HighlightDirective
    // LoadingSpinnerComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    ToasterModule,
    CarsModule
  ],
  exports: [
    HighlightDirective
  ],
  providers: [AuthService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
