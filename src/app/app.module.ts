import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireFunctions, AngularFireFunctionsModule } from '@angular/fire/compat/functions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
//import { ManagerdashboardComponent } from './features/auth/components/managerdashboard/managerdashboard.component';
//import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    AngularFireDatabaseModule
    //AngularFireFunctionsModule,
    //AngularFireFunctions
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
