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
import { TextContentComponent } from './pages/student/contents/text-content/text-content.component';
import { VideoContentComponent } from './pages/student/contents/video-content/video-content.component';
import { TestComponent } from './pages/student/contents/test/test.component';
import { T111Component } from './contents/text/t111/t111.component';
import { SelectorComponent } from './contents/text/selector/selector.component';
import { T121Component } from './contents/text/t121/t121.component';
import { T131Component } from './contents/text/t131/t131.component';
import { T141Component } from './contents/text/t141/t141.component';
import { T151Component } from './contents/text/t151/t151.component';
import { T161Component } from './contents/text/t161/t161.component';
import { T171Component } from './contents/text/t171/t171.component';
import { T181Component } from './contents/text/t181/t181.component';
import { T191Component } from './contents/text/t191/t191.component';
import { T1101Component } from './contents/text/t1101/t1101.component';
import { T1111Component } from './contents/text/t1111/t1111.component';
import { T1121Component } from './contents/text/t1121/t1121.component';
import { SafePipe } from './pipes/safe.pipe';
import { ImageComponent } from './pages/student/contents/image/image.component';

/*===========================================================
      Configuración de Firebase
===========================================================*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { ReactiveFormsModule } from '@angular/forms';
import { CardInstructionsComponent } from './components/test-cards/card-instructions/card-instructions.component';
import { CardQuestionComponent } from './components/test-cards/card-question/card-question.component';

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
    TextContentComponent,
    VideoContentComponent,
    TestComponent,
    T111Component,
    SelectorComponent,
    T121Component,
    T131Component,
    T141Component,
    T151Component,
    T161Component,
    T171Component,
    T181Component,
    T191Component,
    T1101Component,
    T1111Component,
    T1121Component,
    SafePipe,
    ImageComponent,
    CardInstructionsComponent,
    CardQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
