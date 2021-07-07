import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from './pages/student/home-student/home-student.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';

const routes: Routes = [
  {
    path: 'homeStudent', component:HomeStudentComponent
  },
  {
    path: 'homeProfessor', component:HomeProfessorComponent
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
