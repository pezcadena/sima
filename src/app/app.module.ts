import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { NavbarStudentComponent } from './components/navbar-student/navbar-student.component';
import { IndexStudentComponent } from './components/index-student/index-student.component';
import { CardSubjectComponent } from './components/card-subject/card-subject.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeStudentComponent,
    NavbarStudentComponent,
    IndexStudentComponent,
    CardSubjectComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
