import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/interfaces/notification';
import { Subject } from '../../../interfaces/subject';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  subjects : Subject[] = [
    {id:2,name:"Metodologia de la programación", professor:"Judit Villalba",contentComplete:14,contentTotal:56}
  ]

  notifications : Notification[] = [
    {message:"Bienvenido a SIMA, te invitamos a explorar tus materias",active:true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
