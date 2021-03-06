import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { SafePipe } from './shared/safe.pipe';
import { SettingsComponent } from './settings/settings.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { AppPasswordDirective } from './app-password.directive';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    ChartComponent,
    SafePipe,
    SettingsComponent,
    LoaderComponent,
    AppPasswordDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
