import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { SubjectStudentComponent } from './pages/student/subject-student/subject-student.component';
import { GroupComponent } from './pages/professor/group/group.component';
import { StudentComponent } from './pages/professor/student/student.component';
import { TextContentComponent } from './pages/student/contents/text-content/text-content.component';
import { VideoContentComponent } from './pages/student/contents/video-content/video-content.component';
import { TestComponent } from './pages/student/contents/test/test.component';
import { ImageComponent } from './pages/student/contents/image/image.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UploadGroupComponent } from './pages/professor/upload-group/upload-group.component';
import { TestInteligenciasComponent } from './pages/student/contents/test-inteligencias/test-inteligencias.component';

const routes: Routes = [
  {
    path: 'admin', component:AdminComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'recover', component:RecoverComponent
  },
  {
    path: 'homeStudent', component:HomeStudentComponent
  },
  {
    path: 'testInteligencias', component:TestInteligenciasComponent
  },
  {
    path: 'subject/:subject', component:SubjectStudentComponent
  },
  {
    path: 'subject/:subject/contents/text/:idc', component:TextContentComponent
  },
  {
    path: 'subject/:subject/contents/video/:idc', component:VideoContentComponent
  },
  {
    path: 'subject/:subject/contents/image/:idc', component:ImageComponent
  },
  {
    path: 'subject/:subject/contents/test/:idc', component:TestComponent
  },
  {
    path: 'homeProfessor', component:HomeProfessorComponent
  },
  {
    path: 'uploadGroup', component:UploadGroupComponent
  },
  {
    path: 'group/:id', component:GroupComponent
  },
  {
    path: 'homeProfessor/group/student', component:StudentComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
