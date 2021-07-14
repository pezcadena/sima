import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { NavbarStudentComponent } from './components/navbar-student/navbar-student.component';
import { IndexStudentComponent } from './components/index-student/index-student.component';
import { CardSubjectComponent } from './components/card-subject/card-subject.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { NavbarProfessorComponent } from './components/navbar-professor/navbar-professor.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { SubjectStudentComponent } from './pages/student/subject-student/subject-student.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { RatingComponent } from './components/rating/rating.component';
import { BadgeComponent } from './components/badge/badge.component';
import { GroupComponent } from './pages/professor/group/group.component';
import { StudentComponent } from './pages/professor/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeStudentComponent,
    NavbarStudentComponent,
    IndexStudentComponent,
    CardSubjectComponent,
    NotificationComponent,
    HomeProfessorComponent,
    NavbarProfessorComponent,
    CardGroupComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    SubjectStudentComponent,
    CardContentComponent,
    RatingComponent,
    BadgeComponent,
    GroupComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
