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

const routes: Routes = [
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
    path: 'homeStudent/subject', component:SubjectStudentComponent
  },
  {
    path: 'homeProfessor', component:HomeProfessorComponent
  },
  {
    path: 'homeProfessor/group', component:GroupComponent
  },
  {
    path: 'homeProfessor/group/student', component:StudentComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'homeStudent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
