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
    {name:"Matematicas",professor:"Ana Barbares",contentComplete:43,contentTotal:50},
    {name:"Matodologia de la programación", professor:"Judit Villalba",contentComplete:14,contentTotal:56}
  ]

  notifications : Notification[] = [
    {message:"Bienvenido a SIMA, te invitamos a explorar tus materias",active:true},
    {message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum",active:false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
