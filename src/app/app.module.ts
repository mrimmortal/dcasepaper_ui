import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {
MatBadgeModule,MatTableModule,MatPaginatorModule,
MatCardModule,MatInputModule,MatRadioModule,
MatNativeDateModule,  MatListModule,MatDatepickerModule,
MatSidenavModule,MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule,MatSelectModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DoctorComponent } from './doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    HomePageComponent,
    MyprofileComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatListModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatPaginatorModule,
    MatIconModule, 
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
